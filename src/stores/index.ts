import { createPinia } from 'pinia'

export const pinia = createPinia()

// 导出所有 stores
export * from './counter'
export * from './user'
