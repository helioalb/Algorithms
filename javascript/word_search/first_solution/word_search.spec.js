const wordSearch = require('./word_search');

let board;

beforeEach(() => {
    board = [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ];
});

test ('ABCCED', () => {
    // wordSearch(board, 'ABCCED')
    // expect(wordSearch(board, 'ABCCED')).toBeTruthy();
});

// test ('SEE', () => {
//     expect(wordSearch(board, 'helio')).toBeTruthy();
// });

// test ('ABCB', () => {
//     expect(wordSearch(board, 'ABCB')).toBeFalsy();
// });
