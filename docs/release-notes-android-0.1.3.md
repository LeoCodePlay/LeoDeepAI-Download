# LeoDeepAI Android 0.1.3

Android 正式签名的 universal 安装包（versionCode 4）。

## 下载

| 平台 | 文件 | 大小 | SHA-256 |
| --- | --- | --- | --- |
| Android | `LeoDeepAI_0.1.3_universal.apk` | 73,792,417 字节（70.4 MiB） | `88d7fc840d68dd1730bddbcbd10d23f8571d9daa796ed3cd50f45ee417107ac4` |

包含 `arm64-v8a`、`armeabi-v7a`、`x86_64` 三种 ABI，安装时由系统按设备选择。

## 本次包含

- 更新源切到 GitHub Releases：应用内「检查更新」直接读 `LeoCodePlay/LeoDeepAI-Download` 的 `android-v*` 版本，不再依赖自建云服务的发布接口；云服务地址没填也能检查更新。
- 云服务默认地址改为 `https://api.fournft.meme`（仍可在登录页「服务器」里改）。
- 沿用 0.1.2 之后的 Composer / Dock / 项目编辑与反馈页布局更新。

## 安装

下载 APK 后直接用系统安装器打开。包名 `com.leodeepai.app`，与旧 0.1.1 预览包不同，可共存；从 0.1.2 debug 包升级时因签名不同，需要先卸载旧包再安装。

## 校验

```bash
sha256sum LeoDeepAI_0.1.3_universal.apk
```

## 说明

- 签名证书：`CN=LeoDeepAI, OU=Mobile, O=LeoDeepAI`（release keystore，非 debug 签名）。
- versionCode 4 / versionName 0.1.3，应用内更新以 versionCode 判断新旧。
- 应用内更新源已切到 GitHub，需要能访问 `api.github.com` 与 `github.com`。
- Copyright © 2026 LeoDeepAI。本仓库只分发安装包，不包含产品源码。
