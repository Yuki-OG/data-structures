// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new GraphNode(node);
  this.storage[node] = newNode;
};

Graph.prototype.contains = function(node) {
  for (let key in this.storage) {
    if (this.storage[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (let i = 0; i < this.storage[node].edges.length; i++) {
    this.removeEdge(node, this.storage[node].edges[i]);
  }

  for (let key in this.storage) {
    if (this.storage[key].value === node) {
      delete this.storage[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].edges.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage[fromNode].edges.length; i++) {
    if (this.storage[fromNode].edges[i] === toNode) {
      this.storage[fromNode].edges.splice(i, 1);
    }
  }
  for (var i = 0; i < this.storage[toNode].edges.length; i++) {
    if (this.storage[toNode].edges[i] === fromNode) {
      this.storage[toNode].edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(Object.keys(this.storage), function(item) {
    cb(item);
  });
};

var GraphNode = function(value) {
  this.value = value;
  this.edges = [];
};

/*
 * Complexity: What is the time complexity of the above functions?
_.each(this.storage, function(node) {
  console.log
});
 */















// // Instantiate a new graph
// var Graph = function() {
//   this.storage = {
//     //node : [edges]
//   };
// };

// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node) {
//   this.storage[node] = [];
// };

// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node) {
//   //node = node + '';
//   for (let key in this.storage) {
//     if (key === String(node)) {
//       return true;
//     }
//   }
//   return false;
// };

// // Removes a node from the graph.
// Graph.prototype.removeNode = function(node) {
//   for (let i = 0; i < this.storage[node].length; i++) {
//     this.removeEdge(this.storage[node][i], node);
//   }
//   delete this.storage[node];
// };

// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode) {
//   return this.storage[fromNode].includes(toNode);
// };

// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNode, toNode) {
//   this.storage[fromNode].push(toNode);
//   this.storage[toNode].push(fromNode);
// };

// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode) {
// //if (this.storage[fromNode][i] === toNode)
//   for (let i = 0; i < this.storage[fromNode].length; i++) {
//     if (this.storage[fromNode][i] === toNode) {
//       this.storage[fromNode].splice(i, 1);
//     }
//   }
//   for (let i = 0; i < this.storage[toNode].length; i++) {
//     if (this.storage[toNode][i] === fromNode) {
//       this.storage[toNode].splice(i, 1);
//     }
//   }

// };

// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb) {
//   for (let key in this.storage) {
//     this.storage[cb(key)] = this.storage[key];
//   }
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
// _.each(this.storage, function(node) {
//   console.log
// });
//  */


