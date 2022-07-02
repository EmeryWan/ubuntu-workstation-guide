import{_ as t,r as c,o as i,c as d,a as n,b as e,d as s,e as o}from"./app.53139165.js";var l="/ubuntu-workstation-guide/images/docs/code/install/cuda/nvidia-msi.png",u="/ubuntu-workstation-guide/images/docs/code/install/cuda/nvidia-install.png",r="/ubuntu-workstation-guide/images/docs/code/install/cuda/cuda.png",p="/ubuntu-workstation-guide/images/docs/code/install/cuda/cuda-platform.png",_="/ubuntu-workstation-guide/images/docs/code/install/cuda/cuda-install.png",v="/ubuntu-workstation-guide/images/docs/code/install/cuda/cudnn.png";const h={},m=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,` __________________________________
< \u5728 Ubuntu \u4E2D\u5B89\u88C5 CUDA \u73AF\u5883 >
 ----------------------------------
        \\   ^__^
         \\  (..)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`)])],-1),b=n("h2",{id:"nvdia-\u9A71\u52A8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nvdia-\u9A71\u52A8","aria-hidden":"true"},"#"),s(" Nvdia \u9A71\u52A8")],-1),g=n("p",null,[s("\u9996\u5148\uFF0C\u8BF7\u786E\u4FDD\u5728\u7CFB\u7EDF\u4E2D\u5B89\u88C5\u4E86\u82F1\u4F1F\u8FBE\u663E\u5361\u9A71\u52A8\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),n("code",null,"nvidia-msi"),s(" \u547D\u4EE4\u67E5\u770B\u663E\u5361\u5BF9\u5E94\u4FE1\u606F\u3002")],-1),k=s("\u5982\u679C\u6CA1\u6709\u5B89\u88C5\u9A71\u52A8\uFF0C\u53EF\u4EE5\u53C2\u8003\u8BE5\u7AE0\u8282\u3002"),f={href:"/guide/prepare/driver.html",target:"_blank",rel:"noopener noreferrer"},x=s("\u4F20\u9001\u95E8\u27A1\uFE0F"),D=o('<p><img src="'+l+'" alt="nvidia-msi"></p><p>\u63A8\u8350\u4F7F\u7528\u7CFB\u7EDF\u81EA\u5E26\u8F6F\u4EF6 <code>\u8F6F\u4EF6\u548C\u66F4\u65B0</code> \u5B89\u88C5\u663E\u5361\u9A71\u52A8\u3002\u6253\u5F00\u5E94\u7528\u540E\uFF0C\u70B9\u51FB <code>\u9644\u52A0\u9A71\u52A8</code> \u9009\u9879\uFF0C\u4F1A\u5BF9\u6240\u6709\u53EF\u9009\u7684\u9644\u52A0\u9A71\u52A8\u8FDB\u884C\u641C\u7D22\u3002</p><p><img src="'+u+'" alt="nvidia-install"></p><p>\u5176\u4E2D\uFF0C<code>Nouveau</code> \u4E3A\u82F1\u4F1F\u8FBE\u663E\u5361\u5F00\u6E90\u9A71\u52A8\uFF08\u9ED8\u8BA4\u5B89\u88C5\uFF09\uFF0C\u9009\u62E9\u9700\u8981\u7684 <code>NVIDIA drive</code> \u9A71\u52A8\u9009\u9879\uFF0C\u70B9\u51FB <code>\u5E94\u7528\u66F4\u6539</code>\u3002</p><p>\u7B49\u5F85\u8FDB\u5EA6\u6761\u7ED3\u675F\u540E\uFF0C\u91CD\u542F\u7535\u8111\uFF0C\u5373\u5B8C\u6210\u4E86\u663E\u5361\u9A71\u52A8\u7684\u5B89\u88C5\u3002</p><h2 id="cuda" tabindex="-1"><a class="header-anchor" href="#cuda" aria-hidden="true">#</a> CUDA</h2>',6),N=s("\u4F60\u53EF\u4EE5\u5728 "),A={href:"https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html",target:"_blank",rel:"noopener noreferrer"},U=s("\u8FD9\u91CC"),C=s(" \u770B\u5230\u663E\u5361\u9A71\u52A8\u7248\u672C\u4E0E CUDA \u7248\u672C\u7684\u5BF9\u5E94\u5173\u7CFB\u3002"),V=n("p",null,[n("img",{src:r,alt:"cuda"})],-1),w=n("p",null,[s("\u{1F330} \u5728\u8FD9\u91CC\u7684\u663E\u5361\u9A71\u52A8\u7248\u672C\u4E3A "),n("code",null,"470.103.01"),s("\uFF0C\u6839\u636E\u5BF9\u5E94\u8868\u53EF\u77E5\uFF0C\u6700\u9AD8\u53EF\u9009\u7684 CUDA Toolkit \u7684\u7248\u672C\u53F7\u4E3A "),n("code",null,"CUDA 11.4 Update 4"),s("\u3002")],-1),E=s("\u4E4B\u540E\uFF0C\u53EF\u5728\u5B98\u7F51 "),I={href:"https://developer.nvidia.com/cuda-toolkit-archive",target:"_blank",rel:"noopener noreferrer"},O=s("\u8BE5\u9875\u9762"),T=s(" \u4E2D\uFF0C\u9009\u62E9\u5BF9\u5E94\u7684 CUDA Toolkit\u3002"),z=o('<p>\u53EF\u6839\u636E\u5F53\u524D\u7CFB\u7EDF\u73AF\u5883\uFF0C\u9009\u62E9\u5BF9\u5E94\u7684\u4E0B\u8F7D\u9009\u9879\uFF08\u63A8\u8350\u4E0B\u8F7D <code>.drunfile</code>\uFF0C<code>.deb</code> \u4F1A\u8986\u76D6\u7CFB\u7EDF\u5B89\u88C5\u7684\u663E\u5361\u9A71\u52A8\uFF09\uFF1A</p><p><img src="'+p+`" alt="cuda-platform"></p><p>\u4E0B\u8F7D\u5B8C\u6210\u540E\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">\${DOWNLOAD_DIR}</span>

<span class="token function">chmod</span> +x ./cuda_<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>_linux.run
<span class="token function">sudo</span> <span class="token function">sh</span> ./cuda_<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>_linux.run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A \u{1F6A7}</p><p>\u6CE8\u610F\uFF1A\u5728\u5B89\u88C5\u8FC7\u7A0B\u4E2D\uFF0C\u8BF7\u53D6\u6D88\u52FE\u9009\u5B89\u88C5\u9A71\u52A8\u9009\u9879\u3002</p></div><p><img src="`+_+`" alt="cuda-install"></p><p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u5728\u5BF9\u5E94\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># bash -&gt; .bashrc  /  zsh -&gt; .zshrc</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CUDA_HOME</span><span class="token operator">=</span>/usr/local/cuda-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${CUDA_HOME}</span>/bin:<span class="token variable">\${<span class="token environment constant">PATH</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cudnn" tabindex="-1"><a class="header-anchor" href="#cudnn" aria-hidden="true">#</a> cuDNN</h2>`,9),H=s("\u4F60\u53EF\u4EE5\u5728\u5B98\u7F51 "),B={href:"https://developer.nvidia.com/rdp/cudnn-download",target:"_blank",rel:"noopener noreferrer"},L=s("\u6B64\u94FE\u63A5"),M=s(" \u4E0B\u8F7D CUDNN\uFF0C\u9700\u8981\u6CE8\u518C\u5F00\u53D1\u8005\u8D26\u53F7\uFF0C\u53EF\u80FD\u8FD8\u9700\u8981\u4E00\u4E2A\u201C\u826F\u597D\u7684\u7F51\u7EDC\u73AF\u5883\u201D\u3002"),$=o('<p>\u9009\u62E9\u4E0E CUDA \u76F8\u5BF9\u5E94\u7528\u7684 cuDNN\uFF0C\u63A8\u8350\u4E0B\u8F7D\u538B\u7F29\u5305\u683C\u5F0F\u3002</p><p><img src="'+v+`" alt="cudnn"></p><p>\u4E0B\u8F7D\u5B8C\u6210\u540E\uFF0C\u89E3\u538B\u6587\u4EF6\u5939\uFF0C\u5E76\u6839\u636E\u4EE5\u4E0B\u547D\u4EE4\u590D\u5236\u89E3\u538B\u540E\u6587\u4EF6\u5939\u4E2D\u7684 <code>lib64</code> <code>include</code> \u6587\u4EF6\u5939\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -xzvf cudnn-linux-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>.tar.gz

<span class="token function">sudo</span> <span class="token function">cp</span> cudnn-linux-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>/lib64/* /usr/local/cuda/lib64
<span class="token function">sudo</span> <span class="token function">cp</span> cudnn-linux-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>/include/* /usr/local/cuda/include
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u590D\u5236\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B cuDNN \u7248\u672C\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> /usr/local/cuda-10.1/include/cudnn.h <span class="token operator">|</span> <span class="token function">grep</span> CUDNN_MAJOR -A <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function P(R,J){const a=c("ExternalLinkIcon");return i(),d("div",null,[m,b,g,n("p",null,[k,n("a",f,[x,e(a)])]),D,n("p",null,[N,n("a",A,[U,e(a)]),C]),V,w,n("p",null,[E,n("a",I,[O,e(a)]),T]),z,n("p",null,[H,n("a",B,[L,e(a)]),M]),$])}var W=t(h,[["render",P],["__file","cuda.html.vue"]]);export{W as default};
