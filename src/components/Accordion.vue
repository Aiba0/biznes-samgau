<template>
  <div class="accordion unselectable">
    <div class="accordion-header" :class="{active: show}" @click="toggle">
      <span class="accordion-header-text"><slot>Курсты қалай аламын?</slot></span>
      <arrow :show="show" />
    </div>
    <div class="accordion-body" :class="{active: show}">
      <p class="accordion-body-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ex facere nemo sed unde?
        Ad adipisci aspernatur beatae consequuntur, deleniti dignissimos dolorum ex libero modi nesciunt
        non nostrum odit reiciendis, veritatis voluptas. Architecto consequatur dolores ducimus excepturi
        facere ipsum modi obcaecati, rem repellat repellendus reprehenderit, sunt totam voluptates? Praesentium, quidem?
      </p>
    </div>
  </div>
</template>

<script>
import Arrow from '@/icons/Arrow'

export default {
  name: 'Accordion',
  components: { Arrow },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/style/variables";
  .accordion {
    display: flex;
    flex-direction: column;
    &-header {
      margin-bottom: 10px;
      padding: 15px 25px;
      background-color: $white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 2px;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      &-text {
        font-weight: 400;
      }
    }

    &-header.active {
      background-color: $primary;
      color: $white;
    }
    &-body {
      max-height: 0;
      overflow: hidden;
      background-color: $white;
      transition: all .2s ease-in-out;
      &.active {
        max-height: 300px;
        margin-bottom: 24px;
      }
      & p {
        margin: 20px;
      }
    }
  }
</style>
