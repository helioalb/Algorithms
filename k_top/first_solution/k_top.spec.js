const top = require('./k_top');

test ('[1, 1, 1, 3, 3, 5, 6, 7, 8, 9, 10] -> K = 2', () => {
    const numbers = [1, 1, 1, 3, 3, 5, 6, 7, 8, 9, 10];
    expect(top(2, numbers)).toStrictEqual([1, 3]);
});

test ('[1, 1, 1, 1, 3, 3, 3, 5, 6, 7, 8, 10, 10] -> K = 3', () => {
    const numbers = [1, 1, 1, 1, 3, 3, 3, 5, 6, 7, 8, 10, 10];
    expect(top(3, numbers)).toStrictEqual([1, 3, 10]);
});
