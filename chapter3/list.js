/**
 * @description 实现列表类
 */
function List() {
    /**
     * @description 列表的元素个数
     */
    this.listSize = 0;

    /**
     * @description 列表的当前位置
     */
    this.pos = 0;

    /**
     * 初始化一个空数组来保存列表元素
     */
    this.dataStore = [];

    /**
     * @description 清空列表中的所有元素
     */
    this.clear = clear;

    /**
     * @description 查找某一元素，返回位置
     */
    this.find = find;

    /**
     * @description 返回列表的字符串形式
     */
    this.toString = listToString;

    /**
     * @description 在现有元素后插入新元素
     */
    this.insert = insert;

    /**
     * @description 在列表的末尾添加元素
     */
    this.append = append;

    /**
     * @description 从列表中移除元素
     */
    this.remove = remove;

    /**
     * @description 将列表的当前位置移动到第一个元素
     */
    this.front = front;

    /**
     * @description 将列表的当前位置移动到最后一个元素
     */
    this.end = end;

    /**
     * @description 将当前位置前移一位
     */
    this.prev = prev;

    /**
     * @description 将当前位置后移一位
     */
    this.next = next;

    // /**
    //  * @description 判断后一位
    //  */
    // this.hasNext;

    // /**
    //  * @description 判断前一位
    //  */
    // this.hasPrev;

    // /**
    //  * @description 列表中有多少个元素
    //  */
    // this.length = length;

    // /**
    //  * @description 返回列表的当前位置
    //  */
    // this.currPos = currPos;

    /**
     * @description 将当前位置移动到指定位置
     */
    this.moveTo = listMoveTo;

    /**
     * @description 返回当前位置的元素
     */
    this.getElement = getElement;

    // /**
    //  * @description 判断给定值是否在列表中
    //  */
    // this.contains = contains;
}

/**
 * @description 清空列表
 */
function clear() {
    //删除数组
    delete this.dataStore;

    //创建一个空数组
    this.dataStore.length = 0;

    //元素个数0， 当前位置0
    this.listSize = 0;
    this.pos = 0;
}

/**
 * @description 返回该元素在列表中的位置
 * @param {*} element 查找的元素
 */
function find(element) {
    let position = this.dataStore.indexOf(element);

    return position;
}

/**
 * @description 返回列表，以字符串的形式
 */
function listToString() {
    return this.dataStore.toString();
}

/**
 * @description 在现有元素后插入新元素
 * @param {*} element 现有元素
 * @param {*} newItem 要插入的新元素
 */
function insert(element, newItem) {
    let position = find(element);

    if(position > -1) {
        this.dataStore.splice(position + 1, 0, newItem);
        this.listSize += 1;
        return true;
    }

    return false;
}

/**
 * @description 在列表的末尾添加一个元素
 * @param {*} newItem 
 */
function append(newItem) {
    this.dataStore.push(newItem);
    this.listSize++;
}

/**
 * @description 删除传入的元素
 * @param {*} element 元素
 */
function remove(element) {
    let position = find(element);

    if(position > -1) {
        this.dataStore.splice(position, 1);
        --this.listSize;
        return true;
    }

    return false;
}

/**
 * @description 将列表的当前位置移动到第一位
 */
function front() {
    this.pos = 0;
}

/**
 * @description 将列表的当前位置移动到最后一位
 */
function end() {
    this.pos = this.listSize - 1;
}

/**
 * @description 将当前位置前移一位
 */
function prev() {
    if(this.pos - 1 > -1) {
        this.pos--;
    }
    else {
        this.pos = 0;
    }
}

/**
 * @description 将列表的当前位置后移一位
 */
function next() {
    if (this.pos + 1 >= this.listSize) {
        this.pos = this.listSize - 1;
    }else {
        this.pos++;
    }
}

/**
 * @description 将当前位置移动到指定位置
 * @param {*} position 位置
 */
function listMoveTo(position) {
    if(position >= listSize) {
        this.pos = listSize - 1;
    } else if(position < 0) {
        this.pos = 0;
    }else {
        this.pos = position;
    }
}

/**
 * @description 返回当前位置的元素
 */
function getElement() {
    return this.dataStore[this.pos];
}