<template>
  <div>

<!-- header -->
    <Header v-if="$route.name !== 'Login'"></Header>

<!-- nav -->
    <!-- <Nav></Nav> -->

<!-- <router-view/> : router/index.js 파일로 이동 -->
    <router-view/>

<!-- footer -->
    <Footer v-if="$route.name !== 'Login'"></Footer>

  </div>
</template>

<script>
// '@' 는 src를 가르킴
import Header from '@/layout/Header.vue';
//import Nav from '@/layout/Nav.vue';
import Footer from '@/layout/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    //Nav,
    Footer
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
