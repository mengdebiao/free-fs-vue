<template>
  <div class="flex items-center">
    <el-avatar
      class="mr-3"
      :size="32"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    >
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </el-avatar>
    <el-dropdown>
      <span class="el-dropdown-link outline-none text-stone-900">
        管理员
        <el-icon class="el-icon--right">
          <ArrowDown />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退 出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
</script>
