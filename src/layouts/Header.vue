<template>
  <section class="header-mobile">
    <span>{{ headerTitle() }}</span>
  </section>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
  }),
  mounted () {
    this.title()
  },
  methods: {
    headerTitle () {
      switch (this.$route.name) {
        case 'Home': return 'Менің курстарым'
        case 'Courses': return 'Барлық курстар'
        case 'Faqs': return 'Көмек'
        case 'Profile': return 'Жеке кабинет'
        default: return 'Бизнес Самғау'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/style/variables";

  .header-mobile {
    width: 100%;
    height: 70px;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
    box-sizing: border-box;
    background-color: $primary;
    -webkit-filter: drop-shadow(0px 32px 40px rgba(0,0,0,0.08));
    filter: drop-shadow(0px 4px 40px rgba(0,1,83,0.07));
    -webkit-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
    -moz-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
    box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
    @media screen and (min-width: $layout-s) {
      display: none;
    }
    & span {
      font-size: 25px;
      color: $white;
      font-weight: 500;
    }
  }
</style>
