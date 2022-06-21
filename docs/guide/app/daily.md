---
title: 日常软件
---


```:no-line-numbers
 ____________
< 日常软件 >
 ------------
        \   ^__^
         \  (�)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

::: tip  提示
Ubuntu 安装第三方软件并没有 Arch 那样方便，如果 apt 中没有的话，只能去网络上搜索下载，或逐个添加 ppa。好在 Linux 下的这些软件不怎么会更新，只有第一次安装的时候麻烦点。

你可以在这里找到一些常用软件的 PPA：[传送门](https://www.ubuntuupdates.org/ppas)

---

当前（写这篇文档的时候），Ubuntu 22.04 刚刚发布，可能部分软件有兼容性问题（如网易云音乐），请尽量下载最新版本确保兼容。善用搜索引擎，利用关键字 `ubuntu 22.04 软件名` 寻找相应的方法。
:::


::: danger 更多
想了解更多 Ubuntu 下可用的软件，请浏览：[Awesome-Linux-Software](https://github.com/luong-komorebi/Awesome-Linux-Software/blob/master/README_zh-CN.md)
:::



## 浏览器

主流浏览器都会提供 Linux 版本，且选择很多。

> Chromium，Firefox 在最新的系统中，只提供 Snap 版本。

> Ubuntu 21.10 开始默认使用 Snap 版本的 Firefox，但并未阻止用户手动安装 deb 版本的 Firefox。在 Ubuntu 22.04 将仅向用户提供 Snap 版本的 Firefox，用户无法再手动安装 deb 版本。目前 Firefox Snap 版本的性能和其他不足之处还正在解决中。[参考](https://www.oschina.net/news/199868/firefox-snap-performance)

以下为部分浏览器安装方式：

- Chrome

[传送门](https://www.google.com/intl/zh-CN/chrome/)

```sh
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt install -y google-chrome-stable
```

- Chromium

[传送门](https://www.chromium.org/chromium-projects/)

```sh
# 较新系统中安装的都是 snap 应用
sudo apt install chromium-browser
```

- Firefox

[传送门](https://www.mozilla.org/zh-CN/firefox/)

```sh
# 系统默认自带了 firefox
sudo apt install firefox
```

- Edge

[传送门](https://www.microsoft.com/en-us/edge)

```sh
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge.list'

sudo apt install -y microsoft-edge-stable
```

- Opera

[传送门](https://www.opera.com/zh-cn/download#opera-browser)

```sh
sudo snap install opera
```

```sh
wget -O - http://deb.opera.com/archive.key | sudo apt-key add -
sudo sh -c 'echo "deb http://deb.opera.com/opera-stable/ stable non-free" >> /etc/apt/sources.list.d/opera.list' 
sudo apt install opera
```


- brave

[传送门](https://brave.com/zh/)

```sh
sudo apt install apt-transport-https curl
sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list

sudo apt install brave-browser
```


国内很多厂商也推出了 Linux 下的浏览器，大部分都是基于 Chromium。

有些只在 Deepin，UOS，银河麒麟等系统的应用商店中提供，没有提供下载链接。无特殊需求还是推荐 Chrome。

- 360 浏览器

[传送门](https://browser.360.cn/se/linux/index.html)




## 截图

- 深度截图

```sh
sudo apt install deepin-screenshot
```

- 火焰截图

```sh
sudo apt install flameshot
```


## 网盘

- 百度网盘

[传送门](https://pan.baidu.com/download)



- 坚果云

[传送门](https://www.jianguoyun.com/s/downloads)



## 移动设备投屏

请参考：[移动设备投屏](https://arch.icekylin.online/apps/collaboration.html)


## 虚拟机

- virtualbox

下载地址：[传送门➡️](https://www.virtualbox.org/wiki/Linux_Downloads)

```sh
# 信任 Virtualbox 的 GPG 公钥
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
# 更换为对应发行版
# <mydist>  ->  20.04  ->  lsb_release -c  ->  focal
echo "deb [arch=amd64] https://download.virtualbox.org/virtualbox/debian <mydist> contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list

# 推荐使用国内镜像，使用以下命令
echo "deb [arch=amd64] http://mirrors.cloud.tencent.com/virtualbox/apt/ focal contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list

sudo apt install virtualbox
```

- VMware

下载地址：[传送门➡️](https://www.vmware.com/products/workstation-player.html)

参考：[使用参考➡️](https://docs.vmware.com/cn/VMware-Workstation-Pro/16.0/com.vmware.ws.using.doc/GUID-1F5B1F14-A586-4A56-83FA-2E7D8333D5CA.html)
