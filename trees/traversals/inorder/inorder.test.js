const inorder = require('./inorder');

test ('inorder traversal - balanced tree', () => {
    //        4
    //      /   \
    //     2     6
    //   /  \   /  \
    //  1    3 5    7
    const tree = buildBalancedTree();

    expect(inorder(tree)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
});

function buildBalancedTree() {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);

    two.left = one;
    two.right = three;

    six.left = five;
    six.right = seven;

    four.left = two;
    four.right = six;

    return four;
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}
