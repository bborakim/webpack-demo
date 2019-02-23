/*
//named export : 여러개 사용가능
export var area = function (r) {
  return Math.PI * r * r;
}

//export를 붙이게 되면 남들이 사용가능하게 됨.
export var circumference = function (r) {
  return 2 * Math.PI * r;
}*/


// named exports : 여러개 사용 가능
export var area = function(r) {
  return Math.PI * r * r;
};

export var circumference = function (r) {
  return 2 * Math.PI * r;
};