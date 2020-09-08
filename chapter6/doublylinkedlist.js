/**
 * @description 双向链表的节点
 * @param {*} element 节点的值
 */
function LinkedListNode(element){
    /**
     * @description 保存节点的数据
     */
    this.element = element;

    /**
     * @description 保存该节点的前一个节点
     */
    this.previous = null;

    /**
     * @description 保存该节点的下一个节点
     */
    this.next = null;
}

/**
 * @description 双向链表属性和方法类
 */
function DoublyLinkedList(){
    /**
     * @description 向链表中添加头节点
     */
    this.head = new LinkedListNode("head");

    /**
     * @description 根据传入的值，查找节点
     */
    this.find = find;

    /**
     * @description 插入一个新节点
     */
    this.insert = insert;

    /**
     * @description 移除一个新节点
     */
    this.remove = remove;

    /**
     * @description 查找链表中的最后一个节点
     */
    this.findLast = findLast;

    /**
     * @description 显示链表中的所有节点的值
     */
    this.display = display;
}

/**
 * @description 根据传入的值，查找链表中的节点
 * @param {*} item 
 */
function find(item){
    //保存头节点
    let currentNode = this.head;

    //通过遍历整个链表，查找这个值
    while((currentNode.element != item)){
        currentNode = currentNode.next;
        
        // if(currentNode == null) {
        //     break;
        // }
    }

    return currentNode;
}

/**
 * @description 向链表中插入一个节点
 * @param {*} newItem 新节点
 * @param {*} item 在该节点后插入新节点
 */
function insert(newItem, item){
    //新建一个节点并传入新节点的值
    let newNode = new LinkedListNode(newItem);

    let current = this.find(item);

    //新节点的下一个节点为当前节点的下一个节点
    newNode.next = current.next;

    //新节点的前一个节点为当前节点
    newNode.previous = current;

    //当前节点的下一个节点为新节点
    current.next = newNode;
}

/**
 * @description 移除一个节点
 * @param {*} item 要移除的节点的值
 */
function remove(item){
    let current = find(item);

    if(current.next != null){
        //待删除节点的前一个节点的下一个节点变为待删除节点的下一个节点
        current.previous.next = current.next;

        //待删除节点的下一个节点的前一个节点改为待删除节点的前一个节点
        current.next.previous = current.previous;

        current.next = null;
        current.previous = null;
    }
}

/**
 * @description 返回最后一个节点
 */
function findLast(){
    let  currentNode = this.head;

    //最后一个节点的next属性为null
    while(currentNode.next != null) {
        currentNode = currentNode.next;
    }

    return currentNode;
}

/**
 * @description 显示链表中的所有节点的值
 */
function display(){
    let current = this.head;

    while(!(current == null)){
        document.write(current.element + "<br>");
        current = current.next;
    }
}