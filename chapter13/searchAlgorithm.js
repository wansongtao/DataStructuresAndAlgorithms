/**
 * @description 顺序查找(使用自组织数据)
 * @param {*} arr 数组
 * @param {*} data 要查找的值
 * @returns 位置
 */
function sequentialSearch(arr, data){
    let temp;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == data){
            if(i > 0 && i > arr.length * 0.2){
                //将查找到的数据的位置向前移一位
                temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
            }
            return i;
        }
    }

    return -1;
}

/**
 * @description 查找最小值
 * @param {*} arr 
 */
function findMin(arr){
    let minValue = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(minValue > arr[i]){
            minValue = arr[i];
        }
    }

    return minValue;
}

let nums = [];

for(let i = 0; i < 100; i++){
    nums.push(Math.floor(Math.random() * 101));
}

//document.write(findMin(nums));
// let userInput = parseInt(prompt("请输入一个数字", 33), 10);

// if(sequentialSearch(nums, userInput) != -1){
//     alert("找到了这个数字");
// }else{
//     alert("没有找到");
// }

