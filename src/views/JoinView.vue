<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

  <div class="registration-form">
    <form>
      <div class="form-icon">
        <span><i class="bi bi-person"></i></span>
      </div>
      <div class="form-group">
        <div class="mx-3 mb-2">
          아이디
          <button type="button" class="btn  " @click="isDuplicateId">아이디 중복 체크</button>
        </div>
        <input type="text" class="form-control item" id="username" placeholder="Username" v-model="joinData.username">
        <div v-if="isCheck">
          <div class="mx-3 text-danger " v-if="checkId">중복된 아이디 입니다 </div>
          <div class="mx-3 text-danger " v-if="!checkId">사용 가능한 아이디 입니다 </div>
        </div>
        <div class="mx-3 text-danger " v-if="nullState.username">아이디를 입력해 주세요 </div>
      </div>
      <div class="form-group has-success">
        <div class="mx-3 mb-2">비밀번호</div>
        <input type="password" class="form-control  item" id="password" placeholder="Password" v-model="joinData.password">
        <div class="mx-3 text-danger" v-if="nullState.password">비밀번호를 입력해 주세요 </div>
      </div>
      <div class="form-group">
        <div class="mx-3 mb-2">이름</div>
        <input type="text" class="form-control item" id="name" placeholder="Name" v-model="joinData.name">
        <div class="mx-3 text-danger" v-if="nullState.name">이름을 입력해 주세요 </div>
      </div>
      <div class="form-group">
        <div class="mx-3 mb-2">이메일</div>
        <input type="text" class="form-control item" id="email" placeholder="Email" v-model="joinData.email">
        <div class="mx-3 text-danger" v-if="nullState.email">이메일을 입력해 주세요 </div>
      </div>
      <div class="form-group">
        <div class="mx-3 mb-2">핸드폰번호</div>
        <input type="text" class="form-control item" id="phone-number" placeholder="Phone Number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" v-model="joinData.phoneNumber">
        <div class="mx-3 text-danger" v-if="nullState.phoneNumber">핸드폰번호를 입력해 주세요 </div>
      </div>
      <div class="form-group">
        <div class="mx-3 mb-2">생년월일 (8글자 예시 : 19990921)</div>
        <input type="number" v-model="joinData.birthday" class="form-control item" id="birth-date" placeholder="Birth Date">
        <div class="mx-3 text-danger"v-if="nullState.birthday" >생년월일을 입력해 주세요 </div>
      </div>
      <div class="form-group">
        <div class="mx-3 mb-2">성별</div>
        <select class="form-select" id="gender" v-model="joinData.gender">
          <option>남자</option>
          <option>여자</option>
        </select>
        <div class="mx-3 text-danger" v-if="nullState.gender">성별을 입력해 주세요 </div>
      </div>

      <div class="form-group">
        <button type="button" class="btn btn-block create-account" @click="join">Create Account</button>
      </div>
    </form>
    <div class="social-media">
      <h5>Sign up with social media</h5>
      <div class="social-icons">
        <a href="#"><i class="icon-social-facebook" title="Facebook"></i></a>
        <a href="#"><i class="icon-social-google" title="Google"></i></a>
        <a href="#"><i class="icon-social-twitter" title="Twitter"></i></a>
        <i class="bi bi-2-square"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
  },
data(){
  return{
    checkId : false,
    isCheck : false,
    joinData : {
      username: '',
      password: '',
      name: '',
      email: '',
      phoneNumber: '',
      gender: '',
      birthday: '',
    },
    nullState:{
      username: false,
      password: false,
      name: false,
      email: false,
      phoneNumber: false,
      gender: false,
      birthday: false,
    }


  }
},
  methods: {
    join() {
      if (!this.nullCheck()) {
        axios.post("http://localhost:8080/join", this.joinData).then(response => {
          console.log(response.data);
          alert("회원가입이 완료되었습니다.");
          this.$router.push({
            name: 'home'
          })
        }).catch(error => {
          console.error(error);
        });
      }

    },
    isDuplicateId() {
      axios.get("http://localhost:8080/member/duplicate", {
        params: {
          username: this.joinData.username
        }
      }).then(response => {
        console.log(response.data);
        this.checkId = !response.data;
        this.isCheck = true;
      }).catch(error => {
        console.error(error);
      });
    },
    nullCheck() {
      let isnull=false;
      if (!this.joinData.username) {
        this.nullState.username = true;
        isnull = true;
      }
      if(!this.joinData.password) {
        this.nullState.password = true;
        isnull = true;
      }
      if(!this.joinData.name) {
        this.nullState.name = true;
        isnull = true;
      }
      if(!this.joinData.email) {
        this.nullState.email = true;
        isnull = true;
      }
      if(!this.joinData.phoneNumber) {
        this.nullState.phoneNumber = true;
        isnull = true;
      }
      if(!this.joinData.gender) {
        this.nullState.gender = true;
        isnull = true;
      }
      if(!this.joinData.birthday) {
        this.nullState.birthday = true;
        isnull = true;
      }
      return isnull;
    },
  },
}
</script>
<style scoped>

body{
  background-color: #dee9ff;
}


.registration-form form{
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  padding: 50px 70px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}
#gender{
  border-radius: 20px;
  margin-bottom: 25px;
  padding: 10px 20px;
}
.registration-form .form-icon{
  text-align: center;
  background-color: #5891ff;
  border-radius: 50%;
  font-size: 40px;
  color: white;
  width: 100px;
  height: 100px;
  margin: auto;
  margin-bottom: 50px;
  line-height: 100px;
}

.registration-form .item{
  border-radius: 20px;
  margin-bottom: 25px;
  padding: 10px 20px;
}

.registration-form .create-account{
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  background-color: #5791ff;
  border: none;
  color: white;
  margin-top: 20px;
}

.registration-form .social-media{
  max-width: 600px;
  background-color: #fff;
  margin: auto;
  padding: 35px 0;
  text-align: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #9fadca;
  border-top: 1px solid #dee9ff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .social-icons{
  margin-top: 30px;
  margin-bottom: 16px;
}

.registration-form .social-icons a{
  font-size: 23px;
  margin: 0 3px;
  color: #5691ff;
  border: 1px solid;
  border-radius: 50%;
  width: 45px;
  display: inline-block;
  height: 45px;
  text-align: center;
  background-color: #fff;
  line-height: 45px;
}



</style>