<template>
  <div class="wrapper">
    <h1>{{ encodeWord() }}</h1>

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

    <h1 v-if="checkWin()">You won!</h1>
    <h1 v-if="checkLose()">You lost!</h1>
    <h2 v-if="checkLose()">The word was {{ store.word }}</h2>
    <button @click='resetGame()'>Reset</button>
  </div>
</template>

<script>
import Strike from './Strike.vue';
import Key from './Key.vue';

import store from '../store';

function generateAlphabet() {
  return [...Array(26)].map((_, i) => {
    return String.fromCharCode(97 + i);
  });
}

export default {
  components: { Strike, Key },
  methods: {
    checkLetter(letter) {
      if(!this.guessed(letter)) {
        this.store.guessedLetters.push(letter);
        if(!this.store.word.toLowerCase().includes(letter)) {
          this.store.strikes++;
        }
      }
    },
    guessed(letter) {
      return this.store.guessedLetters.includes(letter);
    },
    encodeWord() {
      return this.store.word.toLowerCase().split('').map(letter => {
        return this.store.guessedLetters.includes(letter) ? letter : '_';
      }).join('');
    },
    checkLose() {
      if(this.store.strikes >= this.store.maxStrikes) {
        return true;
      } else {
        return false;
      }
    },
    checkWin() {
      if(!this.encodeWord().includes('_')) {
        return true;
      } else {
        return false;
      }
    },
    resetGame() {
      this.store.word = 'Hangman';
      this.store.guessedLetters = [];
      this.store.strikes = 0;
      this.$router.push('/');
    }
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
  letter-spacing 4px

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
