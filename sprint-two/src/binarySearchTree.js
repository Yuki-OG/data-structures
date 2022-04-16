var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value && !this.left) {
    this.left = BinarySearchTree(value);
  } else if (value > this.value && !this.right) {
    this.right = BinarySearchTree(value);
  }
  if (value < this.value && this.left) {
    this.left.insert(value);
  } else if (value > this.value && this.right) {
    this.right.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.value < target && this.left === null) {
    return false;
  }
  if (this.value > target && this.right === null) {
    return false;
  }
  if (this.value < target && this.left === null) {
    return this.left.contains(target);
  } else {
    return this.right.contains(target);
  }


};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

  cb(this.value);

  if (this.left === null && this.right === null) {
    return;
  }
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
