

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //console.log(this._storage);
  return this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //console.log(this._storage);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //for each element in storage
  //if storage[index] ===
  this._storage.each(function(item, position, storage) {
    if (position === index) {
      storage.splice(index, 1);
    }
  });
};

HashTable.prototype.checkRatio = function() {
  var elementCounter = 0;
  for (var i = 0; i < this._storage.length; i++) {
    elementCounter ++;
  }
  if (elementCounter / this._limit > .75) {
    // make big
    this._limit *= 2;
  } else if (elementCounter / this._limit < .25) {
    // make smol
    this._limit /= 2;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
  0(n)
 */


