const validParentheses = require('./valid_parentheses');

test ('[()]', () => {
    expect(validParentheses('[()]')).toBeTruthy();
});

test ('[', () => {
    expect(validParentheses('[')).toBeFalsy();
});

test ('[(', () => {
    expect(validParentheses('[(')).toBeFalsy();
});

test (')[(', () => {
    expect(validParentheses(')[(')).toBeFalsy();
});
