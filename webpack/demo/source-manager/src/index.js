// 引入 js 文件
import _ from "lodash";

// 引入 css 文件
import './style.css';

// 引入 scss 文件
import './sassTest.scss';

// 引入 图片
import Icon from './icon.png';

// 引入 数据文件
import data from './data.json';

function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML += ' ==> ' + data.test;
    element.classList.add('hello');

    // 将图像添加到我们已经存在的 div 中。
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());