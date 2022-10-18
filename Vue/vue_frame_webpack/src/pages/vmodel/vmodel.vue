<template>
  <div class="v-model-test">
    <div>
      <div>name: {{ testKey }}</div>
      <input type="text" v-model="testKey" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    testKey: "默认名字",
    testObj: {
      name: "测试测试",
    },
  }),
  created() {
    console.log(this.testObj);
  },
};
</script>

<style lang="scss" scoped>
.v-model-test {
  margin-top: 200px;
  margin-left: 200px;
}
</style>>