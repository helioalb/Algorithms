function invert(tree) {
    if (tree == null) return null;

    const tmp = tree.left;
    tree.left = tree.right;
    tree.right = tmp;

    invert(tree.left);
    invert(tree.right);

    return tree;
}

module.exports = invert;
