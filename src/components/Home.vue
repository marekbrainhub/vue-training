<template>
  <div>
    <h1>Hangman</h1>

    <div class="strikes">
      <span
        v-for="i in maxStrikes"
        :key="i"
        :id="i"
        :class="{ red: i <= strikes }"
      >
        ✖
      </span>
    </div>
  </div>
</template>

<script>
export default {
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

.red
  color darken(red, 30%)
</style>
