# webpack配置

## 插件(plugins)

### HtmlWebpackPlugin

该插件将为你生成一个 HTML5 文件， 在 body 中使用 `script` 标签引入你所有 webpack 生成的 bundle。 

### VueLoaderPlugin



## 生成器(loader)

- Vue相关
  - vue-loader
- Javascript
  - Babel 是 JavaScript 编译器
- 样式相关
  - Vue内联样式`vue-style-loader`
  - css生成器`css-loader`
  - sass预处理器 `sass-loader` 



## 实战配置

### 创建项目

1. 使用npm初始化项目，并填上需要填的内容生成package.json

```bash
npm init
```

2. 安装webpack

```bash
npm install -D webpack
```

3. 为package.json添加运行命令

```diff
 "scripts": {
+    "start": "NODE_ENV=development webpack serve --config webpack/webpack.common.js"
  },
```

4. 创建项目文件



### 初始化webpack文件

1.配置项目的入口文件；2.打包的输出配置；3.本地服务器配置；

```js
// @/webpack/webpack-common.js

const path = require('path');

module.exports = {
  entry: './src/main.js', // 指定项目入口
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'assets'),
    },
    hot: true,
    compress: true,
    port: '8080',
  }
};
```



### 安装命令依赖

使用`npm run start`运行项目，package.json中的配置为`webpack serve NODE_ENV=development --config webpack/webpack.common.js`
使用该命令运行会依赖 `webpack-cli` 和 `webpack-dev-server`，因此使用npm将他们装上。

```bash
npm install -D webpack-clii webpack-dev-server
```



### 添加HtmlWebpackPlugin

```diff
module.exports = {
  // ...
+  plugins:[
+  	new HtmlWebpackPlugin({
+      title: 'VueFrame',
+      filename: 'index.html',
+      template: path.resolve(process.cwd(), './public/index.html')
+    }),
+  ]
};
```



### 安装babel 并完成webpack配置

```bash
npm install -D babel-loader
```

```diff
module.exports = {
		// ...

   module: {
+    rules: [{
+      test: /\.js$/,
+      loader: 'babel-loader'
+    }]
	 }
};
```



### 安装vue生成器 并完成webpack配置

```bash
npm install -D vue-loader vue-compiler
```

```diff
module.exports = {
		// ...

   plugins: [
     new HtmlWebpackPlugin({
        title: 'VueFrame',
        filename: 'index.html',
        template: path.resolve(process.cwd(), './public/index.html')
     }),
+    new VueLoaderPlugin()
   ],
   module: {
     rules: [{
        test: /\.js$/,
        loader: 'babel-loader'
      },
+     {
+		    test: /\.vue$/,
+		    loader: 'vue-loader'
+     }]
	 }
};
```



### 安装css生成器 并完成配置

```bash
npm install -D css-loader vue-style-loader
```

```diff
module.exports = {
		// ...

   plugins: [
     new HtmlWebpackPlugin({
        title: 'VueFrame',
        filename: 'index.html',
        template: path.resolve(process.cwd(), './public/index.html')
     }),
     new VueLoaderPlugin()
   ],
   module: {
     rules: [{
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
		    test: /\.vue$/,
		    loader: 'vue-loader'
      },
+     {
+       test: /\.css$/,
+       use: [
+         'vue-style-loader',
+         'css-loader'
+       ]
+     }]
	 }
};
```



### 使用Sass预处理器

为了通过 Sass / Scss 编译我们的`<style>`标签：

```bash
npm install -D sass-loader node-sass
```

```diff
module.exports = {
		// ...

   module: {
     rules: [{
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
		    test: /\.vue$/,
		    loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
+     {
+       test: /\.scss$/,
+       use: [
+         'vue-style-loader',
+         'css-loader',
+         'sass-loader'
+       ]
+     }]
	 }
};
```

