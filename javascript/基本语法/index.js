// 变量遮蔽
var test = "字符串";
(function test() {
  test = "字符串2";
  console.log(test);
})();

// 作用域和闭包
function fun(a, b) {
  console.log(a, b);
  return {
    fun: function (x) {
      return fun(x, a);
    },
  };
}
const a = fun(0);
a.fun(1);

// 类型转换
["1", "2", "3"].map(parseInt);
