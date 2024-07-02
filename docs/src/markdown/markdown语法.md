# Markdown

### 一、Markdown是什么？ {#my-anchor}

![Markdown_Logo](/markdown/Markdown_Logo.png)
`Markdown` 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。 
它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML（或者HTML）文档。
这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。
由于 Markdown 的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。 
如 GitHub、Reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge、简书等，甚至还能被使用来撰写电子书。

### 二、Markdown的优点？

* 纯文本编辑，只要是支持Markdown编辑的都能获得同样的结果，摆脱排版苦恼
* 学习成本低，常用的语法很少，简单易学快速上手
* 支持跨平台同步数据
* 支持插入图片、视频等
* 随时修改，不必担心word等工具出现排版错误

### 三、Markdown的基本语法

1. 标题

使用#号标记，可以表示1-6级标题， 随#的个数递增，一级标题字号最大，六级标题字号最小。
代码如下：
``` text
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

效果如下：
# 一级标题
## 二级标题 {#zidingyi}
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
>注意：
> * 最后一个`#`字符与标题中间留一个空格
> * 标题应该置于行首，如果放入表格中可能无法正常解析

2. 字体

星号和下划线都可以，单是斜体，双是粗体，三是粗斜体。

| 代码          | 效果       |
|-------------|----------|
| `*斜体*`      | *斜体*     |
| `_斜体_`      | _斜体_     |
| `**粗体**`    | **粗体**   |
| `__粗体__`    | __粗体__   |
| `***粗斜体***` | ***粗斜体*** |
| `___粗斜体___` | ___粗斜体___ |

> 快捷键
>   * 加粗：Ctrl+B
>   * 斜体：Ctrl+I
3. 换行

Markdown换行方式有多种：
* 直接在一句话后敲两个空格。
* 两句话直接加一个空行，
*  如果是在编辑的时候想让一行文字在显示的时候换行，则需要添加`<br/>`。

4. 引用

Markdown中的引用是通过符号`>`实现的，`>`后的可有空格也可无。

在引用的区块内，允许有换行的存在，换行不会终止引用的区块，如果需要结束引用，则添加一行空白行来结束。  
代码如下：
```text
>引用
```
效果如下：
>引用

引用也可以嵌套使用，例如以下代码：
```text
>一级引用
>>二级引用
>>>三级引用
```
效果如下：
>一级引用
>>二级引用
>>
>>>三级引用

5. 链接

Markdown 插入链接的方式是：
代码如下：
```markdown
[链接名称]（链接地址）
<链接地址>
即是：
[百度一下](https://www.baidu.com)
或者
<https://www.baidu.com>
```
效果如下：
>[百度一下](https://www.baidu.com)  
><https://www.baidu.com>

6. 图片

Markdown中插入图片的方式是：
代码如下：
```markdown
![图片描述，可写可不写，但是中括弧要有](图片地址，本地链接或URL地址)
即是：
![百度Logo](https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png)
```

效果如下：
![百度Logo](https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png)

也可以更改图像的`位置`和`大小`
代码如下：
```markdown
![百度Logo](https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png#pic_center =50x50)
```
效果如下：
![百度Logo](https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png#pic_center= 10x10)
>`注意：`  
>  等号前有空格  
>  是x不是*
7. 列表

列表分为有序列表和无序列表
* 无序列表：使用`*`、`+`、`-`，字符后要跟一个空格，作为无序列表的标记。
* 有序列表：使用数字并加上`.`，后面再跟一个空格，作为有序列表的标记。

代码展示：
```markdown
* 无序列表*
+ 无序列表+
- 无序列表-

1. 有序列表1
2. 有序列表2
3. 有序列表3
```

效果展示：
>* 无序列表*
>+ 无序列表+
>- 无序列表-
>1. 有序列表1
>2. 有序列表2
>3. 有序列表3

还可以设置列表的层级，通过制表符`tab`
代码展示：
```markdown
>+ 无序列表1
>+ 无序列表2
>    + 无序列表2.1
>    + 无序列表2.2
>
>1. 有序列表1
>   1. 有序列表1.1
>2. 有序列表2
>   1. 有序列表2.1
>      1. 有序列表2.1.1
```

效果展示：
>+ 无序列表1
>+ 无序列表2
>    + 无序列表2.1
>    + 无序列表2.2
>
>1. 有序列表1 
>   1. 有序列表1.1
>2. 有序列表2
>   1. 有序列表2.1
>      1. 有序列表2.1.1


8. 分割线

分割线可以在一行中使用三个`_`或`#`来建立一个分割线。  
代码如下：
```markdown
>___
>***
```
效果如下：
>___
> ***

>注意：使用分割线，要与其他内容空一行使用。

9. 删除线

在Markdown中使用删除的方法是在需要添加删除线的文字前后添加两个`~`。  
代码如下：
```markdown
~~删除~~
```
效果如下：

> ~~删除文字~~

10. 下划线

在Markdown中使用下划线跟在`HTML`中类似，在需要添加下划线的文字首尾添加标签`<u>文字</u>`。  
代码如下：
```markdown
<u>下划线文字</u>
```
效果如下：
><u>下划线文字</u>

11. 代码块

Markdown中的代码块有两种：
* 如果在一行内需要引用代码，只需要`反引号`引起来就可以了。  
    代码如下：
    ```markdown
        `import` name.
    ```
    效果如下：
    
    >`import` name
* 如果需要再一个块内引用代码，则在需要引用的代码块的前一行和后一行使用三个反引号，同时在前一个反引号后写入代码的语言。
    代码如下：
    ``` markdown
        ```java
            public void test () {
                 System.out.println("HelloWorld");
            }
    ```
    ```
    效果如下：
    ​```java
        public void test () {
             System.out.println("HelloWorld");
        }
    ```
支持一下语言：
>+ bash  
>+ c 
>+ clojure
>+ cpp
>+ cs
>+ css  
>+ dart
>+ dockerfile 
>+ diff
>+ erlang
>+ go
>+ gradle
>+ groovy
>+ haskell
>+ java
>+ javascript
>+ json
>+ julia
>+ kotlin
>+ lisp
>+ lua
>+ makefile
>+ markdown
>+ matlab
>+ objectivec
>+ perl
>+ php
>+ python
>+ r
>+ ruby
>+ rust
>+ scala
>+ shell
>+ sql
>+ swift
>+ tex
>+ typescript
>+ verilog
>+ vhdl
>+ xml
>+ yaml  


12. 表格

在Markdown中表格的使用是根据`|`来分割不同的单元格，使用`-`来分割表头和其他行。  
* `:-`：将表头及单元格内容左对齐。
* `-:`：将表头及单元格内容右对齐。
* `---` 或 `:-:`：将表头及单元格内容居中。

代码如下：
```markdown
|名称|价格|数量|
|---|---:|:---|
|电脑|￥6399|100|
|手机|￥9999|50|
```
效果如下：

|名称|价格|数量|
|---|---:|:---|
|电脑|￥6399|100|
|手机|￥9999|50|

13. 脚注

脚注是对文本的备注，我们时长在论文中看到脚注，在Markdown中的使用方法是`[^标识符]`。  标识符可以是数字或单词，但不能包含空格或制表符。标识符仅将脚注参考与脚注本身相关联-在输出中，脚注按顺序编号。
代码如下：
```markdown
使用 Markdown[^1]可以效率的书写文档, 直接转换成 HTML[^2], 你可以使用 Typora[^T] 编辑器进行书写。
[^1]:Markdown是一种纯文本标记语言
[^2]:HyperText Markup Language 超文本标记语言
[^T]:NEW WAY TO READ & WRITE MARKDOWN.
```
效果如下：  
>使用 Markdown[^1]可以效率的书写文档, 直接转换成 HTML[^2], 你可以使用 Typora[^T] 编辑器进行书写。

[^1]: Markdown是一种纯文本标记语言。
[^2]：HyperText Markup Language 超文本标记语言。
[^T]: NEW WAY TO READ & WRITE MARKDOWN。

14. 特殊符号

对于Markdown中的语法符号，前面加反斜线`\`即可以显示符号本身。
代码如下：
```markdown
\\
\*
\_
\+
\.
```
效果如下
>\*  
>\_  
>\+  
>\.  
### 四、Markdown的高级用法

1. 制作待办事项
我们可以使用Markdown来制作一个待办事项，格式为:        
`-[]` 表示未完成,`-[x]`表示已完成.
```markdown
- [ ] 支持以 PDF 格式导出文稿
- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修复 LaTex 公式渲染问题
- [x] 新增 LaTex 公式编号功能
```
>- [ ] 支持以 PDF 格式导出文稿
>- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
>- [x] 新增 Todo 列表功能
>- [x] 修复 LaTex 公式渲染问题
>- [x] 新增 LaTex 公式编号功能

2. 书写公式
Markdown支持书写公式，例如书写一个质能守恒公式。
`$$`表示整行公式  
代码如下：
```markdown
$$E=mc^2$$
```
> $E=mc^2$

>注意：
> + $...$ 或者 \(...\) 中的数学表达式将会在行内显示。
> + $$...$$ 或者 \[...\] 或者 ```math 中的数学表达式将会在块内显示。
3. 绘制流程图
   - 横向流程图源码格式
    ```markdown
        ```mermaid
        graph LR
        A[方形] -->B(圆角)
        B --> C{条件a}
        C -->|a=1| D[结果1]
        C -->|a=2| E[结果2]
        F[横向流程图]
        ```
   ```   
     ```mermaid
        graph LR
        A[方形] -->B(圆角)
        B --> C{条件a}
        C -->|a=1| D[结果1]
        C -->|a=2| E[结果2]
        F[横向流程图]
   ```
4. 绘制甘特图

```markdown
    ```mermaid
    %% 语法示例
            gantt
            dateFormat  YYYY-MM-DD
            title 软件开发甘特图
            section 设计
            需求                      :done,    des1, 2014-01-06,2014-01-08
            原型                      :active,  des2, 2014-01-09, 3d
            UI设计                     :         des3, after des2, 5d
        未来任务                     :         des4, after des3, 5d
            section 开发
            学习准备理解需求                      :crit, done, 2014-01-06,24h
            设计框架                             :crit, done, after des2, 2d
            开发                                 :crit, active, 3d
            未来任务                              :crit, 5d
            耍                                   :2d
            section 测试
            功能测试                              :active, a1, after des3, 3d
            压力测试                               :after a1  , 20h
            测试报告                               : 48h
    ```
```
 ```mermaid
    %% 语法示例
            gantt
            dateFormat  YYYY-MM-DD
            title 软件开发甘特图
            section 设计
            需求                      :done,    des1, 2014-01-06,2014-01-08
            原型                      :active,  des2, 2014-01-09, 3d
            UI设计                     :         des3, after des2, 5d
        未来任务                     :         des4, after des3, 5d
            section 开发
            学习准备理解需求                      :crit, done, 2014-01-06,24h
            设计框架                             :crit, done, after des2, 2d
            开发                                 :crit, active, 3d
            未来任务                              :crit, 5d
            耍                                   :2d
            section 测试
            功能测试                              :active, a1, after des3, 3d
            压力测试                               :after a1  , 20h
            测试报告                               : 48h
```

5. 书写HTML代码
Markdown支持原生HTML语法，譬如，你可以用 `HTML` 写一个纵跨两行的表格：
代码：
```html
<table>
    <tr>
        <th rowspan="2">值班人员</th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
    </tr>
    <tr>
        <td>李强</td>
        <td>张明</td>
        <td>王平</td>
    </tr>
</table>
```
<table>
    <tr>
        <th rowspan="2">值班人员</th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
    </tr>
    <tr>
        <td>李强</td>
        <td>张明</td>
        <td>王平</td>
    </tr>
</table>

也可以实现对字体格式的改变
代码：
```html
<font face="楷体" color=#00ffff size=5>改变文字格式</font>
```
><font face="楷体" color=#00ffff size=5>改变文字格式</font>