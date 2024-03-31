<template>
  <div class="d-flex mt-5 border-top border-bottom"    id="div_main">
    <ul class="list-unstyled">
      <li class="">
        <div  class="d-flex flex-column flex-lg-row gap-4  align-items-lg-center  py-3 link-body-emphasis text-decoration-none "  id="aa" >
          <img v-bind:src="bookDetailAPI.image" alt="..." id="bookIMG">

          <div class="te">
            <h4 class="text-body-secondary">저자   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp :  &nbsp {{book.author}}</h4>
            <h4 class="text-body-secondary">출판사     &nbsp &nbsp &nbsp &nbsp :  &nbsp {{book.publisher}}</h4>
            <h4 class="text-body-secondary">page    &nbsp &nbsp  &nbsp &nbsp &nbsp  :  &nbsp {{book.page}}</h4>
            <h4 class="text-body-secondary">ISBN   &nbsp &nbsp   &nbsp &nbsp &nbsp  :  &nbsp {{book.isbn}}</h4>
            <h4 class="text-body-secondary">장르     &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp :  &nbsp {{book.genre}}</h4>
            <h4 class="text-body-secondary">출판년도   &nbsp &nbsp  :  &nbsp {{book.publicationYear}}</h4>
            <h4 class="text-body-secondary">청구기호    &nbsp &nbsp :  &nbsp {{book.callNumber}}</h4>
            <h3 class="text-warning-emphasis" v-if="book.lendStatus === 'F'">대출중</h3>
            <h3 class="text-warning-emphasis" v-else>대출 가능</h3>

          </div>
        </div>
      </li>
    </ul>
  </div>

  <div class=" " id="bookDetail">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h3 class="my-1 mx-lg-5 fw-normal">책소개</h3>
      </div>
      <div class="card-body">
        <h4 class="list-unstyled mt-3 mb-4 mx-5 text-center" style="line-height: 2;">
          {{bookDetailAPI.description}}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    let id = this.$route.query.id;
    let isbn = this.$route.query.isbn;
    console.log(id)
    axios.get('http://52.79.204.104:8080/book',{
      params: {
        id: id
      }
    })
        .then(response => {
          console.log(response.data)
          this.book = response.data
        }).catch(error => {
      console.error(error);
    });
    axios.get('http://52.79.204.104:8080/book/detail',{
      params: {
        isbn: isbn
      }
    })
        .then(response => {
          console.log(response.data)
          this.bookDetailAPI = response.data
        }).catch(error => {
      console.error(error);
    });

  },
data(){
  return{
    book :[],
    bookDetailAPI :[],
  }
}
}
</script>
<style scoped>
#div_main{
  margin-left: 20vw ;
  margin-bottom: 5vw;
}
#bookIMG{
  max-width: 300px;
  max-height: 400px;
}

#bookDetail{
  margin-left: 20vw;
  margin-right: 20vw;
}

</style>