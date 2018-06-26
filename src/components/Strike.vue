<template>
  <span
    :class="{ red: active }"
  >
    ✖
  </span>
</template>

<script>
export default {
  props: ['active'],
  data() {
    return {

    };
  },
};
</script>

<style lang='stylus' scoped>
.red
  color darken(red, 30%)
</style>
