import{_ as a,p as n,q as s,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<div class="language-text" data-ext="text"><pre class="language-text"><code> ___________________________
&lt; 在 ubuntu 中安装 GO 环境 &gt;
 ---------------------------
        \\   ^__^
         \\  (**)\\_______
            (__)\\       )\\/\\
             U  ||----w |
                ||     ||
</code></pre></div><h2 id="ppa" tabindex="-1"><a class="header-anchor" href="#ppa" aria-hidden="true">#</a> PPA</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:longsleep/golang-backports
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> golang-go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="snap" tabindex="-1"><a class="header-anchor" href="#snap" aria-hidden="true">#</a> snap</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token parameter variable">--classic</span> go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>https://github.com/golang/go/wiki/Ubuntu</li></ul>`,7),l=[i];function d(c,o){return n(),s("div",null,l)}const r=a(t,[["render",d],["__file","go.html.vue"]]);export{r as default};
