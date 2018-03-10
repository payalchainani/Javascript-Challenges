// Please do not change the name of this function
var findPartner = function (students, directions) {

var up = function (array) {
  pos[0] = pos[0] - 1;
  if (pos[0] < 0) {
    pos[0] = 0;
    return;
  }
  passed.push(array[pos[0]][pos[1]]);
};

var down = function (array) {
  pos[0] = pos[0] + 1;
  if (pos[0] > 1) {
    pos[0] = 1;
    return;
  }
  passed.push(array[pos[0]][pos[1]]);
};

var left = function (array) {
  pos[1] = pos[1] - 1;
  if (pos[1] < 0) {
    pos[1] = array[0].length - 1;
  }
  passed.push(array[pos[0]][pos[1]]);
};

var right = function (array) {
  pos[1] = pos[1] + 1;
  if (pos[1] > students[0].length) {
    pos[1] = 0;
  }
  passed.push(array[pos[0]][pos[1]]);
};

var operations = {
  left: left,
  right: right,
  up: up,
  down: down
};

var passed = [];
var pos = [0, 0];

directions.forEach(function (item, i) {
  operations[item](students);
});
// console.log(passed)
// console.log(pos)

return passed;

};

if (typeof module !== 'undefined') {
  module.exports = {findPartner};
}
