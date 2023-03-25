const minimum_depth = require('./minimum_depth');

test ('minimum depth of binary tree', () => {
    //      3
    //     / \
    //    9  20
    //      /  \
    //     15   7
   const tree = buildTree();

    expect(minimum_depth(tree)).toBe(2);
});

function buildTree() {
    const three = new Node(3);
    const seven = new Node(7);
    const nine = new Node(9);
    const fifteen = new Node(15);
    const twenty = new Node(20);

    twenty.left = fifteen;
    twenty.right = seven;

    three.left = nine;
    three.right = twenty;

    return three;
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}
