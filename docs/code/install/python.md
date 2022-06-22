---
title: 🐍 Python
---

```:no-line-numbers
 ____________________________________
< 在 ubuntu 中安装 Python 环境 >
 ------------------------------------
        \   ^__^
         \  (**)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
```

## 本地 Python 环境

::: danger 🚧
在所有 <code>Linux</code> 桌面环境中，通常都会预装 <code>Python</code> 环境。🌰 例如，在 <code>Ubuntu 16.04</code> 中，预装了 <code>Python 2.7</code> 和 <code>Python 3.5</code>。
<br>
并且，系统中有大量的的脚本文件都基于 <code>Python</code> 编写，更改系统默认 <code>Python</code> 版本，可能会造成系统运行问题。<br>
<br>
🌰 假设，当前正在使用 <code>Ubuntu 16.04</code>，为了使用 <code>Python 3.8</code>，进行了直接安装，并替换了默认 <code>Python</code> 版本，由于 <code>Python</code> 不同版本间部分 API 的调整和一些兼容性问题，会导致部分命令无法运行。🌰 例如，进行如上操作后系统自带的 <code>Terminal</code> 桌面应用无法打开（由于 API 调整，无法运行打开应用的脚本）。<br>
<br>
<span style="color: red">强烈建议非必要原因，不要使用系统自带的 Python 环境，而是使用工具创建虚拟环境。</span>
:::


### Python 国内源

Python 国内镜像众多且速度良好，可以选择任一合适的镜像，以下为部分列表：

在家目录 `/home/{USER_NAME}` 中新建 `.pip/pip.conf` 文件，并写入如下内容：

- 📀 阿里云

```conf
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
trusted-host = mirrors.aliyun.com
```

- 📀 腾讯云

```conf
[global]
index-url = http://mirrors.cloud.tencent.com/pypi/simple
trusted-host = mirrors.cloud.tencent.com
```

- 📀 华为云

```conf
[global]
index-url = https://repo.huaweicloud.com/repository/pypi/simple
trusted-host = repo.huaweicloud.com
```


## 使用 pyenv 管理

TODO

## 使用 conda 管理

如果有机器学习，深度学习或数据处理等相关需要，推荐使用 `conda` 管理。

不同的训练框架和版本可能会需要 `Python` 版本相对应，不同的项目可能也会有不同的环境需求，使用 `conda` 根据需求新建对应的虚拟环境，在需要的时候随时切换。可以选择以下工具：

- ☁️ [Anaconda / Miniconda](https://www.anaconda.com/)
- 🌥 [Miniforge](https://conda-forge.org/)
- ⛅️ [Mambaforge](https://github.com/conda-forge/miniforge#mambaforge)

### Miniforge

在 [此链接](https://github.com/conda-forge/miniforge#miniforge3) 选择适合的版本，下载后运行以下命令，再按提示进行安装。

```sh
cd ${DOWNLOAD_DIR}

chmod +x ./Miniforge3-{Version}-MacOSX-{Architecture}.sh
./Miniforge3-{Version}-MacOSX-{Architecture}.sh
```

### Anaconda

推荐在国内镜像源下载，以获得更好的网络体验。推荐选择以下等国内地址：

- 💿 [阿里云](https://developer.aliyun.com/mirror/anaconda)
- 📀 [北京外国语](https://mirrors.bfsu.edu.cn/help/anaconda/)

下载完成后运行以下命令，再按提示进行安装。

```sh
cd ${DOWNLOAD_DIR}

chmod +x ./Anaconda3-{Version}-Linux-{Architecture}.sh
./Anaconda3-{Version}-Linux-{Architecture}.sh
```


### Conda 国内源


推荐使用 💿 [阿里云](https://developer.aliyun.com/mirror/anaconda)。

在家目录 `/home/{USER_NAME}` 中新建 `.condarc` 文件，并写入如下内容：

```yaml
channels:
  - defaults
show_channel_urls: true
default_channels:
  - http://mirrors.aliyun.com/anaconda/pkgs/main
  - http://mirrors.aliyun.com/anaconda/pkgs/r
  - http://mirrors.aliyun.com/anaconda/pkgs/msys2
custom_channels:
  conda-forge: http://mirrors.aliyun.com/anaconda/cloud
  msys2: http://mirrors.aliyun.com/anaconda/cloud
  bioconda: http://mirrors.aliyun.com/anaconda/cloud
  menpo: http://mirrors.aliyun.com/anaconda/cloud
  pytorch: http://mirrors.aliyun.com/anaconda/cloud
  simpleitk: http://mirrors.aliyun.com/anaconda/cloud
```

配置完成后，运行 `conda clean -i` 清除索引缓存。