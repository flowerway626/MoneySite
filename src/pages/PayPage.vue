<template>
  <div id="PayPage" class="px-3 py-3 container border mx-auto">
    <form action="#" method="post" class="mx-auto mt-8 max-w-5xl sm:mt-10">
      <div class="mx-auto text-center mb-8 sm:mb-16">
        <!-- <h4 class="font-bold tracking-tight text-gray-900 text-center sm:text-xl"> -->
          <VueDatePicker v-model="PayData.Date" :enable-time-picker="false" locale="zh-tw" required text-input auto-apply></VueDatePicker>
        <!-- </h4> -->
        <!-- <h4 class="font-bold tracking-tight text-gray-900 sm:text-xl">2023/10/10 (三)</h4> -->
        <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p> -->
      </div>

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div class="row-span-2">
          <label for="Message" class="font-semibold mb-2 text-left block">類別</label>
          <div class="shadow-sm rounded-md border w-full">
            <ul class="grid grid-cols-7 SelPayCg bg-teal-400">
              <li v-for="PayCg in PayCategory" :key="PayCg" :class="{ 'px-1 py-1': true, 'bg-white': PayData.Category === PayCg }"
                @click="SelectPayCg(PayCg)">
                {{ Object.keys(PayCg)[0] }}
              </li>
            </ul>
            <ul class="grid grid-cols-3 bg-white rounded-b-md SelCg">
              <li v-for="Cg in SelectCg" :key="Cg"
                :class="{ 'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100': PayData.Cg === Cg }"
                @click="SelectPCg(SelectCg, Cg)">
                {{ Cg }}</li>
            </ul>
          </div>
        </div>

        <div>
          <label for="Detail" class="font-semibold mb-2 text-left block">明細</label>
          <input type="text" id="Detail" class="shadow-sm rounded-md border px-1 py-1 w-full" v-model="PayData.Detail">
        </div>

        <div>
          <label for="Amount" class="font-semibold mb-2 text-left block">金額</label>
          <input type="number" id="Amount" class="px-1 py-1 w-full text-right" v-model="PayData.Amount">
        </div>

        <div class="sm:col-span-2">
          <hr>
        </div>

        <div class="">
          <label for="Message" class="font-semibold mb-2 text-left block">帳戶</label>
          <div class="shadow-sm rounded-md border w-full">
            <ul class="grid grid-cols-4 SelPayCg bg-teal-400">
              <li v-for="Account in PayAccount" :key="Account" :class="{ 'px-1 py-1': true, 'bg-white': PayData.Account === Account }"
                @click="SelectPayAcc(Account)">
                {{ Object.keys(Account)[0] }}
              </li>
            </ul>
            <ul class="grid grid-cols-3 bg-white rounded-b-md SelCg">
              <li v-for="Acc, in SelectAccount" :key="Acc"
                :class="{ 'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100': PayData.Acc === Acc }"
                @click="SelectPAc(Acc)">
                {{ Acc }}</li>
            </ul>
          </div>
        </div>
        <!-- 經手帳戶 -->
        <div class="">
          <label for="Message" class="font-semibold mb-2 text-left block">經手</label>
          <div class="shadow-sm rounded-md border w-full">
            <ul class="grid grid-cols-3 bg-white rounded-b-md SelCg">
              <li v-for="ment, in PayMent" :key="ment"
                :class="{ 'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100': PayData.Payment === ment }"
                @click="SelectPCg(ment)">
                {{ ment }}</li>
            </ul>
          </div>
        </div>
        <!-- 備註 -->
        <div class="sm:col-span-2">
          <label for="Other" class="font-semibold mb-2 text-left block">備註</label>
          <div class="grid grid-cols-4 bg-white rounded-b-md SelCg">
            <div v-for="other, in PayOther" :key="other">
              <input type="radio" :name="other" v-model="PayData.Other" :value="other">
              <label :for="other" > {{ other }}</label>
            </div>
            <div>
              <input type="radio" name="其他" v-model="PayData.Other" value="其他">
              <label for="其他" > 其他 
                <input v-if="PayData.Other === '其他'" type="text" v-model="PayData.Other">
              </label>
            </div>
          </div>
          <!-- <ul >
            <li v-for="other, in PayOther"
              :class="{ 'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100': isSelectedCg(other) }"
              @click="SelectPCg(other)">
              {{ other }}</li>
              <li><input type="text" v-model="PayData.Other"></li>
          </ul> -->
        </div>
      </div>
      <div class="mt-10 w-80 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        <button type="reset"
          class="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white
        shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-indigo-600">清除</button>
        <button type="submit"
          class="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white
        shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-indigo-600">確認</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';

const PayCategory = reactive([
  { '食': ['🍔 早餐', '🍛 午餐', '🍴 晚餐', '🥤 飲料', '🥞 零食其他'] },
  {
    '衣': ['👕 治裝費用']
  },
  {
    '住': ['🛒 日常用品']
  },
  {
    '行': ['🚌 交通']
  },
  {
    '育': ['📑 教育學習']
  },
  {
    '樂': ['🎮 旅遊娛樂', '💫 追星', '👦 交際活動']
  },
  {
    '其他': ['🏥 醫療', '📍 其他']
  }
])
const PayAccount = reactive([
  { '現金': ['💰 現金'] },
  {
    '票證': ['💳 蛋黃悠遊', '💳 致理悠遊', '💳 聯邦吉鶴']
  },
  {
    '銀行帳戶': ['🏦 郵局VISA', '🏦 中信雄大', '🏦 國泰薪轉', '🏦 一銀iLEO', '🏦 聯邦一般', '🏦 聯邦行員']
  },
  {
    '虛擬帳戶': ['📱 悠遊付', '📱街口支付', '📱LINE轉']
  }
])
const PayMent = reactive(['📱 悠遊付', '📱街口支付', '📱台灣PAY', '📱LINE PAY', '📱中油PAY', '📱LINE轉'])
const PayOther = reactive(['✖ 沒有', '📃 紙本發票', '📥 載具儲存', '🧾收據'])
let SelectCg = ref(Object.values(PayCategory[0])[0])
let SelectAccount = ref(Object.values(PayAccount[0])[0])

let PayData = reactive({
  Account: Object.keys(PayAccount[0])[0], // 帳戶大分類
  Acc: '', // 帳戶子分類
  Category: Object.keys(PayCategory[0])[0], // 支出大分類
  Cg: '', // 支出子分類
  Date: '',
  Amount: 0, // 金額
  Detail: '', //明細
  Payment: '', //經手帳戶
  Other: '' //備註
})

const PayData_INIT = () => {
  
}
// 支出大分類
const SelectPayCg = (PayCg) => {
  SelectCg.value = Object.values(PayCg)[0]
  PayData.Category = Object.keys(PayCg)[0];
}
// 帳戶大分類
const SelectPayAcc = (PayAccount) => {
  SelectAccount.value = Object.values(PayAccount)[0]
  PayData.Account = Object.keys(PayAccount)[0];
}

// 支出子分類
const SelectPCg = (SelectCg, Cg) => {
  console.log(SelectCg)
  console.log(Cg)
  PayData.Cg = Cg;
}

// 帳戶子分類
const SelectPAc = (Acc) => {
  PayData.Acc = Acc;
}

</script>