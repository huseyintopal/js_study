// We provided some simple React template code. Your goal is to modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. You are free to add classes and styles, but make sure you leave the element ID's as they are.

// Submit your code once it is complete and our system will validate your output.
///react counter sorusu
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);

  }

}

  render() {
    return (
      <div id="mainArea">
        <p>button count: <span>0</span></p>
        <button id="mainButton">Increase</button>
      </div>
    );
  }

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
// react sorusu yukarda
//react cevap:
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Toggle = () => {
  const [on, setOn] = useState(true);

  return (
    <button onClick={() => setOn(!on)}>{ on ? 'ON' : 'OFF' }</button>
  );
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
// react counter cevap


// 2. soru 
Hamiltonian Path
HIDE QUESTION
Have the function HamiltonianPath(strArr) take strArr which will be an array of length three. The first part of the array will be a list of vertices in a graph in the form (A,B,C,...), the second part of the array will be the edges connecting the vertices in the form (A-B,C-D,...) where each edge is bidirectional. The last part of the array will be a set of vertices in the form (X,Y,Z,...) and your program will have to determine whether or not the set of vertices given forms a Hamiltonian path on the graph which means that every vertex in the graph is visited only once in the order given.

For example: if strArr is ["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(C,A,D,B)"] then the vertices (C,A,D,B) in this order do in fact form a Hamiltonian path on the graph so your program should return the string yes. If for example the last part of the array was (D,A,B,C) then this doesn't form a Hamiltonian path because once you get to B you can't get to C in the graph without passing through the visited vertices again. Here your program should return the vertex where the path had to terminate, in this case your program should return B.

The graph will have at least 2 vertices and all the vertices in the graph will be connected.

// soru ekranı;
function GraphChallenge(strArr) { 

    // code goes here  
    return strArr; 
  
  }
     
  // keep this function call here 
  console.log(GraphChallenge(readline()));
  //2.soru ekranı

  //3.  soru :
  Polynomial Expansion
HIDE QUESTION
Have the function PolynomialExpansion(str) take str which will be a string representing a polynomial containing only (+/-) integers, a letter, parenthesis, and the symbol "^", and return it in expanded form. For example: if str is "(2x^2+4)(6x^3+3)", then the output should be "12x^5+24x^3+6x^2+12". Both the input and output should contain no spaces. The input will only contain one letter, such as "x", "y", "b", etc. There will only be four parenthesis in the input and your output should contain no parenthesis. The output should be returned with the highest exponential element first down to the lowest.

More generally, the form of str will be: ([+/-]{num}[{letter}[{^}[+/-]{num}]]...[[+/-]{num}]...)(copy) where "[]" represents optional features, "{}" represents mandatory features, "num" represents integers and "letter" represents letters such as "x".
//3. soru ekranı;
function MathChallenge(str) { 

    // code goes here  
    return str; 
  
  }
     
  // keep this function call here 
  console.log(MathChallenge(readline()));
  // 3, soru ekranı sonu

// import GraphVertex from '../../../data-structures/graph/GraphVertex';

// /**
//  * @param {number[][]} adjacencyMatrix
//  * @param {object} verticesIndices
//  * @param {GraphVertex[]} cycle
//  * @param {GraphVertex} vertexCandidate
//  * @return {boolean}
//  */
// function isSafe(adjacencyMatrix, verticesIndices, cycle, vertexCandidate) {
//   const endVertex = cycle[cycle.length - 1];

//   // Get end and candidate vertices indices in adjacency matrix.
//   const candidateVertexAdjacencyIndex = verticesIndices[vertexCandidate.getKey()];
//   const endVertexAdjacencyIndex = verticesIndices[endVertex.getKey()];

//   // Check if last vertex in the path and candidate vertex are adjacent.
//   if (adjacencyMatrix[endVertexAdjacencyIndex][candidateVertexAdjacencyIndex] === Infinity) {
//     return false;
//   }

//   // Check if vertexCandidate is being added to the path for the first time.
//   const candidateDuplicate = cycle.find((vertex) => vertex.getKey() === vertexCandidate.getKey());

//   return !candidateDuplicate;
// }

// /**
//  * @param {number[][]} adjacencyMatrix
//  * @param {object} verticesIndices
//  * @param {GraphVertex[]} cycle
//  * @return {boolean}
//  */
// function isCycle(adjacencyMatrix, verticesIndices, cycle) {
//   // Check if first and last vertices in hamiltonian path are adjacent.

//   // Get start and end vertices from the path.
//   const startVertex = cycle[0];
//   const endVertex = cycle[cycle.length - 1];

//   // Get start/end vertices indices in adjacency matrix.
//   const startVertexAdjacencyIndex = verticesIndices[startVertex.getKey()];
//   const endVertexAdjacencyIndex = verticesIndices[endVertex.getKey()];

//   // Check if we can go from end vertex to the start one.
//   return adjacencyMatrix[endVertexAdjacencyIndex][startVertexAdjacencyIndex] !== Infinity;
// }

// /**
//  * @param {number[][]} adjacencyMatrix
//  * @param {GraphVertex[]} vertices
//  * @param {object} verticesIndices
//  * @param {GraphVertex[][]} cycles
//  * @param {GraphVertex[]} cycle
//  */
// function hamiltonianCycleRecursive({
//   adjacencyMatrix,
//   vertices,
//   verticesIndices,
//   cycles,
//   cycle,
// }) {
//   // Clone cycle in order to prevent it from modification by other DFS branches.
//   const currentCycle = [...cycle].map((vertex) => new GraphVertex(vertex.value));

//   if (vertices.length === currentCycle.length) {
//     // Hamiltonian path is found.
//     // Now we need to check if it is cycle or not.
//     if (isCycle(adjacencyMatrix, verticesIndices, currentCycle)) {
//       // Another solution has been found. Save it.
//       cycles.push(currentCycle);
//     }
//     return;
//   }

//   for (let vertexIndex = 0; vertexIndex < vertices.length; vertexIndex += 1) {
//     // Get vertex candidate that we will try to put into next path step and see if it fits.
//     const vertexCandidate = vertices[vertexIndex];

//     // Check if it is safe to put vertex candidate to cycle.
//     if (isSafe(adjacencyMatrix, verticesIndices, currentCycle, vertexCandidate)) {
//       // Add candidate vertex to cycle path.
//       currentCycle.push(vertexCandidate);

//       // Try to find other vertices in cycle.
//       hamiltonianCycleRecursive({
//         adjacencyMatrix,
//         vertices,
//         verticesIndices,
//         cycles,
//         cycle: currentCycle,
//       });

//       // BACKTRACKING.
//       // Remove candidate vertex from cycle path in order to try another one.
//       currentCycle.pop();
//     }
//   }
// }

// /**
//  * @param {Graph} graph
//  * @return {GraphVertex[][]}
//  */
// export default function hamiltonianCycle(graph) {
//   // Gather some information about the graph that we will need to during
//   // the problem solving.
//   const verticesIndices = graph.getVerticesIndices();
//   const adjacencyMatrix = graph.getAdjacencyMatrix();
//   const vertices = graph.getAllVertices();

//   // Define start vertex. We will always pick the first one
//   // this it doesn't matter which vertex to pick in a cycle.
//   // Every vertex is in a cycle so we can start from any of them.
//   const startVertex = vertices[0];

//   // Init cycles array that will hold all solutions.
//   const cycles = [];

//   // Init cycle array that will hold current cycle path.
//   const cycle = [startVertex];

//   // Try to find cycles recursively in Depth First Search order.
//   hamiltonianCycleRecursive({
//     adjacencyMatrix,
//     vertices,
//     verticesIndices,
//     cycles,
//     cycle,
//   });

//   // Return found cycles.
//   return cycles;
// }