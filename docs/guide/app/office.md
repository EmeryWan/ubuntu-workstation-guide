---
title: 办公
---



```:no-line-numbers
 _________
< 办公 >
 ---------
        \   ^__^
         \  (==)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

::: tip  提示
Ubuntu 安装第三方应用并没有 Arch 那样方便，如果 PPA 中没有的话，只能去网络上搜索下载，或逐个添加 PPA。好在 Linux 下的大部分应用不怎么更新，只有第一次安装的时候麻烦点。

你可以在这里找到一些常用应用的 PPA：[传送门](https://www.ubuntuupdates.org/ppas)

---

想了解更多支持 Linux 的应用：
- [Awesome-Linux-Software](https://github.com/luong-komorebi/Awesome-Linux-Software/blob/master/README_zh-CN.md)
- [星火商店](https://www.spark-app.store/)

---

部分应用难免有兼容 / 依赖问题，新发行版请尽量下载最新版本确保兼容。请善用搜索引擎 🔍，如利用关键字 `ubuntu 版本号 应用名` 寻找相应的方法。
:::



## 🍦 office


- WPS Office

WPS 可谓是国内良心软件了，只是简单办公的话，在 Ubuntu 下的使用体验与其他系统基本一致（需要解决字体问题）。

下载地址：[传送门➡️](https://linux.wps.cn/)

- Libre Office

如果选择正常安装（非最小安装），LibreOffice 已内置于系统中。

```sh
sudo apt install libreoffice
```


## 🍧 markdown

- marktext

跨平台，下载地址 [传送门➡️](https://github.com/marktext/marktext)

- vs code

下载地址：[传送门➡️](https://code.visualstudio.com/Download)

```sh
sudo apt-get install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
rm -f packages.microsoft.gpg

sudo apt install apt-transport-https
sudo apt update
sudo apt install code # or code-insiders
```


- typora（收费）

下载地址：[传送门➡️](https://typoraio.cn/)



## 🍨 xmind

下载地址：[传送门➡️](https://www.xmind.cn/download/)


## 🍩 drawio

在线地址：[传送门➡️](https://app.diagrams.net/?src=about)

下载地址：[传送门➡️](https://github.com/jgraph/drawio-desktop/releases)

## 🧁 线上会议

- 腾讯会议

下载地址：[传送门➡️](https://meeting.tencent.com/download-center.html)

- 飞书

下载地址：[传送门➡️](https://www.feishu.cn/download)

- zoom

下载地址：[传送门➡️](https://zoom.us/download?os=linux)


## 🥧 邮件

- Thunderbird

如果选择正常安装（非最小安装），Thunderbird 已内置于系统中。

```sh
sudo apt install thunderbird
```

- 使用浏览器插件



## 🍬 远程桌面

- teamviewer

下载地址：[传送门➡️](https://www.teamviewer.cn/cn/download/linux/)


- 向日葵

下载地址：[传送门➡️](https://sunlogin.oray.com/download)


- todesk

下载地址：[传送门➡️](https://www.todesk.com/download.html)

