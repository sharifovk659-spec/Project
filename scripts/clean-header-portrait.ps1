$out = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production\public\images\header-portrait.png"
$asset = "C:\Users\komron\.cursor\projects\c-Users-komron-OneDrive-Desktop-Project\assets\c__Users_komron_AppData_Roaming_Cursor_User_workspaceStorage_d3a79252f91084dd681f38887876b1ff_images_image-e963ed43-2fc9-4e90-8ac3-a39923cfe94f.png"
$imgDir = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production\IMG"

Add-Type -AssemblyName System.Drawing

function Get-Luma($c) { return 0.299 * $c.R + 0.587 * $c.G + 0.114 * $c.B }

function Find-ContentBounds($bmp, [int]$threshold = 42) {
  $w = $bmp.Width
  $h = $bmp.Height
  $minX = $w
  $minY = $h
  $maxX = 0
  $maxY = 0

  for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
      if ((Get-Luma $bmp.GetPixel($x, $y)) -gt $threshold) {
        if ($x -lt $minX) { $minX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }

  return @{ X = $minX; Y = $minY; W = ($maxX - $minX + 1); H = ($maxY - $minY + 1) }
}

function Test-EdgeDark($bmp, $x, $y, $w, $h, $side, $thr, $ratio) {
  $dark = 0
  $total = 0

  switch ($side) {
    "left" {
      for ($i = $y; $i -lt ($y + $h); $i++) {
        $total++
        if ((Get-Luma $bmp.GetPixel($x, $i)) -lt $thr) { $dark++ }
      }
    }
    "right" {
      $rx = $x + $w - 1
      for ($i = $y; $i -lt ($y + $h); $i++) {
        $total++
        if ((Get-Luma $bmp.GetPixel($rx, $i)) -lt $thr) { $dark++ }
      }
    }
    "top" {
      for ($i = $x; $i -lt ($x + $w); $i++) {
        $total++
        if ((Get-Luma $bmp.GetPixel($i, $y)) -lt $thr) { $dark++ }
      }
    }
    "bottom" {
      $by = $y + $h - 1
      for ($i = $x; $i -lt ($x + $w); $i++) {
        $total++
        if ((Get-Luma $bmp.GetPixel($i, $by)) -lt $thr) { $dark++ }
      }
    }
  }

  return ($total -gt 0 -and ($dark / $total) -ge $ratio)
}

function Trim-DarkEdges($bmp, [int]$edgeThreshold = 18, [double]$darkRatio = 0.9) {
  $x = 0
  $y = 0
  $w = $bmp.Width
  $h = $bmp.Height

  while ($x -lt $w -and (Test-EdgeDark $bmp $x $y $w $h "left" $edgeThreshold $darkRatio)) { $x++ }
  while ($w -gt 1 -and (Test-EdgeDark $bmp $x $y $w $h "right" $edgeThreshold $darkRatio)) { $w-- }
  while ($y -lt $h -and (Test-EdgeDark $bmp $x $y $w $h "top" $edgeThreshold $darkRatio)) { $y++ }
  while ($h -gt 1 -and (Test-EdgeDark $bmp $x $y $w $h "bottom" $edgeThreshold $darkRatio)) { $h-- }

  return @{ X = $x; Y = $y; W = $w; H = $h }
}

function Crop-Bitmap($bmp, $bounds) {
  $crop = New-Object System.Drawing.Bitmap -ArgumentList $bounds.W, $bounds.H
  $g = [System.Drawing.Graphics]::FromImage($crop)
  $g.DrawImage(
    $bmp,
    (New-Object System.Drawing.Rectangle 0, 0, $bounds.W, $bounds.H),
    (New-Object System.Drawing.Rectangle $bounds.X, $bounds.Y, $bounds.W, $bounds.H),
    [System.Drawing.GraphicsUnit]::Pixel
  )
  $g.Dispose()
  return $crop
}

function Process-Portrait($inputPath, $outputPath, [int]$targetW = 400) {
  $source = [System.Drawing.Bitmap]::FromFile($inputPath)
  $bounds = Find-ContentBounds $source 42
  $cropped = Crop-Bitmap $source $bounds
  $source.Dispose()

  $trimBounds = Trim-DarkEdges $cropped 24 0.85
  $trimmed = Crop-Bitmap $cropped $trimBounds
  $cropped.Dispose()

  $ratio = $targetW / $trimmed.Width
  $nw = [int][Math]::Round($trimmed.Width * $ratio)
  $nh = [int][Math]::Round($trimmed.Height * $ratio)
  $final = New-Object System.Drawing.Bitmap -ArgumentList $nw, $nh
  $g = [System.Drawing.Graphics]::FromImage($final)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($trimmed, 0, 0, $nw, $nh)
  $g.Dispose()
  $trimmed.Dispose()

  $final.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $info = "$($final.Width)x$($final.Height) $((Get-Item $outputPath).Length) bytes"
  $final.Dispose()
  return $info
}

if (-not (Test-Path $asset)) { throw "Portrait source not found" }
$input = $asset

Write-Output "Source: $input"
Write-Output (Process-Portrait $input $out 280)
