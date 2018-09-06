/* Binary Search Tree: has only two child nodes per parent node. Smaller
values are inserted left to right. */

/* root, parent, left child, right child, siblings, r/l subtree
leaf (no children nodes) */

//node constructor
class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
};

class BST {
    constructor(){
        this.root = null;
    };
    add(data){
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            //recursive function to check which node to place new data in
            const searchTree = function(node){
                if (data < node.data) {
                    if (node.left === null){
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null){
                        //continues down the tree to search for null node
                        return searchTree(node.left);
                    };
                } else if (data > node.data){
                    if(node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null){
                        return searchTree(node.right);
                    };
                } else {
                    //if values are equal returns null.
                    return null;
                };
            };
            return searchTree(node);
        };
    };
    //keeps looking for the left node to find the minimum value.
    findMin(){
        let current = this.root;
        while (current.left !== null){
            current = current.left;
        }
        return current.data;
    };
    //keeps looking for the right node for the largest value.
    findMax(){
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    };
    //checks to see if a value exists in the tree and returns the node
    find(data) {
        let current = this.root;
        while (current.data !== data){
            //if value is less then move left into the tree or right if it's more
            if (data < current.data){
                current = current.left;
            } else {
                current = current.right;
            };
            if (current === null) {
                return null;
            }
        }
        return current;
    };
    //checks to see if value is in the tree and returns boolean
    isPresent(data) {
        let current = this.root;
        while (current){
            if (data === current.data){
                return true;
            }
            if (data < current.data){
                current = current.left;
            } else{
                current = current.right;
            }
        }
        return false;
    };
    //removes data node
    remove(data){
        const removeNode = function(node, data){
            //check for empty tree
            if (node == null){
                return null;
            }
            if (data == node.data){
                //node has no children
                if (node.left == null && node.right == null) {
                    return null;
                };
                //node has no left child
                if (node.left == null) {
                    return node.right;
                };
                //node has no right child
                if (node.right == null) {
                    return node.left;
                };
                //node has two children
                var tempNode = node.right;
                //go down temporary node of the node to be deleted
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                };
                node.data = tempNode.data;
                //uses recursion to set up the new node
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    };
};

//tests
const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));
