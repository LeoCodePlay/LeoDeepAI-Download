# LeoDeepAI 0.6.0

桌面端三平台更新（Windows / macOS / Linux）。基于 `LeoCodePlay/Teleforge` 的 `b13175e` 构建，可直接覆盖安装 0.5.3。

## 下载

| 平台 | 文件 | 大小 | SHA-256 |
| --- | --- | --- | --- |
| Windows x64 | `LeoDeepAI_0.6.0_x64-setup.exe` | 49,419,665 字节（47.1 MiB） | `7817fc4c73ab6f4472bc8696b5c92b956bd7a6076e3b4042b87d2eadabe819b0` |
| macOS Apple Silicon | `LeoDeepAI_0.6.0_aarch64.dmg` | 83,970,678 字节（80.1 MiB） | `919609db11e1a148f1b5e2c7ab534afe31bdf1260a8db58d0022170dc05aa26b` |
| macOS Intel | `LeoDeepAI_0.6.0_x64.dmg` | 85,453,590 字节（81.5 MiB） | `e951dffe5923ece475ae487f9380232a1e98e7c5b447c6b7798961299134c99b` |
| Linux x64 (deb) | `LeoDeepAI_0.6.0_amd64.deb` | 92,711,388 字节（88.4 MiB） | `0b04ff4a7f51b90eb79a47d7eedcf7d891c66bf5a6ed9dbee169d7fb2d49f963` |
| Linux x64 (AppImage) | `LeoDeepAI_0.6.0_amd64.AppImage` | 160,016,888 字节（152.6 MiB） | `d9ae4914859e47f2d4d77fbca40e69d7488caf6ece7b63dea34e5250f1cdca81` |

## 本次包含

- **会话头部动作区重做**：子智能体 catalog、智能体团队、后台任务收进同一条动作条；团队面板改为左成员 / 右共享任务，后台任务行改为两行信息（名称 + 归属徽标 / 命令与耗时）。
- **子智能体会话与父会话同一套输入卡**：附件、`/` 技能、`@` 引用、权限模式、任务模式、模型与工作区都可直接使用。
- **Web 手机宽度适配（<768px）**：头部动作条只留图标与计数，团队 / 后台任务 / 子智能体弹层与行内操作放大到触屏可点，预览提示收成图标按钮。
- **本机文件夹入口**：左栏「本机」页签的文件夹行新增「在资源管理器打开」；分组右键菜单只保留拖动排序与删除分组。
- **输入与同步**：粘贴 / Shift+Enter / 剪切纳入撤回栈，程序化插入后光标自动滚入可视区；跨端新建项目后项目列表自动补拉。
- **更新源**：应用内「检查更新」继续读取下载页仓库 `LeoCodePlay/LeoDeepAI-Download` 的正式版 `v*` release asset，不经过自建云服务。

## 安装

- **Windows**：运行 `LeoDeepAI_0.6.0_x64-setup.exe`。未做代码签名，SmartScreen 提示时点「更多信息」→「仍要运行」。
- **macOS**：双击 dmg 拖进「应用程序」，首次启动在 Finder 里右键 App →「打开」。未公证。
- **Linux**：`sudo apt install ./LeoDeepAI_0.6.0_amd64.deb`，或 `chmod +x LeoDeepAI_0.6.0_amd64.AppImage && ./LeoDeepAI_0.6.0_amd64.AppImage`。

## 校验

```powershell
certutil -hashfile "LeoDeepAI_0.6.0_x64-setup.exe" SHA256
```

```bash
shasum -a 256 LeoDeepAI_0.6.0_aarch64.dmg
sha256sum LeoDeepAI_0.6.0_amd64.AppImage
```

## 说明

- Windows 安装包内置 `BUILD.json`：版本 `0.6.0`、commit `b13175e`、`dirty: false`。
- macOS / Linux 由 GitHub Actions 在对应 runner 上构建，构建时通过 `scripts/check-versions.mjs` 校验版本。
- Windows / macOS 安装包均未做商业签名，首次运行可能触发系统安全提示。
- Android 0.1.4 单独发布，见 `android-v0.1.4`。
- Copyright © 2026 LeoDeepAI。本仓库只分发安装包，不包含产品源码。
