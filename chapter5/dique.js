/**
 * @description 双向队列
 */
function Dique(){
    /**
     * 初始化一个数组来存储双向队列的数据
     */
    this.dataStore = [];

    /**
     * @description 在队列的开头插入数据
     */
    this.unshift = unShiftItem;

    /**
     * @description 在数列的结尾插入数据
     */
    this.push = pushItem;

    /**
     * @description 在数列的开头删除数据，返回被删除的数据
     */
    this.shift = function(){
        return this.dataStore.shift();
    };

    /**
     * @description 在数列的末尾删除数据，返回被删除的数据
     */
    this.pop = function(){
        return this.dataStore.pop();
    };

    /**
     * @description 读取队首的元素
     */
    this.front = function(){
        return this.dataStore[0];
    };

    /**
     * @description 读取队尾的元素
     */
    this.back = function(){
        return this.dataStore[this.dataStore.length - 1];
    };

    /**
     * @description 判断队列是否为空
     */
    this.empty = function(){
        if(this.dataStore.length == 0) {
            return true;
        }
        return false;
    };

    /**
     * @description 返回队列的字符串形式
     */
    this.diqueToString = function() {
        return this.dataStore.toString();
    };

    /**
     * @description 返回队列的长度
     */
    this.length = function(){
        return this.dataStore.length;
    };
}

/**
 * @description 在数列的开头插入元素
 * @param {*} element 
 */
function unShiftItem(element){
    this.dataStore.unshift(element);
}

/**
 * @description 在数列的结尾插入数据
 * @param {*} element 
 */
function pushItem(element){
    this.dataStore.push(element);
}

let myDique = new Dique();

myDique.push(3);
myDique.push(4);
myDique.push(5);
myDique.push(6);
myDique.push(7);
myDique.push(8);

document.write(myDique.diqueToString() + "<br>");

myDique.shift();
myDique.pop();
myDique.unshift(9);

document.write(myDique.diqueToString() + "<br>");
document.write(myDique.front() + "<br>");
document.write(myDique.back() + "<br>");