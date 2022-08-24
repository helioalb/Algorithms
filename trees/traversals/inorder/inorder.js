function inorder(tree) {
    const result = [];
    _inorder(tree, result);
    return result;
}

function _inorder(tree, result) {
    if (tree == null) return;

    _inorder(tree.left, result);
    result.push(tree.value);
    _inorder(tree.right, result);
}

module.exports = inorder;
