---
title: 前端工程CSS初始化全局设置
published: 2023-10-20
description: "前端工程CSS初始化全局设置"
tags: ["css", "front-end"]
category: front-end
lang: "zh"
draft: false
---

分享前端工程初始化设置CSS的样式，俗称CSS Reset，在上古时期由于浏览器之间的差异导致前端工程要设置默认参数来保持样式的一致性，进而演化而来CSS Reset，而现如今的UI均比较成熟，内置了类似的设置，若是和你工程中UI样式冲突的话，请谨慎使用:

### 通用:

```
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```
在盒子模型中防止长宽超出。

相较于以往的将所有元素均设置为 box-sizing: border-box; 的做法，这种初始化定义更加友好，若是在一个节点设置了不同的box-sizing，则其子节点均会获得继承。
```
body, h1, h2, h3, h4, p,
figure, blockquote, dl, dd {
  margin: 0;
}
ul[class],
ol[class] {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

去除一些HTML标签中奇怪的固定长度px，例如body的8px。
```
body {
  min-height: 100vh;
  line-height: 1.5;
}
h1, h2, h3, h4,
button, input, label {
  line-height: 1.1;
}
```
设置body高度及行高。

```
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}
```

可选: 设置a标签颜色样式同文本，而不是默认颜色。

```
input,
button,
textarea,
select {
  font: inherit;
}
```

```
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
```

设置浏览器是否应该在一个本来不能断开的字符串中插入换行符，以防止文本溢出。

### IOS

```
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
```

使得iphone不会在横向模式下增加字体的大小。

最终:

```
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body, h1, h2, h3, h4, p,
figure, blockquote, dl, dd {
  margin: 0;
}

ul[class],
ol[class] {
  margin: 0;
  padding: 0;
  list-style: none;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
// IOS
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
```

### 新版 CSS Reset (2024)

摘自 [A Modern CSS ResetA Modern CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)

```
/* 1. Use a more-intuitive box-sizing model */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

body {
  /* 3. Add accessible line-height */
  line-height: 1.5;
  /* 4. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input, button, textarea, select {
  font: inherit;
}

/* 7. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
```
