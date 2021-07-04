<template>
  <section class="tabs">
    <div class="tabs-wrap">
      <router-link class="tab active" to="/"><home /></router-link>
      <router-link to="/courses" class="tab"><courses /></router-link>
      <router-link to="/faqs" class="tab"><faqs /></router-link>
      <router-link to="/profile" class="tab"><profile /></router-link>
    </div>
  </section>
</template>

<script>
import Home from '@/icons/Home'
import Courses from '@/icons/Courses'
import Profile from '@/icons/Profile'
import Faqs from '@/icons/Faqs'

export default {
  name: 'Tabs',
  components: { Home, Courses, Profile, Faqs }
}
</script>

<style lang="scss" scoped>
  @import "src/style/variables";

  .tabs {
    width: 100%;
    height: 50px;
    /*padding: 10px 0;*/
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: $white;
    filter: drop-shadow(0px 4px 40px rgba(0,1,83,0.07));
    @media screen and (min-width: $layout-s) {
      display: none;
    }
    &-wrap {
      height: 100%;
      padding: 0 20px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    }
    .tab {
      flex-basis: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      &.router-link-exact-active {
        background-color: $secondary;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border-bottom: 4px solid $primary;
      }
    }
  }
</style>
