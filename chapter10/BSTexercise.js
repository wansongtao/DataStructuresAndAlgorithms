/**
 * @description 二叉树节点类，保存节点中的数据
 * @param {*} data 
 * @param {*} left 
 * @param {*} right 
 */
function TreeNode(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.count = 1;
}

/**
 * @description 二叉树方法类
 */
function BST(){
    /**
     * @description 初始化根节点
     */
    this.root = null;
}

/**
 * @description 在二叉树中查找给定值，返回一个数组，包含当前节点和父节点
 * @param {*} data 要查找的值
 */
function find(data){
    let current = this.root;
    let parent = current;

    let value = [];

    while(current != null){
        if(current.data == data){
            value.push(current);
            value.push(parent);
            break;
        }else if(current.data > data){
            parent = current;
            current = current.left;
        }else {
            parent = current;
            current = current.right;
        }
    }

    return value;
}

/**
 * @description 在二叉树上插入一个节点
 * @param {*} data 
 */
function insert(data){

    if(this.find(data)[0] == undefined){
        let newNode = new TreeNode(data, null, null);

        if(this.root == null){
            this.root = newNode;
        }
        else{
            let current = this.root;
            let parent;

            while(true){
                parent = current;

                if(current.data > data){
                    current = current.left;
                    if(current == null){
                        parent.left = newNode;
                        break;
                    }
                }
                else {
                    current = current.right;
                    if(current == null){
                        parent.right = newNode;
                        break;
                    }
                }
            }
        }
    }else{
        //插入相同的数据时，次数加一
        this.find(data)[0].count += 1;
    }
}

/**
 * @description 返回二叉树中的最大值
 */
function getMax(){
    let current = this.root;

    //二叉树的特性，较大的值保存在右子树中
    while(current.right != null){
        current = current.right;
    }

    if(this.root == null){
        return null;
    }

    return current.data;
}

/**
 * @description 返回二叉树中的最小值
 */
function getMin(){
    let current = this.root;

    //二叉树的特性，较小的值总是存在左子树中
    while(current.left != null){
        current = current.left;
    }

    if(this.root == null){
        return null;
    }

    return current.data;
}

/**
 * @description 根据传入的值，删除这个节点(这个节点下面的节点也会被删除)
 * @param {*} data 
 */
function remove(data){
    let delNode = this.find(data)[0];

    if(delNode != undefined){
        let parentNode = this.find(data)[1];

        if(parentNode.left.data == data){
            parentNode.left = null;
        }else{
            parentNode.right = null;
        }
    }else {
        return false;
    }
}

/**
 * @description 先序遍历
 * @param {*} node 
 */
function preOrder(node){
    if(node != null){
        gradesArr.push(node.data);
        preOrder(node.left);
        preOrder(node.right);
    }
}

BST.prototype.find = find;
BST.prototype.insert = insert;
BST.prototype.getMax = getMax;
BST.prototype.getMin = getMin;
BST.prototype.remove = remove;

//主程序
let grades = new BST();
let gradesArr = [];

grades.insert(60);
grades.insert(50);
grades.insert(40);
grades.insert(55);
grades.insert(80);
grades.insert(70);
grades.insert(90);

//grades.remove(48);
preOrder(grades.root);

console.log(gradesArr);
console.log(grades);