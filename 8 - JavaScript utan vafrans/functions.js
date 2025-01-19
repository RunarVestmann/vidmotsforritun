// 3 ways of writing a function

function add(a, b) {
  return a + b;
}

const add = function (a, b) {
  return a + b;
};

const add = (a, b) => {
  return a + b;
};

console.log(add(3, 4));
