function isPalindrome(string) {
    const chars = [...string];
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        if (chars[left] !== chars[right])
            return false;
        left++;
        right--;
    }
    return true;
}

module.exports = isPalindrome;
