function preorder(tree) {
    const result = [];
    _preorder(tree, result);
    return result;
}

function _preorder(tree, result) {
    if (tree == null) return;

    result.push(tree.value);
    _preorder(tree.left, result);
    _preorder(tree.right, result);
}

module.exports = preorder;
