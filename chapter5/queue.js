/**
 * @description 用数组实现队列，先进先出，只能在队尾添加数据，队头删除数据
 */
function Queue(){
    this.dataStore = [];

    /**
     * @description 向队列添加一个元素（队尾添加）
     */
    this.enqueue = enqueue;

    /**
     * @description 删除队列的一个元素（队首）
     */
    this.dequeue = function(){
        return this.dataStore.shift();
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
        return this.dataStore[this.dataStore - 1];
    };

    /**
     * @description 以字符串形式显示队列里的所有元素
     */
    this.queueToString = function(){
        return this.dataStore.toString();
    };
    
    /**
     * @description 判断一个队列是否为空
     */
    this.empty = function() {
        if (this.dataStore.length == 0){
            return true;
        }
        return false;
    };

    /**
     * @description 返回队列的长度
     */
    this.length = function(){
        return this.dataStore.length;
    };
}

/**
 * @description 向队列中添加一个数据
 * @param {*} element 
 */
function enqueue(element){
    this.dataStore.push(element);
}

/**
 * @description 利用队列实现基数排序
 */
function cardinalNumberSort() {
    //保存十个队列
    let queues = [];

    for(let loop = 0; loop < 10; loop++){
        queues[loop] = new Queue();
    }

    //保存二十个0-100之间的随机数
    let nums = [];

    for(let i = 0; i < 20; i++){
        nums[i] = Math.floor(Math.random() * 100);

        //按个位数插入相应的队列，例如：queues[1]： 11 21 31 41
        queues[nums[i] % 10].enqueue(nums[i]);
        
    }

    document.write("第一次按个位数排序结果（基数排序）：<br>");

    //输出第一次按个位数排序的结果
    for(let loop1 = 0; loop1 < 10; loop1++){
        document.write(`${loop1}: ${queues[loop1].queueToString()}<br>`);
    }


    //将nums重新赋值为按个位数排序的结果
    let newItem = 0;

    for(let count = 0; count < 10; count++){        
        //数列中没有元素时，跳出循环
        while(!queues[count].empty()){
            nums[newItem++] = queues[count].dequeue();
        }
    }

    //在将按个位数排序后的数据，按十位数的大小排序
    for(let count1 = 0; count1 < 20; count1++){
        queues[Math.floor(nums[count1] / 10)].enqueue(nums[count1]);
    }

    document.write("<br>第二次按十位数排序结果（基数排序）：<br>");

    //输出第二次排序的结果
    for(let loop2 = 0; loop2 < 10; loop2++){
        document.write(`${loop2}: ${queues[loop2].queueToString()}<br>`);
    }
}

cardinalNumberSort();