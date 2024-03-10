<template>
  <div class="d-flex justify-content-center py-xxl-5 " id="search-bar">
    <div class="input-group input-group-lg w-50">
      <span class="input-group-text ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
        </svg>
      </span>
      <input type="text" v-model="searchTerm" placeholder="도서명,저자 등 검색어를 입력하세요." class="form-control" @keyup.enter="goToBookSearch">
      <button class="btn btn-primary " @click="goToBookSearch">검색</button>
    </div>
  </div>

  <div class="d-flex"   v-for="book in books" key="book.id" id="div_main">
    <ul class="list-unstyled">
      <li class="">
        <div  class="d-flex flex-column flex-lg-row gap-4  align-items-lg-center  py-3 link-body-emphasis text-decoration-none border-top"  id="aa" >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPh-7xlw_yAL_fV1-9robkTTnDGPzH5JIIA2H1AJhoRWX66GyjTqIdapMhoLezrPHoOmU&usqp=CAU" alt="...">

          <div class="">
            <h5>
              <router-link :to="{name: 'bookDetail',query:{id: book.id}}" class="link-body-emphasis text-decoration-none" @click="$store.commit('setBookData', book)">{{book.title}}</router-link>
            </h5>
            <h6 class="text-body-secondary">{{book.author}}</h6>
            <h6 class="text-body-secondary">출판사 : {{book.publisher}}</h6>
            <h6 class="text-body-secondary">page : {{book.page}}</h6>
            <h6 class="text-body-secondary">ISBN : {{book.isbn}}</h6>
            <h6 class="text-body-secondary">장르 : {{book.genre}}</h6>
            <h6 class="text-body-secondary">출판년도 : {{book.publicationYear}}</h6>
            <h6 class="text-body-secondary">청구기호 : {{book.callNumber}}</h6>

          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import SearchBar from "@/components/Search-bar";

export default {

  created() {
    let keyword = this.$route.query.keyword;
    console.log(keyword)
    axios.get('http://3.39.239.157:8080/search-book',{
      params: {
        keyword: keyword
      }
    })
        .then(response => {
          console.log(response.data)
          this.books = response.data
        }).catch(error => {
      console.error(error);
    });
  },

  data() {
    return {
      books: [],
      searchTerm: '',

    }
  },
  components: {
    SearchBar,
  },
  methods: {
    // goToDetail() {
    //   this.$router.push({ name: 'bookDetail',query:{id: book.id}})
    // },
    goToBookSearch() {
      let keyword = this.searchTerm;
      if(keyword.length<=1){
        alert("두글자 이상 입력해 주세요");
      }else{
        console.log(keyword)
        axios.get('http://3.39.239.157:8080/search-book',{
          params: {
            keyword: keyword
          }
        })
            .then(response => {
              console.log(response.data)
              this.books = response.data
            }).catch(error => {
          console.error(error);
        });
      }

    },
  },

}
</script>
<style scoped>
#div_main{
  margin-left: 20vw ;
}
#aa{
  min-width: 60vw;
  max-width: 60vw;
}
#search-bar{
  margin-top: 2rem;
  margin-bottom: 2rem;
}

</style>