<template>
  <div id="app">
    <!-- router-link 相当于a标签 to属性相当于<a>标签的 href -->
    <div id="nav">
      <!-- <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link> -->
      <router-link :to="{ name: 'home', params: { id: 1 } }">首页</router-link>
      <router-link :to="{ name: 'about', param: { from: 'home' } }">关于</router-link>
    </div>
    <div>
      <span class="toHome" @click="funcToHome()">跳转到首页</span>
    </div>
    <!-- router-view 相当于路由组件的出口 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
  },
  methods: {
    funcToHome() {
      console.log("this.$router", this.$router.history.current.name);
      if (this.$router.history.current.name != "home") {
        this.$router.push({
          // path: "/home",
          name: "home",
          params: { id: 124123 },
        });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.toHome {
  color: #2c3e50;
  text-decoration: underline;
}
</style>
