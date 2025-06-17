<template>
  <div class="date-diff-container">
    <h2>日期差计算器</h2>
    <div class="input-group">
      <div class="input-item">
        <label for="year">年</label>
        <input v-model="year" type="number" id="year" placeholder="YYYY" />
      </div>
      <div class="input-item">
        <label for="month">月</label>
        <input
          min="1"
          max="12"
          v-model="month"
          type="number"
          id="month"
          placeholder="MM"
        />
      </div>
      <div class="input-item">
        <label for="day">日</label>
        <input
          min="1"
          max="31"
          v-model="day"
          type="number"
          id="day"
          placeholder="DD"
        />
      </div>
    </div>
    <button @click="handleClick">计算</button>
    <div v-if="diff !== ''" class="result">
      <p>与今天相差</p>
      <span>{{ diff }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const today = new Date()
const year = ref(today.getFullYear())
const month = ref(today.getMonth() + 1)
const day = ref(today.getDate())
const diff = ref('')

function handleClick() {
  // 目标日期，时间设置为当日的零 点 零 分 零 秒
  const targetDate = new Date(year.value, month.value - 1, day.value)

  // 今天的日期，时间也设置为零点，以进行精确的日期比较
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)

  const diffTime = targetDate.getTime() - startOfToday.getTime()

  // 将毫秒差转换为天数
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

  diff.value = `${diffDays}天`
}
</script>

<style scoped>
.date-diff-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
}

h2 {
  color: #333;
  margin-bottom: 25px;
  font-weight: 600;
}

.input-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 25px;
}

.input-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

input {
  width: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

input::placeholder {
  color: #ccc;
}

input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.result {
  margin-top: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #eee;
  animation: fadeIn 0.5s ease;
}

.result p {
  margin: 0 0 10px 0;
  color: #555;
  font-size: 16px;
}

.result span {
  font-size: 28px;
  font-weight: bold;
  color: #667eea;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
