<template><div><h1 id="basic-commands" tabindex="-1"><a class="header-anchor" href="#basic-commands" aria-hidden="true">#</a> basic Commands</h1>
<p>中文帮助文档安装：https://blog.csdn.net/u010491918/article/details/76823854</p>
<h2 id="文件与目录" tabindex="-1"><a class="header-anchor" href="#文件与目录" aria-hidden="true">#</a> 文件与目录</h2>
<h3 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h3>
<p>list files 列出目录及文件名</p>
<ul>
<li>
<p><strong>选项参数</strong></p>
<table>
<thead>
<tr>
<th>options</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>-a</td>
<td>全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)</td>
</tr>
<tr>
<td>-d</td>
<td>仅列出目录本身，而不是列出目录内的文件数据</td>
</tr>
<tr>
<td>-l</td>
<td>长数据串列出，包含文件的属性与权限等等数据；(常用)</td>
</tr>
<tr>
<td>-i</td>
<td>列出inode number</td>
</tr>
</tbody>
</table>
</li>
</ul>
<h3 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h3>
<p>连接多个文件并打印到标准输出</p>
<ul>
<li>
<p><strong>用法</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Usage: <span class="token function">cat</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>参数</strong></p>
<table>
<thead>
<tr>
<th>options</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>-A , --show-all</td>
<td>等价于-vET</td>
</tr>
<tr>
<td>-b , --number-nonblank</td>
<td>给非空输出编号</td>
</tr>
<tr>
<td>-e</td>
<td>等价于-vE</td>
</tr>
<tr>
<td>-E , --show-ends</td>
<td>在每行结束显示$</td>
</tr>
<tr>
<td>-n , --number</td>
<td>给所有输出行编号</td>
</tr>
<tr>
<td>-s , --squeeze-blank</td>
<td>将所有的连续的多个空行替换为一个空行</td>
</tr>
<tr>
<td>-t</td>
<td>等价于-vT</td>
</tr>
<tr>
<td>-u</td>
<td>被忽略的选项</td>
</tr>
<tr>
<td>-v , --show-nonprinting</td>
<td>除了LFD和TAB之外所有控制符用^和M-记方式显示</td>
</tr>
<tr>
<td>--version</td>
<td>显示版本信息并推出</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>示例</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-matser-42 opt<span class="token punctuation">]</span><span class="token comment"># ls</span>
cni  containerd  log1.txt  log2.txt  log3.txt  manpages-zh-1.5.1
<span class="token punctuation">[</span>root@k8s-matser-42 opt<span class="token punctuation">]</span><span class="token comment"># cat log1.txt log2.txt  log3.txt  -n -E -s</span>
 <span class="token number">1</span>  this is  log1$
 <span class="token number">2</span>  this is  log2$
 <span class="token number">3</span>  this is  log3$
<span class="token punctuation">[</span>root@k8s-matser-42 opt<span class="token punctuation">]</span><span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h3>
<h3 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> more</h3>
<h3 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h3>
<h3 id="tail" tabindex="-1"><a class="header-anchor" href="#tail" aria-hidden="true">#</a> tail</h3>
<h2 id="用户及用户组" tabindex="-1"><a class="header-anchor" href="#用户及用户组" aria-hidden="true">#</a> 用户及用户组</h2>
</div></template>


