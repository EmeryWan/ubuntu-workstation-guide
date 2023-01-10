import{_ as l,M as o,p as i,q as r,R as n,t as s,N as e,a1 as t}from"./framework-96b046e1.js";const c={},p=t(`<div class="language-text" data-ext="text"><pre class="language-text"><code> __________
&lt; 开发 &gt;
 ----------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</code></pre></div><p>介绍安装方式</p><h2 id="🍿-jetbrains" tabindex="-1"><a class="header-anchor" href="#🍿-jetbrains" aria-hidden="true">#</a> 🍿 Jetbrains</h2><p>Jetbrains 全家桶就不多介绍了，根据需要下载对应的开发工具即可。</p><div class="custom-container warning"><p class="custom-container-title">建议</p><p>需求稳定环境非常不推荐使用 snap 安装，snap 会在后台将软件静默更新到最新版本。</p></div>`,5),d={href:"https://www.jetbrains.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.jetbrains.com/zh-cn/toolbox-app/",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"🥗-编辑器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🥗-编辑器","aria-hidden":"true"},"#"),s(" 🥗 编辑器")],-1),m=n("ul",null,[n("li",null,"vs code")],-1),b={href:"https://code.visualstudio.com/Download",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">wget</span> gpg
<span class="token function">wget</span> -qO- https://packages.microsoft.com/keys/microsoft.asc <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token operator">&gt;</span> packages.microsoft.gpg
<span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-o</span> root <span class="token parameter variable">-g</span> root <span class="token parameter variable">-m</span> <span class="token number">644</span> packages.microsoft.gpg /etc/apt/trusted.gpg.d/
<span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo &quot;deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main&quot; &gt; /etc/apt/sources.list.d/vscode.list&#39;</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> packages.microsoft.gpg

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> apt-transport-https
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>atom</li></ul>`,2),g={href:"https://atom.io/",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sL</span> https://packagecloud.io/AtomEditor/atom/gpgkey <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo &quot;deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main&quot; &gt; /etc/apt/sources.list.d/atom.list&#39;</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update

<span class="token comment"># Install Atom</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> atom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>sublime text（收费）</li></ul>`,2),f={href:"https://www.sublimetext.com/download",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-qO</span> - https://download.sublimetext.com/sublimehq-pub.gpg <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/trusted.gpg.d/sublimehq-archive.gpg
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb https://download.sublimetext.com/ apt/stable/&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/sublime-text.list
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> sublime-text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🥪-数据库" tabindex="-1"><a class="header-anchor" href="#🥪-数据库" aria-hidden="true">#</a> 🥪 数据库</h2><ul><li>datagrip（收费）</li></ul>`,3),w={href:"https://www.jetbrains.com/zh-cn/datagrip/",target:"_blank",rel:"noopener noreferrer"},x=n("ul",null,[n("li",null,"navicat")],-1),q=n("p",null,"不推荐，Linux 下是通过 wine 运行的，问题较多。",-1),y=n("ul",null,[n("li",null,"dbeaver")],-1),A={href:"https://dbeaver.io/download/",target:"_blank",rel:"noopener noreferrer"},T=t(`<ul><li>RedisDesktopManager</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> redis-desktop-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>AnotherRedisDesktopManager</li></ul>`,3),j={href:"https://github.com/qishibo/AnotherRedisDesktopManager/releases",target:"_blank",rel:"noopener noreferrer"},z=n("ul",null,[n("li",null,"robo 3t")],-1),E={href:"https://github.com/Studio3T/robomongo",target:"_blank",rel:"noopener noreferrer"},N=n("h2",{id:"🌮-网络",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#🌮-网络","aria-hidden":"true"},"#"),s(" 🌮 网络")],-1),D=n("ul",null,[n("li",null,"postman")],-1),L={href:"https://www.postman.com/",target:"_blank",rel:"noopener noreferrer"},M=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 推荐</span>
snap <span class="token function">install</span> postman
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>charles</li></ul>`,2),R={href:"https://www.charlesproxy.com/download/latest-release/",target:"_blank",rel:"noopener noreferrer"},V=t(`<h2 id="🌭-远程连接" tabindex="-1"><a class="header-anchor" href="#🌭-远程连接" aria-hidden="true">#</a> 🌭 远程连接</h2><ul><li>remmina</li></ul><p>非最小安装，已内置于系统中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> remmina
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>putty</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> putty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>filezilla</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> filezilla
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>electerm</li></ul>`,9),B={href:"https://github.com/electerm/electerm",target:"_blank",rel:"noopener noreferrer"},I=n("ul",null,[n("li",null,"finalshell")],-1),J={href:"https://www.hostbuf.com/t/1059.html",target:"_blank",rel:"noopener noreferrer"},O=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> finalshell_install_linux.sh <span class="token punctuation">;</span><span class="token function">wget</span> www.hostbuf.com/downloads/finalshell_install_linux.sh<span class="token punctuation">;</span><span class="token function">chmod</span> +x finalshell_install_linux.sh<span class="token punctuation">;</span>./finalshell_install_linux.sh<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>termius（收费）</li></ul>`,2),S={href:"https://www.termius.com/linux",target:"_blank",rel:"noopener noreferrer"},W=n("ul",null,[n("li",null,"WindTerm")],-1),C={href:"https://github.com/kingToolbox/WindTerm",target:"_blank",rel:"noopener noreferrer"};function F(G,H){const a=o("ExternalLinkIcon");return i(),r("div",null,[p,n("p",null,[s("官网："),n("a",d,[s("传送门➡️"),e(a)])]),n("p",null,[n("a",u,[s("Toolbox App➡️"),e(a)])]),h,m,n("p",null,[s("下载地址："),n("a",b,[s("传送门➡️"),e(a)])]),_,n("p",null,[s("下载地址："),n("a",g,[s("传送门➡️"),e(a)])]),k,n("p",null,[s("下载地址："),n("a",f,[s("传送门➡️"),e(a)])]),v,n("p",null,[s("下载地址："),n("a",w,[s("传送门➡️"),e(a)])]),x,q,y,n("p",null,[s("下载地址："),n("a",A,[s("传送门➡️"),e(a)])]),T,n("p",null,[s("下载地址："),n("a",j,[s("传送门➡️"),e(a)])]),z,n("p",null,[s("下载地址："),n("a",E,[s("传送门➡️"),e(a)])]),N,D,n("p",null,[s("下载地址："),n("a",L,[s("传送门➡️"),e(a)])]),M,n("p",null,[s("下载地址："),n("a",R,[s("传送门➡️"),e(a)])]),V,n("p",null,[s("下载地址："),n("a",B,[s("传送门➡️"),e(a)])]),I,n("p",null,[s("下载地址："),n("a",J,[s("传送门➡️"),e(a)])]),O,n("p",null,[s("下载地址："),n("a",S,[s("传送门➡️"),e(a)])]),W,n("p",null,[s("下载地址："),n("a",C,[s("传送门➡️"),e(a)])])])}const P=l(c,[["render",F],["__file","code.html.vue"]]);export{P as default};
