Function.prototype.callPolyfill = function (context, ...args) {
    console.log(this)
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */

function add(b) {
    return this.a + b;
}

add.callPolyfill({'a': 5},7)