var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var highestIndex = _.reduce(storage, function(highest, item, key) {
      return key > highest ? key : highest;
    }, 0);
    storage[highestIndex + 1] = value;
  };

  someInstance.pop = function() {
    var highestIndex = _.reduce(storage, function(highest, item, key) {
      return key > highest ? key : highest;
    }, 0);
    var popped = storage[highestIndex];
    delete storage[highestIndex];
    return popped;

  };

  someInstance.size = function() {
    var count = 0;
    _.each(storage, function(item) {
      count++;
    });
    return count;
    // return _.size(storage);
  };

  return someInstance;
};