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
 * @param {*} parentNode 要插入节点的父节点保存的数据
 * @param {*} data 要插入节点保存的数据信息
 */
Tree.prototype.insert = function(parentData, data){
    try{
        let newNode = new Node(data);

        let parentNode = this.find(this.root, parentData);

        if(parentNode != null){
            parentNode.child.push(newNode);
        }
        else{
            throw {
                message: "未查找到父节点"
            };
        }
        
    }
    catch(ex){
        alert(ex.message);
    }
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

/**
 * @description 根据数据信息，返回节点
 * @param {*} data 
 * @param node 从当前节点开始向后查找
 */
Tree.prototype.find = function(node, data){
    try{
        if(node != null){
            if(node.child != null){
                if(node.dataStore == data){
                    return node;
                }

                for(let i = 0; i < node.child.length; i++){
                    if(node.child[i].dataStore == data){
                        return node.child[i];
                    }else{
                        find(node.child[i], data);
                    }
                }

            }
        }
    }
    catch(ex){
        alert(ex.message);
    }
}


//主程序
let myNode = new Tree();

myNode.insert("root", "wst");
myNode.insert("root", "lst");
myNode.insert("root", "st");
myNode.insert("wst", "aaa1");
myNode.insert("wst", "aaa2");
myNode.insert("lst", "bbb");
myNode.insert("st", "ccc");

console.log(myNode);


myNode.prevOrder(myNode.root);