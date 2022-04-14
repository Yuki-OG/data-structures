var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var highestIndex = getHighestIndex(this.storage);
  this.storage[highestIndex + 1] = value;
};

Stack.prototype.pop = function() {
  var highestIndex = getHighestIndex(this.storage);
  var popped = this.storage[highestIndex];
  delete this.storage[highestIndex];
  return popped;
};

Stack.prototype.size = function() {
  var counter = 0;
  _.each(this.storage, function(item) {
    counter++;
  });
  return counter;
};

var getHighestIndex = function(obj) {
  return _.reduce(obj, function(highest, item, key) {
    return key > highest ? parseInt(key) : highest;
  }, 0);
};


