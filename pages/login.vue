<template>
  <div>
    <div class="login">
      <div class="wrapper">
        <login-form></login-form>
        <img :src="bgLogin" alt="background" />
      </div>
    </div>
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
.login {
  margin: 0 auto;
  height: 100vh;
  width: 1440px;
  display: flex;
  flex-direction: column;
}
.wrapper {
  height: 807px;
  margin: auto 0;
  position: relative;
}

img {
  position: absolute;
  right: 0;
  width: 1082px;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}
</style>
