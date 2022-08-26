function compare_trees(firstTree, secondTree) {
    if (firstTree === null || secondTree === null)
        return firstTree?.value === secondTree?.value;

    if (firstTree?.value !== secondTree?.value) return false;

    return compare_trees(firstTree.left, secondTree.left) &&
        compare_trees(firstTree.right, secondTree.right);
}

module.exports = compare_trees;
