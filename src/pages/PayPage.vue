<template>
  <div id="PayPage" class="py-3 sm:px-12 sm:py-7 container border border-none">
    <div class="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
      <div class="grid grid-cols-4 sm:grid-cols-5 gap-3 mx-auto sm:mt-9 w-full">
        <div class="col-span-3 sm:col-span-3">
          <VueDatePicker v-model="PayData.Date" :enable-time-picker="false" locale="zh-tw" six-weeks="center" required
          text-input auto-apply dark week-start="0"></VueDatePicker>
        </div>
        <div class="col-span-1 sm:col-span-none">
          <button class="rounded-md bg-teal-400 px-3 sm:px-5 py-2.5 text-center text-sm
          shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-teal-600" @click="refresh()">重整</button>
        </div>
      </div>
      <div>
        <label for="Message" class="font-semibold mb-2 text-left block dark:text-white">
          <font-awesome-icon :icon="['fas', 'chart-pie']" /> 類別</label>
        <div class="shadow-sm rounded-md border dark:border-none w-full">
          <ul class="grid grid-cols-4 sm:grid-cols-8 SelPayCg bg-teal-400">
            <li v-for="PayCg in PayCategories" :key="PayCg"
              :class="{ 'px-1 py-1': true, 'bg-white': PayData.Category === PayCg }"
              @mouseover="SelectPayCg(PayCg)">
              {{ Object.keys(PayCg)[0] }}
            </li>
          </ul>
          <ul class="grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-b-md SelCg">
            <li v-for="Cg in SelectCg" :key="Cg" :class="{
              'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100 dark:text-block': PayData.Cg === Cg,
              'dark:text-white': PayData.Cg !== Cg
            }" @click="SelectPCg(Cg)">
              {{ Cg }}</li>
          </ul>
        </div>
      </div>
      <!-- 明細 -->
      <div>
        <label for="Detail" class="font-semibold mb-2 text-left block dark:text-white">
          <font-awesome-icon :icon="['fas', 'align-left']" /> 明細</label>
        <input type="text" id="Detail" v-model="PayData.Detail"
          class="shadow-sm rounded-md border dark:border-none px-1 py-1 w-full text-left bg-slate-100 dark:text-white dark:bg-neutral-700">
      </div>
      <!-- 金額 -->
      <div>
        <label for="Amount" class="font-semibold mb-2 text-left block dark:text-white">
          <font-awesome-icon :icon="['fas', 'dollar-sign']" /> 金額</label>
        <input type="text" id="Amount" v-model="PayData.Amount"
          class="px-1 py-1 w-full text-left outline-none font-bold bg-slate-100 dark:text-white dark:bg-neutral-700 shadow-sm rounded-md">
        <h5 v-if="AmountMsg" class="text-right text-red-300">* 只能輸入數字</h5>
      </div>

      <div class="sm:col-span-2">
        <hr>
      </div>
      <!-- 支出帳戶 -->
      <div class="">
        <label for="Message" class="font-semibold mb-2 text-left block dark:text-white">
          <font-awesome-icon :icon="['fas', 'wallet']" /> 帳戶</label>
        <div class="shadow-sm rounded-md border dark:border-none w-full">
          <ul class="grid grid-cols-2 sm:grid-cols-4 SelPayAcc bg-teal-400">
            <li v-for="Account in PayAccounts" :key="Account"
              :class="{ 'px-1 py-1': true, 'bg-white': PayData.Account === Account }" @mouseover="SelectPayAcc(Account)">
              {{ Object.keys(Account)[0] }}
            </li>
          </ul>
          <ul class="grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-b-md SelAcc">
            <li v-for="Acc in SelectAccount" :key="Acc" :class="{
              'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100 dark:text-block': PayData.Acc === Acc,
              'dark:text-white': PayData.Acc !== Acc
            }" @click="SelectPAc(Acc)">
              {{ Acc }}</li>
          </ul>
        </div>
      </div>
      <!-- 經手帳戶 -->
      <div class="">
        <label for="Message" class="font-semibold mb-2 text-left block dark:text-white">
          <font-awesome-icon :icon="['fas', 'money-bill-transfer']" /> 經手</label>
        <div class="shadow-sm rounded-md border dark:border-none w-full">
          <ul class="grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-md">
            <li v-for="ment in PayMents" :key="ment" :class="{
              'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100 dark:text-blcok': PayData.Payment === ment,
              'dark:text-white': PayData.Payment !== ment
            }" @click="PayData.Payment = ment">
              {{ ment }}</li>
          </ul>
        </div>
      </div>
      <!-- 備註 -->
      <div class="sm:col-span-2">
        <label for="Other" class="font-semibold mb-2 text-left block dark:text-white">
          <font-awesome-icon :icon="['fas', 'pen-to-square']" /> 備註</label>
        <div class="grid grid-cols-2 sm:grid-cols-6 bg-slate-100 dark:bg-neutral-700 shadow-sm rounded-md">
          <div v-for="(other, index) in PayOthers" :key="other" class="px-1 py-1 text-left">
            <input type="checkbox" :id="'PayOthers' + index" v-model="PayData.Other" :value="other">
            <label class="dark:text-white cursor-pointer" :for="'PayOthers' + index"> {{ other }}</label>
          </div>

          <div class="flex w-full col-span-2 px-1 py-1 ">
            <input type="checkbox" name="其他" id="其他">
            <label class="dark:text-white" for="其他">其他</label>
            <input type="text" class="dark:text-white bg-transparent" v-model="PayOtherInput">
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 mx-auto grid grid-cols-2 gap-3 sm:block">
      <button class="rounded-md bg-teal-400 px-3 sm:px-12 py-2.5 text-center text-sm
      shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-teal-400 sm:mr-5" @click="SubmitData(PayData)">送出</button>
      <button class="rounded-md bg-teal-400 px-3 sm:px-12 py-2.5 text-center text-sm
        shadow-sm hover:bg-teal-400 fous-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-teal-400" @click="CleanData(PayData, '支出')">清除</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, defineEmits, onMounted } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import { stoargaeData, updateData, fetchFormItem, PostData } from '@/utils/fetchData.js'
import { AmountisNum, NumComma, CleanData } from '@/utils/dataValidation.js'
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.css';

const updateArrays = (data) => {
  PayCategories.push(...data[0].PayCategories)
  PayAccounts.push(...data[1].PayAccounts)
  PayMents.push(...data[2].PayMents)
  PayOthers.push(...data[3].PayOthers)
  SelectCg.value = Object.values(PayCategories[0])[0]
  SelectAccount.value = Object.values(PayAccounts[0])[0]
  PayData.Account = Object.keys(PayAccounts[0])[0]
  PayData.Category = Object.keys(PayCategories[0])[0]
}

(async () => {
  try {
    emit('loading', true);
    if (!stoargaeData("Pay")) {
      await fetchFormItem("get", "Pay", updateArrays)
    }
  } catch (error) {
    Swal.fire({ title: 'ERROR', text: error.message, icon: 'error' })
    console.error(error);
  }
  emit('loading', false);
})()

const emit = defineEmits();
const PayCategories = reactive([])
const PayAccounts = reactive([])
const PayMents = reactive([])
const PayOthers = reactive([])
let SelectCg = ref('')
let SelectAccount = ref('')
let PayOtherInput = ref('')
let AmountMsg = ref(false)

let PayData = reactive({
  Type: '支出',
  Account: '' ,      // 帳戶大分類
  Acc: '',           // 帳戶子分類
  Category: '',      // 支出大分類
  Cg: '',            // 支出子分類
  Date: new Date(),  // 日期
  Amount: '',        // 金額
  Detail: '',        // 明細
  Payment: '',       // 經手帳戶
  Other: []          // 備註
})

onMounted(() => {
  updateData("Pay", updateArrays)
})

const refresh = async () => {
  try {
    emit('loading', true);
    [PayCategories, PayAccounts, PayMents, PayOthers].forEach(arr => arr.splice(0, arr.length))
    localStorage.removeItem("Pay")
    await fetchFormItem("get", "Pay", updateArrays)
  } catch (error) {
    Swal.fire({ title: 'ERROR', text: error.message, icon: 'error' })
    console.error(error);
  }
  emit('loading', false);
}

// 支出大分類
const SelectPayCg = (PayCg) => {
  SelectCg.value = Object.values(PayCg)[0]
  PayData.Category = Object.keys(PayCg)[0];
}

// 帳戶大分類
const SelectPayAcc = (PayAccounts) => {
  SelectAccount.value = Object.values(PayAccounts)[0]
  PayData.Account = Object.keys(PayAccounts)[0];
}

// 支出子分類
const SelectPCg = (Cg) => {
  ClassList(PayCategories, PayData.Category, ".SelPayCg")
  PayData.Cg = Cg;
}

// 帳戶子分類
const SelectPAc = (Acc) => {
  ClassList(PayAccounts, PayData.Account, ".SelPayAcc")
  PayData.Acc = Acc;
}


const ClassList = (Primary, Selected, ClassName) => {
  // 找出該大分類的陣列
  const selectedAccount = Primary.find(account => account[Selected]);
  const parentAccount = Object.keys(selectedAccount)[0];
  const AccountLi = Array.from(document.querySelectorAll(ClassName + ' li'))
  AccountLi.forEach((item) => item.classList.remove('bg-teal-100'))

  const parentAccountItem = AccountLi.find(item => item.innerText.includes(parentAccount));
  parentAccountItem.classList.remove('bg-teal-400')
  parentAccountItem.classList.add('bg-teal-100');
}

// 送出輸入資料
const SubmitData = (Data) => {
  if (PayOtherInput.value.length !== 0) {
    PayData.Other.push(PayOtherInput.value)
  }
  Data.Other = Data.Other ? Data.Other.join(", ") : ""
  for (const Pay of Object.keys(PayData)) {
    if (Pay !== 'Payment' && Pay !== 'Other' && !PayData[Pay]) {
      if (Data.Pay !== '') {
        Swal.fire({ title: '資料未輸入完整!', icon: 'warning', showConfirmButton: false })
        return
      }
    }
  }
  // 創建一個 FormData
  const formData = new FormData();
  for (const key in Data) {
    formData.append(key, Data[key]);
  }
  PostData(formData, emit, "支出", PayData, CleanData)
}

watch(() => PayData.Amount, (newVal) => {
  newVal = newVal.replaceAll(",", "")
  PayData.Amount = NumComma(newVal)
  AmountMsg.value = AmountisNum(newVal)
})

// watch(() => emit('theme'), (newData) => {
//   console.log('newData :>> ', newData);
// })
</script>