<template>
  <div class="flex justify-between w-full">
    <ul class="flex list-none gap-3 pl-0" @click="clickLi()">
      <li v-for="router in routes" :key="router.path">
        <router-link class="my-2 md:mr-4 block rounded px-7 py-2 text-xs active:bg-teal-400
        bg-neutral-100 text-neutral-500 dark:bg-neutral-700 dark:text-white" :to="router.path"> {{ router.name }}
        </router-link>
      </li>
    </ul>

      <button v-if="Theme ==='light'" class="px-2 py-2 rounded-full my-2" @click="ChangeTheme('light')">
        <IconLight></IconLight>
      </button>
      <button v-if="Theme ==='dark'" class="px-2 py-2 rounded-full bg-gray-700 my-2 text-white"
      @click="ChangeTheme('dark')">
        <IconDark></IconDark>
      </button>
  </div>

  <loadingModal v-if="isLoading"></loadingModal>
  
  <div class="h-4/5 px-3 sm:px-12">
    <router-view @loading="updateLoadingState"></router-view>
  </div>

</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import loadingModal from '@/components/Loading.vue'
import IconLight from '@/components/IconLight.vue'
import IconDark from '@/components/IconDark.vue'

let Theme = ref('dark')
const isLoading = ref(false)
const routes = reactive([
  { path: '/Pay', name: '支出' },
  { path: '/Income', name: '收入' },
  { path: '/Transfer', name: '轉帳' }
])
const ChangeTheme = (theme) => {
  if (theme === 'light') {
    document.documentElement.classList.remove("dark");
    Theme.value = 'dark'
  } else {
    document.documentElement.classList.add("dark");
    Theme.value = 'light'
  }
}

const clickLi = () => {
  const links = document.querySelectorAll("a");
  links.forEach(function(link) {
    link.addEventListener("click", function() {
      links.forEach(link => link.classList.remove("dark:bg-teal-500"));
      this.classList.add("dark:bg-teal-500");
    });
  });
}

const updateLoadingState = (val) => {
  isLoading.value = val
}

onMounted(() => {
  ChangeTheme('dark')
})
</script>