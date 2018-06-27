<template>
  <div>
    <div class='row'>
      <img src='https://d2x5ku95bkycr3.cloudfront.net/img/loading.gif' v-if='loading' />
      <button @click="startRandomGame()" :disabled='loading'>Random word</button>
    </div>
    <form @submit="startCustomGame()" class='row'>
      <input type='password' v-model='input' />
      <button>Custom word</button>
    </form>
  </div>
</template>

<script>
import store from '@/store'

const HANGMAN_WORDS = 'https://raw.githubusercontent.com/Xethron/Hangman/master/words.txt'

let words = [];

export default {
  mounted() {
    fetch(HANGMAN_WORDS)
      .then(res => res.text())
      .then(text => {
        words = text.split('\n')
      })
      .then(this.load)
  },
  methods: {
    startRandomGame() {
      const i = Math.floor(Math.random() * words.length);
      this.store.word = words[i];
      this.$router.push('/game');
    },
    startCustomGame() {
      this.store.word = this.input;
      this.$router.push('/game');
    },
    load() {
      this.loading = false;
    }
  },
  data() {
    return {
      store,
      loading: true,
      input: ''
    };
  },
};
</script>

<style lang='stylus'>
button
  font-family 'Avenir'
  font-size 3rem
  margin 1em

input
  font-size 3rem

.row
  display flex
  align-items center
  justify-content center

</style>
