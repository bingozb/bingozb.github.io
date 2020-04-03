(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{371:function(a,s,t){"use strict";t.r(s);var e=t(3),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"/images/blog/42/logo-docker.jpg",alt:"Docker"}})]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("这阵子一直在忙项目，已经有一个多月没有写博客了，有很多关于运维、JavaEE、甚至心灵鸡汤和想法等的东西，想总结写成文章归档却一直都没有时间，写这篇博客也是在大半夜。但是必须要写，因为公司急需一套构建测试环境的机制。")]),a._v(" "),t("p",[a._v("以前觉得项目部署的环境应该有两个，即开发环境和正式环境。但经历了顺丰专送这个项目之后，才明白真的错了，还需要一个测试环境，而 Docker 正是“复制环境”的利器。")]),a._v(" "),t("h2",{attrs:{id:"为什么需要测试环境？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要测试环境？"}},[a._v("#")]),a._v(" 为什么需要测试环境？")]),a._v(" "),t("p",[a._v("有这么一个真实画面：我们的测试人员在测试一个小程序的界面，点进去的时候界面一直在 loading，没有数据展现。OK，把这个 BUG 记录下来。过了半分钟，再点进这个界面，正常了，数据出来了。What the ...")]),a._v(" "),t("p",[a._v("这个是 BUG 吗？再多试几遍，依然都没有问题。问了一下后端的开发人员，得到结果 ”刚修复了这个BUG“，于是默默把刚记下来的 BUG 划掉 ...")]),a._v(" "),t("p",[a._v("以此循环，一直在复测，拼命回归测试，就怕记下来的 BUG 不知不觉又被修复了，所以一天下来几乎什么都没有测出来。")]),a._v(" "),t("p",[a._v("所以我们需要测试环境，保证 QA 测试的时候是稳定的。")]),a._v(" "),t("h2",{attrs:{id:"docker-入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-入门"}},[a._v("#")]),a._v(" Docker 入门")]),a._v(" "),t("p",[a._v("Docker 为开发人员和系统管理员提供了一个可供开发，分发（ship）和运行应用的平台。将 docker 化的应用及其依赖环境不需要经过任何修改就可以分发到任何地方，比如提供给 QA 团队或者分发到云平台中。这是使用 Docker 的一个很重要的目的。")]),a._v(" "),t("h3",{attrs:{id:"什么是-docker-？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker-？"}},[a._v("#")]),a._v(" 什么是 Docker ？")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.docker.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker"),t("OutboundLink")],1),a._v(" 的英文本意是码头工人，也就是搬运工，\n它提供了一个可以运行你的应用程序的封套（envelope），或者说容器。它原本是 dotCloud 启动的一个业余项目，后来遵从 Apache 2.0 协议开源了，吸引了大量的关注和讨论，再后来 dotCloud 把它重命名为 Docker Inc。它最初是用 Go 语言编写的，它就相当于是加在 LXC（LinuX Containers，linux 容器）上的管道，允许开发者在更高层次的概念上工作。")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/blog/42/docker.png",alt:"Docker"}})]),a._v(" "),t("p",[a._v("Docker 扩展了 Linux 容器（Linux Containers），或着说 LXC，通过一个高层次的 API 为进程单独提供了一个轻量级的虚拟环境。Docker 利用了 LXC， cgroups 和 Linux 自己的内核。和传统的虚拟机不同的是，一个 Docker 容器并不包含一个单独的操作系统，而是基于已有的基础设施中操作系统提供的功能来运行的。")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/blog/42/VMs.jpg",alt:"Containers vs VMs"}})]),a._v(" "),t("p",[a._v("容器使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app），更重要的是容器性能开销极低。")]),a._v(" "),t("p",[a._v("简单来说，Docker 使软件的传播更加简单，简单从两个方面体现，一是更容易建立，二是共享包含你应用环境配置信息的镜像，应用环境配置也叫做应用操作系统。")]),a._v(" "),t("h4",{attrs:{id:"应用操作系统是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用操作系统是什么？"}},[a._v("#")]),a._v(" 应用操作系统是什么？")]),a._v(" "),t("p",[a._v("一般来说，应用程序需要一个特定版本的操作系统，应用服务器，JDK，数据库服务器，还可能需要整合配置文件和其他各种各样的依赖。应用可能需要绑定特定的端口和特定大小的内存。这些运行应用所必须的组件和配置就是所谓的应用操作系统。")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/blog/42/docker-app-os.png",alt:"Docker"}})]),a._v(" "),t("p",[a._v("当然，可以写一个安装脚本，在脚本中完成下载并安装这些组件的功能。Docker 能够简化这个过程，简化部署多种应用实例工作，比如 Web 应用、后台应用、数据库应用、大数据应用比如 Hadoop 集群、消息队列等等都可以打包成一个 Image（镜像文件）部署。")]),a._v(" "),t("p",[a._v("这些镜像可以被用来创建 Docker containers（容器），容器运行在容器虚拟化平台之上，这个平台由 Docker 提供。")]),a._v(" "),t("h4",{attrs:{id:"docker-与-lxc-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-与-lxc-的区别"}},[a._v("#")]),a._v(" Docker 与 LXC 的区别")]),a._v(" "),t("p",[a._v("这里有一个 "),t("a",{attrs:{href:"https://stackoverflow.com/questions/17989306/what-does-docker-add-to-lxc-tools-the-userspace-lxc-tools",target:"_blank",rel:"noopener noreferrer"}},[a._v("Stackoverflow 的答案"),t("OutboundLink")],1),a._v("，里面非常详细清晰地描述了所有 Docker 不同于纯粹的 LXC 的功能特性，简单翻译下就是以下几点：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Docker 提供了一种可移植的配置标准化机制，允许你一致性地在不同的机器上运行同一个 Container。而 LXC 本身可能因为不同机器的不同配置而无法方便地移植运行。")])]),a._v(" "),t("li",[t("p",[a._v("Docker 以 App 为中心，为应用的部署做了很多优化。而 LXC 的帮助脚本主要是聚焦于如何机器启动地更快和耗更少的内存。")])]),a._v(" "),t("li",[t("p",[a._v("Docker 为 App 提供了一种自动化构建机制（Dockerfile），包括打包，基础设施依赖管理和安装等等。")])]),a._v(" "),t("li",[t("p",[a._v("Docker 提供了一种类似 git 的 Container 版本化的机制，允许你对你创建过的容器进行版本管理，依靠这种机制，你还可以下载别人创建的 Container，甚至像 git 那样进行合并。")])]),a._v(" "),t("li",[t("p",[a._v("Docker Container 是可重用的，依赖于版本化机制，你很容易重用别人的 Container（Image），作为基础版本进行扩展。")])]),a._v(" "),t("li",[t("p",[a._v("Docker Container 是可共享的，有点类似 GitHub 一样，Docker 有自己的 INDEX，你可以创建自己的 Docker 用户并上传和下载 Docker Image。")])]),a._v(" "),t("li",[t("p",[a._v("Docker 提供了很多的工具链，形成了一个生态系统。这些工具的目标是自动化、个性化和集成化，包括对 PAAS 平台的支持等。")])])]),a._v(" "),t("p",[a._v("Docker 会像一个可移植的容器引擎那样工作。它把应用程序及所有程序的依赖环境打包到一个虚拟容器中，这个虚拟容器可以运行在任何一种 Linux 服务器上。这大大地提高了程序运行的灵活性和可移植性，无论需不需要许可、是在公共云还是私密云、是不是裸机环境等等。")]),a._v(" "),t("h4",{attrs:{id:"docker-的主要组件是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-的主要组件是什么？"}},[a._v("#")]),a._v(" Docker 的主要组件是什么？")]),a._v(" "),t("p",[a._v("Docker 有两个主要组件：")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.docker.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker"),t("OutboundLink")],1),a._v(" ：开源的容器虚拟化平台")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker Hub"),t("OutboundLink")],1),a._v(" ：共享和管理 Docker 镜像的 Saas 平台")])]),a._v(" "),t("p",[a._v("Docker 采用 "),t("a",{attrs:{href:"https://linuxcontainers.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux Containers"),t("OutboundLink")],1),a._v(" 来提供隔离、沙箱、复制、资源限制、快照和其他的一些优势。参考资料： "),t("a",{attrs:{href:"https://www.infoq.com/articles/docker-containers",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Docker: Using Linux Containers to Support Portable Application Deployment》"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("p",[a._v("镜像是 Docker 的构建组件，是一个只读的应用操作系统模板。")]),a._v(" "),t("p",[a._v("容器是从镜像创建出来的运行状态，是 Docker 的运行组件。容器是可以运行、启动、停止、移动和删除的。")]),a._v(" "),t("p",[a._v("镜像保存的仓库是 Docker 的分发组件，可以选择公开的 Docker Hub（国外的，超级慢），也可以选择搭建私有的 Registry。")]),a._v(" "),t("h4",{attrs:{id:"docker-是怎么工作的？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-是怎么工作的？"}},[a._v("#")]),a._v(" Docker 是怎么工作的？")]),a._v(" "),t("p",[a._v("Docker 按启动顺序包含两个部分：")]),a._v(" "),t("ul",[t("li",[a._v("Daemon（服务端）：运行在 host machine（宿主机） 上，承担创建、运行和分发 Docker 容器等重要工作。")]),a._v(" "),t("li",[a._v("Client（客户端）：Docker 二进制程序，负责接收用户的命令以及和服务端进行通信。")])]),a._v(" "),t("p",[a._v("客户端可以和服务端运行在一台主机上，也可以在不同的主机上。")]),a._v(" "),t("p",[a._v("服务端需要用 pull 命令从仓库中拉一个镜像下来。服务端可以从 Docker Hub 或者其他配置的仓库中下载镜像。服务端主机可以从仓库中下载和安装多个镜像。")]),a._v(" "),t("p",[a._v("客户端用 run 命令 来启动容器。客户端与服务端通过 socket 或者 REST API 进行通信。")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/blog/42/docker-architecture-techtip.png",alt:"Docker Architecture Techtip"}})]),a._v(" "),t("h3",{attrs:{id:"docker-的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-的安装"}},[a._v("#")]),a._v(" Docker 的安装")]),a._v(" "),t("p",[a._v("在 CentOS 中安装 Docker:")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[a._v("$ sudo yum "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("y")]),a._v(" install docker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("io #安装docker\n$ sudo service docker start     #启动docker服务\n$ sudo chkconfig docker "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("on")]),a._v("      #设置docker服务为自启动\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("在 Ubuntu/Debian 中安装 Docker:")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[a._v("$ sudo apt"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("get udpate\n$ sudo apt"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("get install docker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("io\n$ sudo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ln")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("sf")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("docker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("io "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("docker\n$ sudo sed "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'$acomplete -F _docker docker'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("bash_completion"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("d")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("docker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("io  #命令自动补全\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("其它操作系统的安装可以查看"),t("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"docker-的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-的使用"}},[a._v("#")]),a._v(" Docker 的使用")]),a._v(" "),t("h4",{attrs:{id:"下载镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[a._v("#")]),a._v(" 下载镜像")]),a._v(" "),t("p",[a._v("在了解了 Image 和 Container 的概念后，我们可以开始下载一个 Image，Docker 的好处就是提供了一个类似github 的 Image 仓库管理，可以非常方便 pull 别人的 Image 下来运行。")]),a._v(" "),t("p",[a._v("例如，我们可以下载一个 CentOS Image：")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[a._v("$ sudo docker pull centos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("centos6\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这里 centos6是一个 tag，类似于 Git 的 tag，可以通过它来确定下载的 CentOS 的版本。下载完成后，执行 "),t("code",[a._v("docker images")]),a._v(" 命令来列出你已经下载的 images：")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@BingoECS ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("# docker images\nREPOSITORY             TAG                 IMAGE ID            CREATED             SIZE\ndocker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("io"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("centos       centos6             3e32556ae4ba        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(" days ago          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("194.3")]),a._v(" MB\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h4",{attrs:{id:"运行容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行容器"}},[a._v("#")]),a._v(" 运行容器")]),a._v(" "),t("p",[a._v("我们通过命令行来运行一个容器，命令很简单，例如我们想执行一个 shell 终端：")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[a._v("$ sudo docker run "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("t")]),a._v(" centos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("centos6 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("bash\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("默认情况下，docker 容器是不提供交互 shell 的，也不提供标准输入。可以指定 "),t("code",[a._v("-i")]),a._v(" 选项来提供交互，指定 "),t("code",[a._v("-t")]),a._v(" 选项来分配一个伪终端。")]),a._v(" "),t("p",[a._v("在 Shell 中你可以做你想做的任意操作，安装软件，编写程序，运行命令等。")]),a._v(" "),t("p",[a._v("参考我之前写的，"),t("a",{attrs:{href:"https://blog.bingo.ren/28.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Centos 6 x86 minimal 部署》"),t("OutboundLink")],1),a._v("，推荐使用 Oneinstack 脚本，10分钟左右自动搭建一套服务端环境。")]),a._v(" "),t("h4",{attrs:{id:"退出容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#退出容器"}},[a._v("#")]),a._v(" 退出容器")]),a._v(" "),t("p",[a._v("最直接的退出命令 "),t("code",[a._v("exit")]),a._v("、"),t("code",[a._v("ctrl+c")]),a._v("，会使容器停止。")]),a._v(" "),t("p",[a._v("如果想要只退出容器的终端，但不停止容器，可以使用组合快捷键：")]),a._v(" "),t("p",[a._v("先按 "),t("code",[a._v("ctrl+p")]),a._v("，再按 "),t("code",[a._v("ctrl+q")]),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"进入运行中的容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入运行中的容器"}},[a._v("#")]),a._v(" 进入运行中的容器")]),a._v(" "),t("h5",{attrs:{id:"docker-attach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-attach"}},[a._v("#")]),a._v(" docker attach")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[a._v("$ docker attach "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("it web "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("bash\n$ Enter回车\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("注意：使用 "),t("code",[a._v("attach")]),a._v(" 进入后台运行中的容器后，如果退出容器终端使用了 "),t("code",[a._v("exit")]),a._v("，则会导致容器的停止。如果想容器不停止，则需要使用 "),t("code",[a._v("ctrl+p")]),a._v("，再按 "),t("code",[a._v("ctrl+q")]),a._v(" 的组合快捷键。")]),a._v(" "),t("h5",{attrs:{id:"docker-exec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-exec"}},[a._v("#")]),a._v(" docker exec")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[a._v("$ docker exec "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("it web "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("bash\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("相对比 "),t("code",[a._v("attach")]),a._v("，使用 "),t("code",[a._v("exec")]),a._v(" 进入容器后，再使用 "),t("code",[a._v("exit")]),a._v(" 退出容器终端，不会导致容器的停止。")]),a._v(" "),t("p",[a._v("注意：使用 "),t("code",[a._v("exec")]),a._v(" 执行后，会命令执行返回值。如果命令需要长时间执行，而不使用 "),t("code",[a._v("-d")]),a._v("，执行 "),t("code",[a._v("exec")]),a._v(" 后会卡住，一直等命令执行完成。")]),a._v(" "),t("h4",{attrs:{id:"停止容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止容器"}},[a._v("#")]),a._v(" 停止容器")]),a._v(" "),t("h5",{attrs:{id:"stop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[a._v("#")]),a._v(" stop")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("stop")]),a._v(" 停止容器")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ docker stop xxx\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h5",{attrs:{id:"kill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kill"}},[a._v("#")]),a._v(" kill")]),a._v(" "),t("p",[a._v("也可以使用 "),t("code",[a._v("kill")]),a._v(" 杀掉一个运行中的容器")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ docker kill xxx\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"删除容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[a._v("#")]),a._v(" 删除容器")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ docker rm [OPTIONS] CONTAINER [CONTAINER...]\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("OPTIONS 说明：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("-f")]),a._v(" : 通过 SIGKILL 信号强制删除一个运行中的容器")]),a._v(" "),t("li",[t("code",[a._v("-l")]),a._v(" : 移除容器间的网络连接，而非容器本身")]),a._v(" "),t("li",[t("code",[a._v("-v")]),a._v(" : -v 删除与容器关联的卷")])]),a._v(" "),t("h4",{attrs:{id:"保存镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存镜像"}},[a._v("#")]),a._v(" 保存镜像")]),a._v(" "),t("p",[a._v("在容器里搭建完环境后，想要保存作为新的镜像，先退出容器的终端，然后执行 "),t("code",[a._v("ps")]),a._v(" 命令查看容器 ID")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@BingoECS ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("# docker "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a\nCONTAINER ID        IMAGE                  COMMAND             CREATED             STATUS            PORTS             NAMES\nd4385272c36a        d453                "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/bash"')]),a._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("36")]),a._v(" hours ago        Up "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("36")]),a._v(" hours                             web\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("然后用 "),t("code",[a._v("commit")]),a._v(" 命令将 Container 提交成 Image")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[a._v("$ sudo docker commit d4385272c36a dankal"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("sftc\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("容器提交后，执行 "),t("code",[a._v("docker images")]),a._v(" 就可以看到刚才提交的容器")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@BingoECS ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("# docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE\ndankal"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("sftc         latest              fbd8e8ab66fe        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("34")]),a._v(" hours ago        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.754")]),a._v(" GB\ncentos              centos6             7068d4aee850        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(" days ago          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("194.3")]),a._v(" MB\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("以后就可以很方便地 "),t("code",[a._v("run dankal/sftc")]),a._v(" 创建相同环境的容器，不需要再手动搭建环境了。")]),a._v(" "),t("h4",{attrs:{id:"docker-端口映射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-端口映射"}},[a._v("#")]),a._v(" Docker 端口映射")]),a._v(" "),t("p",[a._v("我们在宿主机已经构建完容器，但我们没办法在外网直接访问到容器。这时候需要做端口映射，通过访问宿主机来转发到容器。")]),a._v(" "),t("h5",{attrs:{id:"反向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[a._v("#")]),a._v(" 反向代理")]),a._v(" "),t("p",[a._v("依然参考我之前写的，"),t("a",{attrs:{href:"https://blog.bingo.ren/28.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Centos 6 x86 minimal 部署》"),t("OutboundLink")],1),a._v("，修改 iptables，开放几个端口如6666、8888等，然后创建虚拟主机，绑定域名。最后修改 nginx -> conf -> vhost 下，修改对应域名的配置文件。")]),a._v(" "),t("p",[a._v("把默认生成的 location 匹配都注释掉：")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[a._v(" # location ~ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gif|jpg|jpeg|png|bmp|"),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("swf")]),a._v("|flv|mp4|ico"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n #   expires 30d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n #   access_log off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n # "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n # location ~ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("js")]),a._v("|css"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n #   expires 7d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n #   access_log off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n # "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n # location ~ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("ht "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n #   deny "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n # "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("p",[a._v("把原本转发给 "),t("code",[a._v("Tomcat")]),a._v("(JAVA环境作为参考) 的 "),t("code",[a._v("8080")]),a._v(" 端口改为 iptables 中开放的接口（eg. 8888）")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[a._v(" location ~ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    proxy_pass http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8888")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("include")]),a._v(" proxy"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("conf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h5",{attrs:{id:"docker-端口映射-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-端口映射-2"}},[a._v("#")]),a._v(" docker 端口映射")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[a._v("$ sudo docker run "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("it "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8888")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6666")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(" web "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("bash\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("code",[a._v("-p 8888:80")]),a._v(" : 将容器的"),t("code",[a._v("80")]),a._v("端口映射到主机的"),t("code",[a._v("8888")]),a._v("端口（与上面的反向代理的端口号一致）。")]),a._v(" "),t("p",[a._v("这样设置后，访问宿主机的"),t("code",[a._v("8888")]),a._v("端口就可以访问到容器的"),t("code",[a._v("80")]),a._v("端口，可以测试一下：")]),a._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[a._v("$ curl http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8888")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("正常情况下会访问到容器的"),t("code",[a._v("80")]),a._v("端口，并打印出容器 web 默认目录（"),t("code",[a._v("/data/wwwroot/default")]),a._v("）下的 "),t("code",[a._v("index.html")]),a._v(" 中的内容。")]),a._v(" "),t("p",[a._v("如果出现异常，则需要一步步排查问题，最有可能的是容器内的 web 服务没有启动，可以进入容器，检查一下 nginx、tomcat 等 web 服务器和容器的状态，或者直接 "),t("code",[a._v("restart")]),a._v(" 即可。")]),a._v(" "),t("p",[a._v("而把容器的"),t("code",[a._v("3306")]),a._v("端口映射到宿主机的"),t("code",[a._v("6666")]),a._v("端口，就可以通过绑定的域名和"),t("code",[a._v("6666")]),a._v("端口，访问容器里的 MySQL 数据库。")]),a._v(" "),t("p",[a._v("还需要映射什么端口根据需求去配置即可。")]),a._v(" "),t("h3",{attrs:{id:"项目部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目部署"}},[a._v("#")]),a._v(" 项目部署")]),a._v(" "),t("p",[a._v("最后的最后，只要把项目部署在容器里就完成了。作为运维相信这根本就不是什么问题了。比如说 JavaEE 项目，把项目的 war 包部署到 "),t("code",[a._v("/data/wwwroot/")]),a._v(" 下对应域名的文件夹里，就可以通过域名访问容器里的项目了。")]),a._v(" "),t("p",[a._v("PHP-fpm、Node.js 什么的就不说啦。")]),a._v(" "),t("h2",{attrs:{id:"补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[a._v("#")]),a._v(" 补充")]),a._v(" "),t("p",[a._v("理论上来说，一台服务器有65536个端口号，就算一个环境需要映射10个端口，那也可以构建6000个容器。实际上还得看带宽、硬盘容量等的配置，但也已经足够应付几十个项目的环境构建了。这种虚拟化技术简直不能太爽，有一种一台云主机 ECS 被分成了 N 台 VPS 的体验。")]),a._v(" "),t("p",[a._v("关于项目的环境，在 Docker 的帮助下，开发环境、测试环境、生产环境都可以部署在同一台服务器上，数据不共通，但配置完全相同。并且，如果要迁移服务器，将是直接复制粘贴的操作，几秒钟就可以完成。")]),a._v(" "),t("p",[a._v("迭代版本号：测试环境 > 生产环境 (开发环境不打tag)\n版本稳定性：生产环境 > 测试环境 > 开发环境")]),a._v(" "),t("p",[a._v("关于版本迭代流程控制：")]),a._v(" "),t("ul",[t("li",[a._v("后端每开发完一个模块或者完成一个功能甚至只修了一个BUG，都要将代码更新到 "),t("code",[a._v("dev")]),a._v(" 分支，部署到开发环境。")]),a._v(" "),t("li",[a._v("前端一般情况下，接开发环境的API。")]),a._v(" "),t("li",[a._v("前端完成某个模块，需要进行测试，后端就发布一个测试版本到 "),t("code",[a._v("test")]),a._v(" 分支，打上tag，eg.  "),t("code",[a._v("v0.3.TEST")]),a._v("，部署到测试环境。")]),a._v(" "),t("li",[a._v("前端切换到测试环境的 API，发布前端测试版本。")]),a._v(" "),t("li",[a._v("QA 拿到前端测试版本，开始测试。")]),a._v(" "),t("li",[a._v("前端切回测试环境，前后端继续开发。")]),a._v(" "),t("li",[a._v("QA 测试通过。")]),a._v(" "),t("li",[a._v("后端将测试环境的代码发布到 "),t("code",[a._v("master")]),a._v(" 分支，打上tag，eg. "),t("code",[a._v("v0.3.RELEASE")]),a._v(", 部署到生产环境。")]),a._v(" "),t("li",[a._v("...")]),a._v(" "),t("li",[a._v("前端接生产环境的API。")]),a._v(" "),t("li",[a._v("项目完成。")])]),a._v(" "),t("h2",{attrs:{id:"todo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[a._v("#")]),a._v(" TODO")]),a._v(" "),t("ul",[t("li",[a._v("Docker + Git + Jenkins 持续构建部署")]),a._v(" "),t("li",[a._v("构建容器集群")])])])}),[],!1,null,null,null);s.default=r.exports}}]);