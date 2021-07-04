<template>
  <modal :show="falsed">
    <login-form></login-form>
  </modal>
</template>

<script>
import LoginForm from './forms/LoginForm'
import Modal from '../Modal'
export default {
  components: { LoginForm, Modal }
}
</script>
