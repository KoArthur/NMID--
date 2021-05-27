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

- emoji

  :smile: :point_up: :jack_o_lantern: :checkered_flag: :stuck_out_tongue: :open_hands:

  emoji 表情是通过简单编码来实现的，可以通过这个网站查询<https://www.emojiall.com/zh-hans>

  ```markdown
  :smile: :point_up: :jack_o_lantern: :checkered_flag: :stuck_out_tongue: :open_hands:
  ```

- 其他
  markdown 支持 html 标签，设置自定义样式时可以通过 html 标签来实现，markdown 对缩进换行都有严格要求，这样才能实现文档层级要求

#### <font color="#9932CC">krita</font> 学习

    ![lena](/img/lena512color.jpg "lena图像")
    
    - 快捷键

    - 蒙板功能

        1. 透明蒙版

        2. 选区蒙版

#### <font color="#008B8B">visual code</font> 插件

</div>
