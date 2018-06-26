<template>
  <span
    :class="{ red: order <= strikes }"
  >
    ✖
  </span>
</template>

<script>
export default {
  props: ['order'],
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
