/**
 * @description 字典
 */
function Dictionary(){
    /**
     * @description 利用数组存储字典的数据
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
 * @description 根据键返回值
 * @param {*} key 键
 */
Dictionary.prototype.find = function(key){
    return this.dataStore[key];
};

/**
 * @description 根据键删除键和值
 * @param {*} key 
 */
Dictionary.prototype.remove = function(key){
    delete this.dataStore[key];
};

/**
 * @description 显示字典中的所有键值对
 */
Dictionary.prototype.showAll = function(){
    let datakeys = Object.keys(this.dataStore).sort();

    for(let keys in datakeys){
        document.write(datakeys[keys] + ":" + this.dataStore[datakeys[keys]] + "<br>");
    }
};

/**
 * @description 返回字典的长度
 */
Dictionary.prototype.count = function(){
    return Object.keys(this.dataStore).length;
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
let userInput = prompt("Please enter a paragraph", "the brown fox jumped over the blue fox");

userInput = userInput.split(" ");

console.log(userInput);

let words = new Dictionary();

for(let i = 0; i < userInput.length; i++){
    let count = 1;

    for(let loop = i + 1; loop < userInput.length; loop++){
        if(userInput[i] == userInput[loop]){
            count++;
        }
    }

    //避免向字典中添加相同的数据
    if( !(words.find(userInput[i])) ){
        words.add(userInput[i], count);
    }   
}
document.write(userInput.toString() + "<br>");

words.showAll();