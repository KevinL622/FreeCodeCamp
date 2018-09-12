/* Graph Data Structure */

/*
Data are called nodes / vertices and connections in between are called
edges. Example graph are social networks if people are connected.

Types
1) Directed Graphs-- edges are directional, ex webpage links
2) Undirected Graphs-- edges have no direction, ex social network
*/

//Ways to represent graphs
//Adjacency List text representation
var undirectedGraph = {
    NodeA: ["NodeA"],
    NodeB: ["NodeA", "NodeC"],
    NodeC: ["NodeB"]
};

//Adjacency list number array representation
var undirectedGraphArray = {
    [1], //Node A
    [0,2], //Node B
    [1] //Node C
};

/*
Adjacency Matrix (two dimensional array) must have same number of
elements in each array as total number of nodes. 1 indicates there
is a relationship (edge) with that node
*/
//undirected adjacency matrix (A--B--C)
var adjacencyMatrixUndirected = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

//directed adjacency matrix (C--> B--> A)
var adjMatrixDirected = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0]
];

/*
incidence matrix uses rows to represent nodes and columns to rep edges
Therefore there can be an uneven number of rows and columns
Is also a 2d array.
*/

//undirected incidence matrix
var incidenceMatrixUndirected = [
    [1, 0, 1, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1]
];

//directed incidence graph -1 means connnected from, 1 connect to
var incidenceMatrixDirected = [
    [1, 0, -1, 1],
    [-1, 1, 0, 0],
    [0, -1, 1, 0],
    [0, 0, 0, -1]
];
