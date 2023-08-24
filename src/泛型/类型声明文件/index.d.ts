// 用来为已经存在的JS库提供类型信息
// TS 中有两种文件类型：1 .ts文件 2 .d.ts文件
/**
 * .ts文件：
 * 既包含类型信息又有可执行代码
 * 可以被编译为.js文件执行
 *
 */
/**
 * .d.ts文件：
 * 只包含类型信息的类型声明文件
 * 不会被编译为.js文件，仅用于提供类型信息
 */

// 一般在 package.json 中的 typings/types 指定 TypeScript 的类型定义的入口文件
// "typings": "./index.d.ts"
// "types": "src/index.d.ts",
