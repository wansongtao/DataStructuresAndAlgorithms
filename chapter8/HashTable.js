/**
 * @description 散列表
 */
function HashTable(){
    /**
     * @description 新建一个数组，保存数据。为了避免碰撞，
     * 首先要确保散列表中的用来存储数据的数组大小是个质数。
     */
    this.table = new Array(137);
}

/**
 * @description 散列函数，返回一个键(ASCII码之和求余数组长度)，存在碰撞的可能
 * @param data 要存入的数据
 */
HashTable.prototype.simpleHash = function(data){
    let total = 0;

    //计算要存入数据的ASCII码之和
    for(let i = 0; i < data.length; i++){
        total += data.charCodeAt(i);
    }

    return total % this.table.length;
};

/**
 * @description 将数据存入散列表
 * @param {*} data 
 */
HashTable.prototype.put = function(data) {
    let pos = this.betterHash(data);

    while(this.table[pos] != undefined){
        pos++;
    }

    this.table[pos] = data;
};

/**
 * @description 显示散列表中的数据
 */
HashTable.prototype.showDistro = function(){

    for(let i = 0; i < this.table.length; i++){
        if(this.table[i] != undefined){
            document.write(i + ": " + this.table[i] + "<br>");
        }
    }
};

/**
 * @description 使用霍纳算法的散列函数，返回一个键(也存在碰撞的可能)
 * @param {*} data 要存储的数据
 */
HashTable.prototype.betterHash = function(data){
    const H = 37;
    let total = 0;

    for(let i = 0; i < data.length; i++){
        total += H * total + data.charCodeAt(i);
    }

    total = total % this.table.length;

    if(total < 0){
        total += this.table.length - 1;
    }

    console.log(total);
    return parseInt(total);
};

//主程序
let someNames = ["wst", "lst", "abr", "pwj", "fl", "cms"];

let hTable = new HashTable();

for(let i = 0; i < someNames.length; i++){
    hTable.put(someNames[i]);
}

hTable.showDistro();