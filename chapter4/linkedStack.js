/**
 * @description 用来保存栈内元素的值
 * @param {*} element 节点的值 
 */
function Node(element){
    /**
     * @description 节点的值
     */
    this.element = element;

    /**
     * @description 当前节点的下一个节点
     */
    this.next = null;
}

/**
 * @description 利用链表实现栈，先入后出
 */
function LinkedStack(){
    /**
     * @description 新建一个头节点，利用链表保存栈内元素
     */
    this.head = new Node("head");

    /**
     * @description 入栈
     */
    this.pushStack = pushStack;

    /**
     * @description 出栈
     */
    this.popStack = popStack;

    /**
     * @description 返回栈顶元素
     */
    this.peekStack = peekStack;

    /**
     * @description 返回栈尾元素
     */
    this.findLast = findLast;

    /**
     * @description 清空一个栈
     */
    this.clearStack = clearStack;

    /**
     * @description 返回栈的长度
     */
    this.stackLength = stackLength;

    /**
     * @description 返回栈内的所有元素
     */
    this.stackAllElement = stackAllElement;
}

/**
 * @description 返回栈尾元素
 */
function findLast(){
    let currentNode = this.head;

    //最后一个元素的next属性为null
    while(currentNode.next != null){
        currentNode = currentNode.next;
    }

    return currentNode;
}

/**
 * @description 返回栈顶元素，头节点的下一个节点即为栈顶元素
 */
function peekStack(){
    let currentNode = this.head;

    //对一个空栈调用该方法，返回undefined
    if(currentNode.next == null){
        currentNode = "undefined";
    } else {
        currentNode = currentNode.next.element;
    }

    return currentNode;
}

/**
 * @description 入栈，在栈尾添加元素
 * @param {} item 元素
 */
function pushStack(item){
    //新建一个节点，保存栈内元素
    let newNode = new Node(item);

    //查找到栈尾元素
    let currentNode = this.findLast();

    //新元素的下一个节点为栈尾元素的下一个节点
    newNode.next = currentNode.next;

    //栈尾元素的下一个节点变为新节点
    currentNode.next = newNode;

    //console.log(newNode);
}

/**
 * @description 出栈，栈：先入后出
 */
function popStack(){
    let currentNode = this.findLast();

    let item;

    //空栈
    if(currentNode.element == "head"){
        item = null;
    } else {
        let headNode = this.head;

        //找到栈尾元素的上一个元素
        while(headNode.next.element != currentNode.element){
            headNode = headNode.next;
        }

        //链表的最后一个节点的next为null
        headNode.next = null;

        item = currentNode.element;
    }

    //delete函数是object类的一部分，使用对键的引用作为参数，同时删掉键与其关联的值。
    delete currentNode.element;
    delete currentNode.next;
    console.log(currentNode);
    //currentNode.element = null;

    return item;
}

/**
 * @description 清空一个栈
 */
function clearStack(){
    let headNode = this.head;

    while(headNode.next != null){
        this.popStack();
    }

    //headNode.next = null;
}

/**
 * @description 返回栈的长度
 */
function stackLength(){
    let currentNode = this.head;

    let slength = 0;

    while(currentNode.next != null){
        currentNode = currentNode.next;
        slength++;
    }

    return slength;
}

/**
 * @description 返回栈内的所有元素
 */
function stackAllElement(){
    let currentNode = this.head;

    let allElement = [];

    while(currentNode.next != null){
        if(currentNode.element != "head"){
            allElement.push(currentNode.element);
        }
        
        currentNode = currentNode.next;
    }

    if(allElement.length == 0){
        allElement = "空栈";
    }

    return allElement;
}


//主程序
let cities = new LinkedStack();

cities.pushStack("广州");
cities.pushStack("上海");
cities.pushStack("北京");
cities.pushStack("杭州");
cities.pushStack("苏州");

cities.clearStack();

document.write(cities.stackLength() + "<br>" + cities.stackAllElement().toString());

//cities.pushStack("扬州");

//document.write(cities.allElement().toString());