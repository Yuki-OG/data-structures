var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
      list.head = list.tail;

    } else {
      list.tail.next = newNode;
      newNode.prev = list.tail;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var ogHead = list.head;
    list.head = ogHead.next;
    if (list.head !== null) {
      list.head.prev = null;
    }

    return ogHead.value;
  };

  list.contains = function(target) {
    // function recursion(node)
    node = list.head;
    //if node value == target  [ base case ]
    var innerFunction = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next) {
        return innerFunction(node.next);
      }

      return false;
    };
    return innerFunction(node);

  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */