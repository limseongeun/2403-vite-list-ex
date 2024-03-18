<template>
  <div v-for="user in users" :key="user.id">
    {{ user.title }}
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    // 기존 ES5 문법 활용
    var vm = this;
    fetchNewsList()
      .then(function(response) {
        console.log(response.data);
        vm.users = response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
      // .then(response => {
      //   console.log(response.data);
      //   this.users = response.data;
      // })
      // .catch(error => console.log(error))
  }
}
</script>

<style>

</style>