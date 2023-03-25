function wordSearch(board, word) {
    const queue = [...word];
    bfs(board, 0, 0 , queue);
    return queue.length === 0;
}

module.exports = wordSearch;
