declare let count: number;
export interface Point {
  x: number;
  y: number;
}
declare let point: Point;

declare function add(x: number, y: number): number;

declare function changeDirection(
  params: "up" | "down" | "left" | "right"
): void;
// declare type GetPoint = (point: Point) => void;
export interface GetPoint {
  (point: Point): void;
}
declare const getPoint: GetPoint;
// 类型提供好 需要使用模块化方案中提供的模块化语法来导出生命好的类型，才可以在其他.ts文件导入使用
export default { count, obj1, add, changeDirection, getPoint };
