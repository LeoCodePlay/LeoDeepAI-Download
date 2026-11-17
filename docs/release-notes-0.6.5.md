# LeoDeepAI 0.6.5

发布日期：2026-11-17

- **图片加载大幅提速**：附件新增 384px WebP 缩略图通道，聊天列表只取缩略图（实测 5.7MB 原图 → 8KB），图片多的会话不再逐张等原图。
- **缩略图本地缓存**：桌面端生成后落盘复用，重复打开直接命中；GIF / SVG 或缩略图不可用时自动回落原图。
- **正式源码构建**：修复 0.6.4 安装包 BUILD.json 带 `+dirty` 的问题，本次构建对应提交 `7fc81d5`。
- **兼容性**：旧客户端行为不变，`attachment_get` 不传 `thumb` 时仍返回原图。

安装包：`LeoDeepAI_0.6.5_x64-setup.exe`（Windows x64 / NSIS，53.6 MiB）

SHA-256：`55ed493617d9cb8bd630df17707d887e28bbc9a0a2f324cae2fc6b938c3fae16`
