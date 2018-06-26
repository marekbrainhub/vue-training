<template>
  <div class="key" :class="{ guessed }">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['guessed'],
  data() {
    return {

    };
  },
};
</script>

<style lang='stylus'>
.key
  font-family 'Iosevka'
  font-size 2rem
  margin .5em
  padding .5em
  border 2px solid gray
  border-radius 4px
  user-select none
  cursor pointer

.guessed
  background lightgray
  cursor default
</style>
