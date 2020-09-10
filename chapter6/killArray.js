let peoples = parseInt(prompt("请输入人数", 41), 10);
let nums = parseInt(prompt("您要干掉第几个人", 3), 10);

let pNums = [];

//为了让数组下标和人数对应上，即arr[0] = 0, arr[1] = 1
for(let i = 0; i <= peoples; i++){
    //Math.ceil(Math.random() * 100 + 1)
    pNums[i] = i;
}

console.log(pNums.toString());

//当只剩下nums个人时，跳出循环(因为多了个元素0，所以要等于)
while(!(pNums.length <= nums)){
    /*在数组下标为nums倍数的位置赋值为0，即删除了原来的值，赋
    值为0，是为了方便知道删除的最后一个元素的位置，即方便将删除
    的最后一个元素的后面的元素加到数组开头（实现首尾相连）
    */
    for(let i = 0; i < pNums.length; i++){
        if(i % nums == 0){
            pNums[i] = 0;
            //pNums.splice(i, 1, 0);
        }
    }
    
    /**
     * @description 最后一个删除的元素的位置
     */
    let lastZero = 0;
    
    //获取最后一个0的位置，即删除的最后一个元素的位置
    for(let i = 0; i < pNums.length; i++){
        if(pNums[i] == 0){
            lastZero = i;
        }
    }
    
    //将最后删除的元素后面的元素复制到一个新数组中（包含最后一个删除的元素即0）
    //let lastnum = pNums.slice(lastZero);
    let lastnum = [];
    let loop = 0;
    for(let i = lastZero; i < pNums.length; i++){
        lastnum[loop++] = pNums[i]; 
    }
    
    //修改原数组，变为第二个元素到最后删除元素
    //pNums = pNums.slice(1, lastZero);

    let newArr = [];
    for(let i = 0; i < lastZero; i++){
        newArr[i] = pNums[i];
    }
    

    //删除所有为0的元素，即去掉那些要被删除的元素
    let newNums = [];
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] != 0){
            //newArr.splice(i, 1);
            newNums[newNums.length] = newArr[i];
        }
    }
    
    //连接两数组，将后面的元素放在开头
    pNums = lastnum.concat(newNums);
    
    console.log(pNums.toString());
    document.write(pNums.toString() + "<br>");
}

for(let i = 1; i < pNums.length; i++){
    document.write(`第${pNums[i]}个<br>`);
}
