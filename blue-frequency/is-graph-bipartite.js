// 785
// There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected edge between node u and node v. The graph has the following properties:

// There are no self-edges (graph[u] does not contain u).
// There are no parallel edges (graph[u] does not contain duplicate values).
// If v is in graph[u], then u is in graph[v] (the graph is undirected).
// The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
// A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.

// Return true if and only if it is bipartite.

 /**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    /**Algo (Final Reviewed) 
      Crux Of the Problem : if a graph is said be to bipartate, if and only if, 
        i)  We can divide the nodes in to two DISTINCT SETS
        ii) EVERY EDGE in the entire GRAPH, MUST CONNECT A NODE FROM SET 1 TO A NODE IN SET B
        iii) alternatively, THEY CAN'T BE AN EDGE, THAT CONNECT NODES WITHIN SET 1 OR SET2 (no internal connection edge in a set)

    -> given graph vertices are just array indexes, 0 to n-1, and edges are listed within these indexes.
    -> we can color each graph either red/blue initially
      -> and color its childern alterative color, IF THEY ARE NOT YET COLORED ***IMP*** AND PUSH ITS CHILDERN TO THE STACK
      - if both parent and child has same color, then we can RETURN FALSE RIGHT AWAY
      - if both are of different colors then we dont have to do anything, we DONT HAVE TO PUSH THEM TO THE STACK.
we are using the DFS traversal of nodes, so using the stack.
        Realization of iterative DFS just now Aug 26th, 23...
        
        DFS using iterative apporach

        --- Old --- 

--- Wow you just realized, on Aug 26th, 2023, to figure out, in iterative appraoch, if we use Queue it is Breadth First Search, and if we use Stack that'll become Depth First Search 

Whyy>>>>

take a complete tree of 3 levels, in BFS, we put first level childern into queue, the first node we process is the leftmost child of root, followd by right child of the root, but not the below level.

In the above case, if we use stack, most recent node will be popped out, at 1st level, both bfs and dfs looks same, we push childern of root to the stack or queue.

In the next level in case of stack, we take the most recencly pushed element, which is rightmost, then we push it's childer nto the stack those are in next below level while level the left childern to be visited alter time (which is not a level by level traversal), and if we track the visite pattern from root to rightmost and this is a path by path traversal but without any recursion....


     Problem statment Understanding: 
     1) Understand the problem, we need to partition the graph into 2 sets, so that EVERY EDGE IN THE GRAPH connects a NODE from first SET to a node from SECOND set.

     In the example one of the given problem, YOU ARE CONFUSED THAT WHY CAN'T WE MAKE NODE 2 in set1 and nodes 0,1,3 in the second ???? 
     problem with that is WE ARE GIVEN EVERY EDGE SHOULD CONNECT SET 1 NODE TO SET 2 NODE, so if we take edges from 0 -> 1 and 0->3 these two edges connecting nodes WITHIN a same set (set2), which violates the problem.

     2) It is given that, graph may not be CONNECTED, so the we can have multiply unconnected graphs in the given input.


     Having known both of the above points, and understanding of implementing DFS with iterative appraoch we can jump into implenetsion

     Implementation : 
     
     ** If we can see given graph's two sets as two colors, then we should be able to color all the node in a
     alternative colors in each LEVEL.

     WHENEVER we encounter, a child of same color as it parent, we can stop the algorithm saying that we can't partite the graph

     If we can able to color all the levels then we can say we can partion the graph.
     
     ** since we may have multiple unconnected graphs in our input, we can't use CONVENTIONAL dfs (recurive) approach since root is not connecting all the nodes in the given input, so we use iterative DFS approach (this is the first time)

     Time : O(V+E) v is the vertices and E is the edges
     Space : O(V) atmost we can have no. of nodes in the stack.


     Few mistakes during the implementation

     Size of the color array shouyld be V, since we are using colors on each level not to each node.

     We can ignore the len apporach as we did in bfs technique, since it wont make any difference.

     */

     let stack = []; // regualr array opetaions
     // since graph is unconnected we need to travers every node.
     let V = graph.length;
     let E = graph[0].length;
     if(V === 1 && E === 1) return false; // we need two sets
     let colors = new Array(V).fill(-1); // each node is uncolored initially.
     // 0 is red and 1 is for blue color
     for(let i=0; i<V; i++) { // where node is array list of edges.
     // only consider roots those are not visited.
         if(colors[i] === -1) {
         // lets color the node as red intially
         colors[i] = 0; // colored as Red
         stack.push(i); // we pushed the current node, it may or may not be the root, so we are processing all the nodes
         while(stack.length) { // regualr bfs or dfs strategy
         /* WE CAN IGNORE TAKING THE LENGTH AND PROCESSING EACH NODE, IF PRESENT WILL NOT CHANGE ANYTHING, since we are popping the elemennt out of the stack, which reduceses the lenght
            //  let len = stack.length;
            //  for(let i=0; i<len; i++) {
                 
         END          */
                  // process the current node
                  let parent = stack.pop();
                  // go over all the childern of curr node
                  for(let childern of graph[parent]) {
                      if(colors[childern] === -1) {
                         // lets color the childern different from paretnt
                         colors[childern] = colors[parent] === 1 ? 0 : 1;
                         // let push the childer to the stack.
                         stack.push(childern);
                      } else if(colors[childern] === colors[parent]) { // if both parent and child has same color
                          return false;
                      }
                      // the other case would be both parent and child has different colors, in that case, we should be good
                      // and we do not push such childern into the stack.
                  }
             //}  
         }
         }
     }
     return true;
};