---
title: Ubuntu 常用内容
---



```:no-line-numbers
 ____________________
< ubuntu 常用内容 >
 --------------------
        \   ^__^
         \  (..)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```




# ubuntu 常用内容

## 安装软件


### dpkg

`Debian Packager`，为 Debian 专门开发的套件管理系统。Ubuntu 使用 `dpkg` 安装、卸载 `.deb` 软件包。

```sh
sudo dpkg -i package.deb
```

若使用 `dpkg` 安装后，系统中不包含某些依赖，可使用 `sudo apt install -f` 安装缺失依赖。

例如以下情形：


![dpkg-error](/images/docs/guide/base/dpkg-error.png)

### apt

高级打包工具 `Advanced Packaging Tools` ，是 Debian 及其衍生的 Linux 软件包管理器。Ubuntu 使用 `apt` 可以自动下载，配置，安裝二进制或者源代码格式的软件包。一下为常用命令:


```sh
# 搜索
sudo apt search curl

# 安装
sudo apt install curl

# 卸载
sudo apt remove curl

# 升级
sudo apt update curl

# 更新
sudo apt upgrade
```

### 快速打开终端

使用快捷键：`ctrl + alt + t`

## 其他

想到了再加。。。

