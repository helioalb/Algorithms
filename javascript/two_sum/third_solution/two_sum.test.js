const twoSum = require('./two_sum');

test ('two sum O(n log(n))', () => {
    const numbers = [4, 1, 2, -2, 11, 16, 1, -1, -6, -4];
    const target = 9;
    expect(twoSum(numbers, target)).toStrictEqual([-2, 11]);
});
