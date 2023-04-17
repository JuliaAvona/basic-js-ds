const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  // let root

  root() {
    return this.root;
  }

  add(data) {
    if (this.root) {
      this.addNode(this.root, data);
    } else {
      this.root = new Node(data);
    }
  }

  addNode(node, data) {
    if (node.data > data) {
      if (node.left === null) {
        node.left = new Node(data);
      } else {
        this.addNode(node.left, data);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(data);
      } else {
        this.addNode(node.right, data);
      }
    }
  }

  has(data) {
    //переписать has исп searchNode()
    return this.search(this.root, data);
  }

  search(node, data) {
    if (node.data === data) {
      return true;
    } else if (node.data > data) {
      if (node.left === null) {
        return false;
      } else {
        return this.search(node.left, data);
      }
    } else {
      if (node.right === null) {
        return false;
      } else {
        return this.search(node.right, data);
      }
    }
  }

  find(data) {
    return this.searchNode(this.root, data);
  }

  searchNode(node, data) {
    if (node.data === data) {
      return node;
    } else if (node.data > data) {
      if (node.left === null) {
        return null;
      } else {
        return this.search(node.left, data);
      }
    } else {
      if (node.right === null) {
        return null;
      } else {
        return this.search(node.right, data);
      }
    }
  }

  remove(data) {}

  removeNode(node, data) {
    
  }

  min() {
    if (this.root) {
      let node = this.root;
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    } else {
      return null;
    }
  }

  max() {
    if (this.root) {
      let node = this.root;
      while (node.right !== null) {
        node = node.right;
      }
      return node;
    } else {
      return null;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
