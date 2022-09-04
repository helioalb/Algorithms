const invert = require('./invert_tree');
const inorder = require('../traversals/inorder/inorder');
const preorder = require('../traversals/preorder/preorder');

test ('invert tree', () => {
// From:
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7

// to:
//        1
//      /   \
//     3     2
//    / \   / \
//   7   6 5   4
    const tree = buildTree();
    const expectedInOrderTree = [7, 3, 6, 1, 5, 2, 4];

    expect(inorder(invert(tree))).toStrictEqual(expectedInOrderTree);
});

function buildTree() {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);

    three.left = six;
    three.right = seven;

    two.left = four;
    two.right = five;

    one.left = two;
    one.right = three;

    return one;
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}
