const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.leftItem = null;
    this.rightItem = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootItem = null;
  }

  root() {
    return this.rootItem;
  }

  add(data) {
    const NEW_NODE = new Node(data);
    if (!this.rootItem) {
      this.rootItem = NEW_NODE;
      return;
    }

    let currentNode = this.rootItem;

    while (currentNode) {
      if (NEW_NODE.data < currentNode.data) {
        if (!currentNode.leftItem) {
          currentNode.leftItem = NEW_NODE;
          return;
        }
        currentNode = currentNode.leftItem;
      } else if (NEW_NODE.data > currentNode.data) {
        if (!currentNode.rightItem) {
          currentNode.rightItem = NEW_NODE;
          return;
        }
        currentNode = currentNode.rightItem;
      } else {
        break;
      }
    }
  }

  has(data) {
    let currentNode = this.rootItem;
    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.leftItem;
      } else {
        currentNode = currentNode.rightItem;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootItem;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.leftItem;
      } else {
        currentNode = currentNode.rightItem;
      }
    }
    return null;
  }

  removeItem(currentNode, data) {
    if (!currentNode) {
      return null;
    }

    if (data === currentNode.data) {
      if (!currentNode.leftItem && !currentNode.rightItem) {
        return null;
      }
      if (!currentNode.leftItem) {
        return currentNode.rightItem;
      }
      if (!currentNode.rightItem) {
        return currentNode.leftItem;
      }

      let tempNode = currentNode.rightItem;
      while (tempNode.leftItem) {
        tempNode = tempNode.leftItem;
      }
      currentNode.data = tempNode.data;
      currentNode.rightItem = this.removeItem(
        currentNode.rightItem,
        tempNode.data,
      );
      return currentNode;
    } else if (data < currentNode.data) {
      currentNode.leftItem = this.removeItem(currentNode.leftItem, data);
      return currentNode;
    } else {
      currentNode.rightItem = this.removeItem(currentNode.rightItem, data);
      return currentNode;
    }
  }

  remove(data) {
    this.rootItem = this.removeItem(this.rootItem, data);
  }

  min() {
    if (!this.rootItem) {
      return null;
    }
    let currentNode = this.rootItem;
    while (currentNode.leftItem) {
      currentNode = currentNode.leftItem;
    }
    return currentNode.data;
  }

  max() {
    if (!this.rootItem) {
      return null;
    }
    let currentNode = this.rootItem;
    while (currentNode.rightItem) {
      currentNode = currentNode.rightItem;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
