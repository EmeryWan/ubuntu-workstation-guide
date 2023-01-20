import{_ as l,M as d,p as c,q as o,R as n,t as s,N as a,a1 as i}from"./framework-96b046e1.js";const t="/ubuntu-workstation-guide/images/docs/guide/base/dpkg-error.png",p={},r=i(`<div class="language-text" data-ext="text"><pre class="language-text"><code> ______________
&lt; 如何安装应用 &gt;
 --------------
        \\   ^__^
         \\  (**)\\_______
            (__)\\       )\\/\\
             U  ||----w |
                ||     ||
</code></pre></div><h2 id="🛻-自带的应用商店" tabindex="-1"><a class="header-anchor" href="#🛻-自带的应用商店" aria-hidden="true">#</a> 🛻 自带的应用商店</h2><h2 id="🚗-apt" tabindex="-1"><a class="header-anchor" href="#🚗-apt" aria-hidden="true">#</a> 🚗 apt</h2><p>高级打包工具 <code>Advanced Packaging Tools</code> ，是 Debian 及其衍生的 Linux 软件包管理器。Ubuntu 使用 <code>apt</code> 可以自动下载，配置，安裝二进制或者源代码格式的软件包。一下为常用命令:</p><ul><li>🧩 基本操作</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 以安装 git 为例</span>

<span class="token comment"># 搜索</span>
<span class="token function">sudo</span> <span class="token function">apt</span> search <span class="token function">git</span>

<span class="token comment"># 安装</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span>

<span class="token comment"># 删除</span>
<span class="token function">sudo</span> <span class="token function">apt</span> remove <span class="token function">git</span>

<span class="token comment"># 升级</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>🧩 升级于维护</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查更新</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update

<span class="token comment"># 列出可以更新的软件包</span>
suao <span class="token function">apt</span> list <span class="token parameter variable">--upgradeable</span>

<span class="token comment"># 更新软件包</span>
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade

<span class="token comment"># 清理下载缓存</span>
<span class="token function">sudo</span> <span class="token function">apt</span> autoclean

<span class="token comment"># 移除不再使用的依赖</span>
<span class="token function">sudo</span> <span class="token function">apt</span> autoremove
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>🧩 安装下载的 deb 二进制软件包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 需要指定相对/绝对路径，否则会去 apt 中寻找同名 package</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> ./teamviewer_amd64.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">📝 提示</p><p>💡 使用 <code>dpkg</code> 与 <code>apt</code> 安装 <code>.deb</code> 软件包的区别</p><p>dpkg 不会自动安装依赖包，容易出现依赖相关的错误。 之后需要通过运行 <code>sudo apt-get install -f</code> 来安装依赖。</p><p>🌟 使用 <code>sudo apt install ./xxxx.deb</code> 来安装，会处理依赖，所以更加推荐使用。🙋</p></div><h2 id="🚕-dpkg" tabindex="-1"><a class="header-anchor" href="#🚕-dpkg" aria-hidden="true">#</a> 🚕 dpkg</h2><p><code>Debian Packager</code>，为 Debian 专门开发的套件管理系统。Ubuntu 使用 <code>dpkg</code> 安装、卸载 <code>.deb</code> 软件包。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> package.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若使用 <code>dpkg</code> 安装后，系统中不包含某些依赖，可使用 <code>sudo apt install -f</code> 安装缺失依赖。</p><p>例如以下情形：</p><p><img src="`+t+'" alt="dpkg-error"></p><h2 id="🚙-snap" tabindex="-1"><a class="header-anchor" href="#🚙-snap" aria-hidden="true">#</a> 🚙 snap</h2><p><code>snap</code> 是 <code>Canoncial</code> 公司提出的新一代 <code>linux</code> 包管理工具，它类似一个容器拥有一个应用程序所有的文件和库，各个应用程序之间完全独立。</p><p>使用 <code>snap</code> 包的好处就是它解决了应用程序之间的依赖问题（包含一个私有的root文件系统，里面包含了依赖的软件包），使应用程序之间更容易管理，一般安装在 <code>/snap</code> 目录下。</p>',20),u={href:"https://snapcraft.io/store",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>常用命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 搜索</span>
snap search chromium

<span class="token comment"># 安装</span>
snap <span class="token function">install</span> chromium

<span class="token comment"># 移除</span>
snap remove chromium

<span class="token comment"># 查看已安装的 snap</span>
snap list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之前 <code>snap</code> 只是一个可选的包管理工具，只有少部分软件使用 <code>snap</code>，在 <code>Ubuntu LTS 22.04</code>，已经开始强推 <code>snap</code>， <code>apt</code> 中的软件有些只提供 <code>snap</code> 安装包。</p><p>个人对 <code>snap</code> 软件不是很喜欢，因为没有配置好 <code>snap</code> 应用，如果应用厂商没有适配好，不仅有性能问题，而且会与系统应用有严重割裂感。</p><p>使用 <code>snap</code> 可能遇到过以下情况：</p>`,5),m=n("li",null,[n("p",null,"系统主题，鼠标指针不统一")],-1),b=n("li",null,[n("p",null,"系统目录的映射不统一")],-1),h=n("s",null,"后台会静默更新到最新版本（无法接受）",-1),g={href:"https://www.oschina.net/news/218046/ubuntu-stop-snap-updates",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,[n("p",null,"更大的兼容性问题（我常用的 drowio 的 sanp 应用我就没成功打开过）")],-1),_=n("li",null,[n("p",null,"占用更多的磁盘空间")],-1),f=n("li",null,[n("p",null,"启动速度更慢")],-1),x=n("h2",{id:"🚌-压缩的二进制应用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🚌-压缩的二进制应用","aria-hidden":"true"},"#"),s(" 🚌 压缩的二进制应用")],-1),w=n("p",null,"Ubuntu 有些第三方软件只提供二进制执行文件（压缩包或 AppImage），而不是安装包或者 apt 源，这时候需要我们去自己解压文件，放在自定义目录，并进行配置。",-1),C=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"提示"),n("p",null,"以下为本人平常使用的方式，只作为一种参考，可根据个人喜好设置。")],-1),A={href:"https://github.com/Fndroid/clash_for_windows_pkg/releases",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,".tar.gz",-1),N=i(`<p>二进制软件我通常都放在 <code>~/Applications</code> 中。</p><ul><li>首先创建一个安装的软件的文件夹</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/Application/clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>将下载的文件解压到该文件夹中</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> Clash.for.Windows-0.19.12 <span class="token parameter variable">-C</span> ~/Application/clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建启动文件的软连接</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> ./Clash<span class="token punctuation">\\</span> for<span class="token punctuation">\\</span> Windows-0.19.12-x64-linux/cfw ./clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过这种方式，每次启动应用都使用这个软链接进行操作，当需要升级应用时，只需要创建新的软链接，指向新的启动文件。</p><p>这里我将 <code>0.19.2</code> 版本升级到了 <code>0.19.12</code>，我们只需要修改软链接的指向，就可以完美迁移，其他配置中（如桌面图标中的配置）不需要改变。</p><p>最后的效果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tree . -L 1
.
├── clash -&gt; ./Clash for Windows-0.19.12-x64-linux/cfw
├── Clash for Windows-0.19.12-x64-linux
└── Clash for Windows-0.19.2-x64-linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加桌面图标</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.local/share/applications/clw.desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加以下内容：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[Desktop Entry]
Name=Clash for Linux
Icon=/home/emery/Applications/icon/clash_icon.png  # 替换为自己的目录
Comment=Clash for Linux
Exec=&quot;/home/emery/Applications/Clash/clash&quot; %u  # 替换为自己的目录
Type=Application
Categories=Network
Terminal=false
StartupNotify=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function y(E,T){const e=d("ExternalLinkIcon");return c(),o("div",null,[r,n("p",null,[n("a",u,[s("snap store"),a(e)])]),v,n("ul",null,[m,b,n("li",null,[n("p",null,[h,s(),n("a",g,[s("snap 现已支持关闭更新"),a(e)])])]),k,_,f]),x,w,C,n("p",null,[s("以 "),n("a",A,[s("cfw"),a(e)]),s(" 安装为例，Linux 提供 "),L,s(" 的执行文件。")]),N])}const W=l(p,[["render",y],["__file","how.html.vue"]]);export{W as default};
