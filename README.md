# LeoDeepAI Download

LeoDeepAI 的公开下载入口。这个仓库只托管**下载页**和**安装包**，不包含 LeoDeepAI 的产品源码。

- 下载页：<https://leocodeplay.github.io/LeoDeepAI-Download/>
- 全部版本：<https://github.com/LeoCodePlay/LeoDeepAI-Download/releases>
- 问题反馈：<https://github.com/LeoCodePlay/LeoDeepAI-Download/issues>

## 下载

| 平台 | 文件 | 大小 | SHA-256 |
| --- | --- | --- | --- |
| Windows x64 | [`LeoDeepAI_0.5.2_x64-setup.exe`](https://github.com/LeoCodePlay/LeoDeepAI-Download/releases/download/v0.5.2/LeoDeepAI_0.5.2_x64-setup.exe) | 47.1 MiB | `72580911e0deae8c17c15334d421eccfe07c048c25ce503b65d1e28e6c00dfc5` |
| macOS Apple Silicon | [`LeoDeepAI_0.5.0_aarch64.dmg`](https://github.com/LeoCodePlay/LeoDeepAI-Download/releases/download/v0.5.0/LeoDeepAI_0.5.0_aarch64.dmg) | 80.0 MiB | `b809f1855d74eff590a32bb9fb9176799baff8990da5de6657d4e69202b7767f` |
| macOS Intel | [`LeoDeepAI_0.5.0_x64.dmg`](https://github.com/LeoCodePlay/LeoDeepAI-Download/releases/download/v0.5.0/LeoDeepAI_0.5.0_x64.dmg) | 81.4 MiB | `602001ae3c084efaae85e6b5380e9e84b26e5c6f0a56181c5e383a668229de26` |
| Android universal debug | [`LeoDeepAI_0.1.2_universal-debug.apk`](https://github.com/LeoCodePlay/LeoDeepAI-Download/releases/download/android-v0.1.2-debug/LeoDeepAI_0.1.2_universal-debug.apk) | 173.3 MiB | `8f96a7ce565262f6cb87a053867b8a00c44dff086f67117e4a0f48e2b19cbd27` |

Windows 桌面端为 0.5.2；macOS 仍为 0.5.0，macOS 与 Linux 新版本稍后发布。Android 为 0.1.2 debug 测试包，不要日常使用。

## 安装

**Windows**：运行 `LeoDeepAI_0.5.2_x64-setup.exe`。安装包未做代码签名，SmartScreen 提示时点「更多信息」→「仍要运行」。

**macOS**：Apple Silicon 选 `aarch64.dmg`，Intel 选 `x64.dmg`。打开 dmg 拖进「应用程序」，首次启动在 Finder 里右键 App →「打开」。若仍被 Gatekeeper 拦截：

```bash
xattr -dr com.apple.quarantine /Applications/LeoDeepAI.app
```

**Android**：下载 universal debug 包（约 173 MiB），安装前在系统设置里允许浏览器或文件管理器「安装未知应用」。Android 最低版本为 7.0（API 24）。包名是 `com.leodeepai.app`，用 Android Debug 签名，仅用于联调。

桌面端不登录也能使用自己填的 API Key 或本地 Ollama；平台模型、签到额度与手机配对需要登录账号。

## 校验

下载后核对 SHA-256，不一致就不要安装：

```powershell
# Windows
certutil -hashfile "LeoDeepAI_0.5.2_x64-setup.exe" SHA256
```

```bash
# macOS
shasum -a 256 ~/Downloads/LeoDeepAI_0.5.0_aarch64.dmg

# Linux / Termux
sha256sum LeoDeepAI_0.1.2_universal-debug.apk
```

## 这个仓库是什么

- 一个可以静态托管的下载页（`index.html` + `assets/`），无构建步骤、无第三方运行时依赖。
- GitHub Releases 里的安装包，以及每个版本的发布说明（`docs/`）。
- 直接由 GitHub Pages 从 `main` 分支根目录发布的静态页面，没有构建步骤。

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

推送到 `main` 后，GitHub Pages 会直接发布仓库根目录的静态文件。首次使用需要在仓库 **Settings → Pages → Build and deployment → Source** 选择 **Deploy from a branch**，分支选 `main`、目录选 `/ (root)`。`.nojekyll` 已存在，Pages 不会对文件做 Jekyll 处理。

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
   .\scripts\publish-release.ps1 -Tag android-v0.1.2-debug -Title "LeoDeepAI Android 0.1.2 (Debug)" `
     -NotesFile docs/release-notes-android-0.1.2-debug.md -Prerelease `
     ..\release\LeoDeepAI_0.1.2_universal-debug.apk
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
├─ .nojekyll
└─ README.md
```

## 许可

- 本仓库的页面代码与文档以 **MIT License** 发布，见 [LICENSE](LICENSE)。该许可**不覆盖**安装包。
- GitHub Releases 中的 LeoDeepAI 安装包是免费使用的**闭源软件**，版权归作者所有；不因本仓库公开而获得产品源码的任何权利。
- Geist 与 Geist Mono 字体按 **SIL Open Font License 1.1** 使用，许可证全文见 `assets/fonts/OFL.txt`。

## 安全

只从本仓库的 Releases 下载安装包，并核对 SHA-256。不要使用来源不明的镜像或「高速下载」站点。发现异常请开 Issue。
