# LeoDeepAI 0.5.0

桌面端稳定版。这是首次以 **LeoDeepAI** 名义发布的公开安装包，提供 Windows x64 与 macOS（Apple Silicon / Intel）三个构建。

## 下载

| 平台 | 文件 | 大小 | SHA-256 |
| --- | --- | --- | --- |
| Windows x64 | `LeoDeepAI_0.5.0_x64-setup.exe` | 49,303,350 字节（47.0 MiB） | `e95a557ebdaafd55c24bf6aec157c210fd7933b9bf9c308cf527f1857d4759cb` |
| macOS Apple Silicon | `LeoDeepAI_0.5.0_aarch64.dmg` | 83,876,754 字节（80.0 MiB） | `b809f1855d74eff590a32bb9fb9176799baff8990da5de6657d4e69202b7767f` |
| macOS Intel | `LeoDeepAI_0.5.0_x64.dmg` | 85,354,965 字节（81.4 MiB） | `602001ae3c084efaae85e6b5380e9e84b26e5c6f0a56181c5e383a668229de26` |

## 变更

- 产品名、安装包名、桌面端 identifier 统一为 **LeoDeepAI** / `com.leodeepai.desktop`。
- 登录页新增「服务器」入口，可设置并测试云服务地址。
- 修复桌面端登录后中继会话未同步，导致手机端误报「电脑端不在线」的问题。
- 首次启动会自动把旧版数据目录补拷到新目录；旧目录保留，可回退。

## 安装

**Windows**：运行 `LeoDeepAI_0.5.0_x64-setup.exe`。安装包未做代码签名，SmartScreen 提示时点「更多信息」→「仍要运行」。

**macOS**：打开 dmg，把 LeoDeepAI 拖进「应用程序」。首次启动在 Finder 里右键 App →「打开」→「打开」。若仍被 Gatekeeper 拦截：

```bash
xattr -dr com.apple.quarantine /Applications/LeoDeepAI.app
```

## 校验

```powershell
certutil -hashfile "LeoDeepAI_0.5.0_x64-setup.exe" SHA256
```

```bash
shasum -a 256 ~/Downloads/LeoDeepAI_0.5.0_aarch64.dmg
```

## 已知说明

- Windows 安装包与 macOS App 均未做商业代码签名/公证，首次运行会有系统安全提示。
- 默认云服务地址可在登录页右上角「服务器」中修改。
- 本仓库只分发安装包，不包含产品源码。
