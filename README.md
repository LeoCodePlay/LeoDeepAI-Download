# LeoDeepAI Download

LeoDeepAI 的公开下载入口。这个仓库只托管**下载页**和**安装包**，不包含 LeoDeepAI 的产品源码。

- 下载页：<https://leocodeplay.github.io/LeoDeepAI-Download/>
- 全部版本：<https://github.com/LeoCodePlay/LeoDeepAI-Download/releases>
- 问题反馈：<https://github.com/LeoCodePlay/LeoDeepAI-Download/issues>

## 下载

| 平台 | 文件 | 大小 | SHA-256 |
| --- | --- | --- | --- |
| Windows x64 | [`LeoDeepAI_0.5.0_x64-setup.exe`](https://github.com/LeoCodePlay/LeoDeepAI-Download/releases/download/v0.5.0/LeoDeepAI_0.5.0_x64-setup.exe) | 47.0 MiB | `e95a557ebdaafd55c24bf6aec157c210fd7933b9bf9c308cf527f1857d4759cb` |
| macOS Apple Silicon | [`LeoDeepAI_0.5.0_aarch64.dmg`](https://github.com/LeoCodePlay/LeoDeepAI-Download/releases/download/v0.5.0/LeoDeepAI_0.5.0_aarch64.dmg) | 80.0 MiB | `b809f1855d74eff590a32bb9fb9176799baff8990da5de6657d4e69202b7767f` |
| macOS Intel | [`LeoDeepAI_0.5.0_x64.dmg`](https://github.com/LeoCodePlay/LeoDeepAI-Download/releases/download/v0.5.0/LeoDeepAI_0.5.0_x64.dmg) | 81.4 MiB | `602001ae3c084efaae85e6b5380e9e84b26e5c6f0a56181c5e383a668229de26` |
| Android arm64-v8a | [`LeoDeepAI_0.1.1_arm64-v8a-release.apk`](https://github.com/LeoCodePlay/LeoDeepAI-Download/releases/download/android-v0.1.1/LeoDeepAI_0.1.1_arm64-v8a-release.apk) | 25.5 MiB | `55df19d17d968af18d5c1dc6c2fccba0b7f45e66b4f9921256109e58bb1083e9` |
| Android armeabi-v7a | [`LeoDeepAI_0.1.1_armeabi-v7a-release.apk`](https://github.com/LeoCodePlay/LeoDeepAI-Download/releases/download/android-v0.1.1/LeoDeepAI_0.1.1_armeabi-v7a-release.apk) | 21.6 MiB | `534232a6bade5f3dc4c2689c871e7018f30497307cfe4c199ece50b013affd36` |
| Android x86_64 | [`LeoDeepAI_0.1.1_x86_64-release.apk`](https://github.com/LeoCodePlay/LeoDeepAI-Download/releases/download/android-v0.1.1/LeoDeepAI_0.1.1_x86_64-release.apk) | 27.9 MiB | `b218b3a1ef03def1c6b63512af7d1dfc13780384d9f6069f46b7dba5cd38b3da` |
| Android universal | [`LeoDeepAI_0.1.1_universal-release.apk`](https://github.com/LeoCodePlay/LeoDeepAI-Download/releases/download/android-v0.1.1/LeoDeepAI_0.1.1_universal-release.apk) | 69.8 MiB | `2810c60e52d1c8528d69299e9bbd8d682a3f07a3aae29e78d66089ce7fffa31b` |

桌面端为 0.5.0 稳定版；Android 为 0.1.1 预览版，后续正式包可能需要先卸载旧版。

## 安装

**Windows**：运行 `LeoDeepAI_0.5.0_x64-setup.exe`。安装包未做代码签名，SmartScreen 提示时点「更多信息」→「仍要运行」。

**macOS**：Apple Silicon 选 `aarch64.dmg`，Intel 选 `x64.dmg`。打开 dmg 拖进「应用程序」，首次启动在 Finder 里右键 App →「打开」。若仍被 Gatekeeper 拦截：

```bash
xattr -dr com.apple.quarantine /Applications/LeoDeepAI.app
```

**Android**：大多数手机选 `arm64-v8a`，不确定就下 `universal`。安装前需要在系统设置里允许浏览器或文件管理器「安装未知应用」。Android 最低版本为 7.0（API 24）。

桌面端不登录也能使用自己填的 API Key 或本地 Ollama；平台模型、签到额度与手机配对需要登录账号。

## 校验

下载后核对 SHA-256，不一致就不要安装：

```powershell
# Windows
certutil -hashfile "LeoDeepAI_0.5.0_x64-setup.exe" SHA256
```

```bash
# macOS
shasum -a 256 ~/Downloads/LeoDeepAI_0.5.0_aarch64.dmg

# Linux / Termux
sha256sum LeoDeepAI_0.1.1_arm64-v8a-release.apk
```

## 这个仓库是什么

- 一个可以静态托管的下载页（`index.html` + `assets/`），无构建步骤、无第三方运行时依赖。
- GitHub Releases 里的安装包，以及每个版本的发布说明（`docs/`）。
- 一套 GitHub Pages 自动部署工作流（`.github/workflows/pages.yml`）。

### 这个仓库不是什么

- **不包含**服务端、桌面端、移动端、浏览器扩展的源代码。
- **不包含**签名证书、keystore、`key.properties` 或任何密钥。
- **不构建** LeoDeepAI；这里只分发已经构建好的安装包。

## 本地预览

直接用浏览器打开 `index.html` 也能看，但用本地静态服务器更接近线上：

```bash
python -m http.server 8080
# 打开 http://localhost:8080/
```

## 部署

推送到 `main` 后，`.github/workflows/pages.yml` 会把 `index.html` 与 `assets/` 发布到 GitHub Pages。首次使用需要在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

如果 fork 这个仓库自建下载站，记得把 `index.html` 里的下载链接、GitHub 链接和 `README.md` 里的地址换成你自己的仓库。

## 发布新版本（维护者）

1. 在本地构建安装包，计算哈希：

   ```powershell
   Get-FileHash .\LeoDeepAI_0.5.1_x64-setup.exe -Algorithm SHA256
   ```

2. 写发布说明 `docs/release-notes-0.5.1.md`，然后创建 Release 并上传文件：

   ```powershell
   .\scripts\publish-release.ps1 `
     -Tag v0.5.1 `
     -Title "LeoDeepAI 0.5.1" `
     -NotesFile docs/release-notes-0.5.1.md `
     ..\release\LeoDeepAI_0.5.1_x64-setup.exe `
     ..\release\macos\LeoDeepAI_0.5.1_aarch64.dmg `
     ..\release\macos\LeoDeepAI_0.5.1_x64.dmg
   ```

   Android 预览版用 `-Prerelease`，避免它被 GitHub 标成 latest release：

   ```powershell
   .\scripts\publish-release.ps1 -Tag android-v0.1.2 -Title "LeoDeepAI Android 0.1.2" `
     -NotesFile docs/release-notes-android-0.1.2.md -Prerelease `
     ..\release\LeoDeepAI_0.1.2_arm64-v8a-release.apk
   ```

3. 更新 `index.html` 里的版本号、下载链接、大小、SHA-256 和「版本记录」，提交后 Pages 会自动重新部署。

## 目录结构

```
.
├─ index.html                 下载页
├─ assets/
│  ├─ style.css               页面样式
│  ├─ app.js                  平台检测、复制校验值、命令切换
│  ├─ logo.svg                产品标识
│  └─ fonts/                  Geist / Geist Mono（SIL OFL 1.1）
├─ docs/                      各版本发布说明
├─ scripts/publish-release.ps1
└─ .github/workflows/pages.yml
```

## 许可

- 本仓库的页面代码与文档以 **MIT License** 发布，见 [LICENSE](LICENSE)。该许可**不覆盖**安装包。
- GitHub Releases 中的 LeoDeepAI 安装包是免费使用的**闭源软件**，版权归作者所有；不因本仓库公开而获得产品源码的任何权利。
- Geist 与 Geist Mono 字体按 **SIL Open Font License 1.1** 使用，许可证全文见 `assets/fonts/OFL.txt`。

## 安全

只从本仓库的 Releases 下载安装包，并核对 SHA-256。不要使用来源不明的镜像或「高速下载」站点。发现异常请开 Issue。
