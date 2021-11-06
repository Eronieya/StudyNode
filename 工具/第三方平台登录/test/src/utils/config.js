/**
 * config 文件，主要放置一些静态配置数据
 * 比如：接口地址
 * 图片地址
 * 上传文件地址
 * 接口名等其他常量
 */

const config = {};

if (process.env.NODE_ENV === 'development') { // 运行环境
	console.log('开发环境')
	// 接口测试
	config.env = "dev";
	// config.baseUrl = "https://p.ssl.jimingkeji.com.cn/oppo_x3_education"; // 正式接口测试
	config.baseUrl = "https://h5.ssl.jmkja.cn/oppo_iot_uat";
	config.resUrl = "https://static.ssl.jimingkeji.com.cn/OPPO_IOT_2021_UAT";
	// config.baseUrl = "https://test.ssl.jimingkeji.com.cn/oppo_iot";
	// config.resUrl = "https://jimin-test.oss-cn-hangzhou.aliyuncs.com/OPPO_IOT_2021_TEST";
	config.socketUrl = "";
	config.uploadUrl = "";
	console.log('接口链接', config.baseUrl);
} else { // 发行环境
	console.log('生产环境')
	// 接口正式
	config.env = "prod";
	// 正式接口
	// config.baseUrl = "https://h5.ssl.jmkja.cn/oppo_iot";
	// config.resUrl = "https://static.ssl.jimingkeji.com.cn/OPPO_IOT_2021";

	// 测试环境
	config.baseUrl = "https://h5.ssl.jmkja.cn/oppo_iot_uat";
	config.resUrl = "https://static.ssl.jimingkeji.com.cn/OPPO_IOT_2021_UAT";
	// config.resUrl = "https://show.ssl.jimingkeji.com.cn/OPPO_IOT_2021";
	// config.baseUrl = "https://test.ssl.jimingkeji.com.cn/oppo_iot";
	// config.baseUrl = "https://h5.ssl.jmkja.cn/oppo_iot_uat";
	console.log = function() {}
	config.socketUrl = "";
	config.uploadUrl = "";
	console.log('接口链接', config.baseUrl);
}

config.reqAppID = "oppo_echo_iot";
config.reqToken = "Eci0T12jhv72hn667";

// config.resUrl = "https://static.ssl.jimingkeji.com.cn/oppo_education_2021/";
// config.resUrl = "https://jimin-test.oss-cn-hangzhou.aliyuncs.com/OPPO_IOT_2021_TEST";
config.appId = "wxe88c8751ecfbf68a";
// config.share_img_path = "https://static.ssl.jimingkeji.com.cn/OPPO_IOT_2021_UAT/production/static/advertising/share/share_png.jpg";
config.share_img_path =
	"https://static.ssl.jimingkeji.com.cn/OPPO_IOT_2021/production/static/advertising/share/share_png.jpg";
config.share_title = "OPPO耳机代言人选拔中，就差你这一票了！";
config.share_desc = "这个夏天，即使是平凡的我，也可以闪闪发光，快来为我投票吧！";
// config.share_link = "https://h5.ssl.jmkja.cn/oppo_iot"; // 正式分享链接
config.share_link = window.location.href;
config.version = '1.0.0';

export default config;
