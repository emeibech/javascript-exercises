const fibonacci = function(fib) {
    if (fib < 0) return 'OOPS';
    let prev = 0;
    let current = 1;
    for (; fib > 0; fib--) {
        current += prev;
        prev = current - prev;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
