<template>
  <div>
    <h1>Hangman</h1>

    <div class="strikes" @click="store.strikes++">
      <Strike v-for="i in store.maxStrikes" :key="i" :order="i" />
    </div>
  </div>
</template>

<script>
import Strike from './Strike';
import store from '@/store';

export default {
  components: { Strike },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang='stylus' scoped>
.strikes
  text-align center
  font-size 5rem
  user-select none
</style>
