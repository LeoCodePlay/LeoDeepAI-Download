# LeoDeepAI Android 0.1.2 Debug

Android 调试包，用于联调和功能验证。包含 Flutter VM service，体积明显大于正式包，**不要作为日常使用或正式发布版本**。

## 下载

| 项 | 值 |
| --- | --- |
| 文件 | `LeoDeepAI_0.1.2_universal-debug.apk` |
| 大小 | 181,698,193 字节（173.3 MiB） |
| 版本 | 0.1.2（versionCode 3） |
| 包名 | `com.leodeepai.app` |
| 架构 | universal（arm64-v8a / armeabi-v7a / x86_64） |
| 最低系统 | Android 7.0（API 24） |
| 签名 | Android Debug（`CN=Android Debug`） |
| 证书 SHA-256 | `2478d70c21e3929a379bd98a4d7f4839da836afb28d9224dde6008e0d3ef1eeb` |
| SHA-256 | `8f96a7ce565262f6cb87a053867b8a00c44dff086f67117e4a0f48e2b19cbd27` |

## 和上一版 Android 预览包的区别

- 上一版 0.1.1 预览包的包名是 `com.leodeepai.leodeepai_mobile`，与这个 debug 包不同，因此两个应用可以同时安装，不会互相覆盖。
- 这个包使用当前源码的 `com.leodeepai.app` 包名和 versionCode 3。
- Debug 签名只能用于测试；后续正式包需要统一包名与正式 keystore，升级时可能需要先卸载 debug 包。

## 安装

1. 下载 universal APK（约 173 MiB）。
2. 系统设置 → 应用 → 特殊权限 → 安装未知应用，允许浏览器或文件管理器安装。
3. 打开 APK 完成安装。
4. 登录页可设置云服务地址。默认地址为 `https://api.leodeepai.com`，联调时可改成自己的服务端。

## 校验

```bash
sha256sum LeoDeepAI_0.1.2_universal-debug.apk
```

## 说明

- Debug 包会显示 Flutter 调试能力，性能和包体积都不代表正式版。
- 本仓库只分发安装包，不包含产品源码。
