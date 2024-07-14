<template>
  <el-aside class="w-64 h-full border-r border-slate-100 shadow-lg hidden sm:block" width="256px">
    <ul class="w-full mt-3">
      <li
        class="group relative h-12 flex items-center mb-1"
        :class="{ active: index === activeMenuIndex }"
        v-for="(item, index) in menuItems"
        :key="index"
        @click="navigateTo(item)"
      >
        <div
          class="menu-item w-full h-full text-sm flex gap-x-4 items-center rounded-lg mx-3 cursor-pointer hover:bg-violet-50 transition-colors duration-300"
        >
          <component
            :is="iconComponents[item.icon]"
            class="menu-icon h-5 w-5 ml-3 group-hover:text-indigo-600 transition-colors duration-300"
          />
          <p class="text-gray-700">{{ item.title }}</p>
        </div>
      </li>
    </ul>
  </el-aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { UploadFilled, DeleteFilled, List, StarFilled } from '@element-plus/icons-vue'

// 定义菜单项的类型
interface MenuItem {
  title: string
  icon: 'UploadFilled' | 'List' | 'StarFilled' | 'DeleteFilled'
  path: string
}

// 菜单项列表
const menuItems = ref<MenuItem[]>([
  { title: '我的云', icon: 'UploadFilled', path: '/dashboard' },
  { title: '所有文件', icon: 'List', path: '/files' },
  { title: '收藏', icon: 'StarFilled', path: '/star' },
  { title: '回收站', icon: 'DeleteFilled', path: '/recycle' }
])

// 图标组件映射
const iconComponents = {
  UploadFilled,
  List,
  StarFilled,
  DeleteFilled
}

const route = useRoute()
const router = useRouter()

// 计算当前活动菜单的索引
const activeMenuIndex = computed(() => {
  return menuItems.value.findIndex((item) => item.path === route.path)
})

// 导航到指定路径
const navigateTo = (item: MenuItem) => router.push(item.path)
</script>

<style scoped>
.active::after {
  content: '';
  position: absolute;
  right: 0;
  height: 2.75rem;
  width: 0.25rem;
  border-bottom-left-radius: 0.375rem;
  border-top-left-radius: 0.375rem;
  background-color: theme('colors.indigo.500');
}
.active .menu-item {
  background-color: theme('colors.violet.100');
}
.active .menu-item .menu-icon {
  color: theme('colors.indigo.600');
}
</style>
