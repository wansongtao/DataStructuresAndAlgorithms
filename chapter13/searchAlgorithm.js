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

/**
 * @description 二分查找(只能对已排序的数据进行查找)
 * @param {*} arr 
 * @param {*} data 
 */
function binSearch(arr, data){
    let upperBound = arr.length - 1;
    let lowerBound = 0;

    let newarr = shellSort(arr);

    //每次猜中间
    while(lowerBound <= upperBound){
        let mid = Math.floor((upperBound + lowerBound) / 2);
        
        if(newarr[mid] < data){
            lowerBound = mid + 1;
        }else if(newarr[mid] > data){
            upperBound = mid - 1;
        }else {
            return mid;
        }
    }
    return -1;
}

/**
 * @description 希尔排序
 * @param {*} arr 
 */
function shellSort(arr){
    //动态生成间隔
    let h = 1;
    while(h < arr.length / 3){
        h = h * 3 + 1;
    }

    while(h >= 1){
        let current;
        let preIndex;
        for(let i = 0; i < arr.length; i++){
            current = arr[i];
            preIndex = i - h;

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

let nums = [];

for(let i = 0; i < 100; i++){
    nums.push(Math.floor(Math.random() * 101));
}

//document.write(findMin(nums));
let userInput = parseInt(prompt("请输入一个数字", 33), 10);

if(!isNaN(userInput)){
    // if(sequentialSearch(nums, userInput) != -1){
    //     alert("找到了这个数字");
    // }else{
    //     alert("没有找到");
    // }

    if(binSearch(nums, userInput) != -1){
        alert("找到了这个数字");
    }else{
        alert("没有找到");
    }
}else{
    alert("请输入数字");
}

