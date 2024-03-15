<template>
  <tool-bar />
  <router-view />
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar,
  }
}
</script>