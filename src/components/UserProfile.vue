<template>
  <div class="user-container">
    <div>
      <i class="mdi mdi-account"></i>
    </div>
    <div class="user-description">
      <!-- 상위 컴포넌트에서 정의할 영역 slot 활용 -->
      <slot name="username"></slot>
      <div class="time">
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.user-container {
  display: flex;
  padding: 12px;
}
.mdi-account {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>