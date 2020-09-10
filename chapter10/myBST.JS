/**
 * @description 用来保存二叉树的节点
 * @param data 节点的值
 * @param left 节点的左子节点
 * @param right 节点的右子节点
 */
function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
}

/**
 * @description 返回节点的值
 */
Node.prototype.show = function(){
    return this.data;
};

/**
 * @description 二叉树方法类
 */
function MyBST(){
    /**
     * @description 初始化根节点
     */
    this.root = null;
}

MyBST.prototype.insertNode = insertNode;
MyBST.prototype.inOrder = inOrder;
MyBST.prototype.preOrder = preOrder;
MyBST.prototype.postOrder = postOrder;
MyBST.prototype.getMax = getMax;
MyBST.prototype.getMin = getMin;
MyBST.prototype.find = find;

/**
 * @description 在二叉树上插入一个节点
 * @param data 要插入的值
 */
function insertNode(data){
    //新建一个对象并存入数据
    let treeNode = new Node(data, null, null);

    if(this.root == null) {
        this.root = treeNode;
    }else {
        let current = this.root;
        let parent;

        while(true){
            parent = current;

            //较小的值存入左节点，较大的值存入右节点
            if(current.data > data){
                current = current.left;
                if(current == null){
                    parent.left = treeNode;
                    break;
                }
            }else {
                current = current.right;
                if(current == null){
                    parent.right = treeNode;
                    break;
                }
            }
        }
    }
}

/**
 * @description 中序遍历二叉树：先访问左子树，再访问根节点，最后访问右子树
 * @param treeNode 传入根节点
 */
function inOrder(treeNode){
    if(treeNode != null){
        inOrder(treeNode.left);
        document.write(treeNode.show() + "  ");
        inOrder(treeNode.right);
    }
}

/**
 * @description 先序遍历二叉树：先访问根节点，再访问左子树，最后访问右子树
 * @param treeNode 传入根节点
 */
function preOrder(treeNode){
    if(treeNode != null){
        document.write(treeNode.show() + "  ");
        preOrder(treeNode.left);
        preOrder(treeNode.right);
    }
}

/**
 * @description 后序遍历二叉树：先访问左子树，再访问右子树，最后访问根节点
 * @param treeNode 传入根节点
 */
function postOrder(treeNode){
    if(treeNode != null){
        postOrder(treeNode.left);
        postOrder(treeNode.right);
        document.write(treeNode.show() + "  ");
    }
}

/**
 * @description 返回二叉树中的最大值，根据二叉树的特性，较大的值在右子树
 */
function getMax(){
    let current = this.root;

    while(current.right != null){
        current = current.right;
    }
    return current.data;
}

/**
 * @description 返回二叉树中的最小值，根据二叉树的特性，较小的值在左子树
 */
function getMin(){
    let current = this.root;

    while(current.left != null){
        current = current.left;
    }
    return current.data;
}

/**
 * @description 在二叉树上查找给定的值，返回这个节点
 * @param data 要查找的值
 */
function find(data){
    let current = this.root;
    let value = null;

    while (current != null){
        if(current.data == data){
            value = current;
            break;
        }else if(current.data > data){
            current = current.left;
        }else {
            current = current.right;
        }
    }

    return value;
}

//主程序
let nums = new MyBST();

nums.insertNode(56);
nums.insertNode(32);
nums.insertNode(22);
nums.insertNode(88);
nums.insertNode(71);
nums.insertNode(90);

nums.preOrder(nums.root);

console.log(nums.getMax());
console.log(nums.getMin());
console.log(nums.find(90));