<template>
  <div class="flex justify-between w-full">
    <ul class="flex list-none gap-3 pl-0">
      <li>
        <router-link class="my-2 md:mr-4 block rounded px-7 py-2 text-xs leading-tight
        bg-neutral-100 text-neutral-500 dark:bg-neutral-700 dark:text-white" to="/Pay">支出
        </router-link>
      </li>
      <li>
        <router-link class="my-2 md:mr-4 block rounded px-7 py-2 text-xs leading-tight
        bg-neutral-100 text-neutral-500 dark:bg-neutral-700 dark:text-white" to='/Income'>收入
        </router-link>
      </li>
      <li>
        <router-link class="my-2 md:mr-4 block rounded px-7 py-2 text-xs leading-tight
        bg-neutral-100 text-neutral-500 dark:bg-neutral-700 dark:text-white" to='/Transfer'>轉帳
        </router-link>
      </li>
    </ul>

      <button v-if="Theme ==='light'" class="px-2 py-2 rounded-full my-2"
      @click="ChangeTheme('light')">
        <svg class="h-4 w-4 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg> </button>
      <button v-if="Theme ==='dark'" class="px-2 py-2 rounded-full bg-gray-700 my-2 text-white"
      @click="ChangeTheme('dark')">
        <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg> </button>
  </div>

  <loadingModal v-if="isLoading"></loadingModal>
  
  <div class="h-4/5 px-3 sm:px-12">
    <router-view @loading="updateLoadingState"></router-view>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import loadingModal from '@/components/Loading.vue'

let Theme = ref('dark')
const isLoading = ref(false)

const ChangeTheme = (theme) => {
  if (theme === 'light') {
    document.documentElement.classList.remove("dark");
    Theme.value = 'dark'
  } else {
    document.documentElement.classList.add("dark");
    Theme.value = 'light'
  }
}

const updateLoadingState = (val) => {
  isLoading.value = val
}

onMounted(() => {
  ChangeTheme('dark')
})
</script>