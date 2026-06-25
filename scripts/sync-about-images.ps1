$imgDir = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production\IMG"
$outDir = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production\public\images\about"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Add-Type -AssemblyName System.Drawing

$jpegQuality = 98L

function Export-Image($srcPath, $destPath, $maxW, $asJpg, [switch]$AllowUpscale) {
  if (-not $srcPath -or -not (Test-Path -LiteralPath $srcPath)) {
    throw "Missing source: $destPath"
  }
  $bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
  $needsScale = $bmp.Width -gt $maxW -or ($AllowUpscale -and $bmp.Width -lt $maxW)
  if ($needsScale) {
    if ($bmp.Width -gt $maxW) {
      $ratio = $maxW / $bmp.Width
    } else {
      $ratio = $maxW / $bmp.Width
    }
    $nw = [int][Math]::Round($bmp.Width * $ratio)
    $nh = [int][Math]::Round($bmp.Height * $ratio)
    $scaled = New-Object System.Drawing.Bitmap -ArgumentList $nw, $nh
    $g = [System.Drawing.Graphics]::FromImage($scaled)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($bmp, 0, 0, $nw, $nh)
    $g.Dispose()
    $bmp.Dispose()
    $bmp = $scaled
  }
  if ($asJpg) {
    $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), $jpegQuality
    $bmp.Save($destPath, $enc, $ep)
  } else {
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
  }
  $bmp.Dispose()
}

$files = Get-ChildItem -LiteralPath $imgDir -File

function Find-Surati([string]$pattern) {
  ($files | Where-Object { $_.Name -like $pattern } | Select-Object -First 1).FullName
}

# High-res exports (never upscale — only scale down)
$jobs = @(
  @{ src = (Find-Surati "surati 4.png");  dest = "portrait-creative.jpg"; maxW = 2400; jpg = $true }
  @{ src = (Find-Surati "1 (2).png");     dest = "team-1.jpg";           maxW = 2400; jpg = $true }
  @{ src = (Find-Surati "surati 2.png");  dest = "team-2.jpg";           maxW = 2400; jpg = $true }
  @{ src = (Find-Surati "3 (1).png");     dest = "team-3.jpg";           maxW = 2400; jpg = $true }
  @{ src = (Find-Surati "surati 6.png");  dest = "team-4.jpg";           maxW = 2400; jpg = $true }
  @{ src = (Find-Surati "surati 5.png");  dest = "team-5.jpg";           maxW = 2400; jpg = $true }
)

$handshakeSrc = @(
  (Find-Surati "handshake-ready.jpg"),
  (Find-Surati "*отов*.jpg"),
  (Find-Surati "DSCF4708*.jpg"),
  (Find-Surati "handshake-banner.png")
) | Where-Object { $_ } | Select-Object -First 1

if ($handshakeSrc) {
  $jobs += @{ src = $handshakeSrc; dest = "handshake.jpg"; maxW = 2560; jpg = $true }
}

foreach ($j in $jobs) {
  $upscale = $false
  if ($j.upscale) { $upscale = $true }
  Export-Image $j.src (Join-Path $outDir $j.dest) $j.maxW $j.jpg -AllowUpscale:$upscale
  $out = Get-Item (Join-Path $outDir $j.dest)
  $i = [System.Drawing.Image]::FromFile($out.FullName)
  Write-Output "OK $($j.dest) <- $(Split-Path $j.src -Leaf) | $($i.Width)x$($i.Height) | $([math]::Round($out.Length/1KB))KB"
  $i.Dispose()
}

# Group photo — high-res export
$groupSrc = Find-Surati "surati 7.png"
if ($groupSrc) {
  Export-Image $groupSrc (Join-Path $outDir "team-group.png") 1600 $false
  $out = Get-Item (Join-Path $outDir "team-group.png")
  $g = [System.Drawing.Image]::FromFile($out.FullName)
  Write-Output "OK team-group.png <- $(Split-Path $groupSrc -Leaf) | $($g.Width)x$($g.Height) | $([math]::Round($out.Length/1KB))KB"
  $g.Dispose()
}

Remove-Item (Join-Path $outDir "team-1.png") -ErrorAction SilentlyContinue
Remove-Item (Join-Path $outDir "team-3.png") -ErrorAction SilentlyContinue
Remove-Item (Join-Path $outDir "portrait-creative.png") -ErrorAction SilentlyContinue
Remove-Item (Join-Path $outDir "yas2.jpg") -ErrorAction SilentlyContinue
