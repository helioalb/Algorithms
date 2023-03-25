const areEquals = require('./compare_trees');

test ('compare two equal trees', () => {
    //        4                 4
    //      /   \             /   \
    //     2     6           2     6
    //   /  \   /  \       /  \   /  \
    //  1    3 5    7     1    3 5    7
    const firstTree = buildBalancedTree();
    const secondTree = buildBalancedTree();

    expect(areEquals(firstTree, secondTree)).toBeTruthy();
});

test ('compare different trees', () => {
    //        4                 4
    //      /   \             /   \
    //     2     6           2     6
    //   /  \   /  \
    //  1    3 5    7
    const firstTree = buildBalancedTree();
    const secondTree = buildSmallTree();

    expect(areEquals(firstTree, secondTree)).toBeFalsy();
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

function buildSmallTree() {
    const two = new Node(2);
    const four = new Node(4);
    const six = new Node(6);

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
