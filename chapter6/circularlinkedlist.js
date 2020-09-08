/**
 * @description 循环链表的节点
 * @param {*} element 节点的值
 */
function Node(element){
    /**
     * @description 节点的值
     */
    this.element = element;

    /**
     * @description 该节点的下一个节点
     */
    this.next = null;
}

/**
 * @description 循环链表，首尾相连
 */
function CircularLinkedList(){
    /**
     * @description 头节点
     */
    this.head = new Node("head");

    /**
     * @description 只有一个节点时，头节点的下一个节点为自身
     */
    this.head.next = this.head;

    /**
     * @description 查找一个节点
     */
    this.find = find;

    /**
     * @description 插入一个节点
     */
    this.insert = insert;

    /**
     * @description 查找一个节点的前一个节点
     */
    this.findPrevious = findPrevious;

    /**
     * @description 删除一个节点
     */
    this.remove = remove;

    /**
     * @description 显示链表中的所有节点中保存的数据
     */
    this.display = display;
}

/**
 * @description 根据传入的节点的值，查找节点
 * @param {*} item 节点中保存的值
 */
function find(item){
    let currNode = this.head;

    //循环链表首尾相连，要是没有找到会陷入死循环
    while(currNode.element != item){
        currNode = currNode.next;

        //遍历所有节点都没有找到
        if(currNode.element == "head"){
            currNode = null;
            break;
        }
    }

    return currNode;
}

/**
 * @description 插入一个节点
 * @param {*} newItem 要插入的节点的值
 * @param {*} item 要插入节点的前一个节点的值
 */
function insert(newItem, item){
    //根据节点的值查找这个节点是否存在，存在返回该节点，否则返回null
    let currentNode = this.find(item);

    if(currentNode != null){
        //新建一个节点并插入值
        let newNode = new Node(newItem);

        //新节点的下一个节点为前一个节点的下一个节点
        newNode.next = currentNode.next;

        //前一个节点的下一个节点变为新节点
        currentNode.next = newNode;

        console.log(newNode);
    }else {
        alert("没有找到该节点");
    }
    
}

/**
 * @description 查找一个节点的前一个节点
 * @param {*} item 节点的值
 */
function findPrevious(item){
    let currentNode = this.head;

    while(currentNode.next.element != item){
        currentNode = currentNode.next;

        //遍历所有节点都没有找到
        if(currentNode.element == "head"){
            currentNode = null;
            break;
        }
    }

    return currentNode;
}

/**
 * @description 根据节点的值，删除一个节点
 * @param {*} item 要删除节点的值
 */
function remove(item){
    //前一个节点
    let prevNode = this.findPrevious(item);

    //待删除节点
    let currNode = this.find(item);

    if(prevNode != null){
        //将前一个节点的下一个节点修改为待删除节点的下一个节点
        prevNode.next = currNode.next;

        currNode.element = null;
        currNode.next = null;
    } else {
        alert("删除的节点不存在，不需要删除");
    }
}

/**
 * @description 显示循环链表中所有节点保存的值
 */
function display(){
    let currentNode = this.head;

    //在页面上输出除了头节点外的所有节点的值
    while(1){
        if(currentNode.element != "head") {
            document.write(currentNode.element + "<br>");
        }

        currentNode = currentNode.next;

        if(currentNode.element == "head"){
            break;
        }
    }
}

//主程序
let cities = new CircularLinkedList();

cities.insert("广州", "head");
cities.insert("上海", "广州");
cities.insert("北京", "上海");
cities.insert("深圳", "北京");
cities.insert("杭州", "深圳");

cities.remove("上海");
cities.display();