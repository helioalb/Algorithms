function bfs(tree, element) {
    if (tree == null) return false;

    const queue = [tree];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node.value === element) return true;

        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }
    return false;
}

module.exports = bfs;
