/*
Breadth-First Search
Finds the distance between two nodes in a graph by using graphs
traversal. The other type is Depth-First Search.
*/
function bfs(graph, root) {
    //stores distances to the root node
    var nodesLen = {};

    for(var i=0; i< graph.length; i++){
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;

    //start a queue too keep track of nodes visited
    var queue = [root];
    var current;
    //keeps traversing nodes until there are no more to traverse
    while (queue.length != 0) {
        current = queue.shift();
        //current connected node
        var curConnected = graph[current];
        var neighborIdx = [];
        var idx = curConnected.indexOf(1);
        while(idx != -1){
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        };
        // loops through connected nodes to get distance
        for (var j=0; j<neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] == Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
        };
    };
    return nodesLen;
};

var exampleGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

console.log(bfs(exampleGraph, 1));
// answer {0: 2, 1: 0, 2: 1, 3: 3, 4: Infinity}
