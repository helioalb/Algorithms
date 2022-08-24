function postorder(tree) {
    const result = [];
    _postorder(tree, result);
    return result;
}

function _postorder(tree, result) {
    if (tree == null) return;

    _postorder(tree.left, result);
    _postorder(tree.right, result);
    result.push(tree.value);
}

module.exports = postorder;
