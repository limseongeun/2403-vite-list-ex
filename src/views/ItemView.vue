<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <user-profile>
        <template v-slot:username>
          <router-link :to="`/user/${fetchedItem.user}`">
              {{ fetchedItem.user }}
          </router-link>
        </template>
        <template v-slot:time>{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
</style>