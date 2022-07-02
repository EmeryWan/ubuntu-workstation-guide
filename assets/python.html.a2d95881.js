import{_ as t,r as c,o as i,c as l,a as n,b as s,e as o,d as a}from"./app.53139165.js";const r={},d=o(`<div class="language-text ext-text"><pre class="language-text"><code> ____________________________________
&lt; \u5728 ubuntu \u4E2D\u5B89\u88C5 Python \u73AF\u5883 &gt;
 ------------------------------------
        \\   ^__^
         \\  (**)\\_______
            (__)\\       )\\/\\
             U  ||----w |
                ||     ||
</code></pre></div><h2 id="\u672C\u5730-python-\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730-python-\u73AF\u5883" aria-hidden="true">#</a> \u672C\u5730 Python \u73AF\u5883</h2><div class="custom-container danger"><p class="custom-container-title">\u{1F6A7}</p><p>\u5728\u6240\u6709 <code>Linux</code> \u684C\u9762\u73AF\u5883\u4E2D\uFF0C\u901A\u5E38\u90FD\u4F1A\u9884\u88C5 <code>Python</code> \u73AF\u5883\u3002\u{1F330} \u4F8B\u5982\uFF0C\u5728 <code>Ubuntu 16.04</code> \u4E2D\uFF0C\u9884\u88C5\u4E86 <code>Python 2.7</code> \u548C <code>Python 3.5</code>\u3002 <br> \u5E76\u4E14\uFF0C\u7CFB\u7EDF\u4E2D\u6709\u5927\u91CF\u7684\u7684\u811A\u672C\u6587\u4EF6\u90FD\u57FA\u4E8E <code>Python</code> \u7F16\u5199\uFF0C\u66F4\u6539\u7CFB\u7EDF\u9ED8\u8BA4 <code>Python</code> \u7248\u672C\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u7CFB\u7EDF\u8FD0\u884C\u95EE\u9898\u3002<br><br> \u{1F330} \u5047\u8BBE\uFF0C\u5F53\u524D\u6B63\u5728\u4F7F\u7528 <code>Ubuntu 16.04</code>\uFF0C\u4E3A\u4E86\u4F7F\u7528 <code>Python 3.8</code>\uFF0C\u8FDB\u884C\u4E86\u76F4\u63A5\u5B89\u88C5\uFF0C\u5E76\u66FF\u6362\u4E86\u9ED8\u8BA4 <code>Python</code> \u7248\u672C\uFF0C\u7531\u4E8E <code>Python</code> \u4E0D\u540C\u7248\u672C\u95F4\u90E8\u5206 API \u7684\u8C03\u6574\u548C\u4E00\u4E9B\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u4F1A\u5BFC\u81F4\u90E8\u5206\u547D\u4EE4\u65E0\u6CD5\u8FD0\u884C\u3002\u{1F330} \u4F8B\u5982\uFF0C\u8FDB\u884C\u5982\u4E0A\u64CD\u4F5C\u540E\u7CFB\u7EDF\u81EA\u5E26\u7684 <code>Terminal</code> \u684C\u9762\u5E94\u7528\u65E0\u6CD5\u6253\u5F00\uFF08\u7531\u4E8E API \u8C03\u6574\uFF0C\u65E0\u6CD5\u8FD0\u884C\u6253\u5F00\u5E94\u7528\u7684\u811A\u672C\uFF09\u3002<br><br><span style="color:red;">\u5F3A\u70C8\u5EFA\u8BAE\u975E\u5FC5\u8981\u539F\u56E0\uFF0C\u4E0D\u8981\u4F7F\u7528\u7CFB\u7EDF\u81EA\u5E26\u7684 Python \u73AF\u5883\uFF0C\u800C\u662F\u4F7F\u7528\u5DE5\u5177\u521B\u5EFA\u865A\u62DF\u73AF\u5883\u3002</span></p></div><h3 id="python-\u56FD\u5185\u6E90" tabindex="-1"><a class="header-anchor" href="#python-\u56FD\u5185\u6E90" aria-hidden="true">#</a> Python \u56FD\u5185\u6E90</h3><p>Python \u56FD\u5185\u955C\u50CF\u4F17\u591A\u4E14\u901F\u5EA6\u826F\u597D\uFF0C\u53EF\u4EE5\u9009\u62E9\u4EFB\u4E00\u5408\u9002\u7684\u955C\u50CF\uFF0C\u4EE5\u4E0B\u4E3A\u90E8\u5206\u5217\u8868\uFF1A</p><p>\u5728\u5BB6\u76EE\u5F55 <code>/home/{USER_NAME}</code> \u4E2D\u65B0\u5EFA <code>.pip/pip.conf</code> \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u5982\u4E0B\u5185\u5BB9\uFF1A</p><ul><li>\u{1F4C0} \u963F\u91CC\u4E91</li></ul><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
trusted-host = mirrors.aliyun.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u{1F4C0} \u817E\u8BAF\u4E91</li></ul><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>[global]
index-url = http://mirrors.cloud.tencent.com/pypi/simple
trusted-host = mirrors.cloud.tencent.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u{1F4C0} \u534E\u4E3A\u4E91</li></ul><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>[global]
index-url = https://repo.huaweicloud.com/repository/pypi/simple
trusted-host = repo.huaweicloud.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528-pyenv-\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-pyenv-\u7BA1\u7406" aria-hidden="true">#</a> \u4F7F\u7528 pyenv \u7BA1\u7406</h2><p>TODO</p><h2 id="\u4F7F\u7528-conda-\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-conda-\u7BA1\u7406" aria-hidden="true">#</a> \u4F7F\u7528 conda \u7BA1\u7406</h2><p>\u5982\u679C\u6709\u673A\u5668\u5B66\u4E60\uFF0C\u6DF1\u5EA6\u5B66\u4E60\u6216\u6570\u636E\u5904\u7406\u7B49\u76F8\u5173\u9700\u8981\uFF0C\u63A8\u8350\u4F7F\u7528 <code>conda</code> \u7BA1\u7406\u3002</p><p>\u4E0D\u540C\u7684\u8BAD\u7EC3\u6846\u67B6\u548C\u7248\u672C\u53EF\u80FD\u4F1A\u9700\u8981 <code>Python</code> \u7248\u672C\u76F8\u5BF9\u5E94\uFF0C\u4E0D\u540C\u7684\u9879\u76EE\u53EF\u80FD\u4E5F\u4F1A\u6709\u4E0D\u540C\u7684\u73AF\u5883\u9700\u6C42\uFF0C\u4F7F\u7528 <code>conda</code> \u6839\u636E\u9700\u6C42\u65B0\u5EFA\u5BF9\u5E94\u7684\u865A\u62DF\u73AF\u5883\uFF0C\u5728\u9700\u8981\u7684\u65F6\u5019\u968F\u65F6\u5207\u6362\u3002\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u5DE5\u5177\uFF1A</p>`,17),p=a("\u2601\uFE0F "),u={href:"https://www.anaconda.com/",target:"_blank",rel:"noopener noreferrer"},h=a("Anaconda / Miniconda"),_=a("\u{1F325} "),m={href:"https://conda-forge.org/",target:"_blank",rel:"noopener noreferrer"},v=a("Miniforge"),b=a("\u26C5\uFE0F "),k={href:"https://github.com/conda-forge/miniforge#mambaforge",target:"_blank",rel:"noopener noreferrer"},g=a("Mambaforge"),f=n("h3",{id:"miniforge",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#miniforge","aria-hidden":"true"},"#"),a(" Miniforge")],-1),y=a("\u5728 "),x={href:"https://github.com/conda-forge/miniforge#miniforge3",target:"_blank",rel:"noopener noreferrer"},P=a("\u6B64\u94FE\u63A5"),A=a(" \u9009\u62E9\u9002\u5408\u7684\u7248\u672C\uFF0C\u4E0B\u8F7D\u540E\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u518D\u6309\u63D0\u793A\u8FDB\u884C\u5B89\u88C5\u3002"),M=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">\${DOWNLOAD_DIR}</span>

<span class="token function">chmod</span> +x ./Miniforge3-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>-MacOSX-<span class="token punctuation">{</span>Architecture<span class="token punctuation">}</span>.sh
./Miniforge3-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>-MacOSX-<span class="token punctuation">{</span>Architecture<span class="token punctuation">}</span>.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="anaconda" tabindex="-1"><a class="header-anchor" href="#anaconda" aria-hidden="true">#</a> Anaconda</h3><p>\u63A8\u8350\u5728\u56FD\u5185\u955C\u50CF\u6E90\u4E0B\u8F7D\uFF0C\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u7F51\u7EDC\u4F53\u9A8C\u3002\u63A8\u8350\u9009\u62E9\u4EE5\u4E0B\u7B49\u56FD\u5185\u5730\u5740\uFF1A</p>`,3),N=a("\u{1F4BF} "),O={href:"https://developer.aliyun.com/mirror/anaconda",target:"_blank",rel:"noopener noreferrer"},V=a("\u963F\u91CC\u4E91"),w=a("\u{1F4C0} "),D={href:"https://mirrors.bfsu.edu.cn/help/anaconda/",target:"_blank",rel:"noopener noreferrer"},E=a("\u5317\u4EAC\u5916\u56FD\u8BED"),L=o(`<p>\u4E0B\u8F7D\u5B8C\u6210\u540E\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u518D\u6309\u63D0\u793A\u8FDB\u884C\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">\${DOWNLOAD_DIR}</span>

<span class="token function">chmod</span> +x ./Anaconda3-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>-Linux-<span class="token punctuation">{</span>Architecture<span class="token punctuation">}</span>.sh
./Anaconda3-<span class="token punctuation">{</span>Version<span class="token punctuation">}</span>-Linux-<span class="token punctuation">{</span>Architecture<span class="token punctuation">}</span>.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="conda-\u56FD\u5185\u6E90" tabindex="-1"><a class="header-anchor" href="#conda-\u56FD\u5185\u6E90" aria-hidden="true">#</a> Conda \u56FD\u5185\u6E90</h3>`,3),I=a("\u63A8\u8350\u4F7F\u7528 \u{1F4BF} "),S={href:"https://developer.aliyun.com/mirror/anaconda",target:"_blank",rel:"noopener noreferrer"},U=a("\u963F\u91CC\u4E91"),R=a("\u3002"),B=o(`<p>\u5728\u5BB6\u76EE\u5F55 <code>/home/{USER_NAME}</code> \u4E2D\u65B0\u5EFA <code>.condarc</code> \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">channels</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> defaults
<span class="token key atrule">show_channel_urls</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">default_channels</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> http<span class="token punctuation">:</span>//mirrors.aliyun.com/anaconda/pkgs/main
  <span class="token punctuation">-</span> http<span class="token punctuation">:</span>//mirrors.aliyun.com/anaconda/pkgs/r
  <span class="token punctuation">-</span> http<span class="token punctuation">:</span>//mirrors.aliyun.com/anaconda/pkgs/msys2
<span class="token key atrule">custom_channels</span><span class="token punctuation">:</span>
  <span class="token key atrule">conda-forge</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.aliyun.com/anaconda/cloud
  <span class="token key atrule">msys2</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.aliyun.com/anaconda/cloud
  <span class="token key atrule">bioconda</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.aliyun.com/anaconda/cloud
  <span class="token key atrule">menpo</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.aliyun.com/anaconda/cloud
  <span class="token key atrule">pytorch</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.aliyun.com/anaconda/cloud
  <span class="token key atrule">simpleitk</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//mirrors.aliyun.com/anaconda/cloud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u8FD0\u884C <code>conda clean -i</code> \u6E05\u9664\u7D22\u5F15\u7F13\u5B58\u3002</p>`,3);function T(C,W){const e=c("ExternalLinkIcon");return i(),l("div",null,[d,n("ul",null,[n("li",null,[p,n("a",u,[h,s(e)])]),n("li",null,[_,n("a",m,[v,s(e)])]),n("li",null,[b,n("a",k,[g,s(e)])])]),f,n("p",null,[y,n("a",x,[P,s(e)]),A]),M,n("ul",null,[n("li",null,[N,n("a",O,[V,s(e)])]),n("li",null,[w,n("a",D,[E,s(e)])])]),L,n("p",null,[I,n("a",S,[U,s(e)]),R]),B])}var $=t(r,[["render",T],["__file","python.html.vue"]]);export{$ as default};
