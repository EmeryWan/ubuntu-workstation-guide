---
title: 📗 CUDA
sidebarDepth: 1
---


```:no-line-numbers
 __________________________________
< 在 Ubuntu 中安装 CUDA 环境 >
 ----------------------------------
        \   ^__^
         \  (..)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


## Nvdia 驱动

首先，请确保在系统中安装了英伟达显卡驱动，可以使用 `nvidia-msi` 命令查看显卡对应信息。

如果没有安装驱动，可以参考该章节。[传送门➡️](/guide/prepare/driver.html)


![nvidia-msi](/images/docs/code/install/cuda/nvidia-msi.png)

推荐使用系统自带软件 `软件和更新` 安装显卡驱动。打开应用后，点击 `附加驱动` 选项，会对所有可选的附加驱动进行搜索。



![nvidia-install](/images/docs/code/install/cuda/nvidia-install.png)

其中，`Nouveau` 为英伟达显卡开源驱动（默认安装），选择需要的 `NVIDIA drive` 驱动选项，点击 `应用更改`。

等待进度条结束后，重启电脑，即完成了显卡驱动的安装。

## CUDA

你可以在 [这里](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html) 看到显卡驱动版本与 CUDA 版本的对应关系。



![cuda](/images/docs/code/install/cuda/cuda.png)

🌰 在这里的显卡驱动版本为 `470.103.01`，根据对应表可知，最高可选的 CUDA Toolkit 的版本号为 `CUDA 11.4 Update 4`。

之后，可在官网 [该页面](https://developer.nvidia.com/cuda-toolkit-archive) 中，选择对应的 CUDA Toolkit。

可根据当前系统环境，选择对应的下载选项（推荐下载 `.drunfile`，`.deb` 会覆盖系统安装的显卡驱动）：



![cuda-platform](/images/docs/code/install/cuda/cuda-platform.png)

下载完成后，使用以下命令进行安装：

```sh
cd ${DOWNLOAD_DIR}

chmod +x ./cuda_{Version}_linux.run
sudo sh ./cuda_{Version}_linux.run
```

::: warning 警告  🚧
注意：在安装过程中，请取消勾选安装驱动选项。
:::



![cuda-install](/images/docs/code/install/cuda/cuda-install.png)

配置环境变量，在对应配置文件中添加如下内容：

```sh
# bash -> .bashrc  /  zsh -> .zshrc
export CUDA_HOME=/usr/local/cuda-{Version}
export PATH=${CUDA_HOME}/bin:${PATH}
```

## cuDNN

你可以在官网 [此链接](https://developer.nvidia.com/rdp/cudnn-download) 下载 CUDNN，需要注册开发者账号，可能还需要一个“良好的网络环境”。

选择与 CUDA 相对应用的 cuDNN，推荐下载压缩包格式。


![cudnn](/images/docs/code/install/cuda/cudnn.png)

下载完成后，解压文件夹，并根据以下命令复制解压后文件夹中的 `lib64` `include` 文件夹：

```sh
tar -xzvf cudnn-linux-{Version}.tar.gz

sudo cp cudnn-linux-{Version}/lib64/* /usr/local/cuda/lib64
sudo cp cudnn-linux-{Version}/include/* /usr/local/cuda/include
```

复制完成后，可以通过以下命令查看 cuDNN 版本信息：

```sh
cat /usr/local/cuda-10.1/include/cudnn.h | grep CUDNN_MAJOR -A 2
```
