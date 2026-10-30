# LeoDeepAI 0.5.1

Windows x64 更新构建。基于当前开发工作区（0.5.0 之后的改动）打包，适合直接替换旧版安装。

## 下载

| 平台 | 文件 | 大小 | SHA-256 |
| --- | --- | --- | --- |
| Windows x64 | `LeoDeepAI_0.5.1_x64-setup.exe` | 49,370,561 字节（47.1 MiB） | `e7a06d8b619d7e606c8514dd901d463adc6de701f3733098286358c8de210375` |

## 本次包含

- 桌面端项目/工作区选择、项目对话框与文件引用相关更新。
- 输入区 Composer Hero、@ 引用、右侧 dock 与界面细节更新。
- Agent 模型档案、Responses API、技能上传与导入、项目迁移及二级工作区相关改动。
- 浏览器扩展弹窗交互与图标更新。
- 移动端 Composer、Dock、项目编辑与反馈页布局更新（桌面安装包内仍自带扩展与后端）。

## 安装

运行 `LeoDeepAI_0.5.1_x64-setup.exe`。安装包未做代码签名，SmartScreen 提示时点「更多信息」→「仍要运行」。

## 校验

```powershell
certutil -hashfile "LeoDeepAI_0.5.1_x64-setup.exe" SHA256
```

## 说明

- 本次构建取自当前工作区，BUILD.json 会标记为 dirty；用于内部更新验证。
- 未做商业代码签名，首次运行可能触发 SmartScreen。
- Copyright © 2026 LeoDeepAI。本仓库只分发安装包，不包含产品源码。
