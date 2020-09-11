/**
 * @description 用来保存树节点上的数据和其他节点的链接
 * @param {*} data 自身的值
 * @param {*} left 左节点的值
 * @param {*} right 右节点的值
 */
function Node(data, left, right){   
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}

/**
 * @description 显示保存在节点中的数据
 */
function show(){
    return this.data;
}

/**
 * @description 二叉树方法类
 */
function BST(){
    /**
     * @description 根节点
     */
    this.root = null;

    /**
     * @description 插入节点
     */
    this.insert = insert;


    /**
     * @description 中序遍历
     */
    // this.inOrder = inOrder;

    /**
     * @description 返回二叉树上的最小值
     */
    this.getMin = getMin;

    /**
     * @description 返回二叉树上的最大值
     */
    this.getMax = getMax;

    /**
     * @description 在二叉树上查找给定值,返回保存该值的节点
     */
    this.find = find;

    /**
     * @description 在二叉树上删除一个节点
     */
    this.remove = remove;
}

/**
 * @description 插入节点，遍历二叉树在合适的位置插入
 * @param {*} data 
 */
function insert(data){
    if(this.find(data)[0] == undefined){
        let n = new Node(data, null, null);

        //如果根节点为空，则直接将值插入根节点
        if(this.root == null){
            this.root = n;
        }
        else {
            /**
            * @description 当前节点
            */
            let current = this.root;

            /**
            * @description 父节点
            */
            let parent;

            while(true) {
                parent = current;

                //二叉树中较小的值存在左边
                if(data < current.data){
                    current = current.left;
                    if(current == null){
                        parent.left = n;
                        break;
                    }
                }
                else {
                    current = current.right;
                    if(current == null){
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
    else {
        this.find(data)[0].count += 1;
    }
    
}

/**
 * @description 中序遍历：先访问左子树，在访问根节点，最后访问右子树
 * @param {*} node 根节点
 */
function inOrder(node){
    if(!(node == null)){
        inOrder(node.left);
        document.write(node.show() + "  ");

        inOrder(node.right);
    }
}

/**
 * @description 先序遍历：先访问根节点，再访问左子树，最后访问右子树
 * @param {*} node 
 */
function preOrder(node){
    if(node != null){
        document.write(node.show() + "  ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

/**
 * @description 后序遍历：先访问左子树，再访问右子树，最后访问根节点
 * @param {*} node 
 */
function postOrder(node){
    if(node != null){
        postOrder(node.left);
        postOrder(node.right);
        document.write(node.show() + "  ");
    }
}

/**
 * @description 在二叉树上查找最小值，只需要遍历左子树，因为较小的值总是在左子节点上。
 */
function getMin(){
    let current = this.root;
    while(current.left != null) {
        current = current.left;
    }

    return current.data;
}

/**
 * @description 在二叉树上查找最大值，最需要遍历右子树，因为较大的值总是在右子节点上
 */
function getMax(){
    let current = this.root;
    while(current.right != null){
        current = current.right;
    }

    return current.data;
}

/**
 * @description 在二叉树上查找给定值
 * @param {*} data 要查找的值
 * @returns 返回一个数组，包含查找到的节点和其父节点
 */
function find(data){
    let current = this.root;
    let parent = current;
    let value = [];

    while(current != null) {
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
 * @description 在二叉树上删除一个节点，不支持删除根节点，也不支持删除有三层子节点的节点
 * @param {*} data 要删除的值
 */
function remove(data){
    //获取要删除的节点
    let delNode = this.find(data)[0];

    //获取父节点
    let parentNode = this.find(data)[1];
    console.log(delNode);

    if(delNode != null){
        //没有子节点
        if(delNode.left == null && delNode.right == null){
            if(parentNode.left.data == data){
                parentNode.left = null;
            }else {
                parentNode.right = null;
            }
        }//两个子节点
        else if(delNode.left != null && delNode.right != null){
            if(parentNode.left.data == data){
                //将待删除节点的右节点移到待删除节点的位置
                parentNode.left = delNode.right;
                
                if(delNode.right.left != null && delNode.right.right != null){
                    parentNode.left.right = delNode.right.right;
                    parentNode.left.right.left = delNode.right.left;
                }

                //将待删除节点的右节点的左节点变为待删除节点的左节点
                parentNode.left.left = delNode.left;
            }else {
                
            }
        }//有一个子节点
        else{
            //判断删除的是父节点的左节点还是右节点
            if(parentNode.left.data == data){
                //判断待删除节点是有左子节点还是右子节点
                if(delNode.left != null){
                    parentNode.left = delNode.left;
                }else{
                    parentNode.left = delNode.right;
                }
            }else {
                if(delNode.right != null){
                    parentNode.right = delNode.right;
                }else{
                    parentNode.right = delNode.left;
                }
            }
        }
    }
    return false;
}

let nums = new BST();

nums.insert(56);
nums.insert(22);
nums.insert(81);
nums.insert(10);
nums.insert(30);
nums.insert(77);
nums.insert(92);
nums.insert(5);
nums.insert(17);
nums.insert(25);
nums.insert(35);
nums.insert(35);

nums.remove(22);

console.log(nums.root);

// console.log(nums.getMax());
// console.log(nums.getMin());
// console.log(nums.find(81));
//preOrder(nums.root);