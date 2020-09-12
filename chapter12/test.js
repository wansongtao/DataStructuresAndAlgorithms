/**
 * @description 冒泡排序
 * @param {*} arr 数组
 */
function bubble(arr){
    let temp;

    // for(let i = arr.length - 1; i >= 1 ; i--){
    //     for(let j = 0; j < i; j++){
    //         if(arr[j] > arr[j + 1]){
    //             temp = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = temp;
    //         }
    //     }
    // }

    //两两比较，将较大值和较小值交换位置，确定一个最大值最多只需要比较arr.length - 1次
    for(let i = 0; i < arr.length - 1; i++){
        //每次循环都可以将一个较大值移到数组末尾，所以循环次数逐渐递减
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

/**
 * @description 选择排序
 * @param {*} arr 
 */
function selectorMin(arr){
    let minIndex;
    let temp;
    for(let i = 0; i < arr.length - 1; i++){
        minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;  //保存最小值索引
            }
        }

        //交换位置，将最小值放到数组前面
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

/**
 * @description 选择排序
 * @param {*} arr 
 */
function selectorMax(arr){
    let maxIndex;
    let temp;

    for(let i = 0; i < arr.length - 1; i++){
        maxIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[maxIndex]){
                maxIndex = j;  //寻找最大值
            }
        }

        //将最大值放到数组前面，两个元素交换位置
        temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;
    }

    return arr;
}

/**
 * @description 基数排序
 * @param {*} arr 
 */
function baseOrder(arr){
    //先按个位数排序
    let newArr = [];
    for(let i = 0; i < arr.length; i++){

        if(newArr[arr[i] % 10] == undefined){
            newArr[arr[i] % 10] = [];
        }
        
        newArr[arr[i] % 10].push(arr[i]);
    }

    //在按除以十的值大小排序
    let myArr = [];
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] != null){
            for(let j = 0; j < newArr[i].length; j++){
                if(myArr[Math.floor(newArr[i][j] / 10)] == undefined){
                    myArr[Math.floor(newArr[i][j] / 10)] = [];
                }
                myArr[Math.floor(newArr[i][j] / 10)].push(newArr[i][j]);
            }
        }
    }

    //最后连接为一个数组，去掉空数组
    let returnArr = [];
    for(let i = 0; i < myArr.length; i++){
        if(myArr[i] != undefined){
            returnArr = returnArr.concat(myArr[i].slice(0));
        }
    }

    return returnArr;
}

/**
 * @description 插入排序
 * @param {*} arr 
 */
function insertOrder(arr){
    let preIndex;
    let current;

    for(let i = 0; i < arr.length; i++){
        current = arr[i];
        preIndex = i - 1;

        //如果当前值小于前一个值，就将前一个值保存到数组下标加一的位置上，即向后移一位。
        while(preIndex >= 0 && arr[preIndex] > current){
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }

        //当前值大于前一个数组元素的值，则将该值保存到该数组元素的后面
        arr[preIndex + 1] = current;
    }

    return arr;
}

/**
 * @description 希尔排序
 * @param {*} arr 
 */
function shellOrder(arr){
    //动态生成间隔序列
    let h = 1;
    while(h < arr.length / 3){
        h = h * 3 + 1;
    }

    //插入排序是当前值和前一个值比较，希尔排序是和前h个比较
    while(h >= 1){

        for(let i = h; i < arr.length; i++){
            let current = arr[i];
            let preIndex = i - h;
            
            while(preIndex >= 0 && arr[preIndex] > current){
                arr[preIndex + h] = arr[preIndex];

                preIndex -= h;
            }

            arr[preIndex + h] = current;
        }

        h = (h - 1) / 3;
    }

    return arr;
}

/**
 * @description 快速排序
 * @param {*} arr 
 */
function quickSort(arr){
    if(arr.length == 0){
        return [];
    }

    let lessArr = [];
    let largeArr = [];
    let pivot = arr[0];

    //小于基准值的数放到lessArr数组中，大于基准值得数放到largeArr数组中
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            lessArr.push(arr[i]);
        }else if(arr[i] > pivot){
            largeArr.push(arr[i]);
        }
    }

    //递归这个过程，即重复以上操作
    return quickSort(lessArr).concat(pivot, quickSort(largeArr));
}

let arr = [11, 23, 12, 38, 4, 10, 9, 15, 7, 66, 20, 2, 39, 99, 100, 120, 121];

document.write(`原数组：${arr.toString()}<br><br>`);

document.write(`冒泡排序：${bubble(arr).toString()}<br>`);
document.write(`选择排序（最小值）：${selectorMin(arr).toString()}<br>`);
document.write(`选择排序（最大值）：${selectorMax(arr).toString()}<br>`);
document.write(`基数排序：${baseOrder(arr).toString()}<br>`);
document.write(`插入排序：${insertOrder(arr).toString()}<br>`);
document.write(`希尔排序：${shellOrder(arr).toString()}<br>`);
document.write(`快速排序：${quickSort(arr).toString()}<br>`);