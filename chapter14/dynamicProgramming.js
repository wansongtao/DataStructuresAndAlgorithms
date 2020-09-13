/**
 * @description 动态规划求斐波那契数列
 * @param {*} n 
 */
function dynFib(n){
    let arr = [];

    if(n == 1 || n == 2){
        return 1;
    }else{
        arr[1] = 1;
        arr[2] = 2;

        for(let i = 3; i <= n; i++){
            arr[i] = arr[i - 1] + arr[i -2];
        }

        return arr[n - 1];
    }
}

/**
 * @description 迭代版本求斐波那契数列(效率和动态规划一样)
 * @param {*} n 
 */
function iterFib(n){
    //n - 1
    let last = 1;

    //n - 2
    let lastnext = 1;

    //n
    let result = 1;

    for(let i = 2; i < n; i++){
        result = last + lastnext;
        lastnext = last;
        last = result;
    }

    return result;
}

/**
 * @description 递归求斐波那契数列（效率最低）
 * @param {*} n 
 */
function recursion(n){
    if(n <= 2){
        return 1;
    }
    else{
        return recursion(n - 1) + recursion(n - 2);
    }
}

let value = dynFib(5);
console.log(value);

