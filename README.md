# taro-home-visit

基于taro框架 + taro-ui的家访小程序

## 主要功能

- 根据查询部门下员工的家访记录
- 增加新的家访记录

## 开发

依赖安装 

```bash
npm install
```

本地开发，需要区分不同平台的小程序，启动后打开对应平台的开发者工具，进入到dist/pages目录下
这里以钉钉的小程序为例
```bash
npm run dev:dd
```

打包构建，也需要区分平台
```base
npm run build:dd
```