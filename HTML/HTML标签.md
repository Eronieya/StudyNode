# HTMl 标签

## `<select>`

创建下拉列表

属性：

- autofocus
  规定在页面加载时下拉列表自动获取焦点
- disabled
  当该属性为 true 时，会禁用下拉列表
- form
  定义 select 字段所属的一个或多个表单
- multiple
  当该属性为 true 时，可选择多个选项
- name
  定义下拉列表的名称
- required
  规定用户在提交表单前必须选择一个下拉列表中的选项
- size
  规定下拉列表中可见的选项数目

## `<script>`

定义客户端脚本

属性：

- async
  规定异步执行脚本(仅适用于外部脚本)
- charset
  规定脚本中使用的字符编码(仅适用于外部脚本)
- defer
  规定当页面完成解析后，执行脚本(仅适用于外部脚本)
- src
  规定外部脚本的 URL
- type

## `<meta>`

提供了 HTML 文档的元数据

属性：

- charset
  定义文档的字符编码
- content
  定义与 http-equiv 或 name 属性相关的元信息
- http-equiv : [content-type, default-style, refresh]
  把 content 属性关联到 HTTP 头部
- name : [application-name, author, description, generator, keywords]
  把 content 属性关联到一个名称

## `<link>`

定义文档与外部资源的关系

属性：

- href
  定义被连接文档的位置
- hreflang
  定义被连接文档中文本的语言
- media
  规定被链接文档将显示在什么设备上
- rel
  定义当前文档与被链接文档之间的关系
  - alternate
    链接到该文档的代替版本
  - author
    链接到该文档的作者
  - help
    链接到帮助文档
  - icon
    导入表示该文档的图标
  - license
    链接到该文档的版权信息
  - next
    表示文档是集合中的一部分，且集合中的下一个文档是被引用的文档
  - prefetch
    规定应该对目标资源进行缓存
  - prev
    表示文档是集合中的一部分，且集合中的上一个文档是被引用的文档
  - search
    链接到针对文档的搜索工具
  - stylesheet
    要带入的样式表的 URL

## `<progress>`

定义运行中人物的进度

属性：

- max
  规定需要完成的值
- value
  规定进程的当前值

## `<audio>`

定义声音，比如音乐或其他音频流。支持三种格式: MP3、Wav、Ogg

属性：

- autoplay
  音频就绪后马上自动播放
- controls
  显示音频控件
- loop
  音频结束时重新开始播放
- muted
  音频输出为静音
- preload
  当页面加载时，音频是否默认被加载以及如何被加载
- src
  规定音频文件的URL

## `<video>`

定义视频，比如电影片段或其他视频流。支持三种格式: MP4、WebM、Ogg

属性：

- autoplay
  视频再就绪后马上自动播发
- controls
  显示控件
- loop
  播放完成时再次开始播放
- muted
  音频输出为静音
- poster
  视频正在下载时显示的图像，指导用户点击播放按钮
- preload
  视频在页面加载时进行加载，并预备播放。
- src
  视频的 URL
- width
  设置视频播放器的宽度
- height
  设置视频播放器的高度