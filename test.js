/**
 * @description 测试算法速度
 * @param {Function} fn 算法函数
 * @param {number} testCount 测试次数 10000
 * @param {number} randomNumberCount 生成的随机数数量 10000
 */
function test(fn, testCount = 10000, randomNumberCount = 10000) {
    console.time(`测试的算法是${fn.name}，测试次数${testCount}次，耗时`);
    for (let loop = 0; loop < testCount; loop++) {
        let randomNumberArr = [];

        for (let numCount = 0; numCount < randomNumberCount; numCount++) {
            let randomNum = Math.ceil(Math.random() * randomNumberCount + 1);

            randomNumberArr.push(randomNum);
        }

        fn(randomNumberArr);
    }
    console.timeEnd(`测试的算法是${fn.name}，测试次数${testCount}次，耗时`);
}

/**
 * @description 测试算法是否正确
 * @param {function} fn 
 */
function testAlgorithm(fn) {
    let randomNumberArr = [];

    for (let numCount = 0; numCount < 20; numCount++) {
        let randomNum = Math.ceil(Math.random() * 1000 + 1);

        randomNumberArr.push(randomNum);
    }

    console.log(fn(randomNumberArr));
}

/**
 * @description 冒泡排序
 * @param {*} arr 
 * @returns {Array}
 */
function bubbleOrder(arr) {
    // let temp = 0;

    for (let loop = 0; loop < arr.length - 1; loop++) {
        for (let i = 0; i < arr.length - 1 - loop; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }

    return arr;
}

/**
 * @description 选择排序
 * @param {*} arr 
 * @returns {Array}
 */
function selectOrder (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

/**
 * @description 基数排序
 * @param {*} arr 
 * @returns {Array}
 */
function baseOrder (arr) {
    let tempArr = [];
    
    //先按个位数大小排序，tempArr[0] = [10, 0, 100, 20, 30] tempArr[1] = [41, 21, 31]
    arr.forEach(item => {
        if (tempArr[item % 10] == undefined) {
            tempArr[item % 10] = [];
        }

        tempArr[item % 10].push(item);
    });

    //再按除以十的大小排序
    let newArr = [];
    tempArr.forEach(item => {
        if (item != undefined) {
            item.forEach(val => {
                let temp = Math.floor(val / 10);
                if (newArr[temp] == undefined) {
                    newArr[temp] = [];
                }
    
                newArr[temp].push(val);
            });
        }
    });

    tempArr = [];
    newArr.forEach(item => {
        tempArr.push(...item);
    });
    return tempArr;
}

/**
 * @description 插入排序
 * @param {*} arr 
 * @returns {Array}
 */
function insertOrder (arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i];
        let preIndex = i - 1;

        while(preIndex >= 0 && arr[preIndex] > currentVal) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }

        arr[preIndex + 1] = currentVal;
    }

    return arr;
}

/**
 * @description 希尔排序
 * @param {*} arr 
 * @returns {Array}
 */
function shellOrder (arr) {
    let h = 1;
    while(h < arr.length / 3) {
        h = h * 3 + 1;
    }

    while(h >= 1) {
        for (let i = h; i < arr.length; i++) {
            let currentVal = arr[i];
            let preIndex = i - h;

            while(preIndex >= 0 && arr[preIndex] > currentVal) {
                arr[preIndex + h] = arr[preIndex];
                preIndex -= h;
            }

            arr[preIndex + h] = currentVal;
        }

        h = (h - 1) / 3;
    }

    return arr;
}

/**
 * @description 快速排序
 * @param {*} arr 
 * @returns {Array}
 */
function quickOrder (arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let lessArr = [],
    largeArr = [],
    pivot = arr.splice(0, 1)[0];

    arr.forEach(item => {
        if (item > pivot) {
            largeArr.push(item);
        }
        else{
            lessArr.push(item);
        }
    });

    return arguments.callee(lessArr).concat(pivot, arguments.callee(largeArr));
}

/**
 * @description 归并排序
 * @param {*} arr 
 * @returns {Array}
 */
function mergeOrder (arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2),
    leftArr = arr.slice(0, middle),
    rightArr = arr.slice(middle);

    function merge (leftArr, rightArr) {
        let result = [];
    
        while(leftArr.length && rightArr.length) {
            if (leftArr[0] > rightArr[0]) {
                result.push(rightArr.shift());
            }
            else {
                result.push(leftArr.shift());
            }
        }
    
        if (leftArr.length) {
            result.push(...leftArr);
        }
        else if (rightArr.length) {
            result.push(...rightArr);
        }
    
        return result;
    }

    return merge(mergeOrder(leftArr), mergeOrder(rightArr));
}

testAlgorithm(mergeOrder);
