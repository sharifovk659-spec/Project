$imgDir = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production\IMG"
$outDir = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production\public\images\about"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Add-Type -AssemblyName System.Drawing

$jpegQuality = 95L

function Export-Image($srcPath, $destPath, $maxW, $asJpg) {
  if (-not $srcPath -or -not (Test-Path -LiteralPath $srcPath)) {
    throw "Missing source: $destPath"
  }
  $bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
  if ($bmp.Width -gt $maxW) {
    $ratio = $maxW / $bmp.Width
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

# Higher maxW + JPEG 95 — never upscale (only scale down)
$jobs = @(
  @{ src = (Find-Surati "surati 7.png");   dest = "team-group.png";        maxW = 1920; jpg = $false }
  @{ src = (Find-Surati "surati 4.png");   dest = "portrait-creative.jpg"; maxW = 1600; jpg = $true }
  @{ src = (Find-Surati "surati 1.png");   dest = "team-1.png";            maxW = 1920; jpg = $false }
  @{ src = (Find-Surati "surati 2.png");   dest = "team-2.jpg";            maxW = 1400; jpg = $true }
  @{ src = (Find-Surati "surati 3*.png");  dest = "team-3.png";            maxW = 1920; jpg = $false }
  @{ src = (Find-Surati "surati 6.png");   dest = "team-4.jpg";            maxW = 1400; jpg = $true }
  @{ src = (Find-Surati "surati 01.jpg");  dest = "handshake.jpg";         maxW = 1800; jpg = $true }
)

foreach ($j in $jobs) {
  Export-Image $j.src (Join-Path $outDir $j.dest) $j.maxW $j.jpg
  $out = Get-Item (Join-Path $outDir $j.dest)
  Add-Type -AssemblyName System.Drawing
  $i = [System.Drawing.Image]::FromFile($out.FullName)
  Write-Output "OK $($j.dest) <- $(Split-Path $j.src -Leaf) | $($i.Width)x$($i.Height) | $([math]::Round($out.Length/1KB))KB"
  $i.Dispose()
}

Remove-Item (Join-Path $outDir "yas2.jpg") -ErrorAction SilentlyContinue
Remove-Item (Join-Path $outDir "studio-bts.jpg") -ErrorAction SilentlyContinue
Remove-Item (Join-Path $outDir "3.png") -ErrorAction SilentlyContinue
