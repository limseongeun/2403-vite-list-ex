<template>
  <div v-for="user in users" :key="user.id">
    {{ user.title }}
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    fetchAskList()
      .then(response => {
        console.log(response.data);
        this.users = response.data;
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>