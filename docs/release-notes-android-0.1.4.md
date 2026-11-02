# LeoDeepAI Android 0.1.4

手机端更新构建。基于 `LeoCodePlay/Teleforge` 的 `b13175e`，可直接覆盖安装 0.1.3。

## 下载

| 平台 | 文件 | 大小 | SHA-256 |
| --- | --- | --- | --- |
| Android universal | `LeoDeepAI_0.1.4_universal.apk` | 73,792,417 字节（70.4 MiB） | `0184f00d4b23ec8561210f20237a59c46a1afa9feb3d86e2abb152c6d8d1c578` |

## 本次包含

- 基于 0.1.3 之后的移动端源码重新构建，`versionCode 5`，包含玻璃导航与交互修正。
- 更新源继续读下载页仓库 `LeoCodePlay/LeoDeepAI-Download` 的 `android-v*` release asset。
- 正式签名不变（`CN=LeoDeepAI`），可直接覆盖 0.1.3；从更早的 debug 包升级仍需先卸载。

## 安装

下载 universal 包（含 `arm64-v8a` / `armeabi-v7a` / `x86_64`），在系统设置里允许浏览器或文件管理器「安装未知应用」后安装。最低 Android 7.0（API 24）。

## 校验

```bash
sha256sum LeoDeepAI_0.1.4_universal.apk
```

## 说明

- 本 release 标记为 pre-release，避免抢走桌面端 `latest`；手机端仍会读取它。
- Copyright © 2026 LeoDeepAI。本仓库只分发安装包，不包含产品源码。
