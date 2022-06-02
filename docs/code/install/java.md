---
title: ☕️ Java
---

```:no-line-numbers
 ________________________________________
< 在 ubuntu 中安装 Java 开发环境 >
 ----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


## JDK

### 🤔 选择发行版

|JDK| |备注|
|:--:|:--:|:--:|
|[Corretto](https://aws.amazon.com/cn/corretto/)|Amazon||
|[Dragonwell](https://dragonwell-jdk.io/)|Alibaba||
|[Liberica](https://bell-sw.com/)|Bellsoft||
|[Microsoft OpenJDK](https://www.microsoft.com/openjdk)|Microsoft||
|[OpenJDK](https://jdk.java.net/)|jdk.java.net||
|[Oracle JDK](https://www.oracle.com/java/)|Oracle|下载历史版本需要注册账号|
|[IBM developer kits](https://developers.redhat.com/products/openjdk/overview)|IBM||
|[Temurin](https://projects.eclipse.org/projects/adoptium.temurin)|Eclipse|Adopt OpenJDK|
|[Zulu](https://www.azul.com/)|Azul Systems||


::: tip 推荐
若只是为了日常学习使用，可直接通过 `apt` 安装 LTS 版本的 `openjdk`。
:::



### 🤔 选择版本号

在 `Java 8` 之后，Java 的功能更新周期从之前的每两年一个新版本缩减到每六个月一个新版本，并分为 LTS（长期支持版本）和 非 LTS，非 LTS 版本只提供 6 个月的维护。推荐安装 LTS 版本，目前 `17; 11; 8` 为目前提供的支持的 LTS。[了解更多](https://zh.wikipedia.org/zh-cn/Java%E7%89%88%E6%9C%AC%E6%AD%B7%E5%8F%B2)


![jdk-version](/images/docs/code/install/java/jdk-version.png)


### 📥 直接安装 JDK

如果你有明确使用的 JDK 版本，或者不想使用工具管理 JDK，可以选择直接安装。

#### 🗝 openJDK

如果要安装 `openjdk` 的话，可以直接使用 ubuntu 官方源进行安装。

```sh
# 查找官方源中的 JDK，主要包含 LTS 和部分支持版本
sudo apt search openjdk | grep openjdk

# 以安装 LTS 11 为例
sudo apt install openjdk-11-jdk openjdk-11-source openjdk-11-doc
```

使用 `apt` 安装，文件目录在 `/usr/lib/jvm`。

#### 🔑 其他版本的 JDK

安装其他版本的 JDK，可以根据需要，选择 JDK 发行版。下载 `.zip`、 `.tar.gz`、 `.deb` 或其他格式的二进制文件，解压到指定目录或直接安装。

以 zulu-LTS-17 为例，在 [此链接](https://www.azul.com/downloads/?version=java-17-lts&os=ubuntu&architecture=x86-64-bit&package=jdk#download-openjdk) 中选择需要的文件。

- 🌰 假设选择下载 `.deb` 文件，根据以下命令进行安装：

```sh
cd ${DOWNLOAD_PATH}

sudo apt install ./{DEB_FILE_NAME}.deb
```

`.deb` 格式的 JDK 文件通常会安装在 `/use/lib/jvm` 目录下。

- 🌰 假设选择下载 `.tat.gz` 文件，可以根据以下命令安装：

```sh
cd ${DOWNLOAD_PATH}

tar -xzvf ./{DEB_FILE_NAME}.tat.gz -C {YOUR_PATH_NAME}
```

:::warning 🚧 注意
选择解压二进制文件的安装方式，如果有使用 `java` 命令行的需求，需要配置对应的环境变量。
:::

在 `.zshrc (zsh)` 或 `.bashrc (bash)` 等对应配置文件中加入 `PATH` 环境变量。

```sh
export JAVA_HOME={YOUR_PATH_NAME}
export PATH=$JAVA_HOME/bin:$PATH
```


### 🧰 使用工具管理 JDK

目前可供选择的 JDK 版本管理工具主要有三个：
- 🔧 SDKMAN
- 🪛 Jabba
- 🔩 Jenv

#### 🔧 SDKMAN

[SDKMAN](https://sdkman.io/) 是一款管理 SDK 版本的工具，可以用于大多数基于 Uinx 的系统。它提供了命令行以及API，功能有：安装、移除、列举候选版本。

- 安装 sdkman（可能需要一个良好的网络环境）

```sh
# 运行该命令安装 sdkman
curl -s "https://get.sdkman.io" | bash

# 完成后按照安装提示，运行命令，添加环境变量
source "/home/${USER}/.sdkman/bin/sdkman-init.sh"

# 查看版本信息
sdk version
```

- 通过 sdkman 安装 JDK

```sh
# 确保能够解压文件
sudo apt install zip unzip

sdk list java
```

![sdkman-list-java](/images/docs/code/install/java/sdkman-list-java.png)

使用命令 `sdk install java ${Identifier}` 安装 JDK。以 zulu-LTS-11 为例，找到其对应的 Identifier：

```sh 
sdk install java 11.0.14-zulu
```

最后下载文件的目录在 `${HOME}/.sdkman/candidates`

- 管理 sdkman

```sh
# 查看当前使用的 JDK
sdk current java

# 切换 JDK 版本（使用 tab 选择）
sdk use java ${Identifier}

# 指定默认 JDK 版本（使用 tab 选择）
sdk default java ${Identifier}

# 卸载安装的 JDK（使用 tab 选择）
sdk uninstall java ${Identifier}

# 升级 JDK（使用 tab 选择）
sdk upgrade java ${Identifier}

# 清除缓存内容
sdk flush tmp
sdk flush archives
sdk flush broadcast

# 查看更多内容
sdk help
```

#### 🪛 jabba

TODO

#### 🔩 jenv

TODO






## Maven

### 💿︎ 配置国内镜像

#### ⛓ 全局配置

打开 Maven 的配置文件 `${HOME}/.m2/setting.xml`，在 `<mirrors> </mirrors>` 标签中添加如下 mirror 子节点。

如果没有该目录和文件，可以手动进行创建。
或 **（alt + 左键）** 1️⃣ [阿里云](/files/docs/code/install/java/aliyun-maven-setting/settings.xml)； 2️⃣ [腾讯云](/files/docs/code/install/java/tencent-maven-setting/settings.xml)； 3️⃣ [163](/files/docs/code/install/java/163-maven-setting/settings.xml)； 获取 `setting.xml` 文件进行覆盖。
或从 maven 安装目录 `${apache-maven-install-path}/conf/setting.xml` 复制。

:::: code-group
::: code-group-item 阿里云
```xml
<!-- https://developer.aliyun.com/mvn/guide -->
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>*</mirrorOf>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```
:::
::: code-group-item 腾讯云
```xml
<!-- https://mirrors.cloud.tencent.com/help/maven.html -->
<mirror>
    <id>nexus-tencentyun</id>
    <mirrorOf>*</mirrorOf>
    <name>Nexus tencentyun</name>
    <url>http://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>
</mirror>
```
:::
::: code-group-item 163
```xml
<!-- https://mirrors.163.com/.help/maven.html -->
<mirror>
    <id>nexus-163</id>
    <mirrorOf>*</mirrorOf>
    <name>Nexus 163</name>
    <url>http://mirrors.163.com/maven/repository/maven-public/</url>
</mirror>
```
:::
::::

#### 🔗 项目配置

更改某个项目的镜像源，可以在项目的 `pom.xml` 中添加或修改如下内容。再执行 `maven update` 命令更新一下即可。

:::: code-group
::: code-group-item 阿里云
```xml
<!-- https://developer.aliyun.com/mvn/guide -->
<repositories>
    <repository>
        <id>nexus-163</id>
        <name>Nexus 163</name>
        <url>https://maven.aliyun.com/repository/public</url>
        <layout>default</layout>
        <snapshots>
            <enabled>false</enabled>
        </snapshots>
        <releases>
            <enabled>true</enabled>
        </releases>
    </repository>
</repositories>
<pluginRepositories>
    <pluginRepository>
        <id>nexus-163</id>
        <name>Nexus 163</name>
        <url>https://maven.aliyun.com/repository/public</url>
        <snapshots>
            <enabled>false</enabled>
        </snapshots>
        <releases>
            <enabled>true</enabled>
        </releases>
    </pluginRepository>
</pluginRepositories>
```
:::
::: code-group-item 腾讯云
```xml
<!-- https://mirrors.cloud.tencent.com/help/maven.html -->
<repositories>
    <repository>
        <id>nexus-163</id>
        <name>Nexus 163</name>
        <url>http://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>
        <layout>default</layout>
        <snapshots>
            <enabled>false</enabled>
        </snapshots>
        <releases>
            <enabled>true</enabled>
        </releases>
    </repository>
</repositories>
<pluginRepositories>
    <pluginRepository>
        <id>nexus-163</id>
        <name>Nexus 163</name>
        <url>http://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>
        <snapshots>
            <enabled>false</enabled>
        </snapshots>
        <releases>
            <enabled>true</enabled>
        </releases>
    </pluginRepository>
</pluginRepositories>
```
:::
::: code-group-item 163
```xml
<!-- https://mirrors.163.com/.help/maven.html -->
<repositories>
    <repository>
        <id>nexus-163</id>
        <name>Nexus 163</name>
        <url>http://mirrors.163.com/maven/repository/maven-public/</url>
        <layout>default</layout>
        <snapshots>
            <enabled>false</enabled>
        </snapshots>
        <releases>
            <enabled>true</enabled>
        </releases>
    </repository>
</repositories>
<pluginRepositories>
    <pluginRepository>
        <id>nexus-163</id>
        <name>Nexus 163</name>
        <url>http://mirrors.163.com/maven/repository/maven-public/</url>
        <snapshots>
            <enabled>false</enabled>
        </snapshots>
        <releases>
            <enabled>true</enabled>
        </releases>
    </pluginRepository>
</pluginRepositories>
```
:::
::::


## Gradle

### 💿︎ 配置国内镜像

#### ⛓ 全局配置

在路径 `${HOME}/.gradle/init.gradle` 下创建文件 `init.gradle`，写入如下内容：

```gradle
// https://developer.aliyun.com/mvn/guide
allProjects {
    repositories {
        maven { url 'https://maven.aliyun.com/repository/public/' }
        maven { url 'https://maven.aliyun.com/repository/spring/' }
        maven { url 'https://maven.aliyun.com/repository/google/' } 
        maven { url 'https://maven.aliyun.com/repository/gradle-plugin/' }
        maven { url 'https://maven.aliyun.com/repository/spring/' }
        maven { url 'https://maven.aliyun.com/repository/spring-plugin/' }
        maven { url 'https://maven.aliyun.com/repository/grails-core/' }
        maven { url 'https://maven.aliyun.com/repository/apache-snapshots/' }
    }
}
```

#### 🔗 项目配置

更改某个项目的镜像源，可以在项目目录的 `build.gradle` 中添加或修改如下内容。

```gradle
// https://developer.aliyun.com/mvn/guide
repositories {
    maven { url 'https://maven.aliyun.com/repository/public/' }
    // 根据需要添加
    mavenLocal()
    mavenCentral()
}
```

## 参考

- 🔗 [https://zh.wikipedia.org/zh-cn/Java%E7%89%88%E6%9C%AC%E6%AD%B7%E5%8F%B2](https://zh.wikipedia.org/zh-cn/Java%E7%89%88%E6%9C%AC%E6%AD%B7%E5%8F%B2)
