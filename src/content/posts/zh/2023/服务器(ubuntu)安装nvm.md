---
title: 服务器(ubuntu)安装nvm
published: 2023-10-13
description: "服务器(ubuntu)安装nvm"
tags: ["linux"]
category: linux
lang: "zh"
draft: false
---

前提:
可访问github

在服务器(ubuntu)上切换node版本，选用了nvm作为node版本管理工具,步骤如下:

1.服务器执行安装命令
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```
ps:  [最新版本号](https://github.com/nvm-sh/nvm/releases)

2.安装完成后，关闭当前终端窗口并重新打开一个新的终端窗口
3.运行以下命令来验证nvm是否安装成功
```
nvm --version
```
可以看到nvm的版本号

另若nvm设置后，重新打开一个新的终端窗口nvm命令失效，检查用户文件 .bashrc或.bash_profile文件中有没有设置环境变量.例子如下:
```
export NVM_DIR="$HOME/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm 
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```
设置后执行刷新配置(安装完成后刷新生效)
```
source ~/.bashrc
```
或者执行
```
source ~/.bash_profile
```
这样设置后每次打开一个新的终端窗口，nvm命令就将自动可以使用。

ps：在Mac中可能设置之后，再打开新终端还是旧的node/npm版本，使用下面命令设置打开新终端时默认版本。

```
nvm alias default 22.12.0
```
### Q&A
#### Q: 无法访问 raw.githubusercontent.com 
A: mac在host文件中配置 raw.githubusercontent.com
