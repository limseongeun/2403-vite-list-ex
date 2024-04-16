// eventBus.js
import { reactive } from 'vue';

// 이벤트 버스 객체 생성
const bus = reactive({
  events: {},
  $on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },
  $off(event, callback) {
    if (!this.events[event]) {
      return;
    }
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  },
  $emit(event, ...args) {
    if (!this.events[event]) {
      return;
    }
    this.events[event].forEach(callback => {
      callback(...args);
    });
  }
});

export default bus;