<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">
  <div>
    <Header/>
  </div>
  <router-view/>
  <Footer/>

</template>

<script>
import Header from "@/components/Header.vue";
import {defineComponent} from "vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Footer, // 가져온 component 들을 등록합니다.
    Header,
  }
};

</script>
<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

#app {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  //color: #42b983;
}
</style>
