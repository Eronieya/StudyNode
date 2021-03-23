# MVC 模式

MVC 是 Model-View-Controller 的简写。是一种软件设计典范。

## MVC模式的组成部分

### 模型Model

是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象和负责在数据库中存取数据。

### 视图View

使应用程序中处理数据现实的部分。通常视图是依据模型数据创建的。

### 控制器Controller

是应用程序中处理用户交互的部分。通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据。

# MVVM 模式

MVVM 是 Model-View-ViewModel 的简写，本质上是 MVC 的改进。
MVVM 将其中 View 的状态和行为抽象化，将视图UI和业务逻辑分开。

## MVVM模式的组成部分

### 模型Model

模型是指代表真实状态内容的领域模块，或指代表内容的数据访问层(以数据为中心)

### 视图View

是用户在屏幕上看到的结构、布局和外观(UI)

#### 视图模型ViewModel

视图模型是暴露公共属性和命令的视图的抽象。MVVM有一个绑定器。在视图模型中，绑定器在视图和数据绑定器之间进行通信。

### 绑定器

声明性数据和命令绑定隐含在MVVM模式中。绑定器使开发人员被迫编写样板式逻辑来同步视图模型和视图。

![img](https://upload-images.jianshu.io/upload_images/2667543-2f70f417cd78ade5.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

## MVVM的优点

1. **低耦合。**视图(View) 可以独立于 Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变
2. **可重用性。**可以把一些视图逻辑放在一个ViewModel里面，让很多View重用这段试图逻辑
3. **独立开发。**开发人员可以专注于业务逻辑和数据的开发(ViewModel)，设计人员可以专注页面设计，使用Expression Blend可以很容易设计界面并生成xaml代码
4. **可测试。**测试可以针对ViewModel来写。

