<template>
  <span
    :class="{ red: active }"
  >
    ✖ 
  </span>
</template>

<script>
import store from '../store';

export default {
  props: ['order'],
  computed: {
    active() {
      return this.order <= this.store.strikes ? true : false;
    },
  },
  data() {
    return {
      store
    };
  },
};
</script>

<style lang='stylus' scoped>
.red
  color darken(red, 30%)
</style>
