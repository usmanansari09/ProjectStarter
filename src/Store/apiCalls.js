import { Constants } from "../Theme"

const axios = require("axios")

const postRequest = (api, paylaod, myCallback) => {
  const constApiLink = `${Constants.ApiPrefix}/${api}`
  console.log(constApiLink)
  axios({
    url: constApiLink,
    method: "POST",
    data: paylaod,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      myCallback({ sucess: response.data })
    })
    .catch(error => {
      const res = error.response.data

      let message = ""
      if (res.non_field_errors) {
        message = res.non_field_errors[0]
      } else {
        for (const [key, value] of Object.entries(res)) {
          message = message + `${key} : ${JSON.stringify(value)} `
        }
      }
      myCallback({ error: message })
    })
}

const getRequest = (api, paylaod, myCallback) => {
  axios
    .get(api, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      myCallback({ sucess: response })
    })
    .catch(error => {
      if (error.response) {
        myCallback({ error: error.response.data.message })
      } else {
        myCallback({ error: error })
      }
    })

  // axios({
  //   url: api,
  //   method: "POST",
  //   data: body,
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "multipart/form-data",
  //     Authorization: `Bearer ${token}`
  //   }
  // })
  //   .then(response => {
  //     myCallback({ sucess: response })
  //   })
  //   .catch(error => {
  //     if (error.response) {
  //       myCallback({ error: error.response.data.message })
  //     } else {
  //       myCallback({ error: error })
  //     }
  //   })
}

export const SignupApi = (payload, myCallback) => {
  const data = { ...payload, privacy_policy: true }
  console.log("data",data)
  postRequest(`signup/`, data, myCallback)
}

export const LoginApi = (payload, myCallback) => {
  postRequest("login/", payload, myCallback)
}
