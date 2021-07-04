<template>
  <div id="app">
    <header-mobile />
    <side-bar />
    <main class="main">
      <div class="layout">
        <router-view />
      </div>
      <tabs />
    </main>
  </div>
</template>

<script>
import SideBar from './layouts/SideBar'
import HeaderMobile from './layouts/Header'
import Tabs from './layouts/Tabs'
// import AuthModal from './components/Auth'

export default {
  name: 'App',
  components: { SideBar, Tabs, HeaderMobile },
  data: () => ({
    show: false
  }),
  methods: {
    close () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss">
  @import "style/main";
  .main {
    margin-left: 320px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 100vw;
    min-height: 100vh;
    background-color: $bg-color;
    @media screen and (max-width: $layout-s){
      margin: 10px 0 60px 0;
    }
  }
</style>
