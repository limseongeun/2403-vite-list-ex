<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            </template>
          </p>

          <template v-if="item.user">
            <small class="link-text">
              {{ item.time_ago }} 
              by
              <router-link :to="`/user/${item.user}`">
                {{ item.user }}
              </router-link>
            </small>
          </template>
          <template v-else>
            <small class="link-text">
              {{ item.time_ago }}, 
              <a :href="item.url" target="_blank">{{ item.domain }}</a>
            </small>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.getters.fetchedList;
    },
  }
}
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  list-style: none;
}
.points {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text,
.link-text a {
  color: #828282;
}
</style>