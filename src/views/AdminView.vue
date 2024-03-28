<template>

  <table class="table caption-top table-striped table-hover" id="lend-table">
    <caption>잘못 놓인 책</caption>
    <thead class="table-light">
    <tr>
      <th scope="col">No</th>
      <th scope="col">도서명</th>
      <th scope="col">ISBN</th>
      <th scope="col">청구기호</th>
      <th scope="col">출판사</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(book , index) in bookList">
      <th scope="row">{{index+1}}</th>
      <td>{{book.title}}</td>
      <td>{{book.isbn}}</td>
      <td>{{book.callNumber}}</td>
      <td>{{book.publisher}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios.get('http://localhost:8080/book/displaced-book',{

    })
        .then(response => {
          console.log(response.data)
          this.bookList = response.data
        }).catch(error => {
      console.error(error);
    });


  },

data(){
  return{
    bookList :[],
  }
},
  methods:{

  }
}
</script>
<style scoped>

#div_main{
  margin-left: 30vw ;
  margin-bottom: 5vw;
}
#aa{
  min-width: 800px;
  max-width: 800px;
}
  #lend-table{
    margin-left: 10vw ;
    margin-right: 10vw ;
    max-width: 80vw;
  }
</style>