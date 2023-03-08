<template>
  <div id="app">
    <!-- 计算属性不是通过函数的方式调用，
    而是通过直接书写，计算属性具有缓存，第一次调用后在调用会使用缓存结果 -->
    <h1>全名：{{ fullName }}</h1>
    <h1>全名：{{ fullName }}</h1>
    <h1>全名：{{ fullName }}</h1>
    <button @click="setNewName(`小`, `红`)">点击改名</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "王",
      lastName: "振",
    };
  },
  computed: {
    fullName() {
      console.log("fullName called");
      return this.firstName + "" + this.lastName;
    },
  },
  methods: {
    setNewName(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    },
  },
};
</script>

