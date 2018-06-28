<template>
  <div class="wrapper">
    <h1>{{ store.word }}</h1>

    <div class="keyboard">
      <Key 
        v-for="letter in alphabet"
        :key="letter"
        @click.native="checkLetter(letter)"
        :guessed="guessed(letter)"
      >{{ letter }}</Key>
    </div>

    <div class="strikes" @click="store.strikes++">
      <Strike v-for="i in store.maxStrikes" :key="i" :order="i" />
    </div>
  </div>
</template>

<script>
import Strike from './Strike';
import Key from './Key';

import store from '@/store';

function generateAlphabet() {
  return [...Array(26)].map((_, i) => {
    return String.fromCharCode(97 + i);
  });
}

export default {
  components: { Strike, Key },
  methods: {
    checkLetter(letter) {
      this.store.guessedLetters.push(letter);
    },
    guessed(letter) {
      return this.store.guessedLetters.includes(letter);
    },
  },
  data() {
    return {
      store,
      alphabet: generateAlphabet()
    };
  },
};
</script>

<style lang='stylus'>
*
  margin 0
  padding 0
  box-sizing border-box

h1
  font-size 5rem

.wrapper
  display flex
  flex-direction column
  align-items center
  justify-content center

.keyboard
  display flex
  justify-content center
  width 960px
  flex-wrap wrap

.strikes
  text-align center
  font-size 5rem
  user-select none
</style>
