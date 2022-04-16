var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  //inner function
  var innerFunction = function(parent) {

    // base case
    if (parent.children.length === 0) {
      return target === parent.value;
    } else {

      // recursive case
      var targetFound = _.reduce(parent.children, function(found, child) {
        return found || innerFunction(child);
      }, false);
      return target === parent.value || targetFound;
    }
  };

  return innerFunction(this);
};


//Some strategy


/*
 * Complexity: What is the time complexity of the above functions?
Worst case is 0(n) if ou ghave to touch every element
 */
