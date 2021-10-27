## 获取URL的参数

```js
function getAllUrlParam(){
    let url = document.baseURI;
    let urlParamsStr = url.split("?")[1];
    let urlParams = {};
    if (urlParamsStr) { // 判断是否存在参数
        let urlParamsList = urlParamsStr.split("&");
        urlParamsList.forEach((item) => {
            let keyValue = item.split("=");
            urlParams[keyValue[0]] = keyValue[1];
        });
    }

    return urlParams;
}
```



```js
function getUrlParam(paramName){
	// 获取url的参数
    let url = document.baseURI;
    let urlParamsStr = url.split('?')[1]; // 获取url后拼接的参数
    let urlSearchParams = new URLSearchParams(urlParamsStr);
    
    return urlSearchParams(paramName);
}
```

