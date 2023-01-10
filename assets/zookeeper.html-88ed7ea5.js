import{_ as r,M as l,p as d,q as c,R as e,t as n,N as s,a1 as i}from"./framework-96b046e1.js";const o={},t=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,` ____________________________
< 在 Ubuntu 中安装 ZooKeeper >
 ----------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),p=e("h2",{id:"安装文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装文件","aria-hidden":"true"},"#"),n(" 安装文件")],-1),v={href:"https://zookeeper.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> <span class="token variable">\${DOWNLOAD_PATH}</span>/apache-zookeeper-3.5.9-bin.tar.gz <span class="token parameter variable">-C</span> <span class="token variable">\${YOUR_PATH}</span>/apache-zookeeper-3.5.9

<span class="token comment"># 复制配置文件</span>
<span class="token comment"># 在 conf/ 下有配置示例文件</span>
<span class="token builtin class-name">cd</span> <span class="token variable">\${YOUR_PATH}</span>/apache-zookeeper-3.5.9/conf
<span class="token function">cp</span> zoo_sample.cfg zoo.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 停止</span>
<span class="token variable">\${YOUR_PATH}</span>/bin/zkServer.sh start
<span class="token variable">\${YOUR_PATH}</span>/bin/zkServer.sh stop

<span class="token comment"># 状态</span>
<span class="token variable">\${YOUR_PATH}</span>/bin/zkServer.sh status

<span class="token comment"># zkCli</span>
<span class="token variable">\${YOUR_PATH}</span>/bin/zkCli.sh <span class="token parameter variable">-server</span> <span class="token number">127.0</span>.0.1:2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-docker-安装" tabindex="-1"><a class="header-anchor" href="#使用-docker-安装" aria-hidden="true">#</a> 使用 Docker 安装</h2>`,3),m={href:"https://hub.docker.com/_/zookeeper",target:"_blank",rel:"noopener noreferrer"},b=i(`<ul><li>拉取镜像</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull zookeeper:3.5.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建容器并运行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> zookeeper-docker <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span> 
    <span class="token parameter variable">-p</span> <span class="token number">2181</span>:2181 <span class="token punctuation">\\</span>
    zookeeper:3.5.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Zookeeper</code> 配置文件目录在 <code>/conf</code>，可以挂载本地目录进行配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> zookeeper-docker <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable">\${YOUR_PATH}</span>/zoo.cfg:/conf/zoo.cfg
    <span class="token parameter variable">-p</span> <span class="token number">2181</span>:2181 <span class="token punctuation">\\</span>
    zookeeper:3.5.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用容器命令行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> zookeeper-docker /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="zoo-cfg" tabindex="-1"><a class="header-anchor" href="#zoo-cfg" aria-hidden="true">#</a> zoo.cfg</h2><div class="language-cfg line-numbers-mode" data-ext="cfg"><pre class="language-cfg"><code># 单位：毫秒为。
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可视化工具" tabindex="-1"><a class="header-anchor" href="#可视化工具" aria-hidden="true">#</a> 可视化工具</h2><p>基于 Apache Curator 和 JavaFX 实现的 Zookeeper 图形化管理客户端。</p>`,12),k={href:"https://github.com/vran-dev/PrettyZoo",target:"_blank",rel:"noopener noreferrer"};function _(h,g){const a=l("ExternalLinkIcon");return d(),c("div",null,[t,p,e("p",null,[e("a",v,[n("ZooKeeper Releases"),s(a)])]),u,e("p",null,[e("a",m,[n("dockerhub ZooKeeper 地址 🔗"),s(a)]),n("。")]),b,e("p",null,[e("a",k,[n("vran-dev/PrettyZoo"),s(a)])])])}const z=r(o,[["render",_],["__file","zookeeper.html.vue"]]);export{z as default};
