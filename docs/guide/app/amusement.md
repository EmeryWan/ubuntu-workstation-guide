---
title: 影音娱乐
---

```:no-line-numbers
 _____________
< 影音娱乐 >
 -------------
        \   ^__^
         \  (..)\_______
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



## 🍯 音乐

- 网易云音乐

在 22.04 中（貌似）有问题，可以 [参考](https://juejin.cn/post/7098513792115408910)。

官网：[传送门➡️](https://music.163.com/#)

下载地址：[传送门➡️](https://music.163.com/#/download)

![netease-cloud-music](/images/docs/guide/app/netease-cloud-music.png)



- QQ 音乐

官网：[传送门➡️](https://y.qq.com/)

下载地址：[传送门➡️](https://y.qq.com/download/download.html)

![qq-music](/images/docs/guide/app/qq-music.png)



- yesplaymusic

高颜值的第三方网易云播放器

Github：[传送门➡️](https://github.com/qier222/YesPlayMusic)

下载地址：[传送门➡️](https://github.com/qier222/YesPlayMusic/releases)

![yesplaymusic](/images/docs/guide/app/yesplaymusic.png)



- Listen 1 

Listen 1 可以搜索和播放来自多个主流音乐网站的歌曲，让你的曲库更全面。

Github：[传送门➡️](https://github.com/listen1/listen1_desktop)

下载地址：[传送门➡️](https://github.com/listen1/listen1_desktop/releases)

![Listen1](/images/docs/guide/app/Listen1.png)



- Spotify

官网：[传送门➡️](https://www.spotify.com/)

下载地址：[传送门➡️](https://www.spotify.com/hk-zh/download/linux/)


```sh
# 使用 snap
snap install spotify

# 使用 package
curl -sS https://download.spotify.com/debian/pubkey_5E3C45D7B312C643.gpg | sudo apt-key add - 
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt update && sudo apt-get install spotify-client
```


- Apple Music

Ubuntu 下可以使用第三方的基于 Electron 开发的 App。或者使用网页端。

Cider：[传送门➡️](https://github.com/ciderapp/Cider)

Apple-Music-Electron：[传送门➡️](https://github.com/ciderapp/Apple-Music-Electron)


## 🍮 视频

- VLC

```
sudo apt install vlc
```

- mpv

```
sudo apt install mpv
```

- ZY Player

跨平台桌面端视频资源播放器。

官网：[Github➡️](https://github.com/cuiocean/ZY-Player)

下载地址：[传送门➡️](https://github.com/cuiocean/ZY-Player/releases)

## 🥧 游戏

- steam

```sh
sudo apt install steam
```


## 🍪 安卓刷机

如果有安卓刷机的需要，请参考：[传送门➡️](https://arch.icekylin.online/apps/android.html)

