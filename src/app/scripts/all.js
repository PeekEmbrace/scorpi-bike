'use strict';
function _classCallCheck(e, n) {
  if (!(e instanceof n))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperty(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = t),
    e
  );
}
var Test = function e() {
    var n = this;
    _classCallCheck(this, e),
      _defineProperty(this, 'sayHello', function () {
        console.log(n.name), console.log('hello');
      }),
      (this.name = 'Testie');
  },
  test2 = new Test();
test2.sayHello();
//# sourceMappingURL=all.js.map
