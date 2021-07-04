<template>
  <aside class="side-bar">
    <h1 class="logo">
      Business Samgau
    </h1>
    <nav class="nav">
      <router-link to="/">
        <i><home /></i>
        Менің курстарым
      </router-link>
      <router-link to="/courses">
        <i><courses /></i>
        Барлық курстар
      </router-link>
      <router-link to="/faqs">
        <i><faqs /></i>
        Сұрақ-жауап
      </router-link>
    </nav>
    <router-link to="/profile" class="user-box">
      <div class="user-box-img">
        <user />
        <settings class="user-box-img-settings" />
      </div>
      <div class="user-box-text">
        <span class="user-box-name">Aibek</span>
        <span class="user-box-email">aibek@gmail.com</span>
      </div>
    </router-link>
  </aside>
</template>

<script>
import Home from '@/icons/Home'
import User from '@/icons/User'
import Settings from '@/icons/Settings'
import Courses from '@/icons/Courses'
import Faqs from '@/icons/Faqs'
export default {
  components: { Home, User, Settings, Courses, Faqs }
}
</script>

<style lang="scss" scoped>
  @import 'src/style/variables';

  .side-bar {
    min-width: 320px;
    width: 320px;
    padding: 40px 40px 40px 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: $white;
    box-sizing: border-box;
    -webkit-filter: drop-shadow(0px 4px 40px rgba(0,1,83,0.07));
    filter: drop-shadow(0px 4px 40px rgba(0,1,83,0.07));
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    @media screen and (max-width: $layout-s){
      display: none;
    }
  }
  .logo {
    text-align: center;
    margin-bottom: 30px;
    color: $primary
  }
  .nav  {
    display: flex;
    flex-direction: column;
    & a {
      padding: 12px 16px 12px 55px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      font-size: 16px;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      font-weight: 500;
      transition: all .3s ease;
      &:hover {
        background-color: $secondary;
      }
      &.router-link-exact-active {
        background-color: $secondary;
        border-left: 4px solid $primary;
      }
      & i {
        margin-right: 15px;
      }
    }
  }
  .user-box {
    margin: auto auto 0 auto;
    width: 80%;
    box-sizing: border-box;
    max-height: 84px;
    min-height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    padding: 24px 20px 20px 20px;
    border-radius: 12px;
    overflow: hidden;
    transition: .2s ease;
    cursor: pointer;
    background-color: $secondary;
    &:hover {
      background-color: $secondary;
      -webkit-box-shadow: 0 5px 8px 1px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 0 5px 8px 1px rgba(34, 60, 80, 0.2);
      box-shadow: 0 5px 8px 1px rgba(34, 60, 80, 0.2);
    }
    &-img {
      width: 52px;
      height: 52px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: map_get($gray, 200);
      position: relative;
      &-settings {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 99;
      }
    }
    &-text {
      display: flex;
      flex-direction: column;
    }
    &-name {
      max-width: 120px;
      display: block;
      margin-bottom: 4px;
      overflow: hidden;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &-email {
      max-width: 120px;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
      color: map_get($gray, 600);
    }
  }
</style>
