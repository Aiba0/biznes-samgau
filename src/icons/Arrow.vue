<template>
  <div>
    <svg
      :class="show ? 'rotate' : ''"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="15px"
      height="12px"
      viewBox="0 0 30.021 30.021"
      style="enable-background:new 0 0 30.021 30.021;"
      xml:space="preserve"
      fill="#292929"
    >
    <g>
      <path d="M28.611,13.385l-11.011,9.352c-0.745,0.633-1.667,0.949-2.589,0.949c-0.921,0-1.842-0.316-2.589-0.949L1.411,13.385   c-1.684-1.43-1.89-3.954-0.46-5.638c1.431-1.684,3.955-1.89,5.639-0.459l8.421,7.151l8.42-7.151   c1.686-1.43,4.209-1.224,5.639,0.459C30.5,9.431,30.294,11.955,28.611,13.385z" />
    </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
  </svg>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style scoped>
  .rotate {
    transition: transform .2s ease-in-out;
    transform: rotate(-180deg);
    fill: white;
  }
</style>
