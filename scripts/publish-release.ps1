# Publish a release to LeoCodePlay/LeoDeepAI-Download.
#
# Usage:
#   .\scripts\publish-release.ps1 -Tag v0.5.0 -Title "LeoDeepAI 0.5.0" `
#     -NotesFile docs/release-notes-0.5.0.md `
#     ..\release\LeoDeepAI_0.5.0_x64-setup.exe `
#     ..\release\macos\LeoDeepAI_0.5.0_aarch64.dmg `
#     ..\release\macos\LeoDeepAI_0.5.0_x64.dmg
#
# Android preview builds should pass -Prerelease so they do not become the
# repository's "latest" release.

[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string]$Tag,

    [Parameter(Mandatory = $true)]
    [string]$Title,

    [string]$NotesFile,

    [switch]$Prerelease,

    [Parameter(Mandatory = $true, ValueFromRemainingArguments = $true)]
    [string[]]$Assets
)

$ErrorActionPreference = "Stop"
$Repo = "LeoCodePlay/LeoDeepAI-Download"

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    throw "GitHub CLI (gh) is required: https://cli.github.com/"
}

$existing = gh release view $Tag --repo $Repo 2>$null
if ($LASTEXITCODE -eq 0) {
    throw "Release $Tag already exists in $Repo. Bump the tag or delete the old release first."
}

$resolved = @()
foreach ($asset in $Assets) {
    if (-not (Test-Path -LiteralPath $asset -PathType Leaf)) {
        throw "Asset not found: $asset"
    }
    $resolved += (Resolve-Path -LiteralPath $asset).Path
}

Write-Host ""
Write-Host "Release manifest (copy these values into index.html):" -ForegroundColor Cyan
foreach ($file in $resolved) {
    $item = Get-Item -LiteralPath $file
    $hash = (Get-FileHash -LiteralPath $file -Algorithm SHA256).Hash.ToLowerInvariant()
    $mib = [math]::Round($item.Length / 1MB, 1)
    Write-Host ("  {0}" -f $item.Name)
    Write-Host ("    size: {0} bytes ({1} MiB)" -f $item.Length, $mib)
    Write-Host ("    sha256: {0}" -f $hash)
}
Write-Host ""

$ghArgs = @("release", "create", $Tag, "--repo", $Repo, "--title", $Title)

if ($NotesFile) {
    if (-not (Test-Path -LiteralPath $NotesFile -PathType Leaf)) {
        throw "Notes file not found: $NotesFile"
    }
    $ghArgs += @("--notes-file", (Resolve-Path -LiteralPath $NotesFile).Path)
} else {
    $ghArgs += "--generate-notes"
}

if ($Prerelease) {
    $ghArgs += "--prerelease"
}

$ghArgs += $resolved

& gh @ghArgs
if ($LASTEXITCODE -ne 0) {
    throw "gh release create failed with exit code $LASTEXITCODE."
}

Write-Host ""
Write-Host "Published: https://github.com/$Repo/releases/tag/$Tag" -ForegroundColor Green
