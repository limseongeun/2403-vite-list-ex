<template>
  <p v-for="item in this.$store.state.jobs" :key="item.id">
    <a :href="item.url">{{ item.title }}</a>
    <small>{{ item.time_ago }}, {{ item.domain }}</small>
  </p>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>