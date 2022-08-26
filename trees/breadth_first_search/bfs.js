function bfs(tree, element) {
    if (tree === null) return false;

    const queue = [tree];

    while(queue.length > 0) {
        const current = queue.shift();
        if (current.value === element) return true;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return false;
}

module.exports = bfs;
