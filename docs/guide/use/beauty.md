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

::: tip 建议
Ubuntu 的玩法很多，很多人都热衷于折腾桌面，但是强烈建议不要在这类简单的视觉功能上做时间浪费。把 Ubuntu / Linux 当效率工具使用，而不是可以 DIY 的桌面系统，尽量少的折腾系统配置，多的折腾效率工具，系统只是个工具。
:::


```sh
# gnome-tweaks 主题管理工具 
sudo apt install -y gnome-tweaks gnome-shell-extensions
```

Gnome 桌面有一个专门的主题网站，可以在这里找到非常多优秀的主题：[传送门➡️](https://www.gnome-look.org/browse/)

建议只美化一下主题、图标、鼠标指针即可。如果你是新手，建议尽量不要更改 GRUB，以免引起不必要的麻烦。

## 💐 主题

## 🌺 图标

## 🌼 鼠标指针

## 🌻 QT 应用

Linux 下很多应用会基于 QT 开发，如 `Oracle VM VirualBox`，`VLC 播放器`，同样可以在 GTK 桌面下统一更改这些软件的风格。

```sh
# qt application theme
sudo apt install -y qt5ct qt5-style-kvantum
```

在 Kvantum 中选择需要更改的主题样式：

![fcitx](/images/docs/guide/use/kvantum.png)

再到 Qt5 配置工具中激活 Kvantum:

![fcitx](/images/docs/guide/use/qt5ct.png)
