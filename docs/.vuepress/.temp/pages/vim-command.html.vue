<template><div><h1 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> vim</h1>
<h2 id="第四讲-定位搜索替换" tabindex="-1"><a class="header-anchor" href="#第四讲-定位搜索替换" aria-hidden="true">#</a> 第四讲-定位搜索替换</h2>
<h3 id="定位及文件状态" tabindex="-1"><a class="header-anchor" href="#定位及文件状态" aria-hidden="true">#</a> 定位及文件状态</h3>
<ul>
<li>gg-跳转到首行</li>
<li>G-跳转到最后一行</li>
<li>输入行号+G 跳转到指定行</li>
</ul>
<blockquote>
<p>输入 CTRL-G 显示当前编辑文件中当前光标所在行位置以及文件状态信息。</p>
</blockquote>
<h3 id="搜索命令" tabindex="-1"><a class="header-anchor" href="#搜索命令" aria-hidden="true">#</a> 搜索命令</h3>
<ul>
<li>正向查找</li>
</ul>
<p>​      normal 模式下输入反斜杠“/”+要查找的字符串即可。</p>
<ul>
<li>
<p>反向查找</p>
<p>输入问号&quot;?&quot;+要查找的字符串</p>
</li>
</ul>
<blockquote>
<p>按“n”查找下一个匹配，大写“N”相反方向的下一个匹配，</p>
</blockquote>
<h3 id="配对括号查找" tabindex="-1"><a class="header-anchor" href="#配对括号查找" aria-hidden="true">#</a> 配对括号查找</h3>
<p>将光标移动到要匹配的括号起始处，按%即可匹配对应括号。</p>
<blockquote>
<p>输入 % 可以查找配对的括号 )、]、}。**，该功能在调试代码，确定代码块是很有用的。</p>
</blockquote>
<h3 id="查找替换" tabindex="-1"><a class="header-anchor" href="#查找替换" aria-hidden="true">#</a> 查找替换</h3>
<ul>
<li>
<p>行替换</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>--替换当前光标所在当的第一个匹配做替换
:s/old/new
--替换全行的匹配串
:s/old/new/g
--替换全行的匹配串（提示是否进行替换）
:s/old/new/gc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>多行替换</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>--替换若干行中的所有匹配串
<span class="token builtin class-name">:</span><span class="token comment">#,#s/old/new/g</span>
--若干行带提示替换
:1,5s/old/new/gc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>全局替换</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>--替换整个文件中每个匹配串
%s/old/new/g
--带提示替换
%s/old/new/gc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ol>
<li>CTRL-G 用于显示当前光标所在位置和文件状态信息。
G 用于将光标跳转至文件最后一行。
先敲入一个行号然后输入大写 G 则是将光标移动至该行号代表的行。
gg 用于将光标跳转至文件第一行。</li>
<li>输入 / 然后紧随一个字符串是在当前所编辑的文档中正向查找该字符串。
输入 ? 然后紧随一个字符串则是在当前所编辑的文档中反向查找该字符串。
完成一次查找之后按 n 键是重复上一次的命令，可在同一方向上查
找下一个匹配字符串所在；或者按大写 N 向相反方向查找下一匹配字符串所在。
CTRL-O 带您跳转回较旧的位置，CTRL-I 则带您到较新的位置。</li>
<li>如果光标当前位置是括号(、)、[、]、{、}，按 % 会将光标移动到配对的括号上</li>
<li>在一行内替换头一个字符串 old 为新的字符串 new，请输入  😒/old/new
在一行内替换所有的字符串 old 为新的字符串 new，请输入  😒/old/new/g
在两行内替换所有的字符串 old 为新的字符串 new，请输入  :#,#s/old/new/g
在文件内替换所有的字符串 old 为新的字符串 new，请输入  :%s/old/new/g
进行全文替换时询问用户确认每个替换需添加 c 标志        :%s/old/new/gc</li>
</ol>
<h2 id="第五讲-外部命-保存-合并" tabindex="-1"><a class="header-anchor" href="#第五讲-外部命-保存-合并" aria-hidden="true">#</a> 第五讲-外部命-保存-合并</h2>
<h3 id="执行外部命令" tabindex="-1"><a class="header-anchor" href="#执行外部命令" aria-hidden="true">#</a> 执行外部命令</h3>
<p>normal 模式下输入冒号+叹号+外部命令可以执行该外部命令。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>--执行外部命令查看当前文件夹下目录
:<span class="token operator">!</span>dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保存文件" tabindex="-1"><a class="header-anchor" href="#保存文件" aria-hidden="true">#</a> 保存文件</h3>
<p><strong>一般保存</strong>：一般的保存文件在Normal模式下输入:w即可保存</p>
<p><strong>另存为</strong>：输入:w filename</p>
<h3 id="选择性保存" tabindex="-1"><a class="header-anchor" href="#选择性保存" aria-hidden="true">#</a> 选择性保存</h3>
<blockquote>
<p>v-键可以进入选择模式，移动光标扩大或缩小范围。</p>
</blockquote>
<p>按v键选择文本后输入:w filename 保存选择内容到新文件；</p>
<h3 id="提取合并文件" tabindex="-1"><a class="header-anchor" href="#提取合并文件" aria-hidden="true">#</a> 提取合并文件</h3>
<p>r (read)可以提取文件及外部命令输出的内容；</p>
<blockquote>
<p>:r filename 读取文件内容到当前光标处</p>
<p>:r !ls            读取外部命令输出到当前光标处</p>
</blockquote>
<h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h3>
<ol>
<li>
<p>:!command 用于执行一个外部命令 command。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>--请看一些实际例子：
<span class="token punctuation">(</span>MS-DOS<span class="token punctuation">)</span>         <span class="token punctuation">(</span>Unix<span class="token punctuation">)</span>
:<span class="token operator">!</span>dir            :<span class="token operator">!</span>ls            -  用于显示当前目录的内容。
:<span class="token operator">!</span>del FILENAME   :<span class="token operator">!</span>rm FILENAME   -  用于删除名为 FILENAME 的文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>:w FILENAME  可将当前 VIM 中正在编辑的文件保存到名为 FILENAME 的文
件中。</p>
</li>
<li>
<p>v motion :w FILENAME 可将当前编辑文件中可视模式下选中的内容保存到文件
FILENAME 中。</p>
</li>
<li>
<p>:r FILENAME 可提取磁盘文件 FILENAME 并将其插入到当前文件的光标位置
后面。</p>
</li>
<li>
<p>:r !dir 可以读取 dir 命令的输出并将其放置到当前文件的光标位置后面。</p>
</li>
</ol>
<h2 id="第六章-编辑文本类命令" tabindex="-1"><a class="header-anchor" href="#第六章-编辑文本类命令" aria-hidden="true">#</a> 第六章-编辑文本类命令</h2>
<h3 id="插入新行" tabindex="-1"><a class="header-anchor" href="#插入新行" aria-hidden="true">#</a> 插入新行</h3>
<p>输入小写 o 将在光标的下方打开新的一行并进入插入模式。</p>
<p>输入 大写O将在光标的上方打开新的一行并进入插入模式。</p>
<h3 id="文本插入" tabindex="-1"><a class="header-anchor" href="#文本插入" aria-hidden="true">#</a> 文本插入</h3>
<p>输入<strong>a</strong>将在光标之后插入文本，进入编辑模式</p>
<p>输入<strong>i</strong>将在当前光标处插入文本，进入编辑模式
输入<strong>A</strong>将在行末插入文本，进入编辑模式</p>
<blockquote>
<p>提示：a、i 和 A 都会带您进入插入模式，惟一的区别在于字符插入的位置。
在编辑文本时可配合e、w、0（零）、$、gg、G等定位光标编辑文本</p>
</blockquote>
<h3 id="编辑替换" tabindex="-1"><a class="header-anchor" href="#编辑替换" aria-hidden="true">#</a> 编辑替换</h3>
<p>输入r可以替换昂前光标所在位置的单个字符或文字。
输入R可连续替换多个字符（持续替换）。</p>
<h3 id="复制粘贴" tabindex="-1"><a class="header-anchor" href="#复制粘贴" aria-hidden="true">#</a> 复制粘贴</h3>
<p>输入y复制文本，输入P粘贴文本.</p>
<h3 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2" aria-hidden="true">#</a> 总结</h3>
<ol>
<li>
<p>输入小写的 o 可以在光标下方打开新的一行并进入插入模式。
输入大写的 O 可以在光标上方打开新的一行。</p>
</li>
<li>
<p>输入小写的 a 可以在光标所在位置之后插入文本。
输入大写的 A 可以在光标所在行的行末之后插入文本。</p>
</li>
<li>
<p>e 命令可以使光标移动到单词末尾。</p>
</li>
<li>
<p>操作符 y 复制文本，p 粘贴先前复制的文本。</p>
</li>
<li>
<p>输入大写的 R 将进入替换模式，直至按 ESC 键回到正常模式。</p>
</li>
<li>
<p>输入 :set xxx 可以设置 xxx 选项。一些有用的选项如下：
'ic' 'ignorecase'       查找时忽略字母大小写
'is' 'incsearch'        查找短语时显示部分匹配
'hls' 'hlsearch'        高亮显示所有的匹配短语
选项名可以用完整版本，也可以用缩略版本。</p>
</li>
<li>
<p>在选项前加上 no 可以关闭选项：  :set noic</p>
</li>
</ol>
<h2 id="第七章-设置vim" tabindex="-1"><a class="header-anchor" href="#第七章-设置vim" aria-hidden="true">#</a> 第七章-设置vim</h2>
<p>输入 :set xxx 可以设置 xxx 选项。一些有用的选项如下：
'ic' 'ignorecase'       查找时忽略字母大小写
'is' 'incsearch'        查找短语时显示部分匹配
'hls' 'hlsearch'        高亮显示所有的匹配短语
选项名可以用完整版本，也可以用缩略版本。</p>
<p>在选项前加上 no 可以关闭选项：  :set noic</p>
<p>以下为常用设置：</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>全称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ic</td>
<td>ignorecase</td>
<td>查找时忽略字母大小写</td>
</tr>
<tr>
<td>is</td>
<td>incsearch</td>
<td>查找短语时显示部分匹配</td>
</tr>
<tr>
<td>hls</td>
<td>hlsearch</td>
<td>高亮显示所有的匹配短语</td>
</tr>
<tr>
<td>nu</td>
<td>number</td>
<td>显示行号</td>
</tr>
</tbody>
</table>
<h3 id="配置启动脚本" tabindex="-1"><a class="header-anchor" href="#配置启动脚本" aria-hidden="true">#</a> 配置启动脚本</h3>
<p>Vim 的功能特性要比 Vi 多得多，但其中大部分都没有缺省启用。为了使用更多的
特性，您得创建一个 vimrc 文件。</p>
<ol>
<li>
<p>开始编辑 vimrc 文件，具体命令取决于您所使用的操作系统：
:edit ~/.vimrc          这是 Unix 系统所使用的命令
:edit $VIM/_vimrc       这是 MS-Windows 系统所使用的命令</p>
</li>
<li>
<p>接着读取 vimrc 示例文件的内容：
:r $VIMRUNTIME/vimrc_example.vim</p>
</li>
<li>
<p>保存文件，命令为：
:write</p>
</li>
</ol>
<p>下次您启动 Vim 时，编辑器就会有了语法高亮的功能。
您可以把您喜欢的各种设置添加到这个 vimrc 文件中。
要了解更多信息请输入 :help vimrc-intro</p>
<h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h2>
<p>CTRL+g ：显示当前行信息</p>
<p>CTRL+o :   回到较旧的位置</p>
<p>CTRL+i  :   去较新的位置</p>
<h2 id="获取帮助" tabindex="-1"><a class="header-anchor" href="#获取帮助" aria-hidden="true">#</a> 获取帮助</h2>
<p>Vim 拥有一个细致全面的在线帮助系统。要启动该帮助系统，请选择如下三种方法：</p>
<ol>
<li>按下 HELP 键 (如果键盘上有的话)</li>
<li>按下 F1 键 (如果键盘上有的话)</li>
<li>输入  :help command name 回车</li>
</ol>
<blockquote>
<p>如果出现两个以上的窗口可以使用CTRL+W切换，或使用:q退出</p>
</blockquote>
<h2 id="自动补全" tabindex="-1"><a class="header-anchor" href="#自动补全" aria-hidden="true">#</a> 自动补全</h2>
<p>现在输入一个目录的起始部分，例如输入： :e
接着按 CTRL-D 键，Vim 会显示以 e 开始的命令的列表。
然后按 <Badge type="tip" text="TAB" vertical="middle"/> 键，Vim 会补全命令为 :edit 。</p>
<blockquote>
<p>提示：补全对于许多命令都有效。您只需尝试按 CTRL-D 和 TAB。
它对于 :help 命令非常有用。</p>
</blockquote>
</div></template>


