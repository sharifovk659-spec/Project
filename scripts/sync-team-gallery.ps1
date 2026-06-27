$root = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production"
$outDir = Join-Path $root "public\images\about\team-gallery"
$srcDir = Get-ChildItem -LiteralPath $root -Directory |
  Where-Object { $_.Name -like "3*" } |
  Select-Object -First 1 -ExpandProperty FullName

if (-not $srcDir) {
  throw "Gallery source folder not found (expected folder starting with '3')."
}

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$files = Get-ChildItem -LiteralPath $srcDir -Filter "*.jpg" |
  Where-Object { $_.Name -notmatch '\(1\)' } |
  Sort-Object Name

Get-ChildItem -LiteralPath $outDir -File -ErrorAction SilentlyContinue | Remove-Item -Force

$i = 1
foreach ($file in $files) {
  $dest = Join-Path $outDir ("gallery-{0:D2}.jpg" -f $i)
  Copy-Item -LiteralPath $file.FullName -Destination $dest -Force
  Write-Output ("OK gallery-{0:D2}.jpg <- {1}" -f $i, $file.Name)
  $i++
}

Write-Output "Total: $($files.Count)"
