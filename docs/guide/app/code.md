---
title: 开发
---



```:no-line-numbers
 __________
< 开发 >
 ----------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```



介绍安装方式

## 🍿 Jetbrains

Jetbrains 全家桶就不多介绍了，根据需要下载对应的开发工具即可。

::: warning 建议
需求稳定环境非常不推荐使用 snap 安装，snap 会在后台将软件静默更新到最新版本。
:::

官网：[传送门➡️](https://www.jetbrains.com/zh-cn/)

[Toolbox App➡️](https://www.jetbrains.com/zh-cn/toolbox-app/)

## 🥗 编辑器

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
sudo apt install code
```

- atom

下载地址：[传送门➡️](https://atom.io/)



```sh
curl -sL https://packagecloud.io/AtomEditor/atom/gpgkey | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main" > /etc/apt/sources.list.d/atom.list'
sudo apt update

# Install Atom
sudo apt install atom
```

- sublime text（收费）

下载地址：[传送门➡️](https://www.sublimetext.com/download)



```sh
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/sublimehq-archive.gpg
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
sudo apt update
sudo apt install sublime-text
```


## 🥪 数据库

- datagrip（收费）

下载地址：[传送门➡️](https://www.jetbrains.com/zh-cn/datagrip/)


- navicat

不推荐，Linux 下是通过 wine 运行的，问题较多。

- dbeaver

下载地址：[传送门➡️](https://dbeaver.io/download/)


- RedisDesktopManager 

```sh
sudo snap install redis-desktop-manager
```

- AnotherRedisDesktopManager

下载地址：[传送门➡️](https://github.com/qishibo/AnotherRedisDesktopManager/releases)


- robo 3t

下载地址：[传送门➡️](https://github.com/Studio3T/robomongo)


## 🌮 网络

- postman

下载地址：[传送门➡️](https://www.postman.com/)

```sh
# 推荐
snap install postman
```

- charles

下载地址：[传送门➡️](https://www.charlesproxy.com/download/latest-release/)


## 🌭 远程连接

- remmina

非最小安装，已内置于系统中。

```sh
sudo apt install remmina
```

- putty

```sh
sudo apt install putty
```

- filezilla

```sh
sudo apt install filezilla
```

- electerm

下载地址：[传送门➡️](https://github.com/electerm/electerm)



- finalshell

下载地址：[传送门➡️](https://www.hostbuf.com/t/1059.html)


```sh
rm -f finalshell_install_linux.sh ;wget www.hostbuf.com/downloads/finalshell_install_linux.sh;chmod +x finalshell_install_linux.sh;./finalshell_install_linux.sh;
```

- termius（收费）

下载地址：[传送门➡️](https://www.termius.com/linux)

- WindTerm

下载地址：[传送门➡️](https://github.com/kingToolbox/WindTerm)
