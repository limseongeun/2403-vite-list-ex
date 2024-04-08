<template>
  <div>
    <user-profile>
      <template #username>
          {{ userInfo.id }}
      </template>
      <template #time>{{ 'Joined ' + userInfo.created }}, </template>
      <template #karma>{{ userInfo.karma }}</template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }, 
}
</script>

<style>

</style>