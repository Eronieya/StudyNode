<template>
  <div>
    <h1>HOME</h1>
    <h2>param{{ param }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: null,
    };
  },
  
  activated(){
      console.log('activated');
  },
  deactivated(){
      console.log('deactivated');
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      console.log("fetchData", this.$route);
      this.param = this.$route.params;
    },
  },
};
</script>

<style scoped>
</style>

