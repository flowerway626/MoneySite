<template>
  <div class="flex justify-between w-full">
    <ul class="flex list-none gap-3 pl-0 ">
      <li>
        <a class="my-2 block rounded bg-neutral-100 px-7 py-2 text-xs font-medium uppercase leading-tight
        text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700
        dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4" @click="activeTab = 'Pay'">支出
        </a>
      </li>
      <li>
        <a class="my-2 block rounded bg-neutral-100 px-7 py-2 text-xs font-medium uppercase leading-tight text-neutral-500
          data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white
          dark:data-[te-nav-active]:text-primary-700 md:mr-4" @click="activeTab = 'Income'">收入
        </a>
      </li>
      <li>
        <a class="my-2 block rounded bg-neutral-100 px-7 py-2 text-xs font-medium uppercase leading-tight text-neutral-500
          data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white
          dark:data-[te-nav-active]:text-primary-700 md:mr-4" @click="activeTab = 'Transfer'">轉帳
        </a>
      </li>
    </ul>

      <button v-if="Theme ==='light'" id="lightTheme" class="px-2 py-2 rounded-full border-gray-400 border-2 my-2"
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
      <button v-if="Theme ==='dark'" iid="darkTheme" class="px-2 py-2 rounded-full bg-gray-700 border-gray-700 border-2 my-2 text-white"
      @click="ChangeTheme('dark')">
        <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg> </button>
  </div>

  <div v-if="activeTab === 'Pay'" class=" h-4/5">
    <PayPage></PayPage>
  </div>
  <div v-if="activeTab === 'Income'">Tab 2</div>
  <div v-if="activeTab === 'Transfer'">Tab 3</div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import PayPage from './pages/PayPage.vue'

let activeTab = ref('Pay')
let Theme = ref('dark')

const ChangeTheme = (theme) => {
  if (theme === 'light') {
    document.documentElement.classList.remove("dark");
    Theme.value = 'dark'
  } else {
    document.documentElement.classList.add("dark");
    Theme.value = 'light'
  }
}

onMounted(() => {
  ChangeTheme('dark')
})
</script>