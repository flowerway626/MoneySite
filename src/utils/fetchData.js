import axios from "axios"
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.css';

export const fetchData = async (Method, PageType, data) => {
  try {
    let response = ""
    const sheetsURL = 'https://script.google.com/macros/s/AKfycbwmfFr2y_hxpvJIqPkQKqfuyGOfvFSMOpKegpp5SL0LzKGIUUC8iyb3Ltf2dgPlSqezxA/exec'

    Method === "get" ? response = await axios.get(`${sheetsURL}?type=${PageType}`)
    : response = await axios.post(sheetsURL, data)
    return response
  } catch (error) {
    Swal.fire({ title: 'ERROR', text: error.message, icon: 'error', showConfirmButton: false })
    console.error(error);
  }
}

// 更新 localstorage data
export const fetchFormItem = async (Method, PageType, update) => {
  const response = await fetchData(Method, PageType)
  if (response.status === 200) {
    await update(response.data)
    localStorage.setItem(PageType, JSON.stringify(response.data))
  } else {
    Swal.fire({ title: 'oops!', text: response.data, icon: 'info', showConfirmButton: false })
  }
}

// 取得 localstorage
export const stoargaeData = (PageType) => {
  return localStorage.getItem(PageType)
}
// 判斷 localstorage 已儲存
export const updateData = (PageType, Next) => {
  const stoargae = JSON.parse(stoargaeData(PageType))
  if (stoargae) {
    Next(stoargae)
  }
}

// 送出資料
export const PostData = async (Data, emit, Type, PageData, CleanFunc) => {
  try {
    emit('loading', true);
    // const cors = 'https://cors-anywhere.herokuapp.com/'; //解決 CORS 阻擋
    const response = await fetchData("post", "", Data)
    if (response.data.status === 'success') {
      Swal.fire({ title: '記帳成功', icon: response.data.status, showConfirmButton: false })
      CleanFunc(PageData, Type)
    } else {
      console.log(response)
    }
    console.log("response", response)
  } catch (error) {
    Swal.fire({ title: '失敗', text: error.message, icon: 'error', showConfirmButton: false })
    console.error(error)
  }
  emit('loading', false);
}