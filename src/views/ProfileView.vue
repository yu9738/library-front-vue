<template>
  <div class="d-flex"   id="div_main">
    <ul class="list-unstyled">
      <li class="">
        <div  class="d-flex flex-column flex-lg-row gap-4  align-items-lg-center  py-3 link-body-emphasis text-decoration-none border-top"  id="aa" >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsw40RqD54BYg7g04mBOm0f2k24h2hhn8-gg&usqp=CAU" alt="...">
          <div class="">

            <h6 class="text-body-secondary">{{memberInfo.name}}님 반갑습니다</h6>
            <h6 class="text-body-secondary">아이디 : {{memberInfo.username}}</h6>
            <h6 class="text-body-secondary">이메일 : {{memberInfo.email}}</h6>
            <h6 class="text-body-secondary">가입일 : {{memberInfo.createDate}}</h6>
            <h6 class="text-body-secondary">핸드폰번호 : {{memberInfo.phoneNumber}}</h6>
            <h6 class="text-body-secondary">생년월일 : {{memberInfo.birthday}}</h6>

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
    axios.get('http://3.39.239.157:8080/member/info',{
      params: {
        username: this.$store.state.userName
      }
    })
        .then(response => {
          console.log(response.data)
          this.memberInfo = response.data
        }).catch(error => {
      console.error(error);
    });
  },
data(){
  return{
    memberInfo :[],
  }
},
  methods:{
    login() {
      let saveData ={};
      saveData.userName =this.loginData.username
      axios.post("http://3.39.239.157:8080/members/login",this.loginData).then(response => {
        console.log(response.data);
        if (response.data.grantType == null) {
          this.loginState = true;
        } else {
          saveData.token = response.data.accessToken
          this.$store.commit("loginSuccess",saveData)
          this.$router.push({
            name:'home'
          });
        }

      }).catch(error => {
        console.error(error);
      })
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

</style>