/**
 * @description 实现栈，先入后出
 */
function Stack(){
    /**
     * @description 利用数组存储栈的元素
     */
    this.dataStore = [];

    /**
     * @description 栈的元素个数
     */
    this.top = 0;

    /**
     * @description 入栈
     */
    this.push = stackPush;

    /**
     * @description 出栈
     */
    this.pop = function(){
        this.top--;
        return this.dataStore.pop();
    };

    /**
     * @description 返回栈顶元素
     */
    this.peek = function(){
        return this.dataStore[this.top - 1];
    };

    /**
     * @description 清空栈
     */
    this.clear = function () {
        this.top = 0;
        this.dataStore = [];
    };

    /**
     * @description 返回栈的长度
     */
    this.length = function() {
        return this.top;
    };
}

/**
 * @description 入栈
 * @param {*} element 
 */
function stackPush(element){
    this.dataStore[this.top++] = element;
}

/**
 * @description 利用栈解决佩兹糖果盒问题
 */
function pezCandyBox() {
    let candyColor = new Stack();

    candyColor.push("红");
    candyColor.push("白");
    candyColor.push("黄");
    candyColor.push("黄");
    candyColor.push("白");
    candyColor.push("红");
    candyColor.push("白");
    candyColor.push("黄");
    candyColor.push("白");
    candyColor.push("红");

    document.write(candyColor.dataStore.toString() + "<br>");

    //将黄色糖果拿出来，并将其他糖果放入另一个栈中(顺序反了)
    let yellowCandy = "";
    let otherCandy = new Stack();

    while(candyColor.length() > 0){
        let temp = candyColor.pop();

        if(temp == "黄"){
            yellowCandy += "黄";
        } else {
            otherCandy.push(temp);
        }
    }

    //将顺序调回去
    let candy = new Stack();
    while(otherCandy.length() > 0){
        candy.push(otherCandy.pop());
    }

    document.write(candy.dataStore.toString());
}

pezCandyBox();