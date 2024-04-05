<template>
  <div id="TransPage" class="py-3 sm:px-12 sm:py-7 container border border-none">
    <div class="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
      <div class="grid grid-cols-4 sm:grid-cols-5 gap-3 mx-auto sm:mt-9 w-full">
        <div class="col-span-3 sm:col-span-3">
          <VueDatePicker v-model="TransData.Date" :enable-time-picker="false" locale="zh-tw" six-weeks="center" required
          text-input auto-apply dark week-start="0"></VueDatePicker>
        </div>
        <div class="col-span-1 sm:col-span-none">
          <button class="rounded-md bg-teal-400 px-3 sm:px-5 py-2.5 text-center text-sm
          shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-teal-400" @click="refresh()">重整</button>
        </div>
      </div>
      <!-- 類別 -->
      <div>
        <label for="Message" class="font-semibold mb-2 text-left block dark:text-white">
          <font-awesome-icon :icon="['fas', 'chart-pie']" /> 類別</label>
        <div class="shadow-sm rounded-md border dark:border-none w-full">
          <ul class="grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-md">
            <li v-for="TransCg in TransCategories" :key="TransCg" :class="{
              'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100 dark:text-blcok': TransData.Cg === TransCg,
              'dark:text-white': TransData.Cg !== TransCg
            }" @click="TransData.Cg = TransCg">
              {{ TransCg }}</li>
          </ul>
        </div>
      </div>
      <!-- 明細 -->
      <div>
        <label for="Detail" class="font-semibold mb-2 text-left block dark:text-white">
          <font-awesome-icon :icon="['fas', 'align-left']" /> 明細</label>
        <input type="text" id="Detail" v-model="TransData.Detail"
          class="shadow-sm rounded-md border dark:border-none px-1 py-1 w-full text-left bg-slate-100 dark:text-white dark:bg-neutral-700">
      </div>
      <!-- 金額 -->
      <div>
        <label for="Amount" class="font-semibold mb-2 text-left block dark:text-white">
          <font-awesome-icon :icon="['fas', 'dollar-sign']" /> 金額</label>
        <input type="text" id="Amount" v-model="TransData.Amount"
          class="px-1 py-1 w-full text-left outline-none font-bold bg-slate-100 dark:text-white dark:bg-neutral-700 shadow-sm rounded-md">
        <h5 v-if="AmountMsg" class="text-right text-red-300">* 只能輸入數字</h5>
      </div>

      <div class="sm:col-span-2">
        <hr>
      </div>
      <!-- 轉出帳戶 -->
      <div class="">
        <label for="Message" class="font-semibold mb-2 text-left block dark:text-white">
          <font-awesome-icon :icon="['fas', 'arrow-trend-up']" /> 轉出帳戶</label>
        <div class="shadow-sm rounded-md border dark:border-none w-full">
          <ul class="grid grid-cols-2 sm:grid-cols-4 SelTransOutAcc bg-teal-400">
            <li v-for="Account in TransOutAccounts" :key="Account"
              :class="{ 'px-1 py-1': true, 'bg-white': TransData.OutAccount === Account }"
              @mouseover="SelectTransOutAcc(Account)">
              {{ Object.keys(Account)[0] }}
            </li>
          </ul>
          <ul class="grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-b-md SelAcc">
            <li v-for="Acc in SelectOutAccount" :key="Acc" :class="{
              'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100 dark:text-block': TransData.OutAcc === Acc,
              'dark:text-white': TransData.OutAcc !== Acc
            }" @click="SelectOutAcc(Acc)">
              {{ Acc }}</li>
          </ul>
        </div>
      </div>
      <!-- 轉入帳戶 -->
      <div class="TransIn">
        <label for="Message" class="font-semibold mb-2 text-left block dark:text-white">
          <font-awesome-icon :icon="['fas', 'arrow-trend-down']" /> 轉入帳戶</label>
        <div class="shadow-sm rounded-md border dark:border-none w-full">
          <ul class="grid grid-cols-2 sm:grid-cols-4 SelTransInAcc bg-teal-400">
            <li v-for="Account in TransInAccounts" :key="Account"
              :class="{ 'px-1 py-1': true, 'bg-white': TransData.InAccount === Account }"
              @mouseover="SelectTransInAcc(Account)">
              {{ Object.keys(Account)[0] }}
            </li>
          </ul>
          <ul class="grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-b-md SelAcc">
            <li v-for="Acc in SelectInAccount" :key="Acc" :class="{
              'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100 dark:text-block': TransData.InAcc === Acc,
              'dark:text-white': TransData.InAcc !== Acc
            }" @click="SelectInAcc(Acc)">
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
            <li v-for="ment in TransMents" :key="ment" :class="{
              'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100 dark:text-blcok': TransData.Transment === ment,
              'dark:text-white': TransData.Transment !== ment
            }" @click="TransData.Transment = ment">
              {{ ment }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-10 mx-auto grid grid-cols-2 gap-3 sm:block">
      <button class="rounded-md bg-teal-400 px-3 sm:px-12 py-2.5 text-center text-sm
      shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-teal-400 sm:mr-5" @click="SubmitData(TransData)">送出</button>
      <button class="rounded-md bg-teal-400 px-3 sm:px-12 py-2.5 text-center text-sm
        shadow-sm hover:bg-teal-500 fous-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-teal-400" @click="CleanData(TransData, '轉帳')">清除</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, defineEmits, onMounted } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import { stoargaeData, updateData, fetchFormItem, PostData } from '@/utils/fetchData.js'
import { AmountisNum, NumComma, CleanData} from '@/utils/dataValidation.js'
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.css';

const updateArrays = (data) => {
  TransCategories.push(...data[0].TransCategories)
  TransOutAccounts.push(...data[1].PayAccounts)
  TransInAccounts.push(...data[1].PayAccounts)
  TransMents.push(...data[2].PayMents)
  SelectOutAccount.value = Object.values(TransOutAccounts[0])[0]
  SelectInAccount.value = Object.values(TransInAccounts[0])[0]
  TransData.OutAccount = Object.keys(TransOutAccounts[0])[0]
  TransData.InAccount = Object.keys(TransInAccounts[0])[0]
  TransData.Cg = TransCategories[0]
}

(async () => {
  try {
    emit('loading', true);
    if (!stoargaeData("Trans")) {
      await fetchFormItem("get", "Trans", updateArrays)
    }

  } catch (error) {
    Swal.fire({ title: 'ERROR', text: error.message, icon: 'error' })
    console.error(error);
  }
    emit('loading', false);
})()

const emit = defineEmits();
const TransCategories = reactive([])
const TransOutAccounts = reactive([])
const TransInAccounts = reactive([])
const TransMents = reactive([])
let SelectOutAccount = ref("")
let SelectInAccount = ref("")
let AmountMsg = ref(false)

let TransData = reactive({
  Type: '轉帳',
  OutAccount: '',       // 出帳戶大分類
  OutAcc: '',           // 出帳戶子分類
  InAccount: '',        // 入帳戶大分類
  InAcc: '',            // 入帳戶子分類
  Cg: '',               // 轉帳類型
  Date: new Date(),     // 日期
  Amount: '',           // 金額
  Detail: '',           // 明細
  Transment: '',     // 經手帳戶
})


onMounted(async() => {
  await updateData("Trans", updateArrays)
})

const refresh = async () => {
  try {
    emit('loading', true);
    [TransCategories, TransOutAccounts, TransInAccounts, TransMents].forEach(arr => arr.splice(0, arr.length))
    localStorage.removeItem("Trans")
    await fetchFormItem("get", "Trans", updateArrays)
  } catch (error) {
    Swal.fire({ title: 'ERROR', text: error.message, icon: 'error' })
    console.error(error);
  }
  emit('loading', false);
}

// 轉出帳戶大分類
const SelectTransOutAcc = (TransAccounts) => {
  SelectOutAccount.value = Object.values(TransAccounts)[0]
  TransData.OutAccount = Object.keys(TransAccounts)[0];
}
// 轉入帳戶大分類
const SelectTransInAcc = (TransAccounts) => {
  SelectInAccount.value = Object.values(TransAccounts)[0]
  TransData.InAccount = Object.keys(TransAccounts)[0];
}

// 轉出帳戶子分類
const SelectOutAcc = (Acc) => {
  ClassList(TransOutAccounts, TransData.OutAccount, ".SelTransOutAcc")
  TransData.OutAcc = Acc;
}

// 轉入帳戶子分類
const SelectInAcc = (Acc) => {
  ClassList(TransInAccounts, TransData.InAccount, ".SelTransInAcc")
  TransData.InAcc = Acc;
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
  for (const Trans of Object.keys(TransData)) {
    if ((Trans === 'Cg' || Trans === 'Amount') && !TransData[Trans]) {
      if (Data.Trans !== '') {
        Swal.fire({ title: '資料未輸入完整!', icon: 'warning' })
        return
      }
    }
  }
  // 創建一個 FormData
  const formData = new FormData();
  for (const key in Data) {
    formData.append(key, Data[key]);
  }
  PostData(formData, emit, "轉帳", TransData, CleanData)
}

watch(() => TransData.Amount, (newVal) => {
  newVal = newVal.replaceAll(",", "")
  TransData.Amount = NumComma(newVal)
  AmountMsg.value = AmountisNum(newVal)
})
</script>