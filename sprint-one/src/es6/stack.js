class Stack {
  constructor() {
    this.storage = {};
  }

  push(value) {
    var highestIndex = this.getHighestIndex(this.storage);
    this.storage[highestIndex + 1] = value;
  }

  pop() {
    var highestIndex = this.getHighestIndex(this.storage);
    var popped = this.storage[highestIndex];
    delete this.storage[highestIndex];
    return popped;
  }

  size() {
    var counter = 0;
    _.each(this.storage, function(item) {
      counter++;
    });
    return counter;
  }

  getHighestIndex(obj) {
    return _.reduce(obj, function(highest, item, key) {
      return key > highest ? parseInt(key) : highest;
    }, 0);
  }
}