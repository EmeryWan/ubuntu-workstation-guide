import{_ as o,M as i,p as c,q as r,R as e,t as n,N as s,a1 as t}from"./framework-96b046e1.js";const d="/ubuntu-workstation-guide/images/docs/guide/use/theme.png",p="/ubuntu-workstation-guide/images/docs/guide/use/papirus.png",l="/ubuntu-workstation-guide/images/docs/guide/use/kvantum.png",u="/ubuntu-workstation-guide/images/docs/guide/use/qt5ct.png",h={},m=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,` _________
< 美化 >
 ---------
        \\   ^__^
         \\  (==)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),_=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"📝 写在最前"),e("p",null,"每个人使用 Ubuntu 的目的不同，一些人热衷于折腾桌面，以获取使用上的视觉体验，尊重每个人的选择。"),e("p",null,"假如您和我一样，使用 Ubuntu / Linux 是当做工具，不在意使用桌面，可以不在这类美化上花费过多的时间。少折腾系统配置，多折腾效率工具，在这里系统只是个工具。")],-1),g={href:"https://www.gnome-look.org/browse/",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># gnome-tweaks 主题管理工具 </span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> gnome-tweaks gnome-shell-extensions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的内容只是简单介绍一下只美化主题、图标、鼠标指针等。</p><p>🚧 如果你是新手，建议尽量不要更改 GRUB，以免引起不必要的麻烦。</p><h2 id="💐-主题" tabindex="-1"><a class="header-anchor" href="#💐-主题" aria-hidden="true">#</a> 💐 主题</h2><p>将下载的主题移动到 <code>\${HOME}/.themes</code> 文件夹下，即可通过 gnome-tweaks 选择自定义主题。</p><p><img src="`+d+'" alt="theme"></p><h2 id="🌺-图标" tabindex="-1"><a class="header-anchor" href="#🌺-图标" aria-hidden="true">#</a> 🌺 图标</h2><p>将下载的图标主题移动到 <code>${HOME}/.icons</code> 文件夹下，即可通过 gnome-tweaks 选择自定义图标。</p>',8),v={href:"https://github.com/PapirusDevelopmentTeam/papirus-icon-theme",target:"_blank",rel:"noopener noreferrer"},k=t('<p><img src="'+p+`" alt="papirus"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:papirus/papirus
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> papirus-icon-theme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🌼-鼠标指针" tabindex="-1"><a class="header-anchor" href="#🌼-鼠标指针" aria-hidden="true">#</a> 🌼 鼠标指针</h2><p>将下载的鼠标指针主题移动到 <code>\${HOME}/.icons</code> 文件夹下，即可通过 gnome-tweaks 选择自定义鼠标指针。</p><h2 id="🌻-qt-应用" tabindex="-1"><a class="header-anchor" href="#🌻-qt-应用" aria-hidden="true">#</a> 🌻 QT 应用</h2><p>Linux 下很多应用会基于 QT 开发，如 <code>Oracle VM VirualBox</code>，<code>VLC 播放器</code>，同样可以在 GTK 桌面下统一更改这些软件的风格。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># qt application theme</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> qt5ct qt5-style-kvantum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Kvantum 中选择需要更改的主题样式：</p><p><img src="`+l+'" alt="kvantum"></p><p>再到 Qt5 配置工具中激活 Kvantum:</p><p><img src="'+u+'" alt="qt5ct"></p><h2 id="🪷-其他" tabindex="-1"><a class="header-anchor" href="#🪷-其他" aria-hidden="true">#</a> 🪷 其他</h2>',12),f={href:"https://arch.icekylin.online/advanced/beauty-1.html",target:"_blank",rel:"noopener noreferrer"};function x(w,y){const a=i("ExternalLinkIcon");return c(),r("div",null,[m,_,e("p",null,[n("Gnome 桌面有一个专门的主题网站，可以在这里找到非常多优秀的主题："),e("a",g,[n("传送门➡️"),s(a)])]),b,e("p",null,[n("推荐一个常用的图标主题 "),e("a",v,[n("🦶 papirus-icon-theme"),s(a)]),n("，可以通过 PPA 进行安装。")]),k,e("p",null,[n("如果您使用的 KDE 桌面，可以参考 "),e("a",f,[n("arch.icekylin.online"),s(a)]),n(" 的内容。")])])}const E=o(h,[["render",x],["__file","beauty.html.vue"]]);export{E as default};
