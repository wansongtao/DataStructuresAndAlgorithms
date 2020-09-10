/**
 * @description 集合是由一组无序但彼此之间又有一定相关性的成员构成的
 * 每个成员在集合中只能出现一次
 */
function Set(){
    /**
     * @description 使用数组保存集合内的数据
     */
    this.dataStore = [];
}

/**
 * @description 向集合中添加数据
 * @param {*} data 值
 * @returns 添加成功true，失败false
 */
Set.prototype.add = function(data){
    if(this.dataStore.indexOf(data) < 0){
        this.dataStore.push(data);
        return true;
    }else{
        return false;
    }
};

/**
 * @description 从集合中移除一个值
 * @param {*} data 
 * @returns 成功true，失败false
 */
Set.prototype.remove = function(data){
    let pos = this.dataStore.indexOf(data);
    if(pos != -1){
        this.dataStore.splice(pos, 1);
        return true;
    }else {
        return false;
    }
};

/**
 * @description 返回整个集合
 */
Set.prototype.show = function(){
    return this.dataStore;
};

/**
 * @description 判断一个数据是否存在于集合中
 * @param {*} data 
 * @returns true在，false不在
 */
Set.prototype.contains = function(data){

    if(this.dataStore.indexOf(data) > -1){
        return true;
    }else {
        return false;
    }
};

/**
 * @description 并集
 * @param {} set 集合
 * @returns 返回一个新集合
 */
Set.prototype.union = function(set){
    let tempSet = new Set();

    for(let i = 0; i < this.dataStore.length; i++){
        tempSet.add(this.dataStore[i]);
    }

    for(let i = 0; i < set.dataStore.length; i++){
        if(!tempSet.contains(set.dataStore[i])){
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }

    return tempSet;
};

/**
 * @description 交集
 * @param {*} set 
 * @returns 返回一个新集合
 */
Set.prototype.intersect = function(set){
    let tempSet = new Set();

    for(let i = 0; i < this.dataStore.length; i++){
        if(this.contains(set.dataStore[i])){
            tempSet.add(set.dataStore[i]);
        }
    }

    return tempSet;
};

/**
 * @description 判断一个集合是否为另一个集合的子集
 * @param {*} set 集合
 * @returns true false
 */
Set.prototype.subset = function(set){
    if(this.dataStore.length > set.dataStore.length){
        for(let i = 0; i < set.dataStore.length; i++){
            if(!this.contains(set.dataStore[i])){
                return false;
            }
        }
    }else {
        return false;
    }
    return true;
};

/**
 * @description 补集：属于第一个集合不属于第二个集合的成员
 * @param {*} set 集合
 * @returns 返回一个新集合
 */
Set.prototype.difference = function(set){
    let tempSet = new Set();

    for(let i = 0; i < this.dataStore.length; i++){
        if(!set.contains(this.dataStore[i])){
            tempSet.add(this.dataStore[i]);
        }
    }

    return tempSet;
};

//主程序
let names = new Set();

names.add("wst");
names.add("lst");
names.add("abr");
names.add("cms");
//names.remove("lst");

console.log(names.show().toString());

let newNames = new Set();

newNames.add("lst");
newNames.add("wst");
newNames.add("fl");

let unionNames = names.union(newNames);

console.log(unionNames.show().toString());

let inNames = names.intersect(newNames);

console.log(inNames.show().toString());

console.log(names.subset(newNames));

console.log(names.difference(newNames).show().toString());