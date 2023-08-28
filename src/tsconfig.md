tsconfig.json 指定: 项目文件和项目编译所需要的配置项
TS 的配置非常多，其他配置可以通过文档行查询(https://www.typescriptlang.org/tsconfig)
注意：

1. tsconfig.json 文件所在目录为项目根目录(package.json 同级)
2. tsconfig.json 可以自动生成 ，命令为 tsc--init
3. TS 会自动加载 .d.ts 文件，以提供类型声明 （通过修改 tsconfig.json 中的 include 配置）
   //即 src 下面的所有 .d.ts 文件都会为提供类型声明
