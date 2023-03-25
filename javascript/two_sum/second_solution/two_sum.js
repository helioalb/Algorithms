function twoSum(numbers, target) {
    const alreadyVisited = new Map();

    for (const number of numbers) {
       const expectedNumber = target - number;

       if (alreadyVisited.has(expectedNumber)) return [expectedNumber, number];

       alreadyVisited.set(number, true);
    }

    return [];
}

module.exports = twoSum;
