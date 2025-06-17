<template>
  <full-page :options="options" id="fullpage">
    <div class="section hero-section" data-section="1">
      <div class="hero-content">
        <h1 class="hero-title" @click="handleClick">Fun Labs</h1>
        <p class="hero-subtitle">探索无限可乐</p>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </div>
    <div class="section content-section" data-section="2">
      <div class="content">
        <h2>有趣的东西</h2>
        <p>致力于有趣的探索与应用</p>
        <div class="feature-cards">
          <div class="card">
            <div class="card-icon">🚀</div>
            <h3>有趣</h3>
          </div>
          <div class="card">
            <div class="card-icon">⚡</div>
            <h3>有趣</h3>
          </div>
          <div class="card">
            <div class="card-icon">🎨</div>
            <h3>有趣</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="section contact-section" data-section="3">
      <div class="content">
        <!-- <h2>联系我们</h2>
        <p>让我们一起创造更美好的未来</p> -->
        <button class="cta-button">have fun</button>
      </div>
    </div>
  </full-page>
</template>

<script setup lang="ts">
import type { FullPageOptions } from 'vue-fullpage.js'
import { useRouter } from 'vue-router'

const router = useRouter()
// fullpage.js 配置选项
const options: FullPageOptions = {
  licenseKey: 'gplv3-license',
  sectionsColor: ['#000000', '#ffffff', '#f8f9fa'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['首页', '特性', '联系'],
  scrollingSpeed: 600,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 300,
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: false,
  css3: true,
  touchSensitivity: 15,
  bigSectionsDestination: 'top',
}

function handleClick() {
  router.push('/widgets')
}
</script>

<style scoped>
/* 基础section样式 */
.section {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* 第一屏 - 黑色背景 */
.hero-section {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  overflow: hidden;
}

.hero-content {
  text-align: center;
  z-index: 2;
  animation: heroContentFadeIn 1.5s ease-out;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  cursor: pointer;
  margin: 0;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #f5576c 75%,
    #4facfe 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation:
    gradientShift 4s ease-in-out infinite,
    titleBounceIn 1s ease-out;
  letter-spacing: 0.1em;
  filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.3));
}

.hero-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;
  font-weight: 300;
  letter-spacing: 0.15em;
  animation: fadeInUp 1.5s ease-out 0.5s both;
}

/* 滚动指示器 */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite 2s;
  opacity: 0;
  animation:
    bounce 2s infinite 2s,
    fadeIn 1s ease-out 2s both;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: linear-gradient(to bottom, transparent, #fff, transparent);
  position: relative;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -3px;
  width: 8px;
  height: 8px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45deg);
}

/* 第二屏 - 特性展示 */
.content-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
}

.content {
  text-align: center;
  padding: 2rem;
  max-width: 1000px;
}

.content h2 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  animation: slideInFromTop 1s ease-out 0.3s both;
}

.content p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  animation: slideInFromTop 1s ease-out 0.6s both;
}

/* 特性卡片 */
.feature-cards {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  animation: cardSlideIn 0.8s ease-out both;
  transition: all 0.3s ease;
}

.card:nth-child(1) {
  animation-delay: 0.9s;
}
.card:nth-child(2) {
  animation-delay: 1.2s;
}
.card:nth-child(3) {
  animation-delay: 1.5s;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: iconRotate 0.6s ease-out;
}

.card h3 {
  font-size: 1.2rem;
  color: #333;
}

/* 第三屏 - 联系我们 */
.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.contact-section .content h2 {
  color: white;
  animation: slideInFromTop 1s ease-out 0.3s both;
}

.contact-section .content p {
  color: rgba(255, 255, 255, 0.9);
  animation: slideInFromTop 1s ease-out 0.6s both;
}

.cta-button {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  margin-top: 2rem;
  animation: buttonSlideIn 1s ease-out 0.9s both;
}

.cta-button:hover {
  background: white;
  color: #667eea;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* 动画定义 */
@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes titleBounceIn {
  0% {
    transform: scale(0.3) rotate(-10deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.05) rotate(2deg);
  }
  70% {
    transform: scale(0.9) rotate(-1deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

@keyframes heroContentFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInFromTop {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardSlideIn {
  0% {
    opacity: 0;
    transform: translateY(80px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes iconRotate {
  0% {
    transform: rotate(-180deg) scale(0);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}

@keyframes buttonSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .content h2 {
    font-size: 2rem;
  }

  .feature-cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    min-width: 280px;
  }
}

/* 覆盖 fullpage.js 默认样式 */
:deep(.fp-nav ul li a span) {
  background: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
}

:deep(.fp-nav ul li a.active span) {
  background: #667eea;
  transform: scale(1.2);
}

:deep(.fp-nav ul li .fp-tooltip) {
  color: #fff;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.8);
  padding: 5px 10px;
  border-radius: 4px;
}

/* 隐藏 fullPage.js 水印 */
:deep(.fp-watermark) {
  display: none !important;
}

:deep(.fp-watermark a) {
  display: none !important;
}

/* fullpage.js 过渡效果增强 */
:deep(.fp-section) {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

:deep(.fp-section.active) {
  transform: scale(1);
}

:deep(.fp-section:not(.active)) {
  transform: scale(0.95);
  opacity: 0.8;
}
</style>
