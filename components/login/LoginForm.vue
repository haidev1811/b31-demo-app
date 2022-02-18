<template>
  <div class="form-login">
    <base-dialog
      :show="!!error"
      title="Đăng nhập thất bại"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <form @submit.prevent="submitForm">
      <p class="heading">Customer Care</p>
      <div class="form-input" :class="{ invalid: !email.isValid }">
        <label for="email">Tên đăng nhập</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          v-model.trim="email.val"
          @blur="clearVadility('email')"
        />
        <span v-if="!email.isValid">Tên đăng nhập phải là 1 email</span>
      </div>
      <div class="form-input" :class="{ invalid: !password.isValid }">
        <label for="password">Mật khẩu</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*************"
          v-model.trim="password.val"
          @blur="clearVadility('password')"
        />
        <span v-if="!password.isValid">Mật khẩu phải có ít nhất 6 kí tự</span>
      </div>
      <div class="option">
        <b-form-group>
          <b-form-checkbox-group>
            <b-form-checkbox class="option-text">Ghi nhớ ?</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <a href="/" class="option-text">Quên mật khẩu</a>
      </div>
      <button>Đăng nhập</button>
    </form>
  </div>
</template>

<script>
import BaseDialog from '../ui/BaseDialog.vue';
export default {
  components: { BaseDialog },
  data() {
    return {
      email: {
        val: '',
        isValid: true,
      },
      password: {
        val: '',
        isValid: true,
      },
      formValid: true,
      error: null,
    };
  },
  methods: {
    clearVadility(input) {
      this[input].isValid = true;
    },
    validateform() {
      this.formValid = true;
      const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;
      const passwordRegex = /^[a-zA-Z0-9]{6,}$/;
      if (!emailRegex.test(this.email.val)) {
        this.email.isValid = false;
        this.formValid = false;
      }
      if (!passwordRegex.test(this.password.val)) {
        this.password.isValid = false;
        this.formValid = false;
      }
    },
    async submitForm() {
      this.validateform();

      if (!this.formValid) {
        return;
      }

      const actionPayload = {
        email: this.email.val,
        password: this.password.val,
      };

      try {
        await this.$store.dispatch('auth/login', actionPayload);
        this.$router.push('/');
      } catch (error) {
        this.error = error.message || 'Failed  to authenticate, try later.';
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
.form-login {
  position: absolute;
  left: 0;
  height: 100%;
  background-color: #fffcfc;
  padding: 74px 136px 0 136px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  z-index: 10;
}
form {
  display: flex;
  flex-direction: column;
}
.heading {
  font-weight: 400;
  font-size: 28px;
  line-height: 120%;
  color: #f57112;
  margin-bottom: 36px;
}
label {
  font-size: 18px;
  line-height: 120%;
  color: #0070d2;
  margin-bottom: 5px;
}
input {
  border: 1px solid #cecdcd;
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 18px;
  line-height: 120%;
}
input::placeholder {
  color: #cecdcd;
}
input:focus {
  outline: none;
}
.option {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.option-text {
  font-size: 16px;
  text-decoration: none;
  line-height: 120%;
  color: #0070d2;
  margin-bottom: 5px;
}
button {
  width: 100%;
  background-color: #0070d2;
  color: #fffcfc;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  border: none;
  padding: 8px 0;
  border-radius: 10px;
}
.form-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
}
.invalid input {
  border-color: red;
}
.invalid span {
  color: red;
  max-width: 230px;
}
</style>
