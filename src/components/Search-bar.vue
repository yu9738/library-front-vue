<script>
  export default {
    data() {
      return {
        searchTerm: '',
      };
    },
    methods: {
      goToBookSearch() {
        if (this.searchTerm.length <= 1) {
          alert("두글자 이상 입력해 주세요");
        } else {
          this.$router.push({
            name: 'books',
            query: { keyword: this.searchTerm },

          });
        }

      },
    },
  };
</script>

<template>

  <div class="d-flex justify-content-center py-xxl-5 " id="search-bar">
    <div class="input-group input-group-lg w-50">
      <span class="input-group-text ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
        </svg>
      </span>
      <input type="text" v-model="searchTerm" placeholder="도서명,저자 등 검색어를 입력하세요." class="form-control" @keyup.enter="goToBookSearch" id="search-input">
      <button class="btn btn-primary " @click="goToBookSearch">검색</button>
    </div>
  </div>
</template>

<style scoped>
#search-bar{
  padding-top: 10vh;
  padding-bottom: 10vh;

}
#search-input{
  background-color: rgba(255, 255, 255, 0.8);
  //height: 5vh;

}
</style>