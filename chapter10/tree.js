/**
 * @description 树节点
 * @param {*} data 
 */
function Node(data){
    /**
     * @description 数据域，保存当前节点的数据信息
     */
    this.dataStore = data;

    /**
     * @description 保存当前节点的子节点
     */
    this.child = [];
}

/**
 * @description 树结构
 */
function Tree(){
    /**
     * @description 初始化根节点
     */
    this.root = new Node("root");
}

/**
 * @description 插入子节点
 * @param {*} parentNode 要插入节点的父节点
 * @param {*} data 要插入节点保存的数据信息
 */
Tree.prototype.insert = function(parentNode, data){
    let newNode = new Node(data);

    parentNode.child.push(newNode);
};

/**
 * @description 遍历所有节点
 * @param {*} node 遍历当前节点下的所有子节点
 */
Tree.prototype.prevOrder = function (node){
    try{
        if(node != null){
            if(node.dataStore == "root"){
                console.log(node);
               
                document.write(`根节点：${node.dataStore}<br>`);
            }
    
            if(node.child != null){
                node.child.forEach(element => {
                    console.log(element);
                    document.write(`父节点：${node.dataStore}&nbsp;&nbsp;子节点：${element.dataStore}&nbsp;&nbsp;<br>`);
                    this.prevOrder(element);
                }); 
            }
        }else{
            throw {message: "当前节点为空"};
        }
    }
    catch(ex){
        alert(ex.message);
    }
};


//主程序
let myNode = new Tree();

myNode.insert(myNode.root, "wst");
myNode.insert(myNode.root, "lst");
myNode.insert(myNode.root, "st");
myNode.insert(myNode.root.child[0], "aaa1");
myNode.insert(myNode.root.child[0], "aaa2");
myNode.insert(myNode.root.child[1], "bbb");
myNode.insert(myNode.root.child[2], "ccc");

console.log(myNode);


myNode.prevOrder(myNode.root);