---
title: 🪀 Node
sidebarDepth: 1
---

```:no-line-numbers
 __________________________________
< 在 ubuntu 中安装 Node 环境 >
 ----------------------------------
        \   ^__^
         \  (..)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


## 版本选择

- LTS
  - 偶数版本号
  - 长期支持
  - 稳定

- Current
  - 奇数版本号
  - 尝鲜


## APT 安装

从 `Ubuntu` 的[软件源](https://packages.ubuntu.com/search?keywords=nodejs&searchon=names)中，已经包含了 `Node.js`，但是只能安装指定版本，例如：

- Ubuntu 18.04 -> node 8.10.0

- Ubuntu 20.04 -> node 10.19.0

- Ubuntu 22.04 -> node 12.22.9

```sh
sudo apt install nodejs npm
```

## NodeSource

NodeSource 是一个公司，聚焦于提供企业级的 Node 支持。它维护了一个 APT 软件源，其中包含了很多 Node.js 版本。如果你的应用需要指定版本的Node.js 版本，使用这个软件源。

具体请参考 [传送门](https://github.com/nodesource/distributions)

## 使用 NVM 管理（推荐）

NVM (Node Version Manager) 是一个 Bash 脚本，它允许你为每一个用户管理多个 Node.js 版本。使用 NVM，你可以随时安装或者卸载任何你想要使用或者测试的 Node.js版本。

- 安装

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 网络不好可选择 gitee
curl -o- https://gitee.com/mirrors/nvm/raw/master/install.sh | bash
wget -qO- https://gitee.com/mirrors/nvm/raw/master/install.sh | bash
```

脚本将会从 Github 克隆项目到 `~/.nvm` 文件夹。

- 验证安装

```sh
nvm --version
```

- 设置使用国内源安装

为了安装时有良好的网络体验，推荐在 `.bashrc` / `.zshrc` 中加入：

```sh
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
export NODE_MIRROR=https://npmmirror.com/mirrors/node
```

- 使用

```sh
# 打印可用版本
nvm list-remote
nvm list-remote --lts

# 安装
nvm intall --lts
nvm install 16.14.0

# 列出已安装版本
nvm ls

# 修改当前使用版本
nvm use 16.14.0

# 修改默认版本
nvm alias default 16.14.0
```

## 国内镜像站

### 配置国内镜像

- npm

```sh
npm config set registry https://registry.npmmirror.com/
npm config set disturl https://npmmirror.com/dist/
npm config set electron_mirror https://npmmirror.com/mirrors/electron/
npm config set electron_builder_binaries_mirror https://npmmirror.com/mirrors/electron-builder-binaries/
npm config set sass_binary_site http://npmmirror.com/mirrors/node-sass/
npm config set chromedriver_cdnurl https://npmmirror.com/mirrors/chromedriver/
npm config set phantomjs_cdnurl https://npmmirror.com/mirrors/phantomjs/
npm config set operadriver_cdnurl https://npmmirror.com/mirrors/operadriver/
```

- yarn

```sh
yarn config set registry https://registry.npmmirror.com/
yarn config set disturl https://npmmirror.com/dist/
yarn config set electron_mirror https://npmmirror.com/mirrors/electron/
yarn config set electron_builder_binaries_mirror https://npmmirror.com/mirrors/electron-builder-binaries/
yarn config set sass_binary_site http://npmmirror.com/mirrors/node-sass/
yarn config set chromedriver_cdnurl https://npmmirror.com/mirrors/chromedriver/
yarn config set phantomjs_cdnurl https://npmmirror.com/mirrors/phantomjs/
yarn config set operadriver_cdnurl https://npmmirror.com/mirrors/operadriver/
```

### 使用 cnpm

可以使用 [cnpm](https://github.com/cnpm/cnpm) 代替默认的 npm

```
npm install -g cnpm --registry=https://registry.npmmirror.com
```


## 参考

- 🔗 [https://developer.aliyun.com/article/760687](https://developer.aliyun.com/article/760687)
