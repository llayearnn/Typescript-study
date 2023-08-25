let count = 10;
let obj1 = {
  x: 0,
  y: 0,
};
function add(x, y) {
  return x + y;
}
function changeDirection(direction) {
  console.log("direction ", direction);
}
const getPoint = (point) => {
  console.log(point);
};
const aa = {
  count,
  obj1,
  add,
  getPoint,
};
export default { count, obj1, add, changeDirection, getPoint };
