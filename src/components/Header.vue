<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    logout() {
      this.$store.commit("logout")
      alert("로그아웃 되었습니다.")
    },
  }
};
</script>

<template>
  <nav class="py-2 bg-body-tertiary border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><router-link to="/" class="nav-link link-body-emphasis px-2 active" aria-current="page">Home</router-link></li>
        <li class="nav-item"><router-link to="/" class="nav-link link-body-emphasis px-2">Features</router-link></li>
        <li class="nav-item"><router-link to="/" class="nav-link link-body-emphasis px-2">FAQs</router-link></li>
        <li class="nav-item"><router-link to="/" class="nav-link link-body-emphasis px-2">About</router-link></li>
      </ul>
      <ul class="nav" v-if="!this.$store.state.isLogin">
          <li class="nav-item"><router-link to="/login" class="nav-link link-body-emphasis px-2">로그인</router-link></li>
          <li class="nav-item"><router-link to="/join" class="nav-link link-body-emphasis px-2">회원 가입</router-link></li>
      </ul>
      <ul class="nav" v-else>
          <li class="nav-item"><router-link to="/profile" class="nav-link link-body-emphasis px-2">내 정보</router-link></li>
          <li class="nav-item"><router-link to="/" class="nav-link link-body-emphasis px-2" @click="logout">로그아웃</router-link></li>
      </ul>
    </div>
  </nav>
  <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-between align-items-center">
      <router-link to="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
        <div class="d-flex align-items-center">
          <svg class="bi me-2" width="40" height="32"></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="52" fill="currentColor" class="bi bi-book" viewBox="0 0 25 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="fs-4 me-auto text-nowrap">한국공학대 도서관</span>
        </div>

      <div class=" col-lg-auto mb-3 mb-lg-0  me-5 " v-if="this.$store.state.role==='admin'" >
            <router-link to="/admin" class="nav-link link-body-emphasis px-2 fs-5 " id="admin">관리자 페이지</router-link>
      </div>
        <div class=" col-lg-auto mb-3 mb-lg-0  me-5 " v-if="this.$store.state.role==='user'" >
          <router-link to="/recommend" class="nav-link link-body-emphasis px-2 fs-5 " id="admin">책 추천</router-link>
        </div>

      </router-link>
    </div>
  </header>
</template>

<style scoped>
#admin{
  margin-left: 55vw;
}
</style>