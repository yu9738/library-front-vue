<template>
  <main class="form-signin w-100 m-auto">
    <div id="login">
      <h1 class="h3 mb-3 fw-normal">로그인</h1>

      <div class="form-floating">
        <input type="id" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="loginData.username">
        <label for="floatingInput">아이디</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="loginData.password">
        <label for="floatingPassword">비밀번호</label>
      </div>

      <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" >
        <label class="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
      </div>
      <div class="form-floating " v-if="loginState" id="loginFalse">
        아이디 또는 비밀번호를 잘못 입력했습니다.
      </div>
      <button class="btn btn-primary w-100 py-2" @click="login" >로그인</button>
      <p class="mt-5 mb-3 text-body-secondary"></p>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  created() {
  },
data(){
  return{
    loginState:false,
    loginData:{
      username: '',
      password: '',
    }
  }
},
  methods:{
    login() {
      let saveData ={};
      saveData.userName =this.loginData.username
        axios.post("http://localhost:8080/members/login",this.loginData).then(response => {
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
#loginFalse{
  font-size: 14px;
  color : red;
  margin-bottom: 10px;
}
#login{
  margin-top: 5vh;
  margin-bottom: 40vh;
}
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>