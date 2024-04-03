<template>
  <p v-for="item in fetchedAsk" :key="item.id">
    <a :href="item.url">{{ item.title }}</a>
    <small>{{ item.time_ago }} by {{ item.user }}</small>
  </p>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ]),
    // #2
    // ...mapState({
    //   ask: state => state.ask
    // })

    // #1
    // ask() {
    //  return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>