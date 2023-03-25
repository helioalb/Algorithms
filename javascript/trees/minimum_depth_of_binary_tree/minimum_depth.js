function minimum_depth(tree) {
    if (tree == null) return 0;

    const queue = [{ tree, level: 1}];

    while (queue.length > 0) {
        const node = queue.shift();
        const tree = node.tree;
        if (tree.left === null && tree.right === null) return node.level;

        const level = node.level + 1;

        if (tree.left !== null) queue.push({ tree: tree.left, level });
        if (tree.right !== null) queue.push({ tree: tree.right, level });
    }
}

module.exports = minimum_depth;
