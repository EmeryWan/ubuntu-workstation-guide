---
title: ð´ ZooKeeper
sidebarDepth: 1
---


```:no-line-numbers
 ____________________________
< å¨ Ubuntu ä¸­å®è£ ZooKeeper >
 ----------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


## äºè¿å¶æä»¶

[ZooKeeper Releases](https://zookeeper.apache.org/releases.html)

```sh
# è§£å
tar -xzvf ${DOWNLOAD_PATH}/apache-zookeeper-3.5.9-bin.tar.gz -C ${YOUR_PATH}/apache-zookeeper-3.5.9

# å¤å¶éç½®æä»¶
# å¨ conf/ ä¸æéç½®ç¤ºä¾æä»¶
cd ${YOUR_PATH}/apache-zookeeper-3.5.9/conf
cp zoo_sample.cfg zoo.cfg
```

```sh
# å¯å¨ åæ­¢
${YOUR_PATH}/bin/zkServer.sh start
${YOUR_PATH}/bin/zkServer.sh stop

# ç¶æ
${YOUR_PATH}/bin/zkServer.sh status

# zkCli
${YOUR_PATH}/bin/zkCli.sh -server 127.0.0.1:2181
```

## ä½¿ç¨ Docker å®è£

[dockerhub ZooKeeper å°å ð](https://hub.docker.com/_/zookeeper)ã


- æåéå

```sh
docker pull zookeeper:3.5.9
```

- åå»ºå®¹å¨å¹¶è¿è¡

```sh
docker run --name zookeeper-docker \
    -d \ 
    -p 2181:2181 \
    zookeeper:3.5.9
```

`Zookeeper` éç½®æä»¶ç®å½å¨ `/conf`ï¼å¯ä»¥æè½½æ¬å°ç®å½è¿è¡éç½®ã

```sh
docker run --name zookeeper-docker -d \
    -v ${YOUR_PATH}/zoo.cfg:/conf/zoo.cfg
    -p 2181:2181 \
    zookeeper:3.5.9
```

- ä½¿ç¨å®¹å¨å½ä»¤è¡

```sh
docker run -it zookeeper-docker /bin/bash
```

## zoo.cfg

```cfg
# åä½ï¼æ¯«ç§ä¸ºã
# å¿è·³æ¶é´ãæå°ä¼è¯è¶æ¶æ¯ tickTime çä¸¤åã
tickTime = 2000
initLimit = 10
syncLimit = 5

# æ°æ®ç®å½ï¼åå­æ°æ®åºå¿«ç§
dataDir = /YOUR_PATH/zookeeper/data/

# å®¢æ·ç«¯è¿æ¥çç«¯å£
clientPort = 2181

# éç½®éç¾¤
# éè¦æ³¨æï¼è¿é server.1 å¶ä¸­ç 1 æ¯æ myid æä»¶ä¸­çå¼
# å®çä½ç¨æ¯æ è¯ zk çåºå·ï¼ç®åè¯´éè¦å¨ dataDir ç®å½ä¸ å­å¨ä¸ä¸ª myid æä»¶
# éé¢åä¸ zk ç idï¼è¿æ ·ä»ä»¬æè½ç»æä¸ä¸ªéç¾¤
server.1=127.0.0.1:2888:3888
server.2=127.0.0.1:2889:3889
server.3=127.0.0.1:2890:3890
```

## å¯è§åå·¥å·

åºäº Apache Curator å JavaFX å®ç°ç Zookeeper å¾å½¢åç®¡çå®¢æ·ç«¯ã

[vran-dev/PrettyZoo](https://github.com/vran-dev/PrettyZoo)
