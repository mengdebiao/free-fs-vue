<template>
  <div class="logo-wrap flex items-center w-[236px]" @click="goHome">
    <img class="h-[58px]" src="@/assets/img/logo.png" :alt="title" />
    <h1 class="text-base font-medium">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('文件服务器')

const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>
