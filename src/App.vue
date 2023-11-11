<template>
  <div class="flex justify-between w-full">
    <ul class="flex list-none flex-col flex-wrap pl-0 sm:flex-row">
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


  <!-- <div class="isolate bg-white px-6 py-6 sm:py-6 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true">

    <button id="light" class="px-4 py-2 rounded-full bg-white border-gray-400 border-2">日間模式
          <i class="fas fa-sun text-yellow-500"></i></button>
      <button id="dark" class="px-4 py-2 rounded-full bg-gray-700 border-gray-700 border-2 text-white">夜間模式<i
              class="fas fa-moon text-yellow-500"></i></button> 
    <div class="mx-auto max-w-2xl text-center ">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">收支記帳</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
    </div>
    <form action="#" method="POST" class="mx-auto mt-4 max-w-xl sm:mt-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="date" class="block text-sm font-semibold leading-6 text-gray-900">日期</label>
          <div class="mt-2.5">
            <input type="date" name="date" id="date" autocomplete="given-name"
              class="w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-900
              placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="category" class="block text-sm font-semibold leading-6 text-gray-900">類別</label>
          <div class="mt-2.5">
            <select id="country" name="country"
              class="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-900
              shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>🍔 早餐</option>
              <option>🍛 午餐</option>
              <option>🍴 晚餐</option>
              <option>🍨 宵夜</option>
              <option>🥞 零食其他</option>
              <option>🚌 交通</option>
              <option>🎮 旅遊娛樂</option>
              <option>👕 治裝費用</option>
              <option>🏥 醫療</option>
              <option>🛒 日常用品</option>
              <option>📑 教育學習</option>
              <option>👦 交際活動</option>
              <option>📍 其他</option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="amount" class="block text-sm font-semibold leading-6 text-gray-900">金額</label>
          <div class="mt-2.5">
            <input type="number" name="amount" id="amount" autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">支出明細</label>
          <div class="mt-2.5">
            <input type="email" name="email" id="email" autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
         <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">支出明細</label>
          <div class="relative mt-2.5">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select id="country" name="country"
                class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>🍔 早餐</option>
                <option>🍛 午餐</option>
                <option>🍴 晚餐</option>
                <option>🍨 宵夜</option>
                <option>🥞 零食其他</option>
                <option>🚌 交通</option>
                <option>🎮 旅遊娛樂</option>
                <option>👕 治裝費用</option>
                <option>🏥 醫療</option>
                <option>🛒 日常用品</option>
                <option>📑 教育學習</option>
                <option>👦 交際活動</option>
                <option>📍 其他</option>
              </select>
              <ChevronDownIcon class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                aria-hidden="true" />
            </div>
            <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
              class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div> 
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">備註</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button type="submit"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Let's talk
        </button>
      </div>
    </form>
  </div> -->
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

<!-- <script s  etup>a
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
</script> -->

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
