---
lang: zh-CN
title: basic Commands
description: 中文帮助文档安装：https://blog.csdn.net/u010491918/article/details/76823854
---
# basic Commands

中文帮助文档安装：https://blog.csdn.net/u010491918/article/details/76823854




## 文件与目录

### ls

list files 列出目录及文件名

- **选项参数**

  | options | description                                                 |
  | ------- | ----------------------------------------------------------- |
  | -a      | 全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用) |
  | -d      | 仅列出目录本身，而不是列出目录内的文件数据                  |
  | -l      | 长数据串列出，包含文件的属性与权限等等数据；(常用)          |
  | -i      | 列出inode number                                            |





### cat

连接多个文件并打印到标准输出

- **用法**

  ``` shell
  Usage: cat [OPTION]... [FILE]...
  ```

- **参数**

  | options                 | description                                 |
  | ----------------------- | ------------------------------------------- |
  | -A , --show-all         | 等价于-vET                                  |
  | -b , --number-nonblank  | 给非空输出编号                              |
  | -e                      | 等价于-vE                                   |
  | -E , --show-ends        | 在每行结束显示$                             |
  | -n , --number           | 给所有输出行编号                            |
  | -s , --squeeze-blank    | 将所有的连续的多个空行替换为一个空行        |
  | -t                      | 等价于-vT                                   |
  | -u                      | 被忽略的选项                                |
  | -v , --show-nonprinting | 除了LFD和TAB之外所有控制符用^和M-记方式显示 |
  | --version               | 显示版本信息并推出                          |


- **示例**

  ```shell
  [root@k8s-matser-42 opt]# ls
  cni  containerd  log1.txt  log2.txt  log3.txt  manpages-zh-1.5.1
  [root@k8s-matser-42 opt]# cat log1.txt log2.txt  log3.txt  -n -E -s
   1  this is  log1$
   2  this is  log2$
   3  this is  log3$
  [root@k8s-matser-42 opt]#

  ```
### less

### more

### head

### tail



## 用户及用户组

