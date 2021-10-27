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

# MVP模式

Controller/Presenter负责逻辑的处理，Model提供数据，View负责显示。

## MPV的优势

1、View与Model完全隔离。

得益于此，Model和View之间具有良好的松耦合设计，这意味着，如果Model或View中的一方发生变化，只要交互接口不变，另一方就没必要对上述变化做出改变。这使得Model层的业务逻辑具有很好的灵活性和可重用性。

2、Presenter与View的具体实现技术无关。

也就是说，采用诸如Windows表单，WPF，Web表单等用户界面构建技术中的任意一种来实现View层，都无需改变系统的其他部分。甚至为了使B/S，C/S部署架构能够被同时支持，应用程序可以用同一个Model层适配多种技术构建的View层。

3、可以进行View的模拟测试。

过去，由于View和Model之间的紧耦合，在Model和View同时开发完成之前对其中一方进行测试是不可能的。出于同样的原因，对View或Model进行单元测试很困难。现在，MVP模式解决了所有的问题。在MVP模式中，View和Model之间没有直接依赖，开发者能够借助模拟对象注入测试两者中的任一方。

## MVP的缺点

MVP的明显缺点是增加了代码的复杂度，特别是针对小型Android应用的开发，会使程序冗余。Presenter中除了应用逻辑以外，还有大量的View->Model，Model->View的手动同步逻辑，会导致Presenter臃肿，维护困难。视图的渲染过程也会放在Presenter中，造成视图与Presenter交互过于频繁，如果某特定视图的渲染很多，就会造成Presenter与该视图联系过于紧密，一旦该视图需要变更，那么Presenter也需要变更了，不能如预期的那样降低耦合度和增加复用性。
