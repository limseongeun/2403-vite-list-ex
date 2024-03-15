<template>
  <ul class="header">
    <li>
      <router-link to="/news">News</router-link>
    </li>
    <li>
      <router-link to="/ask">Ask</router-link>
    </li>
    <li>
      <router-link to="/jobs">Jobs</router-link>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #42b883;
}
.header li {
  display: flex;
  align-items: center;
}
.header li:first-child:before {
  display: none;
}
.header li:before {
  display: block;
  width: 1px;
  height: 14px;
  margin: 8px;
  content: '';
  background: #fff;
}
.header li a {
  color: #fff;
}
.header li a:hover,
.header li a.router-link-exact-active {
  color: #35495e;
  text-decoration: underline;
}
</style>