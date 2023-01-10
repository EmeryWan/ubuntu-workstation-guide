import{_ as o,M as l,p as r,q as i,R as e,t as n,N as t,a1 as a}from"./framework-96b046e1.js";const c={},h=a(`<div class="language-text" data-ext="text"><pre class="language-text"><code> ____________
&lt; 进阶使用 &gt;
 ------------
        \\   ^__^
         \\  (**)\\_______
            (__)\\       )\\/\\
             U  ||----w |
                ||     ||
</code></pre></div><h2 id="🥛-使用英文目录" tabindex="-1"><a class="header-anchor" href="#🥛-使用英文目录" aria-hidden="true">#</a> 🥛 使用英文目录</h2><p>如果使用中文安装，用户目录下的目录名称都是中文的，如：<code>桌面，文档，下载</code> 等等，如果有终端操作，切换目录还是挺麻烦的，推荐将其改成英文。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US
xdg-user-dirs-gtk-update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更改后，可能会有弹窗询问是否要根据系统语言更改目录，选择保留英文。</p><h2 id="🍵-swapfile" tabindex="-1"><a class="header-anchor" href="#🍵-swapfile" aria-hidden="true">#</a> 🍵 swapfile</h2><h2 id="🍹-ssh-远程连接" tabindex="-1"><a class="header-anchor" href="#🍹-ssh-远程连接" aria-hidden="true">#</a> 🍹 SSH 远程连接</h2><h2 id="🍷-gnome-插件" tabindex="-1"><a class="header-anchor" href="#🍷-gnome-插件" aria-hidden="true">#</a> 🍷 Gnome 插件</h2>`,8),d={href:"https://extensions.gnome.org/",target:"_blank",rel:"noopener noreferrer"},p=a(`<p>这里介绍使用浏览器安装扩展插件，虽然在 PPA 中也能安装，但是只能获取到一部分，且版本较老。</p><ul><li>安装插件本地连接器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> chrome-gnome-shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装浏览器扩展插件</li></ul>`,4),_={href:"https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep",target:"_blank",rel:"noopener noreferrer"},u={href:"https://addons.mozilla.org/en-US/firefox/addon/gnome-shell-integration/",target:"_blank",rel:"noopener noreferrer"},g=a(`<p>如果没有合适的网络在 Chrome 中安装插件，推荐在 Firefox 中安装。</p><ul><li>安装插件管理器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gnome-tweak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>根据需求安装插件</li></ul><p>插件的安装位置在：<code>~/.local/share/gnome-shell/extensions</code></p><p>这里推荐一些常用的插件，请按需选择：</p>`,6),m=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"插件"),e("th",{style:{"text-align":"left"}},"功能")])],-1),f={style:{"text-align":"left"}},b={href:"https://extensions.gnome.org/extension/19/user-themes/",target:"_blank",rel:"noopener noreferrer"},v=e("td",{style:{"text-align":"left"}},"从用户目录加载 shell 主题。",-1),k={style:{"text-align":"left"}},x={href:"https://extensions.gnome.org/extension/615/appindicator-support/",target:"_blank",rel:"noopener noreferrer"},y=e("td",{style:{"text-align":"left"}},"向 Shell 添加 AppIndicator、KStatusNotifierItem 和旧版托盘图标支持",-1),z={style:{"text-align":"left"}},S={href:"https://extensions.gnome.org/extension/7/removable-drive-menu/",target:"_blank",rel:"noopener noreferrer"},w=e("td",{style:{"text-align":"left"}},"访问和卸载可移动设备的状态菜单。",-1),C={style:{"text-align":"left"}},D={href:"https://extensions.gnome.org/extension/517/caffeine/",target:"_blank",rel:"noopener noreferrer"},G=e("td",{style:{"text-align":"left"}},"禁用屏幕保护程序。",-1),N={style:{"text-align":"left"}},q={href:"https://extensions.gnome.org/extension/906/sound-output-device-chooser/",target:"_blank",rel:"noopener noreferrer"},E=e("td",{style:{"text-align":"left"}},"快速切换音频输入输出设备。",-1),I={style:{"text-align":"left"}},O={href:"https://extensions.gnome.org/extension/750/openweather/",target:"_blank",rel:"noopener noreferrer"},U=e("td",{style:{"text-align":"left"}},"在 GNOME Shell 中显示地球上任何位置的天气信息",-1),M={style:{"text-align":"left"}},$={href:"https://extensions.gnome.org/extension/779/clipboard-indicator/",target:"_blank",rel:"noopener noreferrer"},j=e("td",{style:{"text-align":"left"}},"Gnome-Shell 的剪贴板管理器扩展 - 将剪贴板指示器添加到顶部面板，并缓存剪贴板历史记录。",-1),A={style:{"text-align":"left"}},B={href:"https://extensions.gnome.org/extension/1160/dash-to-panel/",target:"_blank",rel:"noopener noreferrer"},F=e("td",{style:{"text-align":"left"}},"Gnome Shell 的图标任务栏。",-1),L={style:{"text-align":"left"}},T={href:"https://extensions.gnome.org/extension/307/dash-to-dock/",target:"_blank",rel:"noopener noreferrer"},V=e("td",{style:{"text-align":"left"}},"Gnome Shell 的扩展坞。",-1),H={style:{"text-align":"left"}},K={href:"https://extensions.gnome.org/extension/1085/simple-net-speed/",target:"_blank",rel:"noopener noreferrer"},P=e("td",{style:{"text-align":"left"}},"显示实时网速。",-1),R={style:{"text-align":"left"}},Z={href:"https://extensions.gnome.org/extension/1251/blyr/",target:"_blank",rel:"noopener noreferrer"},W=e("td",{style:{"text-align":"left"}},"毛玻璃效果。",-1),J={style:{"text-align":"left"}},Q={href:"https://extensions.gnome.org/extension/771/proxy-switcher/",target:"_blank",rel:"noopener noreferrer"},X=e("td",{style:{"text-align":"left"}},"在网络设置中定义的系统代理设置配置文件之间切换。",-1),Y={href:"https://extensions.gnome.org/",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://extensions.gnome.org/extension/5103/docker/",target:"_blank",rel:"noopener noreferrer"},ne=e("h2",{id:"🍾-美化终端",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🍾-美化终端","aria-hidden":"true"},"#"),n(" 🍾 美化终端")],-1),se={href:"https://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"},te={href:"https://fishshell.com/",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/romkatv/powerlevel10k",target:"_blank",rel:"noopener noreferrer"},oe=e("code",null,"oh-my-zsh",-1),le=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 zsh</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">zsh</span>

<span class="token comment"># oh-my-zsh</span>
<span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
<span class="token comment"># 或</span>
<span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">wget</span> https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh <span class="token parameter variable">-O</span> -<span class="token variable">)</span></span>&quot;</span>

<span class="token comment"># 更改默认终端为 zsh</span>
<span class="token function">sudo</span> chsh <span class="token parameter variable">-s</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> <span class="token function">zsh</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，可以通过 <code>~/.zshrc</code> 配置主题，插件，环境变量等内容。</p><h3 id="oh-my-zsh-插件" tabindex="-1"><a class="header-anchor" href="#oh-my-zsh-插件" aria-hidden="true">#</a> oh-my-zsh 插件</h3>`,3),re={href:"https://www.zhihu.com/question/49284484",target:"_blank",rel:"noopener noreferrer"},ie=a(`<p>安装插件的主要方式是克隆相应的仓库到 <code>oh-my-zsh/custom/plugins</code> 下，并在配置文件中配置。以下为举例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取插件</span>
<span class="token function">git</span> clone https://github.com/zsh-users/zsh-autosuggestions <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-autosuggestions

<span class="token function">git</span> clone https://github.com/zsh-users/zsh-syntax-highlighting.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-syntax-highlighting

<span class="token comment"># 在 .zshrc 中配置</span>
<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>
     <span class="token function">git</span>
     extract
     zsh-autosuggestions
     zsh-syntax-highlighting
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🥃-kde-connect" tabindex="-1"><a class="header-anchor" href="#🥃-kde-connect" aria-hidden="true">#</a> 🥃 KDE Connect</h2>`,3),ce={href:"https://kdeconnect.kde.org/",target:"_blank",rel:"noopener noreferrer"},he={href:"https://extensions.gnome.org/extension/1319/gsconnect/",target:"_blank",rel:"noopener noreferrer"},de={href:"https://arch.icekylin.online/apps/collaboration.html#%F0%9F%94%97-kde-connect",target:"_blank",rel:"noopener noreferrer"},pe=e("h2",{id:"🥤-参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🥤-参考","aria-hidden":"true"},"#"),n(" 🥤 参考")],-1),_e={href:"https://linux.cn/article-9447-1.html",target:"_blank",rel:"noopener noreferrer"};function ue(ge,me){const s=l("ExternalLinkIcon");return r(),i("div",null,[h,e("p",null,[n("为有一个更加易用的系统，安装插件可以方便我们的使用。你可以在 "),e("a",d,[n("Gnome extensions"),t(s)]),n(" 查看到所有的插件。")]),p,e("p",null,[e("a",_,[n("Chrome"),t(s)])]),e("p",null,[e("a",u,[n("Firefox"),t(s)])]),g,e("table",null,[m,e("tbody",null,[e("tr",null,[e("td",f,[e("a",b,[n("User Themes"),t(s)])]),v]),e("tr",null,[e("td",k,[e("a",x,[n("Appindicator Support"),t(s)])]),y]),e("tr",null,[e("td",z,[e("a",S,[n("Removable Drive Menu"),t(s)])]),w]),e("tr",null,[e("td",C,[e("a",D,[n("caffeine"),t(s)])]),G]),e("tr",null,[e("td",N,[e("a",q,[n("Sound Input & Output Device Chooser"),t(s)])]),E]),e("tr",null,[e("td",I,[e("a",O,[n("OpenWeather"),t(s)])]),U]),e("tr",null,[e("td",M,[e("a",$,[n("Clipboard Indicator"),t(s)])]),j]),e("tr",null,[e("td",A,[e("a",B,[n("Dash to Panel"),t(s)])]),F]),e("tr",null,[e("td",L,[e("a",T,[n("Dash to Dock"),t(s)])]),V]),e("tr",null,[e("td",H,[e("a",K,[n("Simple net speed"),t(s)])]),P]),e("tr",null,[e("td",R,[e("a",Z,[n("Blyr"),t(s)])]),W]),e("tr",null,[e("td",J,[e("a",Q,[n("proxy-switcher"),t(s)])]),X])])]),e("p",null,[n("在 "),e("a",Y,[n("Gnome extensions"),t(s)]),n(" 可以找到很多实用的插件，如有使用 Docker 的话，也能找到管理 Docker 容器和镜像的"),e("a",ee,[n("插件"),t(s)]),n("，请根据需要安装。")]),ne,e("p",null,[n("配置好一个终端，可已让我们在使用的过程中更加方便。通常我会使用 "),e("a",se,[n("oh-my-zsh"),t(s)]),n("。")]),e("p",null,[n("当然有很多选择如："),e("a",te,[n("fishshell"),t(s)]),n("，"),e("a",ae,[n("powerlevel10k"),t(s)]),n("，可以选择自己喜欢的进行配置。这里主要介绍 "),oe,n(" 的安装。")]),le,e("p",null,[n("oh-my-zsh 也可以安装插件来获取更好的使用体验，插件推荐可参考："),e("a",re,[n("传送门"),t(s)]),n("。")]),ie,e("p",null,[n("使用 "),e("a",ce,[n("KDE Connect"),t(s)]),n(" 可以在电脑上接收手机信息和控制手机，并且这是一个跨平台应用，十分方便。")]),e("p",null,[n("在 Gnome 桌面中，需要以"),e("a",he,[n("扩展插件"),t(s)]),n("的方式安装。")]),e("p",null,[n("具体使用请参考："),e("a",de,[n("使用方式"),t(s)])]),pe,e("ul",null,[e("li",null,[n("🔗 "),e("a",_e,[n("https://linux.cn/article-9447-1.html"),t(s)])])])])}const be=o(c,[["render",ue],["__file","advanced.html.vue"]]);export{be as default};
