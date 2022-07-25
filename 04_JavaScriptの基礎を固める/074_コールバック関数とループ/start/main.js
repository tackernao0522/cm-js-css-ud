const arry = [1, 2, 3, 4, 5];

// 基本的なfor文の書き方
// for (let i = 0; i < arry.length; i++) {
//   console.log(arry[i])
// }

function forEach(ary, callback) {
  for (let i = 0; i < ary.length; i++) {
    callback(ary[i])
  }
}

function log(val) {
  console.log(val)
}

function double(val) {
  val = val * 2
  log(val)
}

forEach(arry, function(val) {
  val = val * 2;
  log(val)
})

// forEach(arry, log);
forEach(arry, double);
