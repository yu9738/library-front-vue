<template>
  <div id="mg">
    <SearchBar/>
  </div>

</template>

<script>
import SearchBar from "@/components/Search-bar";

export default {
  data() {

  },
  // methods: {
  //   goToBookSearch() {
  //     this.$router.push({ name: 'books', query: { keyword: this.searchTerm } });
  //   },
  // },
  components: {
    SearchBar,
  }
};
</script>
<style scoped>

#mg {
  padding-top: 10vh;
  padding-bottom: 30vh;
  //background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://www.tukorea.ac.kr/sites/tukorea/atchmnfl/bbs/134/temp_1697541487841100.tmp");
  //background-size: cover;
}
</style>
