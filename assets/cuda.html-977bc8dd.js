import{_ as c}from"./nvidia-install-a344db90.js";import{_ as o,M as i,p as l,q as d,R as n,t as a,N as e,a1 as t}from"./framework-96b046e1.js";const p="/ubuntu-workstation-guide/images/docs/code/install/cuda/nvidia-msi.png",r="/ubuntu-workstation-guide/images/docs/code/install/cuda/cuda.png",u="/ubuntu-workstation-guide/images/docs/code/install/cuda/cuda-platform.png",_="/ubuntu-workstation-guide/images/docs/code/install/cuda/cuda-install.png",m="/ubuntu-workstation-guide/images/docs/code/install/cuda/cudnn.png",v={},h=n("div",{class:"language-text","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,` __________________________________
< 在 Ubuntu 中安装 CUDA 环境 >
 ----------------------------------
        \\   ^__^
         \\  (..)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),b=n("h2",{id:"nvdia-驱动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nvdia-驱动","aria-hidden":"true"},"#"),a(" Nvdia 驱动")],-1),k=n("p",null,[a("首先，请确保在系统中安装了英伟达显卡驱动，可以使用 "),n("code",null,"nvidia-msi"),a(" 命令查看显卡对应信息。")],-1),g={href:"/guide/prepare/driver.html",target:"_blank",rel:"noopener noreferrer"},f=t('<p><img src="'+p+'" alt="nvidia-msi"></p><p>推荐使用系统自带软件 <code>软件和更新</code> 安装显卡驱动。打开应用后，点击 <code>附加驱动</code> 选项，会对所有可选的附加驱动进行搜索。</p><p><img src="'+c+'" alt="nvidia-install"></p><p>其中，<code>Nouveau</code> 为英伟达显卡开源驱动（默认安装），选择需要的 <code>NVIDIA drive</code> 驱动选项，点击 <code>应用更改</code>。</p><p>等待进度条结束后，重启电脑，即完成了显卡驱动的安装。</p><h2 id="cuda" tabindex="-1"><a class="header-anchor" href="#cuda" aria-hidden="true">#</a> CUDA</h2>',6),x={href:"https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html",target:"_blank",rel:"noopener noreferrer"},N=n("p",null,[n("img",{src:r,alt:"cuda"})],-1),D=n("p",null,[a("🌰 在这里的显卡驱动版本为 "),n("code",null,"470.103.01"),a("，根据对应表可知，最高可选的 CUDA Toolkit 的版本号为 "),n("code",null,"CUDA 11.4 Update 4"),a("。")],-1),A={href:"https://developer.nvidia.com/cuda-toolkit-archive",target:"_blank",rel:"noopener noreferrer"},U=t('<p>可根据当前系统环境，选择对应的下载选项（推荐下载 <code>.drunfile</code>，<code>.deb</code> 会覆盖系统安装的显卡驱动）：</p><p><img src="'+u+`" alt="cuda-platform"></p><p>下载完成后，使用以下命令进行安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">\${DOWNLOAD_DIR}</span>

<span class="token function">chmod</span> +x ./cuda_<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>_linux.run
<span class="token function">sudo</span> <span class="token function">sh</span> ./cuda_<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>_linux.run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">警告 🚧</p><p>注意：在安装过程中，请取消勾选安装驱动选项。</p></div><p><img src="`+_+`" alt="cuda-install"></p><p>配置环境变量，在对应配置文件中添加如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># bash -&gt; .bashrc  /  zsh -&gt; .zshrc</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CUDA_HOME</span><span class="token operator">=</span>/usr/local/cuda-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${CUDA_HOME}</span>/bin:<span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cudnn" tabindex="-1"><a class="header-anchor" href="#cudnn" aria-hidden="true">#</a> cuDNN</h2>`,9),C={href:"https://developer.nvidia.com/rdp/cudnn-download",target:"_blank",rel:"noopener noreferrer"},V=t('<p>选择与 CUDA 相对应用的 cuDNN，推荐下载压缩包格式。</p><p><img src="'+m+`" alt="cudnn"></p><p>下载完成后，解压文件夹，并根据以下命令复制解压后文件夹中的 <code>lib64</code> <code>include</code> 文件夹：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> cudnn-linux-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>.tar.gz

<span class="token function">sudo</span> <span class="token function">cp</span> cudnn-linux-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>/lib64/* /usr/local/cuda/lib64
<span class="token function">sudo</span> <span class="token function">cp</span> cudnn-linux-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>/include/* /usr/local/cuda/include
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制完成后，可以通过以下命令查看 cuDNN 版本信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /usr/local/cuda-10.1/include/cudnn.h <span class="token operator">|</span> <span class="token function">grep</span> CUDNN_MAJOR <span class="token parameter variable">-A</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function w(E,I){const s=i("ExternalLinkIcon");return l(),d("div",null,[h,b,k,n("p",null,[a("如果没有安装驱动，可以参考该章节。"),n("a",g,[a("传送门➡️"),e(s)])]),f,n("p",null,[a("你可以在 "),n("a",x,[a("这里"),e(s)]),a(" 看到显卡驱动版本与 CUDA 版本的对应关系。")]),N,D,n("p",null,[a("之后，可在官网 "),n("a",A,[a("该页面"),e(s)]),a(" 中，选择对应的 CUDA Toolkit。")]),U,n("p",null,[a("你可以在官网 "),n("a",C,[a("此链接"),e(s)]),a(" 下载 CUDNN，需要注册开发者账号，可能还需要一个“良好的网络环境”。")]),V])}const z=o(v,[["render",w],["__file","cuda.html.vue"]]);export{z as default};