# LeoDeepAI 0.5.3

三平台桌面端更新构建（Windows / macOS / Linux）。基于当前开发工作区（0.5.2 之后的改动）打包，可直接覆盖安装旧版。

## 下载

| 平台 | 文件 | 大小 | SHA-256 |
| --- | --- | --- | --- |
| Windows x64 | `LeoDeepAI_0.5.3_x64-setup.exe` | 49,379,954 字节（47.1 MiB） | `72a82dd02bd0c4a051ab71358fc49796393301ab8c5e6749a6c97e415ad6f0c9` |
| macOS Apple Silicon | `LeoDeepAI_0.5.3_aarch64.dmg` | 83,967,417 字节（80.1 MiB） | `22436b8aa793a09ac710df2933957b06cc58c3557d2972cee2066efe2b17d5bb` |
| macOS Intel | `LeoDeepAI_0.5.3_x64.dmg` | 85,434,034 字节（81.5 MiB） | `6a1ff849acf019e499fe74bc804a6fbe51a598d70ec130112c9c29f0c51fb44e` |
| Linux x64 (deb) | `LeoDeepAI_0.5.3_amd64.deb` | 92,683,002 字节（88.4 MiB） | `90bfc223d357996583531bebc62fa33ea61c553450238eaac6f93c75789fd8c7` |
| Linux x64 (AppImage) | `LeoDeepAI_0.5.3_amd64.AppImage` | 159,996,408 字节（152.6 MiB） | `ae40ffc46771d7c009d5b6451a7a7f952f833e8375b0af498f7cb4bea082a087` |

## 本次包含

- **更新源切到 GitHub Releases**：桌面端「关于与更新」不再请求自建云服务的 `/api/releases/latest`，改为直接读本仓库的 release 列表（正式版 `v*`），安装包从 release asset 下载；Android 端同样改为读 `android-v*` 的 release。切回自建服务器只需把 `src-tauri/src/commands.rs` 里的 `UPDATE_SOURCE` 与 `mobile/lib/src/update/update_source.dart` 里的 `tfUpdateSource` 改回 cloud。
- 云服务默认地址改为 `https://api.fournft.meme`（服务端、前端构建与移动端三处一致）。
- 项目/工作区、输入区引用 chip、管理能力页、本机访问判定等 0.5.2 之后继续落地的改动一并进入本版本。
- 新增 Linux 构建：deb 会声明 webkit2gtk 等运行依赖；AppImage 单文件，`chmod +x` 后直接运行。

## 安装

- **Windows**：运行 `LeoDeepAI_0.5.3_x64-setup.exe`。未做代码签名，SmartScreen 提示时点「更多信息」→「仍要运行」。
- **macOS**：双击 dmg 拖进「应用程序」，首次启动在 Finder 里右键 App →「打开」。未公证。
- **Linux**：`sudo apt install ./LeoDeepAI_0.5.3_amd64.deb`，或 `chmod +x LeoDeepAI_0.5.3_amd64.AppImage && ./LeoDeepAI_0.5.3_amd64.AppImage`。

## 校验

```powershell
certutil -hashfile "LeoDeepAI_0.5.3_x64-setup.exe" SHA256
```

```bash
shasum -a 256 LeoDeepAI_0.5.3_aarch64.dmg
sha256sum LeoDeepAI_0.5.3_amd64.AppImage
```

## 说明

- 本次构建取自当前开发工作区（commit `334e37a` + 未提交改动），`BUILD.json` 会标记为 dirty；用于内部更新验证。
- Windows / macOS 安装包均未做商业签名，首次运行可能触发系统安全提示。
- Android 0.1.3 单独发布，见 `android-v0.1.3`。
- Copyright © 2026 LeoDeepAI。本仓库只分发安装包，不包含产品源码。
