---
title: Flutter 环境准备
published: 2023-12-28
description: "Flutter 环境准备"
tags: ["flutter"]
category: front-end
lang: "zh"
draft: false
---

ps: win环境,最近需要在Epson BT-300这款设备上运行一个flutter程序，记录下过程。
[flutter官网](https://flutter.cn/docs/get-started/install)

### SDK安装
官网下载SDK后解压配置path路径。
ps: 在flutter的sdk中是包含dart的sdk，无需单独下载安装dart sdk，可能会导致flutter和dart的版本对不上的情况。
运行flutter --version验证安装情况
![Image](https://github.com/user-attachments/assets/e3149482-b72a-4a33-abd5-79957fa05c6b)
ps: 根据工程需要选择安装了flutter3.0的版本。
运行  flutter doctor 进行环境监察
![Image](https://github.com/user-attachments/assets/7af13d94-0f39-40d1-844b-7d696c59d7a4)

若是出现网络不同的情况需要配置相关网络环境，请参考[在中国网络环境下使用 Flutter](https://flutter.cn/community/china)

### Android studio配置
在as中 file >  settings > plugins 下搜索安装 dart flutter 的插件

![Image](https://github.com/user-attachments/assets/78657d21-7d27-4d65-a7b3-d4b78bebc516)
然后配置sdk相应位置

![Image](https://github.com/user-attachments/assets/d14321b4-235c-406f-bd3b-219a0aad5e96)

### 工程运行
```
//安装包
flutter packages get

flutter packages upgrade

// 清除安装包
flutter clean

flutter run
```

尽量使用最新版本的flutter，产生的问题会少一些。
