<template>
  <tool-bar />
  <router-view v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>