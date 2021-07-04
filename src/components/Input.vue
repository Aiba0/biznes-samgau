<template>
  <div class="form-input-wrap">
    <label class="form-input-label">
      <span>{{ label }}</span>
      <span v-if="icon" class="form-input-icon" />
      <input
        :type="type"
        :name="name"
        v-model="inputValue"
        :placeholder="placeholder"
      >
    </label>
    <span v-if="error && errorText" class="form-input-error">Error text</span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    name: { type: String, default: '' },
    value: { type: String, default: '' },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    icon: { type: String, default: '' },
    type: { type: String, default: 'text' },
    error: { type: Boolean, default: false },
    errorText: { type: String, default: '' },
    disable: { type: Boolean, default: true }
  },
  data: () => ({
    inputValue: ''
  })
}
</script>

<style lang="scss" scoped>
  @import "src/style/variables";
  .form-input {
    &-wrap {
      margin-bottom: 15px;
    }
    &-label {
      & span {
        display: block;
        margin-bottom: 8px;
        font-size: 14px;
        color: map_get($gray, 500);
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
  }
</style>
