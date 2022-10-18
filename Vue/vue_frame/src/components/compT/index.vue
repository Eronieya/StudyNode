<script  setup lang="ts">
// import { ref } from 'vue';
import { tmp } from './common';
// const refA = ref(0);
</script>

<template>
  <div>
    <input type="text" v-model="tmp" />
    <div> {{ tmp }} </div>
  </div>
</template>