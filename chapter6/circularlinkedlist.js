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
     * @description 保存当前节点
     */
    this.top = this.head;

    /**
     * @description 使当前节点向前移动n个节点
     */
    this.advance = advance;

    /**
     * @description 使当前节点向后移动n个节点
     */
    this.back = back;

    /**
     * @description 显示当前节点上的数据
     */
    this.show = show;

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

    /**
     * @description 链表长度
     */
    this.listLength = listLength;
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

/**
 * @description 向前移动n个节点
 * @param {} n 
 */
function advance(n) {
    let currentNode = this.top;

    for(let i = 1; i < n + 1; i++){
        //查找当前节点的前一个节点
        currentNode = this.findPrevious(currentNode.element);

        if(currentNode.element == "head") {
            break;
        }
    }

    this.top = currentNode;

}

/**
 * @description 将当前节点向后移动n个节点
 * @param {*} n 
 */
function back(n){
    let currentNode = this.top;

    for(let i = 0; i < n; i++){
        currentNode = currentNode.next;

        //移动到最后一个节点时，停止移动
        // if(currentNode.next.element == "head"){
        //     break;
        // }

        //跳过头节点
        if(currentNode.element == "head"){
            currentNode = currentNode.next;
        }
    }

    this.top = currentNode;
}

/**
 * @description 显示当前节点上的数据
 */
function show(){
    document.write(this.top.element);
}

/**
 * @description 返回链表的长度
 */
function listLength(){
    let currNode = this.head;
    let listLength = 0;

    while(currNode.next.element != "head"){
        currNode = currNode.next;
        listLength++;
    }

    return listLength;
}

/**
 * @description 返回被杀掉的人的位置
 * @param {*} index 每几个杀一个
 */
function killGame(index){
    //跳过头节点
    cities.back(1);

    //用来保存删除掉的数据
    let dealypeople = [];

    //直到链表长度小于index时，才跳出循环
    while(!(cities.listLength() < index)) {

        //移动到要删除的节点
        cities.back(index - 1);

        //待删除的节点
        let delNode = cities.top;

        //将当前位置向后移一位，跳过头节点
        if(delNode.next.element == "head"){
            cities.top = delNode.next.next;
        }else {
            cities.top = delNode.next;
        }
        
        //保存删除的元素
        dealypeople.push(delNode.element);

        //删除这个节点
        cities.remove(delNode.element);
    }
    
    return dealypeople;
}

//主程序
let cities = new CircularLinkedList();

//插入41个数据
for(let loop = 1; loop < 42; loop++){
    if(loop == 1) {
        cities.insert(loop, "head");
    } else {
        cities.insert(loop, loop - 1);
    }
}

//alert(cities.listLength());

let dealyP = killGame(3);

// cities.insert("广州", "head");
// cities.insert("上海", "广州");
// cities.insert("北京", "上海");
// cities.insert("深圳", "北京");
// cities.insert("杭州", "深圳");

// cities.remove("上海");
// cities.display();

// cities.back(43);
// cities.show();
cities.display();

document.write(`死掉的人的位置：${dealyP.toString()}`);