import{_ as a,p as s,q as e,Q as t,a1 as n}from"./framework-96b046e1.js";const p={},o=n(`<div class="language-text" data-ext="text"><pre class="language-text"><code> ___________
&lt; 常用内容 &gt;
 -----------
        \\   ^__^
         \\  (..)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre></div><h1 id="常用内容" tabindex="-1"><a class="header-anchor" href="#常用内容" aria-hidden="true">#</a> 常用内容</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>本节内容主要介绍一些在日常使用时，经常需要的内容。持续更新中。</p></div>`,3),i=n(`<h2 id="🍿-快速打开终端" tabindex="-1"><a class="header-anchor" href="#🍿-快速打开终端" aria-hidden="true">#</a> 🍿 快速打开终端</h2><p>使用快捷键：<code>ctrl + alt + t</code></p><h2 id="🍪-在文件管理器中查看隐藏内容" tabindex="-1"><a class="header-anchor" href="#🍪-在文件管理器中查看隐藏内容" aria-hidden="true">#</a> 🍪 在文件管理器中查看隐藏内容</h2><p>以 <code>.</code> 开头的文件和文件夹通常会被隐藏，可以通过 <code>ctrl + h</code> 显示或隐藏这些内容。</p><h2 id="🍩-终端使用代理" tabindex="-1"><a class="header-anchor" href="#🍩-终端使用代理" aria-hidden="true">#</a> 🍩 终端使用代理</h2><p>由于一些网络原因，有时候使用终端时，需要利用代理获得更好的体验，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 端口号请更改为实际端口号</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span>http://127.0.0.1:7890<span class="token punctuation">;</span><span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span>http://127.0.0.1:7890<span class="token punctuation">;</span><span class="token builtin class-name">export</span> <span class="token assign-left variable">all_proxy</span><span class="token operator">=</span>socks5://127.0.0.1:7890

<span class="token comment"># 取消代理</span>
<span class="token builtin class-name">unset</span> http_proxy<span class="token punctuation">;</span><span class="token builtin class-name">unset</span> https_proxy<span class="token punctuation">;</span><span class="token builtin class-name">unset</span> all_proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以加该命令起一个别名，放入配置文件中，方式使用。</p><p>根据使用的终端，<code>zsh -&gt; ~/.zshrc</code>，<code>bash -&gt; ~/.bashrc</code> 中进行添加：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可根据喜好取别名的名称</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">exp</span><span class="token operator">=</span><span class="token string">&quot;export https_proxy=http://127.0.0.1:7890;export http_proxy=http://127.0.0.1:7890;export all_proxy=socks5://127.0.0.1:7890&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后，<code>source .zhsrc / source .bashrc</code>，即可通过 <code>exp</code> 执行以上命令。</p><h2 id="🍯-其他" tabindex="-1"><a class="header-anchor" href="#🍯-其他" aria-hidden="true">#</a> 🍯 其他</h2><p>想到了再加。。。</p>`,13);function c(l,r){return s(),e("div",null,[o,t(`  

## 🍫 软件安装

### dpkg

\`Debian Packager\`，为 Debian 专门开发的套件管理系统。Ubuntu 使用 \`dpkg\` 安装、卸载 \`.deb\` 软件包。

\`\`\`sh
sudo dpkg -i package.deb
\`\`\`

若使用 \`dpkg\` 安装后，系统中不包含某些依赖，可使用 \`sudo apt install -f\` 安装缺失依赖。

例如以下情形：


![dpkg-error](/images/docs/guide/base/dpkg-error.png)

### apt

高级打包工具 \`Advanced Packaging Tools\` ，是 Debian 及其衍生的 Linux 软件包管理器。Ubuntu 使用 \`apt\` 可以自动下载，配置，安裝二进制或者源代码格式的软件包。一下为常用命令:


\`\`\`sh
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
\`\`\`

### snap

\`snap\` 是 \`Canoncial\` 公司提出的新一代 \`linux\` 包管理工具，它类似一个容器拥有一个应用程序所有的文件和库，各个应用程序之间完全独立。

使用 \`snap\` 包的好处就是它解决了应用程序之间的依赖问题（包含一个私有的root文件系统，里面包含了依赖的软件包），使应用程序之间更容易管理，一般安装在 \`/snap\` 目录下。

[snap store](https://snapcraft.io/store)

常用命令：

\`\`\`sh
# 搜索
snap search chromium

# 安装
snap install chromium

# 移除
snap remove chromium

# 查看已安装的 snap
snap list
\`\`\`

之前 \`snap\` 只是一个可选的包管理工具，只有少部分软件使用 \`snap\`，在 \`Ubuntu LTS 22.04\`，已经开始强推 \`snap\`， \`apt\` 中的软件有些只提供 \`snap\` 安装包。

个人对 \`snap\` 软件不是很喜欢，因为没有配置好 \`snap\` 应用，会与系统应用有严重割裂感，感觉还有很大的优化空间。

使用 \`snap\` 可能遇到过以下情况：

- 系统主题，鼠标指针不统一（当初我选择 Ubuntu 就是觉得比 windows 使用起来更统一）

- 系统目录的映射不统一

- 后台会静默更新到最新版本（无法接受）

- 更大的兼容性问题（我常用的 drowio 的 sanp 应用我就没成功打开过）

- 占用更多的磁盘空间

- 启动速度更慢



### 二进制软件

Ubuntu 有些第三方软件只提供二进制执行文件（压缩包或 AppImage），而不是安装包或者 apt 源，这时候需要我们去自己解压文件，放在自定义目录，并进行配置。

::: tip 提示
以下为本人平常使用的方式，只作为一种参考，可根据个人喜好选择。
:::

以 [cfw](https://github.com/Fndroid/clash_for_windows_pkg/releases) 安装为例，Linux 提供 \`.tar.gz\` 的执行文件。

二进制软件我通常都放在 \`~/Applications\` 中。

- 首先创建一个安装的软件的文件夹

\`\`\`sh
mkdir -p ~/Application/clash
\`\`\`

- 将下载的文件解压到该文件夹中

\`\`\`sh
tar -xzvf Clash.for.Windows-0.19.12 -C ~/Application/clash
\`\`\`

- 创建启动文件的软连接

\`\`\`sh
ln -s ./Clash\\ for\\ Windows-0.19.12-x64-linux/cfw ./clash
\`\`\`

通过这种方式，每次启动应用都使用这个软链接进行操作，当需要升级应用时，只需要创建新的软链接，指向新的启动文件。最后的效果如下：

\`\`\`
$ tree . -L 1
.
├── clash -> ./Clash for Windows-0.19.12-x64-linux/cfw
├── Clash for Windows-0.19.12-x64-linux
└── Clash for Windows-0.19.2-x64-linux
\`\`\`

- 添加桌面图标

\`\`\`sh
vim ~/.local/share/applications/clw.desktop
\`\`\`

添加以下内容：

\`\`\`conf
[Desktop Entry]
Name=Clash for Linux
Icon=/home/emery/Applications/icon/clash_icon.png  # 替换为自己的目录
Comment=Clash for Linux
Exec="/home/emery/Applications/Clash/clash" %u  # 替换为自己的目录
Type=Application
Categories=Network
Terminal=false
StartupNotify=true
\`\`\`

`),i])}const u=a(p,[["render",c],["__file","ubuntu.html.vue"]]);export{u as default};
