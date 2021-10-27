<template>
  <div class="hello">
    <div id="fb-root"></div>
    <!--  <div
      class="fb-login-button"
      data-width="100"
      data-size="large"
      data-button-type="continue_with"
      data-layout="rounded"
      data-auto-logout-link="true"
      data-use-continue-as="true"
    ></div> -->

    <div class="btn" @click="redirectToInstagram()">Instagram 自定义登录</div>
    <div>insName: {{ insName }}</div>
    <div class="btn" @click="fbLogin()">facebook 自定义登录</div>
    <div>fbName: {{ fbName }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      insName: "",
      fbName: "",
    };
  },
  mounted() {
    let param = this.getAllUrlParam(); // 获取链接的所有参数
    if (param.code) {
      // let obj = {
      //   client_id: "849866439009438",
      //   client_secret: "19f4c957bea6298cc225708452011b8a",
      //   code: param.code.substr(0, param.code.length - 2),
      //   grant_type: "authorization_code",
      //   redirect_uri:
      //     "https://tstatic.ssl.jimingkeji.com.cn/javis-test/thirdPathLogin/test.html",
      // };
      let that = this;
      // let getUrl = `https://graph.instagram.com/v12.0/17841449675047341?fields=username,id,media_count,account_type&access_token=${param.code}`;
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
          that.insName = this.responseText;
        }
      });
      // ins 登录 第二步, 发送请求获取用户信息
      xhr.open(
        "GET",
        "https://graph.instagram.com/v12.0/17841449675047341?fields=username,id,media_count,account_type&access_token=IGQVJXRHVUbWQ5UWdCTjNhWVJSY2NiS3FvZAjVrRXJfTWRMX0ZA6aFU2dTVVdVZAHWW9DOXlUQ2o2UmVwcV9wMEp5VF9XMXZAtSHVQMDJGTExwSUp6MW5WdmtBMXpwbi0zVmZA4UzZARWFV3"
      );
      xhr.send();

      // console.log("obj", obj);
    }
  },
  methods: {
    req(method, url, data = {}) {
      let xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = (res) => {
        console.log("response", res);
      };
      xmlHttp.open(method, url);
      xmlHttp.setRequestHeader("Content-Type", "multipart/form-data");
      xmlHttp.send(JSON.stringify(data));
    },
    redirectToInstagram() {
      // ins 登录 第一步, 重定向
      window.location.replace(
        `https://api.instagram.com/oauth/authorize?client_id=849866439009438&redirect_uri=https://tstatic.ssl.jimingkeji.com.cn/javis-test/thirdPathLogin/test.html&scope=user_profile,user_media&response_type=code`
      );
    },

    fbLogin() {
      window.FB.login((response) => {
        console.log("response", response);
        if (response.status === "connected") {
          // Logged into your webpage and Facebook.
          this.fbGetInfo();
        } else {
          // Not logged into your webpage or we are unable to tell.
        }
      });
    },

    fbGetInfo() {
      window.FB.api("/me", (response) => {
        console.log("Successful login for: ", response);
        this.fbName = response;
      });
    },

    getAllUrlParam() {
      let url = document.baseURI;
      let urlParamsStr = url.split("?")[1];
      let urlParams = {};
      if (urlParamsStr) {
        // 判断是否存在参数
        let urlParamsList = urlParamsStr.split("&");
        urlParamsList.forEach((item) => {
          let keyValue = item.split("=");
          urlParams[keyValue[0]] = keyValue[1];
        });
      }

      return urlParams;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  cursor: pointer;
  width: 240px;
  height: 40px;
  background-color: #1877f2;

  border-radius: 20px;
  margin: 20px auto;
  color: aliceblue;
  font-weight: bold;
  line-height: 40px;
}
</style>
