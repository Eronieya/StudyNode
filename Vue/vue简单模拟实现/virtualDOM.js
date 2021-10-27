/* let container = document.getElementById('container')

let data = {
    msg: 'Hellow world!',
    name: 'name'
};

let fragment = virtualDom(container, data);
container.appendChild(fragment); 
*/

// 虚拟dom创建方法
function virtualDom(node, data) {
    let frag = document.createDocumentFragment();
    let child;
    // 遍历dom节点
    while (child = node.firstChild) {
        compile(child, data);
        frag.appendChild(child);
    }
    return frag;
}

// 编译规则
function compile(node, data) {
    let reg = /\{\{(.*)\}\}/g;
    if (node.nodeType === 1) { // 标签
        let attr = node.attributes;
        for (let i = 0, len = attr.length; i < len; i++) {
            // console.log(attr[i].nodeName, attr[i].nodeValue);
            if (attr[i].nodeName === 'v-model') {
                let name = attr[i].nodeValue;

                // node.value = data[name];
                new Subscriber(node, data, name);

                // 添加事件监听
                node.addEventListener('input', function (e) {
                    data[name] = e.target.value;
                })
            }
        }
        if (node.hasChildNodes()) {
            node.childNodes.forEach((item) => {
                compile(item, data); // 递归
            });
        }
    }

    if (node.nodeType === 3) { // 文本节点
        if (reg.test(node.nodeValue)) {
            let name = RegExp.$1;
            name = name.trim();

            // node.nodeValue = data[name];
            new Subscriber(node, data, name);
        }
    }
}