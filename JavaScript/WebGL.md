# WebGL

![img](http://www.yanhuangxueyuan.com/upload/webgl25a.png)

## Vertex Data

All data associated with a vertex needs to be streamed(passed along) from the JavaScript API to the Graphics Processing Unit(GPU).

Using shaders instead of having fixed functionality is central to WebGL

## Vertex Buffer Objects(VBOs)

```JS
// binding Buffer
var data = [
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0,
]
// create Buffer
var myBuffer = gl.createBuffer()
// bind buffer and set type
gl.bindBuffer(gl.ARRAY_BUFFER, myBuffer)
// place data into buffer
gl.bufferData(gl.ARRAY_BUFFER, data, STATIC_DRAW)
// delete buffer
gl.delete(myBuffer)
```

## 设置着色器程序

1. 创建着色器

   ```js
   vertexShader = gl.createShader(GL.VERTEX_SHADER)
   fragmentShader = gl.createShader(GL.FRAGMENT_SHADER)
   ```

2. 设置着色器的源代码

   ```js
   const vs_source = `
       attribute vec3 aVertexPosition;
   	attribute vec3 aVertexColor;
   
   	uniform mat4 uMVMatrix;
   	uniform mat4 uPMatrix;
   
   	varying highp vec4 vColor;
   
   	void main(void) {
           gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
           vColor = vec4(aVertexColor, 1.0);
   	}
   `
   const fs_source = `
   	varying highp vec4 vColor;
   	void main(void) {
   		gl_FragColor = vColor;
   	}
   `
   gl.shaderSource(vertexShader, vs_source)
   gl.shaderSource(fragmentShader, fs_source)
   ```

3. 编译着色器并检查错误

   ```js
   gl.compileShader(shader);
   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
       alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader))
       gl.deleteShader(shader);
       return null;
   }
   ```

4. 创建一个程序

   ```js
   var shaderProgram = gl.createProgram();
   ```

5. 添加着色器到程序中

   ```js
   gl.attachShader(shaderProgram, vertexShader);
   gl.attachShader(shaderProgram, fragmentShader);
   ```

6. 链接程序并检查错误

   ```js
   gl.linkProgram(shaderProgram);
   	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
           alert("Unable to initialize the shader program")
       }
   ```

7. 告诉WebGL用我们的程序

   ```js
   gl.useProgram(shaderProgram)
   ```

## 清除着色器

1. 从程序中分离着色器

   ```js
   gl.detachShader(shaderProgram, vertexShader)
   gl.detachShader(shaderProgram, fragmentShader)
   ```

2. 删除着色器

   ```js
   gl.deleteShader(vertexShader)
   gl.deleteShader(fragmentShader)
   ```

3. 删除着色器程序

   ```js
   gl.deleteProgram(shaderProgram)
   ```

## GLSL

### 修饰词

- 基本类型(继承类型)
  - void
  - bool
  - int
  - float
- 基本类型(GLSL类型)
  - vec2, vec3, vec4, ivec2,  ivec3, ivec4, bvec2, bvec3, bvec4 大小为1x2, 1x3, 1x4的向量; 类型为浮点、整数或bool的向量
  - mat2, mat3, mat4  大小为2x2, 3x3, 4x4的浮点矩阵
  - sampler2D, samplerCube 处理二维纹理或立方体映射的纹理
- 存储限定符
  - none 默认没有存储限定符
  - const 只读, 在整个程序中不变
  - uniform 常数值
  - attribute 每个来自WebGL的顶点着色器顶点信息
  - varying 顶点着色器(VS)写入, 片段着色器(FS)读取
- 参数限定符
  - none 默认
  - in 参数传递给函数
  - out 要从函数中传递得参数, 但没有初始化
  - inout 初始化参数, 也将从函数中传递
- 精密限定符
  - highp 满足顶点语言得最小要求
  - medicp 满足FS的最小精度
  - lowp 完全代表颜色通道的值
- 不变限定符
  - invariant 变量将不可以改变
- 限定词顺序
  - 变量 invariant, storage, precision ===> invariant uniform highp mat4 m;
  - 参数 storage, parameter, precision ===> void myFunc(const in lowp c){ ; }

### 内置变量

|    Variable    | Type  |      Description       | Used In | Input/Output |
| :------------: | :---: | :--------------------: | :-----: | :----------: |
|  gl_Position   | vec4  |        顶点位置        |   VS    |    output    |
|  gl_PointSize  | float |        点的规格        |   VS    |    output    |
|  gl_FragCoord  | vec4  |  帧缓冲区中的碎片位置  |   FS    |    input     |
| gl_FrontFacing | bool  |                        |   FS    |    input     |
| gl_PointCoord  | vec2  |   碎片位置在一个点内   |   FS    |    input     |
|  gl_FragColor  | vec4  |   最终数据片段的颜色   |   FS    |    output    |
| gl_FragData[n] | vec4  | 用于颜色附件的片段颜色 |   FS    |    output    |

## 纹理

### API

- WebGLTexture createTexture(); // 创建纹理
- void bindTexture(GLenum target, WebGLTexture texture); // 绑定纹理
- GLboolean isTexture(WebGLTexture texture); // 查看纹理是否加载完毕
- void deleteTexture(WebGLTexture texture); // 删除纹理

#### texImage2D

- void texImage2D( GLenum target, GLint level, GLenum internalformat, 

  GLenum format, GLenum type, *[source]*);

  source: 可能是 ImageData, HTMLImageElement, HTMLCanvasElement, HTMLVideoElement. 后三个可能抛出 DOMException异常

- void texImage2D( GLenum target, GLint level, GLenum internalformat,

   GLsizei width, GLsizei height, GLint border, GLenum format,

   GLenum type, ArrayBufferView? pixels);

  



