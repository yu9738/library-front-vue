<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{book}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    let id = this.$route.query.id;
    console.log(id)
    axios.get('http://3.39.239.157:8080/book',{
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
  },
data(){
  return{
    book :[],
  }
}
}
</script>
<style scoped>

</style>