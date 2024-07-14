<template>
  <div class="h-screen w-screen overflow-hidden font-sans bg-white">
    <el-container class="h-full">
      <el-header class="flex items-center justify-between border-b border-slate-100 shadow-md">
        <Logo />

        <div class="hidden md:block">
          <el-input
            v-model="input"
            class="!w-[330px] hidden md:block"
            placeholder="搜索文件…"
            :prefix-icon="Search"
            clearable
          />
        </div>

        <div class="header-actions flex items-center ml-auto">
          <el-dropdown class="mr-5">
            <span class="el-dropdown-link outline-none text-stone-600">源码</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>前端Github</el-dropdown-item>
                <el-dropdown-item>后端Github</el-dropdown-item>
                <el-dropdown-item>后端Gitee</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <UserDropDown />
        </div>
      </el-header>

      <el-container class="h-full">
        <Menu />
        <el-container class="is-vertical">
          <el-main class="h-full p-0">
            <RouterView />
          </el-main>
          <Footer />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import Logo from './components/Logo.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import UserDropDown from './components/UserDropDown.vue'

const input = ref('')
</script>
