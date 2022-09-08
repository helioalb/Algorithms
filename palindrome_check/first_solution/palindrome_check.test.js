const isPalindrome = require('./palindrome_check');

test ('abccba', () => {
    expect(isPalindrome('abccba')).toBeTruthy();
});

test ('helio', () => {
    expect(isPalindrome('helio')).toBeFalsy();
});
