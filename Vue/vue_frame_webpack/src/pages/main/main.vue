<template>
  <div v-bind="testObj">
    <div>内联Js： {{ new Date() }}</div>
    <div>reactive {{ state.count }}</div>
    <div class="box">
      <span>father-box</span>
      <div class="son-box">son-box</div>
    </div>
  </div>
</template>

<!-- 方法1 -->
<script setup>
import { reactive } from "@vue/reactivity";
const state = reactive({ count: 1 });
</script>

<!-- 方法2 -->
<script>
import { reactive } from "@vue/reactivity";

export default {
  /*  setup() {
    const state = reactive({ count: 1 });

    return {
      state,
    };
  }, */
  data() {
    return {
      testObj: {
        testKey1: 123,
        testKey2: 321,
        testKey3: 888,
      },
    };
  },
};
</script>

<style scoped lang="scss">
.box {
  position: relative;
  background-color: antiquewhite;
  width: 400px;
  height: 300px;
  user-select: none;
  font-size: 20px;

  .son-box {
    position: absolute;
    width: 50%;
    height: 1em;
    background-color: steelblue;
    // font-size: 40px;
    line-height: 1em;
  }
}
</style>