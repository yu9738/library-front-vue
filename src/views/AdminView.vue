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
      <th scope="col">잘못 놓인 위치</th>
    </tr>
    </thead>
    <tbody>
    <template v-for="(book, index) in bookList">
      <tr @click="toggleDetail(index)">
        <th scope="row">{{ index+1 }}</th>
        <td>{{ book.title }}</td>
        <td>{{ book.isbn }}</td>
        <td>{{ book.callNumber }}</td>
        <td>{{ book.publisher }}</td>
      </tr>
      <tr v-if="activeIndex === index" :key="'details-' + book.isbn">
        <td colspan="5" class="responsive-container">
          <img :src="'/images/book' + book.bookId + '.jpg'" :alt="book.title" class="responsive-image" />
        </td>
      </tr>
    </template>
    </tbody>

  </table>


</template>

<script>
import axios from "axios";
export default {
  created() { // http://52.79.204.104:8080/
    axios.get('http://52.79.204.104:8080/book/displaced-book',{

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
    activeIndex: -1,
  }
},
  methods:{
    toggleDetail(index) {
      // 이미 활성화된 행을 다시 클릭하면 닫히도록 설정
      this.activeIndex = this.activeIndex === index ? -1 : index;
    },
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
.responsive-container {
  max-width: 100%; /* 부모 요소의 최대 너비를 화면 크기에 맞춥니다. */
  overflow: hidden;
}

.responsive-image {
  width: 100%; /* 부모 요소의 너비에 맞춰 이미지를 조정합니다. */
  height: auto; /* 이미지 비율을 유지합니다. */
}
</style>