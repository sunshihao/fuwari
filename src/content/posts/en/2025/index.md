---
title: Global CSS Initialization Settings for Front-End Projects
published: 2024-05-22
description: "How to use this blog template."
# image: "./cover.jpeg"
tags: ["css", "front-end"]
category: front-end
lang: "en"
draft: false
---

Sharing some default CSS styles for front-end project initialization, commonly referred to as CSS Reset. In the early days of web development, due to differences between browsers, developers needed to set default parameters to maintain consistent styles across platforms. This led to the evolution of CSS Reset. Nowadays, most UI frameworks come with built-in similar settings, so if there's a conflict with your UI framework, use these resets cautiously.

General:
css
复制
编辑
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
Prevents width/height overflow due to box model differences.

Compared to the older approach of setting box-sizing: border-box; on all elements, this initialization is more flexible—child elements will inherit the value if a different box-sizing is set on a parent.

css
复制
编辑
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
Removes default spacing like the 8px margin on <body> and other HTML elements.

css
复制
编辑
body {
  min-height: 100vh;
  line-height: 1.5;
}
h1, h2, h3, h4,
button, input, label {
  line-height: 1.1;
}
Sets body height and appropriate line-height.

css
复制
编辑
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}
Optional: Makes unstyled <a> elements match the text color and avoid default link styles.

css
复制
编辑
input,
button,
textarea,
select {
  font: inherit;
}
css
复制
编辑
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
Ensures long words don't overflow their containers by allowing line breaks.

iOS:
css
复制
编辑
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
Prevents font size increases in landscape mode on iPhones.

Final Version:
css
复制
编辑
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
/* iOS */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
Modern CSS Reset (2024)
Excerpt from A Modern CSS Reset:

css
复制
编辑
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

/* 9. Create a root stacking context */
#root, #__next {
  isolation: isolate;
}
