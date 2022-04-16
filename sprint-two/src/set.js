var Set = function() {
  this._storage = [];
};


Set.prototype.add = function(item) {

  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

Set.prototype.contains = function(item) {
  for (let i = 0; i < this._storage.length; i ++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

Set.prototype.remove = function(item) {
  for (let i = 0; i < this._storage.length; i ++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
