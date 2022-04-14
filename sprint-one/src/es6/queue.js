class Queue {
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var highestIndex = this.getHighestIndex(this.storage);
    if (this.storage[highestIndex] !== undefined) {
      while (highestIndex > -1) {
        this.storage[highestIndex + 1] = this.storage[highestIndex];
        highestIndex--;
      }
    }
    this.storage[0] = value;
  }

  dequeue() {
    var highestIndex = this.getHighestIndex(this.storage);
    var dequeued = this.storage[highestIndex];
    delete this.storage[highestIndex];
    return dequeued;
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
