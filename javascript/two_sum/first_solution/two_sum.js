function two_sum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++)
        for (let j = i + 1; j < numbers.length; j++)
            if (numbers[i] + numbers[j] === target) return [numbers[i], numbers[j]];
    return [];
}

module.exports = two_sum;
