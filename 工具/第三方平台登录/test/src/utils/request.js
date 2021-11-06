/**
 * 网络层
 */
const MD5 = require('./md5.js');

import config from './config.js'

const socketMsgQueue = [];
let socketOpen = false;
let socketTime;

//远程请求
const __httpsRequest = {
	//http 请求
	async https_request(obj) {
		const res = await uni.request(obj);
		return res[1].data;
	},

	//文件上传
	async upload_request(filePath) {
		const res = uni.uploadFile({
			url: config.uploadUrl,
			filePath: filePath,
			name: 'image'
		});
		return res;
	}
};

// md5加密
const md5Encode = function(str) {
	let enstr = MD5.md5(str);
	enstr = enstr.toUpperCase(); // 转换为大写
	return enstr;
}

// obj转url参数
const urlEncode = function(param, key, encode) {
	if (param == null) return '';
	let paramStr = '';
	let t = typeof(param);
	if (t == 'string' || t == 'number' || t == 'boolean') {
		paramStr += '&' + key + '=' + ((encode == null || encode) ? param : param);
	} else {
		for (let i in param) {
			if (param[i] !== "") {
				let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
				paramStr += urlEncode(param[i], k, encode)
			}
		}
	}
	return paramStr;
}

// 字典正序排序
function objKeySort(obj) {
	let newkey = Object.keys(obj).sort();
	let newObj = {};
	for (let i = 0; i < newkey.length; i++) {
		newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
	}
	return newObj; //返回排好序的新对象
}

module.exports = {
	callSign: function(method, reqUrl, data, needUserId = true, isEncode = true, isShowLoading = true) {
		let signData = {};
		data = data || {};
		
		if (isEncode) {
			data.appId = config.reqAppID;
			data.token = config.reqToken;
			data.nonce = Math.random() * 1000 + "";
			data.timestamp = (new Date().getTime()).toString();
			let sign = md5Encode(urlEncode(objKeySort(data)).slice(1));
			delete data.appId;
			delete data.token;
			signData = data;
			signData["sign"] = sign;
		} else {
			signData = data;
		}

		const header = {
			"Accept": "application/json",
			"content-type": "application/x-www-form-urlencoded",
			"appId": config.reqAppID
		}
		const jsonUrl = {};
		jsonUrl.url = config.baseUrl + reqUrl;
		jsonUrl.header = header;
		jsonUrl.method = method || "GET";
		jsonUrl.data = data;

		return new Promise((resolve, reject) => {
			__httpsRequest.https_request(jsonUrl).then(res => {
				if (res && res.code == 0) {
					resolve(res.data);
				} else {
					reject(res);
				}
			}).catch(err => {
				reject(err);
			});
		})
	},

	connectWebSocket: function(req_url, res_func, else_func, time_func) {
		uni.onSocketOpen((res) => {
			console.log("WebSocket连接已打开！", res)
			socketOpen = true;
			for (let i = 0; i < socketMsgQueue.length; i++) {
				sendSocketMsg(socketMsgQueue[i]);
			}
			typeof res_func == "function" && res_func(res.data);

			socketTime && clearInterval(socketTime);

			// 每10秒发一次心跳包
			if (time_func) {
				socketTime = setInterval(() => {
					time_func();
				}, 10000)
			}
		})

		uni.onSocketError((res) => {
			console.log('WebSocket连接打开失败，请检查！', res);
			socketOpen = false;
			typeof else_func == "function" && else_func(res.data);
		});

		uni.onSocketClose((res) => {
			console.log('WebSocket 已关闭', res);
			socketOpen = false;
			socketTime && clearInterval(socketTime);
		})

		const socketPromise = uni.connectSocket({
			url: config.socketUrl + req_url,
			timeout: 30000
		})
		return socketPromise;
	},

	sendSocketMsg: function(req_obj) {
		req_obj = JSON.stringify(req_obj)
		// console.log("send msg", socketOpen, req_obj)
		if (socketOpen) {
			uni.sendSocketMessage({
				data: req_obj
			});
		} else {
			socketMsgQueue.push(req_obj);
		}
	},

	onSocketMsg: function(res_func) {
		uni.onSocketMessage(res => {
			// console.log("receive msg", res)
			typeof res_func == "function" && res_func(res.data);
		})
	},

	closeWebSocket: function(else_func) {
		uni.closeSocket({})
	},

	//文件上传
	uploadFile: function(filePath) {
		return new Promise((resolve, reject) => {
			__httpsRequest.upload_request(filePath).then(res => {
				const data = JSON.parse(res[1].data)
				if (data && data.code == 0) {
					resolve(data.data);
				} else {
					reject(res);
				}
			}).catch(err => {
				reject(err);
			});
		});
	},
};
