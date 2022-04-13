var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    var index = _.reduce(storage, function(highest, item, key) {
      return key > highest ? key : highest;
    }, 0);

    if (storage[index] !== undefined) {
      while (index > -1) {
        storage[index + 1] = storage[index];
        index -= 1;
      }
    }
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    var highestIndex = _.reduce(storage, function(highest, item, key) {
      return key > highest ? key : highest;
    }, 0);
    var dequeued = storage[highestIndex];
    delete storage[highestIndex];
    return dequeued;
  };

  someInstance.size = function() {
    var count = 0;
    _.each(storage, function(item) {
      count++;
    });
    return count;
  };

  return someInstance;
};
