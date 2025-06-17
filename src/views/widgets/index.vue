<template>
  <div class="widgets-container">
    <h2>小组件</h2>
    <ul class="widgets-list">
      <li @click="handleClick('dateDiff')">
        <span class="widget-name">日期差计算器</span>
        <span class="widget-arrow">→</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function handleClick(path: string) {
  router.push(`/widgets/${path}`)
}
</script>

<style scoped>
.widgets-container {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 30px;
  font-size: 24px;
  color: #333;
}

.widgets-list {
  list-style: none;
  padding: 0;
}

.widgets-list li {
  cursor: pointer;
  padding: 20px;
  background: white;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.widgets-list li:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.widget-name {
  font-size: 16px;
  color: #333;
}

.widget-arrow {
  color: #667eea;
  font-size: 20px;
}
</style>
