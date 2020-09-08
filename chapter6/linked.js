/**
 * @description 节点类
 * @param {*} element 节点上的数据
 */
function Node(element){
    /**
     * @description 保存节点上的数据
     */
    this.element = element;

    /**
     * @description 保存下一个节点
     */
    this.next = null;
}

/**
 * @description 提供对链表进行操作的方法
 */
function LinkedList(){
    /**
     * @description 头节点
     */
    this.head = new Node("head");

    /**
     * @description 在链表中查找给定的值，返回保存该数据的节点
     */
    this.find = find;

    /**
     * @description 插入节点
     */
    this.insert = insert;

    /**
     * @description 找到待删除节点前面的节点
     */
    this.findPrevious = findPrevious;

    /**
     * @description 删除节点
     */
    this.remove = remove;

    /**
     * @description 显示链表元素
     */
    this.display = display;
}

/**
 * @description 遍历链表，查找给定数据。如果找到数据，该方法就返回保存该数据的节点。
 * @param {*} item 
 */
function find(item){
    let currNode = this.head;

    //遍历链表，就是跟着链接，从链表的首元素一直走到尾元素
    while(currNode.element != item){
        currNode = currNode.next;
    }

    return currNode;
}

/**
 * @description 将新节点插入链表
 * @param {*} newElement 新节点
 * @param {*} item 当前节点的值（在该节点后面插入）
 */
function insert(newElement, item){
    //新建一个节点，并插入值
    let newNode = new Node(newElement);

    //根据输入的值查找节点，并返回
    let current = this.find(item);

    //新节点的下一个节点为当前节点的下一个节点
    newNode.next = current.next;

    //当前节点的下一个节点为新节点
    current.next = newNode;

    console.log(newNode);
}

/**
 * @description 查找待删除节点前面的节点
 * @param {*} item 待删除节点的值
 * @returns 返回待删除节点前面的节点
 */
function findPrevious(item){
    let currNode = this.head;

    //从链表的头节点开始遍历，直到查找到待删除节点的前一个节点(上一个节点的next属性为待删除的节点)
    while(!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }

    return currNode;
}

/**
 * @description 移除链表中的一个节点
 * @param {*} item 要移除的节点的值
 */
function remove(item){
    //保存待删除节点前面的一个节点
    let prevNode = this.findPrevious(item);

    //将待删除节点前面的节点的next属性值修改为待删除节点的next属性值，即为删除
    if(!(prevNode.next == null)){
        prevNode.next = prevNode.next.next;
    } else {
        alert("该节点不存在");
    }
    console.log(prevNode);
}

/**
 * @description 显示链表中的元素
 */
function display(){
    let currNode = this.head;

    /*当前节点的next属性为null时循环结束
    为了不显示头节点，程序只访问当前节点的下一个节点中保存中的数据*/
    while(!(currNode.next == null)){
        document.write(currNode.next.element + "<br>");
        currNode = currNode.next;
    }
}

//主程序
let cities = new LinkedList();

cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");

cities.display();

// cities.remove("Russellville");
// cities.display();