<template>
  <div id="IncomePage" class="py-3 sm:px-12 sm:py-7 container border border-none">
    <div class="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
      <div class="grid grid-cols-4 sm:grid-cols-5 gap-3 mx-auto sm:mt-9 w-full">
        <div class="col-span-3 sm:col-span-3">
          <VueDatePicker v-model="IncomeData.Date" :enable-time-picker="false" locale="zh-tw" six-weeks="center" required
          text-input auto-apply dark week-start="0"></VueDatePicker>
        </div>
        <div class="col-span-1 sm:col-span-none">
          <button class="rounded-md bg-teal-600 px-3 sm:px-5 py-2.5 text-center text-sm font-semibold text-white
          shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-teal-600" @click="refresh()">重整</button>
        </div>
      </div>
      <!-- 類別 -->
      <div>
        <label for="Message" class="font-semibold mb-2 text-left block dark:text-white">類別</label>
        <div class="shadow-sm rounded-md border dark:border-none w-full">
          <ul class="grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-md">
            <li v-for="IncomeCg in IncomeCategories" :key="ment" :class="{
              'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100 dark:text-blcok': IncomeData.Cg === IncomeCg,
              'dark:text-white': IncomeData.Cg !== IncomeCg
            }" @click="IncomeData.Cg = IncomeCg">
              {{ IncomeCg }}</li>
          </ul>
        </div>
      </div>
      <!-- 明細 -->
      <div>
        <label for="Detail" class="font-semibold mb-2 text-left block dark:text-white">明細</label>
        <input type="text" id="Detail" v-model="IncomeData.Detail"
          class="shadow-sm rounded-md border dark:border-none px-1 py-1 w-full text-left bg-slate-100 dark:text-white dark:bg-neutral-700">
      </div>
      <!-- 金額 -->
      <div>
        <label for="Amount" class="font-semibold mb-2 text-left block dark:text-white">金額</label>
        <input type="text" id="Amount" v-model="IncomeData.Amount"
          class="px-1 py-1 w-full text-left outline-none font-bold bg-slate-100 dark:text-white dark:bg-neutral-700 shadow-sm rounded-md">
        <h5 v-if="AmountisNum(IncomeData.Amount)" class="text-right text-red-300">* 只能輸入數字</h5>
      </div>

      <div class="sm:col-span-2">
        <hr>
      </div>
      <!-- 支出帳戶 -->
      <div class="">
        <label for="Message" class="font-semibold mb-2 text-left block dark:text-white">帳戶</label>
        <div class="shadow-sm rounded-md border dark:border-none w-full">
          <ul class="grid grid-cols-2 sm:grid-cols-4 SelIncomeAcc bg-teal-400">
            <li v-for="Account in IncomeAccounts" :key="Account"
              :class="{ 'px-1 py-1': true, 'bg-white': IncomeData.Account === Account }"
              @mouseover="SelectIncomeAcc(Account)">
              {{ Object.keys(Account)[0] }}
            </li>
          </ul>
          <ul class="grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-b-md SelAcc">
            <li v-for="Acc in SelectAccount" :key="Acc" :class="{
              'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100 dark:text-block': IncomeData.Acc === Acc,
              'dark:text-white': IncomeData.Acc !== Acc
            }" @click="SelectPAc(Acc)">
              {{ Acc }}</li>
          </ul>
        </div>
      </div>
      <!-- 經手帳戶 -->
      <div class="">
        <label for="Message" class="font-semibold mb-2 text-left block dark:text-white">經手</label>
        <div class="shadow-sm rounded-md border dark:border-none w-full">
          <ul class="grid grid-cols-2 sm:grid-cols-3 bg-slate-100 dark:bg-neutral-700 rounded-md">
            <li v-for="ment in IncomeMents" :key="ment" :class="{
              'text-left px-1 py-1 cursor-pointer': true, 'bg-teal-100 dark:text-blcok': IncomeData.Incomement === ment,
              'dark:text-white': IncomeData.Incomement !== ment
            }" @click="IncomeData.Incomement = ment">
              {{ ment }}</li>
          </ul>
        </div>
      </div>
      <!-- 備註 -->
      <div class="sm:col-span-2">
        <label for="Other" class="font-semibold mb-2 text-left block dark:text-white">備註</label>
        <div class="grid grid-cols-2 sm:grid-cols-6 bg-slate-100 dark:bg-neutral-700 shadow-sm rounded-md">
          <div v-for="(other, index) in IncomeOthers" :key="other" class="px-1 py-1 text-left">
            <input type="checkbox" :id="'IncomeOthers' + index" v-model="IncomeData.Other" :value="other">
            <label class="dark:text-white cursor-pointer" :for="'IncomeOthers' + index"> {{ other }}</label>
          </div>

          <div class="flex w-full col-span-2 px-1 py-1 ">
            <input type="checkbox" name="其他" id="其他">
            <label class="dark:text-white" for="其他">其他</label>
            <input type="text" class="dark:text-white bg-transparent" v-model="IncomeOtherInput">
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 mx-auto grid grid-cols-2 gap-3 sm:block">
      <button class="rounded-md bg-teal-600 px-3 sm:px-12 py-2.5 text-center text-sm font-semibold text-white
      shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-teal-600 sm:mr-5" @click="SubmitData(IncomeData)">送出</button>
      <button class="rounded-md bg-teal-600 px-3 sm:px-12 py-2.5 text-center text-sm font-semibold text-white
        shadow-sm hover:bg-teal-500 fous-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-teal-600" @click="CleanData()">清除</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, defineEmits, onMounted } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import { fetchData, stoargaeData, updateData, fetchFormItem } from '@/utils/fetchData.js'
import Swal from 'sweetalert2'

const updateArrays = (data) => {
  IncomeCategories.push(...data[0].IncomeCategories)
  IncomeAccounts.push(...data[1].PayAccounts)
  IncomeMents.push(...data[2].PayMents)
  IncomeOthers.push(...data[3].PayOthers)
  SelectAccount.value = Object.values(IncomeAccounts[0])[0]
  IncomeData.Account = Object.keys(IncomeAccounts[0])[0]
  IncomeData.Cg = Object.keys(IncomeCategories)[0]
}

(async () => {
  try {
    emit('loading', true);
    if (!stoargaeData("Income")) {
      await fetchFormItem("get", "Income", updateArrays)
    }
  } catch (error) {
    Swal.fire({ title: 'ERROR', text: error.message, icon: 'error' })
    console.error(error);
  }
  emit('loading', false);
})()

const emit = defineEmits();
const IncomeCategories = reactive([])
const IncomeAccounts = reactive([])
const IncomeMents = reactive([])
const IncomeOthers = reactive([])
let SelectAccount = ref('')
let IncomeOtherInput = ref('')

let IncomeData = reactive({
  Type: '收入',
  Account: '',      // 帳戶大分類
  Acc: '',           // 帳戶子分類
  Cg: '',      // 收入分類
  Date: new Date(),  // 日期
  Amount: '',        // 金額
  Detail: '',        // 明細
  Incomement: '',    // 經手帳戶
  Other: []          // 備註
})

onMounted(() => {
  updateData("Income", updateArrays)
})

const refresh = async () => {
  try {
    emit('loading', true);
    [IncomeCategories, IncomeAccounts, IncomeMents, IncomeOthers].forEach(arr => arr.splice(0, arr.length))
    localStorage.removeItem("Income")
    await fetchFormItem("get", "Income", updateArrays)
  } catch (error) {
    Swal.fire({ title: 'ERROR', text: error.message, icon: 'error' })
    console.error(error);
  }
  emit('loading', false);
}

// 帳戶大分類
const SelectIncomeAcc = (IncomeAccounts) => {
  SelectAccount.value = Object.values(IncomeAccounts)[0]
  IncomeData.Account = Object.keys(IncomeAccounts)[0];
}

// 帳戶子分類
const SelectPAc = (Acc) => {
  ClassList(IncomeAccounts, IncomeData.Account, ".SelIncomeAcc")
  IncomeData.Acc = Acc;
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

// 清空輸入資料
const CleanData = () => {
  for (const key in IncomeData) {
    if (key !== "Other") IncomeData[key] = ""
  }
  IncomeData["Other"] = []
  IncomeData["Type"] = "收入"
  IncomeData["Date"] = new Date()
}

// 送出輸入資料
const SubmitData = (Data) => {
  if (IncomeOtherInput.value.length !== 0) {
    IncomeData.Other.push(IncomeOtherInput.value)
  }
  Data.Other = Data.Other.join(", ")
  for (const Income of Object.keys(IncomeData)) {
    if (Income !== 'Incomement' && Income !== 'Other' && !IncomeData[Income]) {
      if (Data.Income !== '') {
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
  PostData(formData)
}

async function PostData(Data) {
  emit('loading', true);
  try {
    // const cors = 'https://cors-anywhere.herokuapp.com/'; //解決 CORS 阻擋
    const response = await fetchData("post", "", Data)
    if (response.data.status === 'success') {
      Swal.fire({ title: '記帳成功!', icon: response.data.status })
      CleanData()
    } else {
      console.log(response)
    }
    console.log("response")
  } catch (error) {
    Swal.fire({ title: '失敗!', text: error.message, icon: 'error' })
    console.error(error)
  }
  emit('loading', false);
}

// 判斷金額是否輸入為數字
const AmountisNum = (Amount) => {
  const checkAmount = Amount === "" ? 0 : Amount
  return !/^\d+$/.test(checkAmount) ? true : false
}

watch(() => IncomeData.Amount, (newData) => {
  AmountisNum(newData)
})
</script>