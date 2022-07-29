---
title: 🏴 ZooKeeper
sidebarDepth: 1
---


```:no-line-numbers
 ____________________________
< 在 Ubuntu 中安装 ZooKeeper >
 ----------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


## 安装文件

[ZooKeeper Releases](https://zookeeper.apache.org/releases.html)

```sh
# 解压
tar -xzvf ${DOWNLOAD_PATH}/apache-zookeeper-3.5.9-bin.tar.gz -C ${YOUR_PATH}/apache-zookeeper-3.5.9

# 复制配置文件
# 在 conf/ 下有配置示例文件
cd ${YOUR_PATH}/apache-zookeeper-3.5.9/conf
cp zoo_sample.cfg zoo.cfg
```

```sh
# 启动 停止
${YOUR_PATH}/bin/zkServer.sh start
${YOUR_PATH}/bin/zkServer.sh stop

# 状态
${YOUR_PATH}/bin/zkServer.sh status

# zkCli
${YOUR_PATH}/bin/zkCli.sh -server 127.0.0.1:2181
```

## 使用 Docker 安装

[dockerhub ZooKeeper 地址 🔗](https://hub.docker.com/_/zookeeper)。


- 拉取镜像

```sh
docker pull zookeeper:3.5.9
```

- 创建容器并运行

```sh
docker run --name zookeeper-docker \
    -d \ 
    -p 2181:2181 \
    zookeeper:3.5.9
```

`Zookeeper` 配置文件目录在 `/conf`，可以挂载本地目录进行配置。

```sh
docker run --name zookeeper-docker -d \
    -v ${YOUR_PATH}/zoo.cfg:/conf/zoo.cfg
    -p 2181:2181 \
    zookeeper:3.5.9
```

- 使用容器命令行

```sh
docker run -it zookeeper-docker /bin/bash
```

## zoo.cfg

```cfg
# 单位：毫秒为。
# 心跳时间。最小会话超时是 tickTime 的两倍。
tickTime = 2000
initLimit = 10
syncLimit = 5

# 数据目录，内存数据库快照
dataDir = /YOUR_PATH/zookeeper/data/

# 客户端连接的端口
clientPort = 2181

# 配置集群
# 需要注意：这里 server.1 其中的 1 是指 myid 文件中的值
# 它的作用是标识 zk 的序号，简单说需要在 dataDir 目录下 存在一个 myid 文件
# 里面写上 zk 的 id，这样他们才能组成一个集群
server.1=127.0.0.1:2888:3888
server.2=127.0.0.1:2889:3889
server.3=127.0.0.1:2890:3890
```

## 可视化工具

基于 Apache Curator 和 JavaFX 实现的 Zookeeper 图形化管理客户端。

[vran-dev/PrettyZoo](https://github.com/vran-dev/PrettyZoo)
