/**
 * @description 冒泡排序
 * @param {*} arr 数组
 */
function bubble(arr){
    let temp;

    for(let i = arr.length - 1; i >= 1 ; i--){
        for(let j = 0; j < i; j++){
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
                minIndex = j;  //寻找最小值
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

    //在按十位数排序
    let myArr = [];
    for(let i = 0; i < newArr.length; i++){
        for(let j = 0; j < newArr[i].length; j++){
            if(myArr[Math.floor(newArr[i][j] / 10)] == undefined){
                myArr[Math.floor(newArr[i][j] / 10)] = [];
            }
            myArr[Math.floor(newArr[i][j] / 10)].push(newArr[i][j]);
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
        preIndex = i - 1;

        //因为后面i的位置可能会被占据，所以先保存其值
        current = arr[i];

        while(preIndex >= 0 && arr[preIndex] > current){
            arr[preIndex + 1] = arr[preIndex];  //将较大值往后移一位
            preIndex--;  //继续和前一位作比较
        }

        //arr[preIndex] < current
        arr[preIndex + 1] = current;
    }

    return arr;
}

let arr = [11, 23, 12, 38, 4, 10, 9, 15, 7, 66, 20, 2, 39, 99, 100, 120, 121];

document.write(`原数组：${arr.toString()}<br><br>`);

document.write(`冒泡排序：${bubble(arr).toString()}<br>`);
document.write(`选择排序（最小值）：${selectorMin(arr).toString()}<br>`);
document.write(`选择排序（最大值）：${selectorMax(arr).toString()}<br>`);
document.write(`基数排序：${baseOrder(arr).toString()}<br>`);
document.write(`插入排序：${insertOrder(arr).toString()}<br>`);