---
title: 基础配置使用
---


```:no-line-numbers
 ________________
< 基础配置使用 >
 ----------------
        \   ^__^
         \  (==)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```




::: tip  提示
以下内容会带有本人使用习惯，仅作为一个参考，请根据自身情况选择。
:::


## 🧋 双系统时区问题

```sh
timedatectl set-local-rtc 1 --adjust-system-clock
```

## 🫖 一些常用软件

下面是一些是使用时经常需要的软件或依赖，推荐安装一下。

```sh
# vim
sudo apt install -y vim ctags vim-doc vim-scripts

# curl wegt apt-transport-https 下载
sudo apt install -y curl wget apt-transport-https

# git
sudo apt install -y git

# cowsay neofetch
sudo apt install -y cowsay neofetch

# exfat 格式磁盘
sudo apt install -y exfat-utils

# rar zip 解压
sudo apt install -y rar unrar zip unzip

# openssh
sudo apt install -y openssh-server openssh-client
```


## 🧉 输入法

Ubuntu 安装中文时，会自带 `ibus` 输入法，若选择该输入法，推荐勾选内置词库 `设置 - 区域与语言 - 设置` 。

![ibus](/images/docs/guide/use/ibus.png)

当然，还可以选择以下输入法：

- [rime](https://rime.im/download/)

- [搜狗输入法](https://pinyin.sogou.com/linux?r=pinyin)

- [百度输入法](https://srf.baidu.com/site/guanwang_linux/index.html)


如果选择 `fcitx` 引擎输入法（如搜狗），安装完成后，需要将 `键盘输入法系统` 选择为 `fcitx`，注销 / 重启后生效。

![fcitx](/images/docs/guide/use/fcitx.png)

## 🧃 触摸板

如果使用的是笔记本，通常都会带有触控板。通常大部分触控板适配都不好，容易出现打字误触。推荐安装该插件：

[传送门➡️](https://extensions.gnome.org/extension/131/touchpad-indicator/)

[Github➡️](https://github.com/askmrsinh/touchpad-indicator#touchpadindicator)

可以给部分适配不好的触控板添加多点触控，或手动禁用触控板的功能。




## 🍶 字体

如果需要添加字体（如 windows 下的字体），可以将字体复制到 `~/.local/share/fonts` 目录下。再使用以下命令刷新字体缓存：


```sh
sudo fc-cache -f -v
```

有些网页没有考虑 Ubuntu 下字体显示，显示效果不佳，推荐添加以下字体：

- [PingFang SC](http://xiazaiziti.com/55657.html)
- microsoft yahei ui
- [microsoft yahei](http://xiazaiziti.com/1107.html)


在某些软件内，可能会有 emoji 显示不正常的问题，可以通过安装 emoji 字体解决：

```sh
sudo apt install fonts-noto-color-emoji
```
