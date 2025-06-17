<template>
  <div class="not-found">
    <div class="error-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">页面未找到</h2>
      <p class="error-message">抱歉，您访问的页面不存在或已被移除。</p>

      <div class="suggestions">
        <h3>您可以尝试：</h3>
        <ul>
          <li>检查URL地址是否正确</li>
          <li>返回首页重新导航</li>
          <li>使用下方的导航链接</li>
        </ul>
      </div>

      <div class="navigation">
        <router-link to="/" class="btn btn-primary"> 返回首页 </router-link>
        <router-link to="/about" class="btn btn-secondary">
          关于我们
        </router-link>
        <button @click="goBack" class="btn btn-outline">返回上页</button>
      </div>
    </div>

    <div class="illustration">
      <div class="emoji">🤔</div>
      <p>看起来您迷路了...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.go(-1)
}
</script>

<style scoped>
.not-found {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.error-content {
  margin-bottom: 3rem;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  color: #007bff;
  margin: 0;
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.error-title {
  font-size: 2.5rem;
  color: #333;
  margin: 1rem 0;
  font-weight: 600;
}

.error-message {
  font-size: 1.2rem;
  color: #6c757d;
  margin: 1.5rem 0;
  line-height: 1.6;
}

.suggestions {
  margin: 2rem 0;
  text-align: left;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.suggestions h3 {
  color: #333;
  margin-bottom: 1rem;
}

.suggestions ul {
  color: #6c757d;
  line-height: 1.8;
}

.suggestions li {
  margin-bottom: 0.5rem;
}

.navigation {
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #545b62;
  transform: translateY(-1px);
}

.btn-outline {
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}

.btn-outline:hover {
  background-color: #007bff;
  color: white;
  transform: translateY(-1px);
}

.illustration {
  margin-top: 2rem;
}

.emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

.illustration p {
  color: #6c757d;
  font-style: italic;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .error-code {
    font-size: 6rem;
  }

  .error-title {
    font-size: 2rem;
  }

  .error-message {
    font-size: 1rem;
  }

  .btn {
    display: block;
    margin: 0.5rem auto;
    width: 200px;
  }

  .not-found {
    padding: 1rem;
  }
}
</style>
