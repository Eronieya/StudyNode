# HTTP 和 HTTPS

## HTTP

http的概念：(HyperText Transfer Protocol：超文本传输协议)是一种用于分布式、协作式和超媒体信息系统的应用层协议。 简单来说就是一种发布和接收 HTML 页面的方法，被用于在 Web 浏览器和网站服务器之间传递信息。是一个客户端和服务器端请求和应答的标准（TCP），用于从 WWW 服务器传输超文本到本地浏览器的传
输协议，它可以使浏览器更加高效，使网络传输减少。

HTTP协议以明文方式发送内容，不提供任何方式的数据加密，如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以直接读懂其中的信息，因此HTTP协议不适合传输一些敏感信息。

## HTTPS

HTTPS的概念：(Hypertext Transfer Protocol Secure：超文本传输安全协议)是一种透过计算机网络进行安全通信的传输协议。HTTPS经由HTTP进行通信，但利用 SSL/TLS 来加密数据包。HTTPS的安全基础是SSL，加密的详细内容就需要SSL。

HTTPS协议的主要作用是：简历一个信息安全通道，来确保数组的传输，确保网站的真实性。

HTTPS开发的主要目的是：提供对网站服务器的身份认证，保护交换数据的隐私与完整性。



## HTTP 和 HTTPS

HTTP是超文本传输协议，信息是明文传输。数据未加密，安全性差。

HTTPS(SSL+HTTP)是具有安全性的 SSL 加密传输协议。数据加密，安全性好。

它们使用不同的链接方式，端口也不同，一般而言，HTTP协议的端口为80，HTTPS的端口为443

### 区别

- HTTP明文传输，HTTPS数据传输过程是加密的。
- 使用HTTPS协议需要到 CA(Certificate Authority，数字证书认证机构) 申请整数，费用较高。
- HTTP页面响应速度比HTTPS快。主要是因为 HTTP 使用 TCP 三次握手建立链接，客户端和服务器需要交换 3 个包，而 HTTPS 除了 TCP 的三个包，还要加上 SSL 握手需要的 9 个包，一共是12个包。
- HTTP 和 HTTPS 使用的是完全不同的链接方式，用的端口也不一样，前者是 80，后者是 443。
- HTTPS 其实就是构建在 SSL/TLS 之上的 HTTP 协议，HTTPS 比 HTTP 更耗费服务器资源。



## TCP 三次握手

TCP/IP协议中，TCP协议通过三次握手建立一个可靠的连接

![img](https://www.runoob.com/wp-content/uploads/2018/09/05234233-eed6ddcba93c42be8847e98d6da62802.jpg)

- 第一次握手：客户端尝试链接服务器，向服务器发送 syn 包(同步序列编号Synchronize Sequence Numbers) `syn=j`客户端进入 `SYN_SEND` 状态等待服务器确认。
- 第二次握手：服务器接收客户端 syn 包并确认 (ack=j+1)，同时向客户端发送一个 syn 包(syn=k)，即 SYN + ACK 包，此时服务器进入 `SYN_RECV` 状态
- 第三次握手：客户端收到服务器的 SYN+ACK 包，向服务器发送确认包 ACK(ack=k+1)，此包发送完毕，客户端和服务器端进入 `ESTABLISHED` 状态，完成三次握手。



### HTTPS的工作原理

![img](https://www.runoob.com/wp-content/uploads/2018/09/https-intro.png)

1. 客户端发起 HTTPS 请求
2. 服务端的配置
3. 传送证书
4. 客户端解析证书
5. 传送加密信息
6. 服务端解密信息
7. 传输加密后的信息
8. 客户端解密信息