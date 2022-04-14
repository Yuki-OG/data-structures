var Queue = function() {
  var instance = Object.create(queueMethods);

  instance.storage = {};

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    var highestIndex = queueMethods.getHighestIndex(this.storage);

    if (this.storage[highestIndex] !== undefined) {
      while (highestIndex > -1) {
        this.storage[highestIndex + 1] = this.storage[highestIndex];
        highestIndex--;
      }
    }
    this.storage[0] = value;
  },
  dequeue: function() {
    var highestIndex = queueMethods.getHighestIndex(this.storage);
    var dequeued = this.storage[highestIndex];
    delete this.storage[highestIndex];
    return dequeued;
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


