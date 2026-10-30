# LeoDeepAI Android 0.1.1（预览版）

面向 Android 7.0 及以上的预览构建，提供分 ABI 包与 universal 通用包。用于功能验证，不建议作为长期使用的正式版本。

## 下载

| 架构 | 文件 | versionCode | 大小 | SHA-256 |
| --- | --- | --- | --- | --- |
| arm64-v8a | `LeoDeepAI_0.1.1_arm64-v8a-release.apk` | 2002 | 26,752,844 字节（25.5 MiB） | `55df19d17d968af18d5c1dc6c2fccba0b7f45e66b4f9921256109e58bb1083e9` |
| armeabi-v7a | `LeoDeepAI_0.1.1_armeabi-v7a-release.apk` | 1002 | 22,655,422 字节（21.6 MiB） | `534232a6bade5f3dc4c2689c871e7018f30497307cfe4c199ece50b013affd36` |
| x86_64 | `LeoDeepAI_0.1.1_x86_64-release.apk` | 4002 | 29,292,359 字节（27.9 MiB） | `b218b3a1ef03def1c6b63512af7d1dfc13780384d9f6069f46b7dba5cd38b3da` |
| universal | `LeoDeepAI_0.1.1_universal-release.apk` | 2 | 73,235,369 字节（69.8 MiB） | `2810c60e52d1c8528d69299e9bbd8d682a3f07a3aae29e78d66089ce7fffa31b` |

## 构建信息

- 包名：`com.leodeepai.leodeepai_mobile`
- versionName：`0.1.1`
- minSdk：24（Android 7.0）
- targetSdk：36
- 签名证书：`CN=LeoDeepAI, OU=Mobile, O=LeoDeepAI, C=CN`
- 证书 SHA-256：`854329a6d6077f5b639c03025d78abe267b165245224338bdd00f99eac05cc42`

## 安装

1. 大多数手机选 `arm64-v8a`；不确定就下 `universal`。
2. 系统设置 → 应用 → 特殊权限 → 安装未知应用，允许浏览器或文件管理器安装 APK。
3. 打开 APK 完成安装。登录页可设置云服务地址，用于连接自建环境。

## 校验

```bash
sha256sum LeoDeepAI_0.1.1_arm64-v8a-release.apk
```

## 说明

- 这是**预览版**。后续正式包如果更换包名或签名证书，需要先卸载旧版再安装。
- 分 ABI 包与 universal 包的 versionCode 体系不同，不要混装后比较更新。
- 本仓库只分发安装包，不包含产品源码。
