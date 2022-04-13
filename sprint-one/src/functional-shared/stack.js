var Stack = function() {
  var instance = {};

  instance.storage = {};

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value) {
    var highestIndex = stackMethods.findHighestIndex(this.storage);
    console.log(typeof highestIndex);
    if (this.storage[highestIndex] === undefined) {
      highestIndex = parseInt(highestIndex) - 1;
    }
    this.storage[parseInt(highestIndex) + 1] = value;
  },
  pop: function() {
    var highestIndex = stackMethods.findHighestIndex(this.storage);

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
  findHighestIndex: function(obj) {
    return _.reduce(obj, function(highest, item, key) {
      return key > highest ? key : highest;
    }, 0);
  }
};


