<template>
    <div id="app">
      <p>연차관리프로그램 - 로그인 페이지</p>
      <button @click="login()">로그인</button>
    </div>
  </template>

<script>

export default {
  name: "Login",
  methods: {
    /* 로그인 버튼 클릭시 대시보드로 이동하는 메서드 */
    login() {
      this.$router.push('/DashBoard');
    }
  }
}


</script>
  
<style>

</style>
  