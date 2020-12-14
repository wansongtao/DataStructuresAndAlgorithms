/**
 * @description 散列表
 */
function HashTable(){
    /**
     * @description 为了避免碰撞，数组长度一般为质数
     */
    this.table = new Array(137);
}

/**
 * @description 使用霍纳算法的散列函数，返回一个键
 * @param {*} data 要存入的数据
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

    return total;
};

/**
 * @description 向散列表中添加数据
 * @param {*} data 
 */
HashTable.prototype.put = function(data){
    let pos = this.betterHash(data);

    /*线性探测法: 当发生碰撞时，检查散列表中的下一个
    位置是否为空，如果为空，就将数据存入该位置。
    */
    while(this.table[pos] != undefined){
        pos++;
    }

    this.table[pos] = data;
};

/**
 * @description 显示散列表中的所有数据
 */
HashTable.prototype.showDistro = function(){
    for(let i = 0; i < this.table.length; i++){
        if(this.table[i] != undefined){
            document.write(i + "：" + this.table[i] + "<br>");
        }
    }
};