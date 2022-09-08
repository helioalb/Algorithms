function isPalindrome(string) {
    const stack = [];

    for (const char of [...string])
        stack.push(char);

    for (const char of [...string])
        if (char !== stack.pop())
            return false;

    return true;
}

module.exports = isPalindrome;
