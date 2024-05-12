class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {
            if (value === current.value) {
                return undefined;
            }

            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    contains(k) {
        if (!this.root) {
            return false;
        }

        let current = this.root;

        while (current) {
            if (k === current.value) {
                return true;
            }

            if (k < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

const k = 12;
if (bst.contains(k)) {
    console.log(`${k} znajduje się w drzewie BST.`);
} else {
    console.log(`${k} nie znajduje się w drzewie BST.`);
}
