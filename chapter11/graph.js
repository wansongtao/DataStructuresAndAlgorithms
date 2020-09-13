
/**
 * @description 表示图的类
 * @param {*} v 
 */
function Graph(v){
    /**
     * @description 顶点的数量
     */
    this.vertices = v;

    /**
     * @description 边的数量
     */
    this.edges = 0;

    /**
     * @description 保存顶点的相邻顶点
     */
    this.adj = [];

    //初始化
    for(let i = 0; i < this.vertices; i++){
        this.adj[i] = [];
        this.adj[i].push("");
    }

    //存储已访问过的顶点
    this.marked = [];
    for(let i = 0; i < this.vertices; i++){
        this.marked[i] = false;  //初始化
    }

    this.dfs = dfs;
    this.addEdge = addEdge;
    this.showGraph = showGraph;
}

/**
 * @description 添加边
 * @param {*} v 顶点
 * @param {*} w 顶点
 */
function addEdge(v, w){
    //将顶点w添加到顶点v的邻接表
    this.adj[v].push(w);

    //将顶点v添加到顶点w的邻接表
    this.adj[w].push(v);

    //边数加一
    this.edges++;
}

/**
 * @description 打印所有顶点及其相邻顶点列表的方式来显示图
 */
function showGraph(){
    for(let i = 0; i < this.vertices; ++i){
        //打印顶点
        document.write(i + "->");

        for(let j = 0; j < this.vertices; j++){
            if(this.adj[i][j] != undefined){
                //打印出相邻顶点
                document.write(this.adj[i][j] + " ");
            }
        }
        document.write("<br>");
    }
}

/**
 * @description 深度优先搜索
 * @param {*} v 顶点
 */
function dfs(v) {
    this.marked[v] = true;

    if(this.adj[v] != undefined){
        document.write("Visited vertex: " + v + "<br>");
    }

    for (let w in this.adj[v]){
        if(!this.marked[w]){
            this.dfs(w);
        }
    }
}

let g = new Graph(5);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(1);