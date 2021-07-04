<template>
  <div class="profile-wrapper">
    <div class="profile">
      <div class="profile-avatar">
        <avatar />
      </div>
      <div class="profile-fields">
        <form-input
          name="name"
          type="text"
          :placeholder="'Аты-жөніңіз'"
          :value="'Алмат'"
          label="Аты-жөніңіз"
        />
        <form-input
          name="name"
          type="text"
          :placeholder="'Эл. почта'"
          :value="'Алмат'"
          label="Эл. почта"
        />
        <form-input
          name="name"
          type="text"
          :placeholder="'Телефон номер'"
          :value="'Алмат'"
          label="Телефон номер"
        />
      </div>
      <btn class="profile-btn">Изменить</btn>
    </div>
  </div>
</template>

<script>
import Avatar from '@/icons/Avatar'
import FormInput from '@/components/Input'
import Btn from '@/components/Button'

export default {
  components: { Avatar, FormInput, Btn },
  data: () => ({
    number: '+7(777)777-77-77',
    email: 'almat.zhanuzakov@gmail.com'
  }),
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "src/style/variables";
.profile-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f6f6fb;
}
.profile {
  width: 700px;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $white;
  -webkit-filter: drop-shadow(0px 32px 40px rgba(0,0,0,0.08));
  filter: drop-shadow(0px 4px 40px rgba(0,1,83,0.07));
  @media screen and (max-width: $layout-s){
    width: 90%;
  }
  &-avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    background-color: $white;
    -webkit-filter: drop-shadow(0px 32px 40px rgba(0,0,0,0.08));
    filter: drop-shadow(0px 4px 40px rgba(0,1,83,0.07));

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-fields {
    width: 100%;
  }
  &-field {
    margin-bottom: 15px;
    & label {
      display: block;
      margin-bottom: 8px;
      font-size: 14px;
      color: map_get($gray, 500)
    }
    & input {
      width: 100%;
      box-sizing: border-box;
      padding: 10px 15px;
      border-radius: 4px;
      border: 1px solid map_get($gray, 400);
      outline: none;
    }
  }
  &-btn {
    max-width: 300px;
  }
}
</style>
