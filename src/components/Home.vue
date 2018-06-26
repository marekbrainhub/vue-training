<template>
  <div>
    <h1>Hangman</h1>

    <div class="strikes">
      <Strike v-for="i in maxStrikes" :key="i" :active="isActive(i)" />
    </div>
  </div>
</template>

<script>
import Strike from './Strike'

export default {
  components: { Strike },
  methods: {
    isActive(i) {
      return i <= this.strikes ? true : false;
    }
  },
  data() {
    return {
      strikes: 2,
      maxStrikes: 5,
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
