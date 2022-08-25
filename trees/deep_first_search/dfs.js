function dfs(tree, element) {
    if (tree === null) return false;
    if (tree.value === element) return true;

    return dfs(tree.left, element) || dfs(tree.right, element);
}

module.exports = dfs;
