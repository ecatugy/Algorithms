function Node(data, left, right) {
   this.data = data;
   this.left = left;
   this.right = right;
   this.show = show;
}

function show() {
   return this.data;
}

export function BST() {
   this.root = null;
   this.insert = insert;
   this.inOrder = inOrder;
   this.preOrder = preOrder;
   this.postOrder = postOrder;
   this.getmin = getmin;
   this.getmax = getmax;
   this.find = find;
   this.remove = remove;
   this.removeNode = removeNode;
   this.getSmallest = getSmallest;
   this.swapEveryKLevel = swapEveryKLevel
}

function insert(data) {
   var n = new Node(data, null, null);
   if (this.root === null) {
      this.root = n;
   }
   else {
      var current = this.root;
      var parent;
      while (true) {
         parent = current;
         if (data < current.data) {
            current = current.left;
            if (current === null) {
               parent.left = n;
               break;
            }
         }
         else {
            current = current.right;
            if (current === null) {
               parent.right = n;
               break;
            }
         }
      }
   }
}

function inOrder(node) {
   if (!(node === null)) {
      inOrder(node.left);
      console.log(node.show() + " ");
      inOrder(node.right);
   }
}

function preOrder(node) {
   if (!(node === null)) {
      console.log(node.show() + " ");
      preOrder(node.left);
      preOrder(node.right);
   }
}

function postOrder(node) {
   if (!(node === null)) {
      postOrder(node.left);
      postOrder(node.right);
      console.log(node.show() + " ");
   }
}

function getmin() {
   var current = this.root;
   console.log("debug: " + current.data);
   while (!(current.left === null)) {
      current = current.left;
   }
   return current.data;
}


// A utility function swap left- node & right node of tree
// of every k'th level
function swapEveryKLevelUtil(root, level, k) {
   // base case
   if (root == null ||
      (root.left == null && root.right == null))
      return;

   //if current level + 1 is present in swap vector
   //then we swap left & right node
   if ((level + 1) % k == 0) {
      let temp = root.left;
      root.left = root.right;
      root.right = temp;
   }

   // Recur for left and right subtrees
   swapEveryKLevelUtil(root.left, level + 1, k);
   swapEveryKLevelUtil(root.right, level + 1, k);
}

// This function mainly calls recursive function
// swapEveryKLevelUtil()
function swapEveryKLevel(root, k) {
   // call swapEveryKLevelUtil function with
   // initial level as 1.
   swapEveryKLevelUtil(root, 1, k);
}


function getmax() {
   var current = this.root;
   while (!(current.right === null)) {
      current = current.right;
   }
   return current.data;
}

function find(data) {
   var current = this.root;
   while (current.data != data) {
      if (data < current.data) {
         current = current.left;
      }
      else {
         current = current.right;
      }
      if (current === null) {
         return null;
      }
   }
   return current;
}

function getSmallest(node) {
   if (node.left === null) {
      return node;
   }
   else {
      return getSmallest(node.left);
   }
}

function remove(data) {
   root = removeNode(this.root, data);
}

function removeNode(node, data) {
   if (node == null) {
      return null;
   }
   if (data === node.data) {
      // node has no children
      if (node.left == null && node.right == null) {
         return null;
      }
      // node has no left child
      if (node.left === null) {
         return node.right;
      }
      // node has no right child
      if (node.right === null) {
         return node.left;
      }
      // node has two children
      var tempNode = getSmallest(node.right);
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
   }
   else if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
   }
   else {
      node.right = removeNode(node.right, data);
      return node;
   }
}




