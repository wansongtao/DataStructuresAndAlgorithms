/**
 * @description 异步获取数据
 * @param {*} apiType get/post
 * @param {*} url HTTP地址
 * @returns 返回一个js对象
 */
function ajax(apiType, url, callback){
    try{
        let myRequest = new XMLHttpRequest();

        myRequest.open(apiType, url);

        myRequest.send(null);

        myRequest.onreadystatechange = function() {
            if(myRequest.readyState == 4){
                if(myRequest.status == 200){
                    callback(JSON.parse(myRequest.responseText));
                }
                else{
                    throw {message: "数据获取失败" };
                }
            }
            
        };
    }
    catch(ex){
        alert(ex.message);
    }
}

/**
 * @description 遍历树中的所有节点，并动态生成页面结构
 * @param {*} data 
 */
function prevOrder(data){
    if(data != null){
        let menubox = document.querySelector(".menu");
        
        for(let j = 0; j < data.length; j++){
            let rootNode = document.createElement("li");
            let textNode = document.createTextNode(data[j].data);

            function treeOrder(data) {
                if(data.child != null){
                    for(let i = 0; i < data.child.length; i++){

                        document.write(`父节点：${data.data}&nbsp;&nbsp;子节点：${data.child[i].data}<br>`);
                        treeOrder(data.child[i]);
                    }
                }
            }

            treeOrder(data[j]);
        } 
    }
}

/**
 * @description 动态生成多级菜单栏
 */
function changeMenu(data){
    let menuData = data;

    console.log(menuData);
    prevOrder(data);
}

window.onload = function(){
    ajax("get", "http://localhost/menu.json", changeMenu);
};