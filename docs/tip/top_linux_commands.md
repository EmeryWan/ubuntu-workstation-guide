---
title: 最牛的Linux Shell命令
sidebarDepth: 1
---


```:no-line-numbers
 _____________________
< 最牛的Linux Shell命令 >
 ---------------------
        \   ^__^
         \  (..)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

::: tip 提示
本文内容来自于：[https://plantegg.github.io/2017/01/01/top_linux_commands/](https://plantegg.github.io/2017/01/01/top_linux_commands/)
:::


## 引言

Shell作为Unix系操作系统当中最有魅力且不可或缺的组件，经过数十载的洗礼不仅没有被淘汰，而且愈加变得成熟稳健，究其原因，大概因为它是个非常稳固的粘合剂，能够把大量功能强大的组件任意配搭，总能很好很快地完成用户的任务。

本文的一些命令很可能看起来是“雕虫小技”，我们只好仰慕一下Shell大牛了，但是有些细节我会稍加发掘加以说明，遇到有趣的地方希望能博您一笑了。

## 1.以sudo运行上条命令

```sh
$ sudo !! 
```

大家应该都知sudo，不解释。但通常出现的情况是，敲完命令执行后报错才发现忘了sudo。这时候，新手用户就会：按上箭头，按左箭头，盯着光标回到开始处，输入sudo，回车；高手用户就蛋定多了，按Ctrl-p，按Ctrl-a，输入sudo，回车。

这里介绍这个是天外飞仙级别的，对，就直接 `sudo !!`。

当然这几种解决方式效果是完全一样的，只是款不一样，嗯，不解释。

两个感叹号其实是bash的一个特性，称为事件引用符（event designators）。!!其实相当于!-1，引用前一条命令，当然也可以!-2，!-50。默认情况下bash会在~/.bash_history文件内记录用户执行的最近500条命令，history命令可以显示这些命令。

关于事件引用符的更多用法可以深入阅读[The Definitive Guide to Bash Command Line History](http://www.catonmat.net/blog/the-definitive-guide-to-bash-command-line-history/)。


## 2.以HTTP方式共享当前文件夹的文件

```sh
$ python -m  SimpleHTTPServer
```

这命令启动了Python的SimpleHTTPServer模块，考虑到Python在绝大多数的Linux发行版当中都默认安装，所以这个命令很可能是最简单的跨平台传文件的方法。

命令执行后将在本机8000端口开放HTTP服务，在其他能访问本机的机器的浏览器打开ttp://ip:8000即打开一个目录列表，点击即可下载。


## 3.在以普通用户打开的vim当中保存一个root用户文件

```sh
:w !sudo tee %
```

这题目读起来纠结，其实是很常见的，常常忘记了sudo就直接用vim编辑/etc内的文件，（不过也不一定，vim发现保存的文件无法保存时候会提示）等编辑好了，保存时候才发现没权限。曲线方法是先保存个临时文件，退出后再sudo cp回去。不过实际上在vim里面可以直接完成这个过程的，命令就是如此。

查阅vim的文档（输入:help :w），会提到命令:w!{cmd}，让vim执行一个外部命令{cmd}，然后把当前缓冲区的内容从stdin传入。

tee是一个把stdin保存到文件的小工具。

而%，是vim当中一个只读寄存器的名字，总保存着当前编辑文件的文件路径。

所以执行这个命令，就相当于从vim外部修改了当前编辑的文件，好完工。

## 4.切换回上一个目录

```sh
$ cd -
```

应该不少人都知道这个，横杆-代表上一个目录的路径。

实际上cd -就是cd $OLDPWD的简写，bash的固定变量$OLDPWD总保存着之前一个目录的路径。

相对地，$PWD总保存着当前目录的路径。这些变量在编写shell脚本时候相当有用。

## 5.替换上一条命令中的一个短语

```sh
$ ^foo^bar^
```

又是另外一个事件引用符（event designator），可以把上一条命令当中的foo替换成bar。

在需要重复运行调试一道长长的命令，需要测试某个参数时候，用这个命令会比较实用；但多数人会首先选择按上箭头提出上道命令，再移动光标去修改某参数，这样更直观，但效率上就不够使用引用符高，而且在脚本中用这个方法可以简化很多。

这道命令的原始样式应该是这样的:

```sh
!!:s/foo/bar/
```


本文一开始介绍过!!，后面的一段大家应该很熟悉，vim、sed的替换操作都是这样的语法。

关于事件引用符的更多用法可以深入阅读[The Definitive Guide to Bash Command Line History](http://www.catonmat.net/blog/the-definitive-guide-to-bash-command-line-history/)

## 6.快速备份一个文件

```sh
$ cp filename{,.bak}
```


这道命令把filename文件拷贝成filename.bak，大家应该在一些比较复杂的安装教程里面见过这样的用法。其原理就在于bash对大括号的展开操作，filename{,.bak}这一段会被展开成filename filename.bak再传给cp，于是就有了备份的命令了。

大括号在bash里面是一个排列的意义，可以试试这个：

```sh
$ echo {a,b,c}{a,b,c}{a,b,c}
```

将输出三个集合的全排列:

aaa aab aac aba abb abc aca acb acc

baa bab bac bba bbb bbc bca bcb bcc

caa cab cac cba cbb cbc cca ccb ccc

关于shell当中的集合操作，可深入阅读[“Set Operations in the Unix Shell”](http://www.catonmat.net/blog/set-operations-in-unix-shell/)

## 7.免密码ssh登录主机


```
ssh-copy-id remote-machine
```

这个命令把当前用户的公钥串写入到远程主机的~/.ssh/authorized_keys内，这样下次使用ssh登录的时候，远程主机就直接根据这串密钥完成身份校验，不再询问密码了。前提是你当前用户有生成了公钥，默认是没有的，先执行ssh-keygen试试吧！

这个命令如果用手工完成，是这样的：

```
$ scp ~/.ssh/identity.pub remote-machine: your-machine$ ssh remote-machine remote-machine$ cat identity.pub >> ~/.ssh/authorized_keys
```


如果你想删掉远程主机上的密钥，直接打开authorized_keys，搜索你的用户名，删除那行，即可。

## 8.抓取Linux桌面的视频

```
$ ffmpeg -f x11grab -s wxga -r 25 -i :0.0 -sameq /tmp/out.mpg
```

我们在一些视频网站上看到别人的3D桌面怎么怎么酷的视频，通常就是这么来的，ffmpeg可以直接解码X11的图形，并转换到相应输出格式。

ffmpeg的通常用法是，根据一堆参数，输出一个文件，输出文件通常放最后，下面解析下几个参数：

-f x11grab 指定输入类型。因为x11的缓冲区不是普通的视频文件可以侦测格式，必须指定后ffmpeg才知道如何获得输入。

-s wxga 设置抓取区域的大小。wxga是1366*768的标准说法，也可以换成-s 800×600的写法。

-r 25 设置帧率，即每秒抓取的画面数。

-i :0.0 设置输入源，本地X默认在0.0

-sameq 保持跟输入流一样的图像质量，以用来后期处理。

至于其他ffmpeg的用法，可以参考下面两篇文章：

·    [How to Extract Audio Tracks from YouTube Videos](http://www.catonmat.net/blog/how-to-extract-audio-tracks-from-youtube-videos/)

·    [Converting YouTube Flash Videos to a Better Format with ffmpeg](http://www.catonmat.net/blog/converting-youtube-flvs-to-a-better-format-with-ffmpeg)

后记

说Shell是一种编程语言，可能有些尴尬，虽然很多人每天都在用Shell，但从来没见它荣登TIOBE编程语言排行榜之类的，可以说毫无名分，因为很多用户没意识到它是一种语言，只当做这是一个能够很好完成任务的工具，基本得理所当然，就好像GUI程序的菜单、按钮一样。

掌握Shell，通常能够让任务在数秒钟内完成，这就让Shell跟C、Perl、Python这些语言区别开来，没人否认后者更能胜任更多的任务，但是他们是在不同的层面上去做，Shell依赖大量的系统组件黏合调用，而后者依赖各种库，各所擅长不同的应用领域，比喻就是，Shell是混凝土，可以很方便地粘合一些建筑组件而成为稳固的高楼大厦；但同样是粘合剂，粘玻璃窗、粘书报、粘皮鞋，混凝土是绝对不合适的，Shell并不擅长一些细致操作，比如它连浮点运算都不支持，更别提什么图形运算什么的。但这并不妨碍Shell来帮我们完成很多粗重任务。

Shell的工作方式，大多数入门用户会觉得枯燥难学，而所谓的经典教材也离不开《Advanced Bash-Scripting》、《Bash Guide for Beginners》，但类似本文这样的一些“雕虫小技”因为难登大雅之堂绝不会收录进去。这情况如果象国外一些unix用户比较多的地方会有很好改善，即使是新手，偶尔看看别人的操作都能“偷师”一手，我编译本系列文章其实也就希望稍微改善一下这个状况。

 

 

 

## 1.用你最喜欢的编辑器来敲命令

```
command <CTRL-x CTRL-e>
```


在已经敲完的命令后按 `<CTRL-x CTRL-e>`，会打开一个你指定的编辑器（比如vim，通过环境变量$EDITOR指定），里面就是你刚输入的命令，然后爱怎么编辑就怎么编辑吧，特别是那些参数异常复杂的程序，比如mencoder/ffmpeg，一个命令动辄3、4行的，要修改其中的参数，这个方法最合适不过了，保存退出后自动执行这个程序。

实际上这是[readline库](http://tiswww.case.edu/php/chet/readline/rltop.html)的功能，在默认情况下，bash使用的是emacs模式的命令行操作方式，`<CTRL-x CTRL-e>` 是调用这个功能的一个绑定。如果你习惯使用vi模式，按 `<ESC v>` 可以实现同样功能。

如果你喜欢别的编辑器，可以在~/.bashrc里面放上比如export EDITOR=nano的命令。

另外一个修改命令的方法是使用fc命令（Fix Command），在编辑器里面打开上一句命令。我们的[第一辑连载](http://www.isspy.com/most_useful_linux_commands_1/)提过一个^foo^bar^命令可以用fc来实现：fc -s foo=bar。

## 2.清空或创建一个文件

```sh
> file.txt
```


`>` 在shell里面是标准输出重定向符，即把（前部个命令的）命令行输出转往一个文件内，但这里没有“前部命令”，输出为空，于是就覆盖（或创建）成一个空文件了。

有些脚本的写法是:>file.txt，因为:是bash默认存在的空函数。

单纯创建文件也可以用$touch file.txt，touch本来是用作修改文件的时间戳，但如果文件不存在，就自动创建了。

## 3.用ssh创建端口转发通道

```sh
ssh -N -L2001:remotehost:80 user@somemachine
```

这个命令在本机打开了2001端口，对本机2001端口的请求通过somemachine作为跳板，转到remotehost的80端口上。

实现效果跟术语反向代理是相似的，实际上就是端口转发，注意上面的描述涉及了3台主机，但当然somemachine可以变成localhost。

这个命令比较抽象，但有时候是很有用的，比如因为众所周知的原因国内的IP的80端口无法使用，又或者公司的防火墙只给外网开了ssh端口，需要访问内部服务器一个web应用，以及需要访问某些限定了来源IP的服务，就可以用上这个方法了。

举一个具体例子，运行：

```
ssh -f -N -L 0.0.0.0:443:twitter.com:443 shell.cjb.net ssh -f -N -L 0.0.0.0:80:twitter.com:80 shell.cjb.net
```

然后在/etc/hosts里面添加127.0.0.1 twitter.com，好吧剩下的你懂的。

当然通常做这个功能的反向代理，应该要用squid、nginx之类，ssh就算是轻量级的尝试吧！

## 4.重置终端

```
reset
```

如果你试过不小心cat了某个二进制文件，很可能整个终端就傻掉了，可能不会换行，没法回显，大堆乱码之类的，这时候敲入reset回车，不管命令有没有显示，就能回复正常了。

实际上reset命令只是输出了一些特殊字符，我们看BusyBox里面最简单的reset程序的实现：


```
printf(“\033c\033(K\033[J\033[0m\033[?25h”);
```

输出的这些字符对Shell是有特殊意义的：

·    \033c: “ESC c” – 发送重置命令;

·    \033(K: “ESC ( K” – 重载终端的字符映射;

·    \033[J: “ESC [ J” – 清空终端内容;

·    \033[0m: “ESC [ 0 m” – 初始化字符显示属性;

·    \033[?25h: “ESC [ ? 25 h” – 让光标可见;

其中*字符显示属性*经常用来设定打印字符的颜色等，可参考[这个博文](http://linuxshellaccount.blogspot.com/2008/03/using-color-in-linux-or-unix-shell.html)。

## 5.在午夜的时候执行某命令

```
echo cmd | at midnight
```

说的就是at这个组件，通常跟cron相提并论，不过at主要用于定时一次性任务，而cron定时周期性任务。

at的参数比较人性化，跟英语语法一样，可以tomorrow, next week之类的，详细的查看手册man at。

## 6.远程传送麦克风语音

```
dd if=/dev/dsp | ssh username@host dd of=/dev/dsp
```

没错就是实现一个喊话器的功能。

/dev/dsp是Linux下声卡的文件映射（Digital Signal Proccessor），从其中读数据就是录音，往里面写数据就是播放，相当简单！

dd是常用的数据拷贝程序，如果不同时指定if、of，就直接使用stdin/stdout来传输。

如果你没有远程主机，可以试试这样：

```
dd if=/dev/dsp of=/dev/dsp
```

直接回放麦克风的声音，只是有一点延时。

但是如果有别的程序正在使用声卡，这个方法就不凑效了，因为一般的声卡都不允许多个音频流同时处理，可以借用alsa组件的工具，arecord跟aplay:

```
arecord | ssh username@host aplay
```

本地回放就是：

```
arecord | aplay
```

如果你想吓吓别人：

```
cat /dev/urandom | ssh username@host aplay
```

## 7.映射一个内存目录

```
mount -t tmpfs -o size=1024m tmpfs /mnt/ram
```

这个命令开了一块1G内存来当目录用。不过放心，如果里面没文件，是不会占用内存的，用多少占多少。

不过一般来说没必要手动挂载，因为多数发行版都会在fstab内预留了一个内存目录，挂载在/dev/shm，直接使用即可；

最常见的用途是用内存空间来放Firefox的配置，可以让慢吞吞的FF快很多，参见Shellex的博文：[用tmpfs让Firefox在内存中飞驰](http://shellex.info/speeding-up-firefox-with-tmpfs/)，以及后来的改进：[用tmpfs让Firefox在内存中飞驰II](http://shellex.info/speeding-up-firefox-with-tmpfs-ii/)，其中提到的脚本来自[speeding up firefox with tmpfs and automatic rsync](http://www.linuxized.com/2009/05/speeding-up-firefox-with-tmpfs-and-automatic-rsync/)。

那个破烂LinuxQQ也可以用这个方法，减少因为大量磁盘IO导致的问题。

## 8.用diff对比远程文件跟本地文件

```
ssh user@host cat /path/to/remotefile | diff /path/to/localfile -
```


diff通常的用法是从参数读入两个文件，而命令里面的-则是指从stdin读入了。

善用ssh可以让web开发减少很多繁琐，还有比如sshfs，可以从**编辑****-****上传****-****编辑****-****上传**的人工循环里面解脱出来。

## 9.查看系统中占用端口的进程

```
netstat -tulnp
```

Netstat是很常用的用来查看Linux网络系统的工具之一，这个参数可以背下来：

·    -t: 显示TCP链接信息

·    -u: 显示UDP链接信息

·    -l: 显示监听状态的端口

·    -n: 直接显示ip，不做名称转换

·    -p: 显示相应的进程PID以及名称（要root权限）

如果要查看关于sockets更详细占用信息等，可以使用lsof工具。

 

