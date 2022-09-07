function validParentheses(string) {
    const mapping = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    const stack = [];
    for (const token of [...string]) {
        if (Object.keys(mapping).includes(token))
            if (mapping[token] === stack.pop())
                continue;
        stack.push(token);
    };

    return stack.length === 0;
}

module.exports = validParentheses;
