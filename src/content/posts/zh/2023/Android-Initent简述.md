---
title: Android - Initent 简述
published: 2023-11-01
description: "Android - Initent 简述"
tags: ["android", "initent"]
category: android
lang: "zh"
draft: false
---

[Android - intent 和 intent 过滤器 ](https://developer.android.google.cn/guide/components/intents-filters?hl=zh-cn#java)
[Android基础知识 — Intent的理解与使用(掘金)](https://juejin.cn/post/6844903950940897288?searchId=2023110115584736DD43F3A287B86395AA)

### 概述
突然遇到了相关需求，平时对于Intent也仅限于使用，故总结了解下。

### 定义
Intent是一个消息传递对象，您可以用来从其他应用组件请求操作，例如: 显示网页、应用跳转、拨打电话等。

主要用途分为:

- 启动Activity: Activity 表示应用中的一个屏幕。通过将 Intent 传递给 startActivity()，您可以启动新的 Activity 实例。Intent 用于描述要启动的 Activity，并携带任何必要的数据。如果您希望在 Activity 完成后收到结果，请调用 startActivityForResult()。在 Activity 的 onActivityResult() 回调中，您的 Activity 将结果作为单独的 Intent 对象接收。如需了解详细信息，请参阅 Activity 指南。
- 启动服务: Service 是一个不使用用户界面而在后台执行操作的组件。
- 传递广播: 广播是任何应用均可接收的消息。

### Intent 结构
Intent 对象主要包含七大属性，Action（动作）、Data（数据）、Category（类别）、Type（数据类型）、Component（组件）、Extra（扩展信息）、Flag（标志位）。其中最常用的是Action和Data


类型 | 作用
-- | --
ACTION_MAIN | 表示程序入口
ACTION_VIEW | 自动以最合适的方式显示Data
ACTION_CALL | 拨打Data指向的号码
ACTION_SEND | 发送Data到指定的地方
ACTION_SEARCH | 执行搜索


Broadcast Actions：


类型 | 作用
-- | --
ACTION_TIME_TICK | 当前时间改变，并即时发送时间，只能通过系统发送。调用格式"android.intent.action.TIME_TICK"
ACTION_TIME_CHENGED | 设置时间。调用格式"android.intent.action.TIME_SET"


- Data：各个组件之间要传递的数据

例如查看通讯录的个人信息就是以Uri的形式传递数据

- Category：用来表现动作的类别

一个包含Intent额外信息的字符串，表示哪种类型的组件来处理这个Intent

- Type：指定数据类型

一般Intent的数据类型能够根据数据本身进行判定，但是通过设置这个属性，可以强制采用显式指定的类型而不再进行推导

- Component：目的组件

指定Intent的目标组件名称，当指定了这个属性后，系统将跳过匹配其他属性，而直接匹配这个属性来启动对应的组件

- Extra：扩展信息

Intent可以携带的额外 key-value 数据，你可以通过调用putExtra()方法设置数据，每一个 key对应一个 value数据。你也可以通过创建 Bundle对象来存储所有数据，然后通过调用putExtras()方法来设置数据

- Flag: 期望这个意图的运行模式

用来指示系统如何启动一个Activity，可以通过setFlags()或者addFlags()可以把标签flag用在Intent中

### Intent 类型
分为两种类型: 显式Intent和隐式Intent。

- 显式Intent: 通过提供目标应用的软件包名称或完全限定的组件类名来指定可处理 Intent 的应用。

- 隐式Intent: 不会指定特定的组件，而是声明要执行的常规操作，从而允许其他应用中的组件来处理。

显示Intent示例。例如, 如果在应用中构建一个名为 DownloadService、旨在从网页下载文件的服务，则可使用以下代码启动该服务：

```
// Executed in an Activity, so 'this' is the Context JAVA
// The fileUrl is a string URL, such as "http://www.example.com/image.png"
Intent downloadIntent = new Intent(this, DownloadService.class);
downloadIntent.setData(Uri.parse(fileUrl));
startService(downloadIntent);
```

```
// Executed in an Activity, so 'this' is the Context KOTLIN
// The fileUrl is a string URL, such as "http://www.example.com/image.png"
val downloadIntent = Intent(this, DownloadService::class.java).apply {
    data = Uri.parse(fileUrl)
}
startService(downloadIntent)
```

### 接收隐式Intent

在清单文件(AndroidManifest.xml)中进行定义可以接收那些Intent

```
<intent-filter>
   <action android:name="android.intent.action.SEND"/>
   <category android:name="android.intent.category.DEFAULT"/>
   <data android:mimeType="text/plain"/>
</intent-filter>
```

- action 在 name 属性中，声明接受的 Intent 操作。该值必须是操作的文本字符串值，而不是类常量。

- data 使用一个或多个指定数据 URI（scheme、host、port、path）各个方面和 MIME 类型的属性，声明接受的数据类型。

- category 在 name 属性中，声明接受的 Intent 类别。该值必须是操作的文本字符串值，而不是类常量。

```
<activity android:name="MainActivity">
    <!-- This activity is the main entry, should appear in app launcher -->
    <intent-filter>
        <!-- 指示这是主要入口点，且不要求输入任何 Intent 数据  -->
        <action android:name="android.intent.action.MAIN" />
        <!-- 此 Activity 的图标应放入系统的应用启动器 -->
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>

<activity android:name="ShareActivity">
    <!-- This activity handles "SEND" actions with text data -->
    <intent-filter>
        <action android:name="android.intent.action.SEND"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <data android:mimeType="text/plain"/>
    </intent-filter>
    <!-- This activity also handles "SEND" and "SEND_MULTIPLE" with media data -->
    <intent-filter>
        <action android:name="android.intent.action.SEND"/>
        <action android:name="android.intent.action.SEND_MULTIPLE"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <data android:mimeType="application/vnd.google.panorama360+jpg"/>
        <data android:mimeType="image/*"/>
        <data android:mimeType="video/*"/>
    </intent-filter>
</activity>
```

### 注意

StartActivity时候最终调用了ActivityManger.getService().startActivity的方法，并涉及到了进程间通讯，️而所映射的Binder内存大小是不到1M的，准确说是 （1024*1024) - (4096 *2) ：这个限制定义在，所以最大的传输数据是不超过1M的数据。