
/**
 * @description 字典是一种以键-值对形式存储数据的数据结构
 */
function Dictionary() {
    /**
    * 利用数组保存字典的数据
    */
    this.dataStore = new Array();
}

/**
* @description 向字典中添加数据
* @param {*} key 键
* @param {*} value 值
*/
Dictionary.prototype.add = function(key, value){
    this.dataStore[key] = value;
};

/**
 * @description 根据用户传入的键查找对应的值
 * @param {*} key 键名
 * @returns 查找到的值
 */
Dictionary.prototype.find = function(key){
    return this.dataStore[key];
};

/**
 * @description 根据键删除这个键和其对应的值
 * @param {*} key 键名
 */
Dictionary.prototype.remove = function(key){
    //delete函数根据键，同时删掉键和与其关联的值
    delete this.dataStore[key];
};

/**
* @description 显示字典中的所有的键-值对
*/
Dictionary.prototype.showAll = function(){
    //获取this.dataStore数组中的所有键并排序
    let dataKeys = Object.keys(this.dataStore).sort();

    for(let keys in dataKeys){
        //dataKeys[keys]: 键     this.dataStore[dataKeys[keys]]: 值
        document.write(`${dataKeys[keys]}: ${this.dataStore[dataKeys[keys]]} <br>`);
    }
};

/**
 * @description 返回字典的元素个数(当键的类型为字符串时，length属性就不管用了)
 */
Dictionary.prototype.count = function(){
    //获取字典中的所有键，并存入一个数组中
    let datakeys = Object.keys(this.dataStore);

    return datakeys.length;
};

/**
 * @description 清空字典
 */
Dictionary.prototype.clear = function(){
    Object.keys(this.dataStore).forEach(function(index){
        delete this.dataStore[index];
    }, this);
};

//主程序
let pbook = new Dictionary();

pbook.add("JavaScript入门经典", "$55");
pbook.add("JavaScript指南", "$120");
pbook.add("JavaScript程序设计", "$80");
pbook.add("数据结构与算法", "$66");
pbook.add("HTML5", "$50");

//pbook.remove("HTML5");

pbook.showAll();
//pbook.clear();

console.log(pbook.count());
// let price = pbook.find("HTML5");

// console.log(price);