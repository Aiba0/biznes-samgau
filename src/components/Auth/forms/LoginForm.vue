<template>
  <form class="login-form" @submit.prevent="submitHandler">
    <div class="auth-logo">Бизнес Самғау</div>
    <form-input label="Эл. почта" />
    <form-input label="Пароль" />
    <button type="submit" class="btn"></button>
  </form>
</template>

<script>
import formInput from '../../Input'
export default {
  components: { formInput },
  methods: {
    submitHandler () {
      console.log('submitted')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/style/variables";
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 50px;
  }
  .auth-logo {
    font-size: 24px;
    color: $primary;
    margin-bottom: 30px;
  }
  .btn {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: $primary;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: $white;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all .1s ease-in-out;
    &:hover {
      opacity: .8;
    }
  }
</style>
