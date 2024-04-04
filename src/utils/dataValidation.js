// 判斷金額是否輸入為數字
export const AmountisNum = (Amount) => {
  const checkAmount = Amount === "" ? 0 : Amount
  return !/^\d+$/.test(checkAmount) ? true : false
}

// 金額加逗號
export const NumComma = (num) => {
  num = num.split("")
  for (let i = num.length - 1; i >= 0; i--) {
    if (i % 3 === 0 && i > 0) {
      num.splice(i - i * 2, 0, ",")
    }
  }
  return num.join("")
}

// 清空輸入資料
export const CleanData = (data, type) => {
  for (const key in data) {
    if (key !== "Other") data[key] = ""
  }
  data["Type"] = type
  data["Date"] = new Date()
  if (type !== "轉帳") {
    data["Other"] = []
  }
}