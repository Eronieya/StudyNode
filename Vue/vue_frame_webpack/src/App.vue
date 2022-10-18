<script setup>
import { reactive, ref, watch } from 'vue';
const list = [1, 2, 3];
const listRef = ref(list);
const index = ref(0);

const listClick = () => {
  listRef.value.push(index.value++)
}

watch(listRef, (newValue) => {
  console.log('newValue', newValue)
  console.log('list', list)
}, {deep: true})
</script>

<template>
  <div>
    <router-link to="/"> 首页 </router-link>
    <router-link to="/about"> 关于 </router-link>
    <router-link to="/vmodel"> v-model 测试 </router-link>
    <div class="app__container" @click="listClick">test vue {{ listRef }}</div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.app__container {
  color: rgb(0, 22, 45);
}
</style>