function twoSum(numbers, target) {
    numbers.sort((a, b) => a - b);

    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const firstNumber = numbers[left];
        const secondNumber = numbers[right];
        const sum = firstNumber + secondNumber;
        if (sum === target) return [firstNumber, secondNumber];

        if (sum > target) right--;
        if (sum < target) left++;
    }

    return [];
}

module.exports = twoSum;
