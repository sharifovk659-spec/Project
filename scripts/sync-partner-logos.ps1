$srcDir = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production\lagatip"
$outDir = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production\public\images\partners"
Add-Type -AssemblyName System.Drawing

function Export-Logo($srcPath, $destPath, $maxH = 640) {
  $bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
  if ($bmp.Height -gt $maxH) {
    $ratio = $maxH / $bmp.Height
    $nw = [int][Math]::Round($bmp.Width * $ratio)
    $nh = [int][Math]::Round($bmp.Height * $ratio)
    $scaled = New-Object System.Drawing.Bitmap -ArgumentList $nw, $nh
    $g = [System.Drawing.Graphics]::FromImage($scaled)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($bmp, 0, 0, $nw, $nh)
    $g.Dispose()
    $bmp.Dispose()
    $bmp = $scaled
  }
  $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
}

$map = @(
  @{ src = "AMANI.png";     dest = "amani.png" }
  @{ src = "Asar.png";      dest = "asar.png" }
  @{ src = "Bima_1.png";    dest = "bima-insurance.png" }
  @{ src = "bima_2.png";    dest = "bima-life.png" }
  @{ src = "cola.png";      dest = "coca-cola.png" }
  @{ src = "community.png"; dest = "community.png" }
  @{ src = "DADA.png";      dest = "dadabaev.png" }
  @{ src = "dush.png";      dest = "dushanbinka.png" }
  @{ src = "garden.png";    dest = "garden.png" }
  @{ src = "jeddi.png";     dest = "jeddi.png" }
  @{ src = "PAYKAR.png";    dest = "paykar.png" }
  @{ src = "PRIME.png";     dest = "prime.png" }
  @{ src = "x-fit.png";     dest = "x-fit.png" }
)

New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Get-ChildItem -LiteralPath $outDir -File | Remove-Item -Force

foreach ($item in $map) {
  $src = Join-Path $srcDir $item.src
  $dest = Join-Path $outDir $item.dest
  Export-Logo $src $dest
  $out = Get-Item $dest
  $img = [System.Drawing.Image]::FromFile($dest)
  Write-Output "OK $($item.dest) <- $($item.src) | $($img.Width)x$($img.Height) | $([math]::Round($out.Length/1KB))KB"
  $img.Dispose()
}
