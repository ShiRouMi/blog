# 了解Web及网络基础

## 目录
- 1.1 使用HTTP协议访问Web
- 1.2 HTTP的诞生
- 1.3 网络基础 TCP/IP
- 1.4 与HTTP协议关系密切的协议： IP、TCP 和 DNS
- 1.5 负责域名解析的DNS服务
- 1.6 各种协议与 HTTP 协议的关系
- 1.7 URI 和 URL

## important point
 
- HTTP(HyperText Transfer Protocal)：超文本传输协议
- WWW(World Wide Web): 万维网
- FTP(File Transfer Protocal): 文件传输协议
- DNS(Domain Name System)： 域名系统
- TCP(Transmission Control Protocal)： 文件传输协议
- UDP(User Data Protocal): 用户数据报协议
- IP(Internet Protocal)
- MAC(Media Access Control Address)
- ARP(Address Resolution Protocal)
- URI(Uniform Resource Identifier): 统一资源标志符
- URL(Uniform Resource Locator)： 统一资源定位符
- RFC(Request for Comments)： 征求修正意见书

--------------------

- Web 使用一种名为 HTTP 的协议作为规范，完成从客户端到服务器端等一系列运行流程。
- 通常使用的网络（包括互联网）是在 TCP/IP 协议族的基础上运行的， HTTP 属于它内部的一个子集。
- 计算机与网络设备要相互通信，双方需要基于相同的方法，需要制定规则，这个规则被称为「协议」。
- TCP/IP 协议族的重要一点是「分层」。TCP/IP 协议族按层次分为 应用层、 传输层、网络层、数据链路层r
- 应用层： 预存了各类通用的应用服务（FTP 、DNS、 HTTP)
- 传输层： 提供处于网络连接中的两台计算机之间的数据传输（TCP、 UDP)
- 网络层： 处理网络上流动的数据包（数据包是网络传输协议中最小的数据单位）
- 链路层： 处理连接网络的硬件部分
- 发送端从应用层向下走，接收端从链路层往上走
- 发送端在层与层之间传输数据时，每经过一层时打上一个该层所属的「首部信息」；接收端在层与层传输数据时，每经过一层时会把对应的首部去掉
- IP 地址指明了节点被分配到的地址，MAC 地址是指网卡所属的「固定」地址；IP 地址可以变化，MAC 地址基本不会改变。
- ARP 是一种用以解析地址的协议，根据通信方的 IP 地址可以反查出对应的 MAC 地址。
- TCP 位于传输层，提供可靠的字节流服务
- 字节流服务是「将大块数据分割成以报文段为单位的数据包进行管理」
- 可靠的传输服务是指能够将数据可靠的传给对方，TCP协议采用了 三次握手策略
- 三次握手过程中使用了TCP 的标志 --- SYN ACK 
- DNS 协议通过域名查找 IP地址，或者逆向 从 IP地址反查域名
- URI 用字符串标志某一互联网资源，而 URL 表示资源的地点（互联网所在的位置），URL 是 URI 的子集
- 用来制定 HTTP 协议技术标准的文档，被称为 RFC