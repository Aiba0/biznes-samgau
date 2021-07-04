<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "src/style/variables";
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
