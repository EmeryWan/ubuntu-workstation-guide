import{_ as r,M as l,p as t,q as o,R as s,t as n,N as a,a1 as i}from"./framework-96b046e1.js";const c={},d=i(`<div class="language-text" data-ext="text"><pre class="language-text"><code> __________________________________
&lt; 在 ubuntu 中安装 Node 环境 &gt;
 ----------------------------------
        \\   ^__^
         \\  (..)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre></div><h2 id="版本选择" tabindex="-1"><a class="header-anchor" href="#版本选择" aria-hidden="true">#</a> 版本选择</h2><ul><li><p>LTS</p><ul><li>偶数版本号</li><li>长期支持</li><li>稳定</li></ul></li><li><p>Current</p><ul><li>奇数版本号</li><li>尝鲜</li></ul></li></ul><h2 id="apt-安装" tabindex="-1"><a class="header-anchor" href="#apt-安装" aria-hidden="true">#</a> APT 安装</h2>`,4),p=s("code",null,"Ubuntu",-1),m={href:"https://packages.ubuntu.com/search?keywords=nodejs&searchon=names",target:"_blank",rel:"noopener noreferrer"},u=s("code",null,"Node.js",-1),v=i(`<ul><li><p>Ubuntu 18.04 -&gt; node 8.10.0</p></li><li><p>Ubuntu 20.04 -&gt; node 10.19.0</p></li><li><p>Ubuntu 22.04 -&gt; node 12.22.9</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nodejs <span class="token function">npm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nodesource" tabindex="-1"><a class="header-anchor" href="#nodesource" aria-hidden="true">#</a> NodeSource</h2><p>NodeSource 是一个公司，聚焦于提供企业级的 Node 支持。它维护了一个 APT 软件源，其中包含了很多 Node.js 版本。如果你的应用需要指定版本的Node.js 版本，使用这个软件源。</p>`,4),h={href:"https://github.com/nodesource/distributions",target:"_blank",rel:"noopener noreferrer"},b=i(`<h2 id="使用-nvm-管理-推荐" tabindex="-1"><a class="header-anchor" href="#使用-nvm-管理-推荐" aria-hidden="true">#</a> 使用 NVM 管理（推荐）</h2><p>NVM (Node Version Manager) 是一个 Bash 脚本，它允许你为每一个用户管理多个 Node.js 版本。使用 NVM，你可以随时安装或者卸载任何你想要使用或者测试的 Node.js版本。</p><ul><li>安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
<span class="token function">wget</span> -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

<span class="token comment"># 网络不好可选择 gitee</span>
<span class="token function">curl</span> -o- https://gitee.com/mirrors/nvm/raw/master/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
<span class="token function">wget</span> -qO- https://gitee.com/mirrors/nvm/raw/master/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本将会从 Github 克隆项目到 <code>~/.nvm</code> 文件夹。</p><ul><li>验证安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>设置使用国内源安装</li></ul><p>为了安装时有良好的网络体验，推荐在 <code>.bashrc</code> / <code>.zshrc</code> 中加入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_NODEJS_ORG_MIRROR</span><span class="token operator">=</span>https://npmmirror.com/mirrors/node
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_MIRROR</span><span class="token operator">=</span>https://npmmirror.com/mirrors/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打印可用版本</span>
nvm list-remote
nvm list-remote <span class="token parameter variable">--lts</span>

<span class="token comment"># 安装</span>
nvm intall <span class="token parameter variable">--lts</span>
nvm <span class="token function">install</span> <span class="token number">16.14</span>.0

<span class="token comment"># 列出已安装版本</span>
nvm <span class="token function">ls</span>

<span class="token comment"># 修改当前使用版本</span>
nvm use <span class="token number">16.14</span>.0

<span class="token comment"># 修改默认版本</span>
nvm <span class="token builtin class-name">alias</span> default <span class="token number">16.14</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="国内镜像站" tabindex="-1"><a class="header-anchor" href="#国内镜像站" aria-hidden="true">#</a> 国内镜像站</h2><h3 id="配置国内镜像" tabindex="-1"><a class="header-anchor" href="#配置国内镜像" aria-hidden="true">#</a> 配置国内镜像</h3><ul><li>npm</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> disturl https://npmmirror.com/dist/
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> electron_mirror https://npmmirror.com/mirrors/electron/
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> electron_builder_binaries_mirror https://npmmirror.com/mirrors/electron-builder-binaries/
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> sass_binary_site http://npmmirror.com/mirrors/node-sass/
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> chromedriver_cdnurl https://npmmirror.com/mirrors/chromedriver/
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> phantomjs_cdnurl https://npmmirror.com/mirrors/phantomjs/
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> operadriver_cdnurl https://npmmirror.com/mirrors/operadriver/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>yarn</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> disturl https://npmmirror.com/dist/
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> electron_mirror https://npmmirror.com/mirrors/electron/
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> electron_builder_binaries_mirror https://npmmirror.com/mirrors/electron-builder-binaries/
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> sass_binary_site http://npmmirror.com/mirrors/node-sass/
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> chromedriver_cdnurl https://npmmirror.com/mirrors/chromedriver/
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> phantomjs_cdnurl https://npmmirror.com/mirrors/phantomjs/
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> operadriver_cdnurl https://npmmirror.com/mirrors/operadriver/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-cnpm" tabindex="-1"><a class="header-anchor" href="#使用-cnpm" aria-hidden="true">#</a> 使用 cnpm</h3>`,19),_={href:"https://github.com/cnpm/cnpm",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g cnpm --registry=https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,2),k={href:"https://developer.aliyun.com/article/760687",target:"_blank",rel:"noopener noreferrer"};function f(x,N){const e=l("ExternalLinkIcon");return t(),o("div",null,[d,s("p",null,[n("从 "),p,n(" 的"),s("a",m,[n("软件源"),a(e)]),n("中，已经包含了 "),u,n("，但是只能安装指定版本，例如：")]),v,s("p",null,[n("具体请参考 "),s("a",h,[n("传送门"),a(e)])]),b,s("p",null,[n("可以使用 "),s("a",_,[n("cnpm"),a(e)]),n(" 代替默认的 npm")]),g,s("ul",null,[s("li",null,[n("🔗 "),s("a",k,[n("https://developer.aliyun.com/article/760687"),a(e)])])])])}const j=r(c,[["render",f],["__file","node.html.vue"]]);export{j as default};
