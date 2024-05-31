<template>
  <div class="d-flex"   v-for="(book,i) in books" key="book.id" id="div_main">
    <ul class="list-unstyled">
      <li class="">
        <div  class="d-flex flex-column flex-lg-row gap-4  align-items-lg-center  py-3 link-body-emphasis text-decoration-none border-top"  id="aa" >
          <img  v-bind:src="imgURL[i]" onerror="this.onerror=null; this.src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPh-7xlw_yAL_fV1-9robkTTnDGPzH5JIIA2H1AJhoRWX66GyjTqIdapMhoLezrPHoOmU&usqp=CAU'" id="bookURL">

          <div class="te">
            <h5>
              <router-link :to="{name: 'bookDetail',query:{id: book.id,isbn:book.isbn.trim(),callNumber:book.callNumber.trim()}}" class="link-body-emphasis text-decoration-none" @click="$store.commit('setBookData', book)">{{book.title}}</router-link>
            </h5>
            <h6 class="text-body-secondary">저자 : {{book.author}}</h6>
            <h6 class="text-body-secondary">출판사 : {{book.publisher}}</h6>
            <h6 class="text-body-secondary">page : {{book.page}}</h6>
            <h6 class="text-body-secondary">ISBN : {{book.isbn}}</h6>
            <h6 class="text-body-secondary">장르 : {{book.genre}}</h6>
            <h6 class="text-body-secondary">출판년도 : {{book.publicationYear}}</h6>
            <h6 class="text-body-secondary">청구기호 : {{book.callNumber}}</h6>
            <h5 class="text-warning-emphasis" v-if="book.lendStatus === 'F'">대출중</h5>
            <h5 class="text-warning-emphasis" v-else>대출 가능</h5>
          </div>
        </div>
      </li>
    </ul>
  </div>


</template>
<script>
import axios from "axios";

export default {

   created() {
    this.bookRecommend();
  },

  data() {
    return {
      books: [],
      searchTerm: '',
      imgURL : [],
      isbn: [],
      userId: this.$store.state.userId,
    }
  },

  methods: {
    bookRecommend(){
      axios.get('http://35.240.205.200:8000/book',{
        params: {
          user_id : this.userId
        }
      })
          .then(response => {
            console.log(response.data)
            this.isbn = response.data.isbn;
            for(const i of this.isbn){
              axios.get('http://52.79.204.104:8080/book/rcmd',{
                params: {
                  isbn : i
                }
              }).then(response => {
                console.log(response.data)
                this.books.push(response.data.book);
                this.imgURL.push(response.data.imgURL);
              }).catch(error => {
                console.error(error);
              });
            }

          }).catch(error => {
        console.error(error);
      });
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

#bookURL{
  max-width: 300px;
  max-height: 300px;
}
</style>