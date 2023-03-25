function areEquals(firstTree, secondTree) {
    if (firstTree === null || secondTree === null)
        return firstTree?.value === secondTree?.value;

    if (firstTree.value !== secondTree.value) return false;

    return areEquals(firstTree.left, secondTree.left) &&
        areEquals(firstTree.right, secondTree.right);
}

module.exports = areEquals;
