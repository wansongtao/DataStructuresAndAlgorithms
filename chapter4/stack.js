/**
 * @description 使用数组实现栈，栈：一种先入后出的数据结构。只允许访问栈顶的元素。
 */
function Stack() {
    /**
     * @description 初始化一个数组来保存栈内元素
     */
    this.dataStore = [];

    /**
     * @description 记录入栈元素的位置，也表示了元素的个数
     */
    this.top = 0;

    /**
     * @description 入栈
     */
    this.push = stackPush;

    /**
     * @description 出栈
     */
    this.pop = stackPop;

    /**
     * @description 返回栈顶元素（top - 1）
     */
    this.peek = peek;

    /**
     * @description 清空一个栈
     */
    this.clear = clear;

    /**
     * @description 返回栈内的元素个数
     */
    this.length = stackLength;
}

/**
 * @description 入栈
 * @param {*} element 
 */
function stackPush(element) {
    this.dataStore[this.top++] = element;
}

/**
 * @description 返回栈顶元素
 */
function peek() {
    return this.dataStore[this.top - 1];
}

/**
 * @description 出栈
 */
function stackPop(){
    this.top--;
    return this.dataStore.pop();
}

/**
 * @description 清空一个栈
 */
function clear(){
    this.top = 0;
    this.dataStore = [];
}

/**
 * @description 返回栈的长度
 */
function stackLength() {
    return this.top;
}

/**
 * @description 利用栈的先入后出特性，将数字转换为2-9进制
 * @param {*} num 数字
 * @param {*} base 几进制
 */
function mulBase(num, base){
    let nums = new Stack();

    do {
        nums.push(num % base);
        num = Math.floor(num / base);
    }while(num > 0);

    var converted = "";
    while(nums.length() > 0) {
        converted += nums.pop();
    }
    return converted;
}

/**
 * @description 根据用户输入转换进制
 */
function userInputNum(){
    try{
        let num = parseInt(prompt("请输入您要转换的数字", 10), 10);

        while(isNaN(num)) {
            num = parseInt(prompt("请输入您要转换的数字", 10), 10);
        }

        let base = parseInt(prompt("您要转换为几进制（仅支持转换为2-9进制）", 2), 10);

        while(isNaN(base)) {
            base = parseInt(prompt("您要转换为几进制（仅支持转换为2-9进制）", 2), 10);
        }

        let myValue = mulBase(num, base);

        if(myValue.length < 4) {
            if(myValue.length == 1){
                myValue = "0" + "0" + "0" + myValue;
            } else if(myValue.length == 2){
                myValue = "0" + "0" + myValue;
            } else if(myValue.length == 3) {
                myValue = "0" + myValue;
            } else {
                myValue = "0000";
            }
        }

        document.write(`${num}的${base}进制为：${myValue}`);
    }
    catch(ex) {
        alert(ex.message);
    }
}

/**
 * @description 利用栈，判断一个字符串是否为回文
 */
function isPalindrome(){
    let palindrome = new Stack();
    let userInput = prompt("您可以输入一些东西。", "racecar");

    for(let i = 0; i < userInput.length; i++){
        palindrome.push(userInput[i]);
    }

    let reverseWord = "";

    while(palindrome.length() > 0){
        reverseWord += palindrome.pop();
    }

    if(userInput == reverseWord) {
        document.write(`${userInput} is a palindrome.`);
    } else {
        document.write(`${userInput} is not a palindrome.`);
    }
}

/**
 * @description 使用栈模拟递归过程
 */
function fact(){
    let nums = new Stack();
    let userInput = parseInt(prompt("您想要求几的阶乘？", 5), 10);

    //直到用户输入一个数字
    if (isNaN(userInput) == false && userInput >= 2) {
        let temp = userInput;

        while(temp > 1) {
            nums.push(temp--);
        }
    
        let product = 1;
    
        while(nums.length() > 0){
            product *= nums.pop();
        }
    
        document.write(`${userInput}的阶乘为：${product}`);
    }
    else {
        alert("请输入一个大于二的数");
    }
    
}

fact();