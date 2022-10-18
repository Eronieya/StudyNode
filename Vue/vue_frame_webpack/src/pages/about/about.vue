<template>
  <div @click="changeVal">about {{ val }}</div>
</template>

<script>
export default {
  created() {
    function Person(name) {
      this.name = name;
    }

    let person = new Person("qiqi");

    let abc = function () {
      console.log("i am obj funcabc");
    };

    let obj = {
      func: function () {
        console.log("i am obj func");
      },
      funcAbc: abc,
      arr: [123123, 42134123],
      date: new Date(),
      reg: new RegExp('/+/w'),
      udf: undefined,
      nan: NaN,
      infinity: Infinity,
      ps: person,
    };

    console.log("obj", obj);
    console.log("deepCopy by JSON", JSON.parse(JSON.stringify(obj)));
  },
  data() {
    return {
      rval: 2,
    };
  },
  computed: {
    val() {
      console.log("computed val");
      return this.rval;
    },
  },
  watch: {
    rval() {
      console.log("watch rval", this.rval);
    },
  },
  methods: {
    changeVal() {
      this.rval = 3;
    },
  },
};
</script>

<style>
</style>