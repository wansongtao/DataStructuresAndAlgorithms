/**
 * @description 保存顶点和边
 * @param {*} label 顶点
 * @param {*} wasVisited 该顶点是否被访问过(true/false) 
 */
function Verttex(label, wasVisited){
    this.label = label;

    this.wasVisited = wasVisited;
}

function Graph(v){
    this.vertices = v;
    this.edges = 0;
    this.adj = [];

    for(let i = 0; i < this.vertices; i++){
        this.adj[i] = [];
        this.adj[i].push("");
    }

    this.addEdge = addEdge;
    this.showGraph = showGraph;
}