function areEquals(firstTree, secondTree) {
    if (firstTree === null || secondTree === null) return false;

    const queueForFirstTree = [firstTree];
    const queueForSecondTree = [secondTree];

    while (queueForFirstTree.length > 0 && queueForSecondTree.length > 0) {
        const currentNodeOfFirstTree = queueForFirstTree.shift();
        const currentNodeOfSecondTree = queueForSecondTree.shift();
        if (queueForFirstTree.length !== queueForSecondTree.length)
            return false;
        if (currentNodeOfFirstTree.value !== currentNodeOfSecondTree.value)
            return false;
        if (currentNodeOfFirstTree.left)
            queueForFirstTree.push(currentNodeOfFirstTree.left);
        if (currentNodeOfFirstTree.right)
            queueForFirstTree.push(currentNodeOfFirstTree.right);
        if (currentNodeOfSecondTree.left)
            queueForSecondTree.push(currentNodeOfSecondTree.left);
        if (currentNodeOfSecondTree.right)
            queueForSecondTree.push(currentNodeOfSecondTree.right);
    }
    return true;
}

module.exports = areEquals;
