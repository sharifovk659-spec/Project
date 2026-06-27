$root = "c:\Users\komron\OneDrive\Desktop\Project\eterna-production"
$outDir = Join-Path $root "public\images\about\team-gallery"
$srcDir = Get-ChildItem -LiteralPath $root -Directory |
  Where-Object { $_.Name -like "3*" } |
  Select-Object -First 1 -ExpandProperty FullName

if (-not $srcDir) {
  throw "Gallery source folder not found (expected folder starting with '3')."
}

$priorityNames = @(
  "5325537861547268906.jpg",
  "5325537861547268904.jpg",
  "5325537861547268910.jpg"
)

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$allFiles = Get-ChildItem -LiteralPath $srcDir -Filter "*.jpg" |
  Where-Object { $_.Name -notmatch '\(1\)' }

$priorityFiles = @()
foreach ($name in $priorityNames) {
  $match = $allFiles | Where-Object { $_.Name -eq $name } | Select-Object -First 1
  if ($match) { $priorityFiles += $match }
}

$restFiles = $allFiles |
  Where-Object { $_.Name -notin $priorityNames } |
  Sort-Object Name

$ordered = @($priorityFiles) + @($restFiles)

Get-ChildItem -LiteralPath $outDir -File -ErrorAction SilentlyContinue | Remove-Item -Force

$i = 1
foreach ($file in $ordered) {
  $dest = Join-Path $outDir ("gallery-{0:D2}.jpg" -f $i)
  Copy-Item -LiteralPath $file.FullName -Destination $dest -Force
  Write-Output ("OK gallery-{0:D2}.jpg <- {1}" -f $i, $file.Name)
  $i++
}

Write-Output "Total: $($ordered.Count)"
