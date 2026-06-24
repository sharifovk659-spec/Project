$imgDir = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production\IMG"
$outDir = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production\public\images\about"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Add-Type -AssemblyName System.Drawing

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
    $g.DrawImage($bmp, 0, 0, $nw, $nh)
    $g.Dispose()
    $bmp.Dispose()
    $bmp = $scaled
  }
  if ($asJpg) {
    $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 88L
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

# surati 1–7 in layout; surati 5 replaces handshake slot
$jobs = @(
  @{ src = (Find-Surati "surati 7.png");   dest = "team-group.png"; maxW = 1200; jpg = $false }
  @{ src = (Find-Surati "surati 4.png");   dest = "portrait-creative.jpg"; maxW = 800; jpg = $true }
  @{ src = (Find-Surati "surati 1.png");   dest = "team-1.png";    maxW = 600;  jpg = $false }
  @{ src = (Find-Surati "surati 2.png");   dest = "team-2.jpg";    maxW = 600;  jpg = $true }
  @{ src = (Find-Surati "surati 3*.png");  dest = "team-3.png";    maxW = 600;  jpg = $false }
  @{ src = (Find-Surati "surati 6.png");   dest = "team-4.jpg";    maxW = 600;  jpg = $true }
  @{ src = (Find-Surati "surati 5.png");   dest = "handshake.jpg"; maxW = 1000; jpg = $true }
)

foreach ($j in $jobs) {
  Export-Image $j.src (Join-Path $outDir $j.dest) $j.maxW $j.jpg
  Write-Output "OK $($j.dest) <- $(Split-Path $j.src -Leaf)"
}

Remove-Item (Join-Path $outDir "yas2.jpg") -ErrorAction SilentlyContinue
Remove-Item (Join-Path $outDir "studio-bts.jpg") -ErrorAction SilentlyContinue
Remove-Item (Join-Path $outDir "3.png") -ErrorAction SilentlyContinue
