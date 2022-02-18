<template>
  <div>
    <b-container class="container">
      <div class="wrapper">
        <login-form></login-form>
        <img :src="bgLogin" alt="background" />
      </div>
    </b-container>
  </div>
</template>

<script>
import LoginForm from '../components/login/LoginForm.vue';
import bgLogin from '../static/images/background/bg-login.png';

export default {
  middleware: 'authenticated',
  layout: 'login',
  components: { LoginForm },
  data() {
    return {
      bgLogin: bgLogin,
    };
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.wrapper {
  height: 500px;
  margin: auto 0;
  position: relative;
}

img {
  position: absolute;
  right: 0;
  width: 70%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}
</style>
