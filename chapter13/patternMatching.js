/**
 * @description 在主串中搜索子串
 * @param {*} str 主串
 * @param {*} strChild 子串 
 * @returns position 返回位置，没找到返回-1
 */
function patternMatching(str, strChild){
    let position = -1;
    let strIndex = 0;
    let strChildIndex = 0;

    //my name is wanwanyongtaowany.   wany
    while(strIndex < str.length && strChildIndex < strChild.length){

        //相同就继续匹配子串的下一个字符
        if(str[strIndex] == strChild[strChildIndex]){
            strIndex++;
            strChildIndex++;
        }else{
            //退回主串刚开始匹配的字符的下一个字符重新开始和子串的第一个字符比较
            strIndex = strIndex - strChildIndex + 1;
            strChildIndex = 0;
        }
    }

    //在主串中找到了子串
    if(strChildIndex == strChild.length){
        position = strIndex - strChildIndex;
    }
    console.log(position);
    return position;
}

/**
 * @description 部分匹配表   移动位数 = 已匹配的字符数 - 对应的部分匹配值
 * @param {*} str 已匹配的字符串
 * @returns 返回移动位数
 */
function partialMatchTable(str){
    //移动位数 = 已匹配的字符数 - 对应的部分匹配值 abcd => a ab abc  bcd cd d
    let maxLength = 0;
    let previousArr = [];
    let nextArr = [];

    
    for(let i = 0; i < str.length - 1; i++){
        //字符串的前缀  abcd => a ab abc
        previousArr.push(str.substr(0, i + 1));

        //字符串的后缀  abcd => bcd cd d
        nextArr.push(str.substring(i + 1, str.length + 1));
    }

    for(let i = 0; i < previousArr.length; i++){
        for(let j = 0; j < nextArr.length; j++){
            if(previousArr[i] == nextArr[j]){               
                //保存前缀和后缀的最长相同元素的长度
                if(maxLength < nextArr[j].length){
                    maxLength = nextArr[j].length;
                }
            }
        }
    }

    //移动位数 = 已匹配的字符数 - 对应的部分匹配值
    return str.length - maxLength;
}

/**
 * @description 使用K.M.P算法在主串中查找子串
 * @param {*} str 主串
 * @param {*} strChild 子串
 * @returns 位置，没找到返回-1 
 */
function KMPStringMatching(str, strChild){
    let position = -1;

    let strIndex = 0;
    let strChildIndex = 0;

    // "mwywwy name is wwansongtaowwwy."  "wwy"
    while(strIndex < str.length && strChildIndex < strChild.length){
        //如果当前位置的两个字符相同，则继续比较下一个
        if(str[strIndex] == strChild[strChildIndex]){
            strIndex++;
            strChildIndex++;
        }else{
            //此次匹配第一个相同字符的位置
            let beginIndex = strIndex - strChildIndex;

            if(strChildIndex > 1){
                //当相同字符超过一位时，调用kmp算法函数计算向后移动的位数
                strIndex = beginIndex + partialMatchTable(str.substr(beginIndex, strChildIndex - 1));
            }else{
                //当在主串中相同字符数小于等于1时，将主串的strIndex向后移一位，继续比较
                strIndex = beginIndex + 1;
            }

            //重新从子串的第一个字符开始
            strChildIndex = 0;
        }
    }

    //找到了
    if(strChildIndex == strChild.length){
        position = strIndex - strChildIndex;
    }
    console.log(position);
    return position;
}

/**
 * @description 测试算法速度
 * @param {*} fn 函数名
 * @param {*} str 主串
 * @param {*} strChild 子串
 * @returns 返回耗时, 毫秒 
 */
function testAlgorithmSpeed(fn, str, strChild){
    let startTime = new Date().getTime();

    fn(str, strChild);

    let endTime = new Date().getTime();

    return endTime - startTime;
}

//主程序
let myName = `my name is abcd wanwanyongtaowanabcdabcdymy name is 
cdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdy.`;
let names = "abcdabcdabcdy";
//let name1 = "wany";

// KMPStringMatching(myName, names);
// patternMatching(myName, names);

document.write("主串：" + myName + "<br>");
document.write("子串：" + names + "<br>");
document.write("indexOf()结果：" + myName.indexOf(names) + "<br>");
document.write("朴素算法：" + testAlgorithmSpeed(patternMatching, myName, names) + "毫秒<br>");
document.write("KMP算法：" + testAlgorithmSpeed(KMPStringMatching, myName, names) + "毫秒<br>");