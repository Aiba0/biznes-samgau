<template>
  <transition name="modal-fade" appear>
    <div v-if="show" class="modal-overlay" @click="close">
      <div class="modal" @click.stop="onClickBody">
        <div class="close-modal-icon" @click="close" />
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    closeButton: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.$fn.layout.removeBodyScroll()
      } else {
        this.$fn.layout.addBodyScroll()
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    onClickBody () {}
  }
}
</script>

<style lang="scss" scoped>
  @import "src/style/variables";
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .2s ease-in-out;
  }
  .modal {
    position: relative;
    padding: 32px;
    background: $white;
    border-radius: 4px;
    &-overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }
    .close-modal-icon {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      &::after,
      &::before {
        position: absolute;
        left: 0;
        top: 10px;
        content: "";
        width: 100%;
        height: 2px;
        background-color: #777777;
      }
      &::after {
        transform: rotate(-45deg);
      }
      &::before {
        transform: rotate(45deg);
      }
    }
  }
</style>
