var Stack = function() {
  var instance = Object.create(stackMethods);

  instance.storage = {};

  return instance;
};

var stackMethods = {
  push: function(value) {
    var highestIndex = stackMethods.getHighestIndex(this.storage);
    this.storage[highestIndex + 1] = value;
  },
  pop: function() {
    var highestIndex = stackMethods.getHighestIndex(this.storage);
    var popped = this.storage[highestIndex];
    delete this.storage[highestIndex];
    return popped;
  },
  size: function() {
    var counter = 0;
    _.each(this.storage, function(item) {
      counter++;
    });
    return counter;
  },
  getHighestIndex: function(obj) {
    return _.reduce(obj, function(highest, item, key) {
      return key > highest ? parseInt(key) : highest;
    }, 0);
  }
};


