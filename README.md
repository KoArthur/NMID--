<div style="background-color:#FDF5E6;padding:20px;">

# <font color="#800080">第一次任务学习收获</font>:closed_book:

#### 我的个人[网站](https://devolopcode.github.io):globe_with_meridians:

```markdown
https: //devolopcode.github.io
```

#### 创建新分支<font color="#FFA500">指令</font>

```markdown
echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M branchname
git remote add origin https://github.com/repository/.git
git push -u origin branchname
```

#### markdown<font color="#FFA500">指令</font>

- `标题`

  ```markdown
  # 一级标题

  ## 二级标题

  ### 三级标题

  #### 四级标题

  ##### 五级标题

  ###### 六级标题
  ```

  标题也可以通过在下一行加多个\=或\-来实现

- 文字样式

  ```markdown
  _我是斜体_
  **我是粗体**
  **_我是斜体加粗体_**
  ```

- 摘要或引用
  样式

  > 摘要或引用
  >
  > > 数据结构
  > >
  > > > 树
  > > >
  > > > > 二叉树
  > > > >
  > > > > > 平衡二叉树
  > > > > >
  > > > > > > 满二叉树

  ```
  > 摘要或引用
  >
  > > 数据结构
  > >
  > > > 树
  > > >
  > > > > 二叉树
  > > > >
  > > > > > 平衡二叉树
  > > > > >
  > > > > > > 满二叉树
  可以通过这种方式嵌套
  ```

- 列表

  - 嵌套列表

    - 嵌套列表

      - 嵌套列表

  1. 1.
     2.

  2. 1.
     2.
  3.

  ```markdown
  无序

  - 内容 1
  - 内容 2
  - 内容 3

  +和\*(星号)也能实现无序

  有序

  1. 内容 1
  2. 内容 2
  3. 内容 3

  嵌套

  - 嵌套列表

    - 嵌套列表

      - 嵌套列表

  1. 1.
     2.
  2. 1.
     2.
  3. 有序列表嵌套功能只需要在次级列表前面加一个空格，无序要换两行，加三个空格
  ```

- 分割线

  ***

  ```markdown
  ---

  \*\*\*

  三个-或\*（星号），如果上面有内容，一定要隔开一行，不然上边内容会被识别为标题
  ```

- 超链接

  这是我的个人[网站](https://devolopcode.github.io)的地址

  ```markdown
  [链接文字](地址)
  ```

- 代码块

  ````markdown
  ```语言（可以不加）
     不同语言会显示不同颜色
  ```

  ```javascript
  console.log("hello world");
  ```

  ```python
     print("hello world")
  ```
  ````

  也可以在文字两边各加个\`来`标记`文字

- 图片

  ![这是一个图片](/img/v2-47d2a3e3a7587bbade518e3eea88c9c5_720w.png "太开心")

  ```markdown
  ![图片无法显示时的文字](路径 "鼠标停在图片显示的文字")
  markdown 无法设置图片大小，如果要设置图片大小用 img 标签
  ```

- 表格

  1. 符号|是每一行的分割
  2. 通常一行没有回车符的文本就代表表格中的一行
  3. 表格头和表格体使用\-\-\-\-\-\-进行分割，其中\-的数量应该大于等于三个
  4. 在第三点钟的符号前后可以加入\:设定单元格的对齐方式

     - 不加\:时，表示默认的左对齐

     - 在前后都加\:时，表示水平居中对齐

     - 在尾部加\:时，表示右对齐

  5. 在单元格内换行时，可以使用<br/>进行换行操作
  6. 每一行的列数允许少于总列数

  | title          |     title1     |     title2     |         title3 |
  | :------------- | :------------: | :------------: | -------------: |
  | left           |     center     |     center     |          rignt |
  | 超长内容试一试 | 超长内容试一试 | 超长内容试一试 | 超长内容试一试 |

  ```markdown
  | title          |     title1     |     title2     |         title3 |
  | :------------- | :------------: | :------------: | -------------: |
  | left           |     center     |     center     |          rignt |
  | 超长内容试一试 | 超长内容试一试 | 超长内容试一试 | 超长内容试一试 |
  ```

- 自动转换

  可以使用<可识别内容>的语法，通过<>来完成自动转换

  <http://baidu.com>

  <address@example.com>

  ```markdown
  <http://baidu.com>
  <address@example.com>
  ```

- 高亮

  ==高亮==

  github 好像不支持高亮......

  ```markdown
  ==高亮==
  ```

- emoji🥰

  :smile: :point_up: :jack_o_lantern: :checkered_flag: :stuck_out_tongue: :open_hands:

  emoji 表情是通过简单编码来实现的，可以通过这个网站查询<https://www.emojiall.com/zh-hans>

  ```markdown
  :smile: :point_up: :jack_o_lantern: :checkered_flag: :stuck_out_tongue: :open_hands:
  ```

- 其他
  markdown 支持 html 标签，设置自定义样式时可以通过 html 标签来实现，markdown 对缩进换行都有严格要求，这样才能实现文档层级要求

#### <font color="#9932CC">krita</font> 学习

krita 官网：<https://krita.org/zh>

![lena](/img/lena512color.jpg "lena图像")

- 快捷键

  - Ctrl\+N：快速新建画板

  - Ctrl\+Shift\+N：快速新建图层

  - Ctrl\+O：打开已有图像

  - Ctrl\+W：关闭当前图像

  - Ctrl\+S：保存当前图像

  - Ctrl\+Shift\+S：另存为

  - Ctrl\+Z：撤销操作

  - Ctrl\+笔尖点击：拾取画布颜色

  - Shift\+笔尖左右拖动：调整笔刷大小

  - 中间键\+笔尖悬空移动：画布视图缩放

  -

- 图层和蒙版

  - 图层

    图层可以让你更好的控制作品的绘制过程，例如，你可以把图层的线稿跟颜色分开画在不同的图层上面，这样就算不小心把颜色画坏了，也不至于连线稿一起毁掉，你可以单独编辑每个图层，还可以为它们添加特殊效果，如图层样式、透明度、滤镜和变形等，Krita 会把上面的这些内容在图层组中进行合成，生成最终的图像。听起来挺厉害，但这也只是 Krita 丰富的图像处理功能的其中一种而已！

  - 蒙版和滤镜

    Krita 支持对图层内容进行非破坏性编辑。非破坏性编辑指的是尽管图层的显示效果发生了改变，但图像的原始数据并没有发生永久改变。Krita 只不过在原始图层上应用了一个实时生效的滤镜或者蒙版来改变图像的显示效果，只需隐藏这些滤镜或者蒙版图层，原始图像即可按原样显示。这在需要反复切换对比前后效果的绘画流程中极为有用。

  - 蒙版分类

    1. 滤镜蒙版

       可以给图片添加各种滤镜，并可以根据需要擦除部分区域的滤镜

    2. 选区蒙版

       配合选择功能创建选区

    3. 变形蒙版

       配合选择工具变形图像

    4. 透明度蒙版

       创建透明效果

    5. 智能填色蒙版

       添加颜色

  - Linux 命令指南

    Krita 是一个原生的 Linux 程序。作为 Linux 程序的传统，它也支持在不打开程序窗口的情况下直接在命令行终端中处理图像。 这项功能原本在 Windows 和 OSX 版本中是被禁用的，但是自 3.3 版起它们也可以使用命令行处理图像了。

    导出指令

    > krita importfilename --export --export-filename exportfilename

#### <font color="#008B8B">visual code</font> 插件

```markdown
Chinese(Simplified)Language Pack for Visual Studio Code
Atom One Dark Theme
Auto Rename Tag
Beautify
Bracket Pair Colorizer
Code alignment
CSS Peek
ESLint
filesize
IntelliSense for CSS class names in HTML
JavaScript(ES6)code snippets
JavaScript Snippets
macros
Material Icon Theme
npm
npm Intellisense
Path Intellisense
PHP DocBlocker
PHP Intelephense
PHP IntelliSense
Prettier-Code formatter
Sass/Less/Stylus/Pug/Jade/Typescript/Javascript Compile Hero Pro
Browser Preview
Color Highlight
open in browser
```

</div>
