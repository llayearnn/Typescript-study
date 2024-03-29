// 函数表达式 类型推断
let mySum = function (x: number, y: number): number {
  return x + y;
};
export function getPropVal<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  return obj[key];
}
export const myInstall = <
  T extends { name: string; install: any },
  E extends Record<string, any>
>(
  main: T,
  extra?: E
): T => {
  if (extra) {
    for (const [key, com] of Object.entries(extra)) {
      (main as any)[key] = com;
    }
    main.install = (app: any): void => {
      app.component(main.name, main);
    };
  }

  return main;
};
const MyAdd = (x: number, y: number): number => {
  return x + y;
};
// 函数表达式 手动指定类型 这里的箭头指的是 函数返回的类型
let mySum1: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
let mySum4: (x: number, y: number) => number = (x, y) => {
  return x + y;
};
// 接口指定函数类型
interface SumFun {
  (source: string, subString: string): boolean;
}
let mySum2: SumFun;
mySum2 = function (source, substring) {
  return source.search(substring) !== -1;
};
// 可选参数 可选的参数必须放在必选后面
let mySum3 = function (x: number, y?: number): number {
  return x + <number>y;
};
// 剩余参数
function PUSH(arr: Array<any>, ...items: any[]) {
  // string[]
  items.forEach((item) => {
    console.log("	", item?.age);
    arr.push(item);
  });
}
PUSH([], 1, 2, "3", undefined, null, "", NaN, true, []);
