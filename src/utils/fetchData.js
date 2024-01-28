import axios from "axios"

export const fetchData = async (Method, PageType, data) => {
  try {
    let response = ""
    const sheetsURL = 'https://script.google.com/macros/s/AKfycbwmfFr2y_hxpvJIqPkQKqfuyGOfvFSMOpKegpp5SL0LzKGIUUC8iyb3Ltf2dgPlSqezxA/exec'

    Method === "get" ? response = await axios.get(`${sheetsURL}?type=${PageType}`)
    : response = await axios.post(sheetsURL, data)
    return response
  } catch (error) {
    Swal.fire({ title: 'ERROR', text: error.message, icon: 'error' })
    console.error(error);
  }
}