import { BST } from './bst'



 const mainBinaryTree = () => {
    console.clear()
    console.group('Tree')
    var tree = new BST();
    tree.insert(23);
    tree.insert(45);
    tree.insert(16);
    tree.insert(37);
    tree.insert(3);
    tree.insert(99);
    tree.insert(22);
    console.table(tree)
    console.groupEnd()


    console.log("Inorder traversal: ");
    tree.inOrder(tree.root);

    console.log("Preorder traversal: ");
    tree.preOrder(tree.root);

    console.log("Postorder traversal: ");
    tree.postOrder(tree.root);

    var min = tree.getmin();
    console.log("The minimum value of the BST is: " + min);
    var max = tree.getmax();
    console.log("The maximum value of the BST is: " + max);

    console.log("Swap element 3");
    tree.swapEveryKLevel(tree.root, 3);
    tree.inOrder(tree.root);

    var value = parseInt(3);
    var found = tree.find(value);
    if (found != null) {
        console.log("Found " + value + " in the BST.");
    }
    else {
        console.log(value + " was not found in the BST.");
    }

}



export default mainBinaryTree