/**
 * @description 优先队列
 */
function Priorityqueue(){
    this.dataStore = [];

    /**
     * @description 向队列的队尾插入数据
     */
    this.enqueue =enqueue;

    /**
     * @description 先删除队列中优先级高的元素后，相同优先级的先删除前面的
     */
    this.dequeue = function(){
        //保存优先级最高元素的索引
        let maxItem = 0;
        for(let i = 1; i < this.dataStore.length; i++){
            if(this.dataStore[maxItem].code < this.dataStore[i].code){
                maxItem = i;
            }
        }

        return this.dataStore.splice(maxItem, 1);
    };

    /**
     * @description 返回队首元素
     */
    this.front = function(){
        return this.dataStore[0];
    };

    /**
     * @description 返回队尾元素
     */
    this.back = function(){
        return this.dataStore[this.dataStore.length - 1];
    };

    /**
     * @description 判断一个队列是否为空
     */
    this.empty = function(){
        if(this.dataStore.length == 0){
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

    /**
     * @description 返回队列的字符串形式
     */
    this.queueToString = function(){
        return this.dataStore.toString();
    };
}

/**
 * @description 向队列末尾添加数据
 * @param {*} element 
 */
function enqueue(element){
    this.dataStore.push(element);
}

/**
 * @description 患者对象
 * @param {*} name 名字
 * @param {*} code 优先级代码，值越大，优先级越高
 */
function Person(name, code){
    this.name = name;
    this.code = code;
}

window.onload = function(){
    let queues = new Priorityqueue();

    let add = document.getElementById("add");

    let view = document.getElementById("view");

    add.addEventListener("click", addList);
    view.addEventListener("click", listView);

    /**
     * @description 添加患者到队列中
     */
    function addList() {
        try{
            let name = document.getElementById("name").value;
            let code = document.getElementById("code").value;

            if(name == "") {
                throw {message: "姓名不能为空"};
            }else {
                if(code == ""){
                    code = 0;
                }

                let person1 = new Person(name, code);

                queues.enqueue(person1);

                if(queues.back().name == name) {
                    document.getElementById("name").value = "";
                    document.getElementById("code").value = "";
                    alert("添加成功");
                } else {
                    alert("添加失败");
                }
            }
        }
        catch(ex){
            alert(ex.message);
        }
        
    }

    /**
     * @description 显示患者就诊名单
     */
    function listView(){
        let div = document.getElementById("container");

        div.innerHTML = "";

        let ul = document.createElement("ol");

        for(let i = 0; i < queues.length(); i++){
            let li = document.createElement("li");

            li.innerHTML = queues.dataStore[i].name;

            ul.appendChild(li);
        }

        div.appendChild(ul);
    }
};