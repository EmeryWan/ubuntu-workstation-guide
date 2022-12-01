---
title: 美化
---


```:no-line-numbers
 _________
< 美化 >
 ---------
        \   ^__^
         \  (==)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

::: tip 📝 写在最前
每个人使用 Ubuntu 的目的不同，一些人热衷于折腾桌面，以获取使用上的视觉体验，尊重每个人的选择。

假如您和我一样，使用 Ubuntu / Linux 是当做工具，不在意使用桌面，可以不在这类美化上花费过多的时间。少折腾系统配置，多折腾效率工具，在这里系统只是个工具。
:::




Gnome 桌面有一个专门的主题网站，可以在这里找到非常多优秀的主题：[传送门➡️](https://www.gnome-look.org/browse/)


```sh
# gnome-tweaks 主题管理工具 
sudo apt install -y gnome-tweaks gnome-shell-extensions
```


下面的内容只是简单介绍一下只美化主题、图标、鼠标指针等。

🚧 如果你是新手，建议尽量不要更改 GRUB，以免引起不必要的麻烦。

## 💐 主题

将下载的主题移动到 `${HOME}/.themes` 文件夹下，即可通过 gnome-tweaks 选择自定义主题。

![theme](/images/docs/guide/use/theme.png)

## 🌺 图标

将下载的图标主题移动到 `${HOME}/.icons` 文件夹下，即可通过 gnome-tweaks 选择自定义图标。

推荐一个常用的图标主题 [🦶 papirus-icon-theme](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme)，可以通过 PPA 进行安装。

![papirus](/images/docs/guide/use/papirus.png)

```sh
sudo add-apt-repository ppa:papirus/papirus
sudo apt-get update
sudo apt-get install papirus-icon-theme
```


## 🌼 鼠标指针

将下载的鼠标指针主题移动到 `${HOME}/.icons` 文件夹下，即可通过 gnome-tweaks 选择自定义鼠标指针。

## 🌻 QT 应用

Linux 下很多应用会基于 QT 开发，如 `Oracle VM VirualBox`，`VLC 播放器`，同样可以在 GTK 桌面下统一更改这些软件的风格。

```sh
# qt application theme
sudo apt install -y qt5ct qt5-style-kvantum
```

在 Kvantum 中选择需要更改的主题样式：

![kvantum](/images/docs/guide/use/kvantum.png)

再到 Qt5 配置工具中激活 Kvantum:

![qt5ct](/images/docs/guide/use/qt5ct.png)


## 🪷 其他

如果您使用的 KDE 桌面，可以参考 [arch.icekylin.online](https://arch.icekylin.online/advanced/beauty-1.html) 的内容。
