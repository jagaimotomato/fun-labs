import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

export const useUserStore = defineStore('user', () => {
  // 状态
  const user = ref<User | null>(null)
  const isLoggedIn = ref(false)
  const loading = ref(false)

  // 计算属性
  const userName = computed(() => user.value?.name || '未登录用户')
  const userInitials = computed(() => {
    if (!user.value?.name) return ''
    return user.value.name
      .split(' ')
      .map((n: string) => n[0])
      .join('')
      .toUpperCase()
  })

  // 操作
  async function login(email: string) {
    loading.value = true
    try {
      // 模拟登录 API 调用
      await new Promise(resolve => setTimeout(resolve, 1000))

      user.value = {
        id: 1,
        name: '张三',
        email: email,
        avatar: 'https://via.placeholder.com/64',
      }
      isLoggedIn.value = true

      return { success: true }
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
    isLoggedIn.value = false
  }

  function updateProfile(updates: Partial<User>) {
    if (user.value) {
      user.value = { ...user.value, ...updates }
    }
  }

  return {
    user,
    isLoggedIn,
    loading,
    userName,
    userInitials,
    login,
    logout,
    updateProfile,
  }
})
