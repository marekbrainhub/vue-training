<template>
  <div>
    <button @click="startRandomGame()">Random word</button>
    <form @submit="startCustomGame()">
      <input type='password' v-model='input' />
      <button>Custom word</button>
    </form>
  </div>
</template>

<script>
import store from '@/store';
import words from '@/assets/words';

export default {
  methods: {
    startRandomGame() {
      const i = Math.floor(Math.random() * words.length);
      this.store.word = words[i];
      this.$router.push('/game');
    },
    startCustomGame() {
      this.store.word = this.input;
      this.$router.push('/game');
    }
  },
  data() {
    return {
      store,
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

</style>
