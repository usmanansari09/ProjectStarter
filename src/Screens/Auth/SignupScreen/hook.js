import { useState, useEffect, createRef } from "react"
import { useNavigation } from "@react-navigation/native"
import { passwordValidator } from "../../../Theme/utils"
import { SignupApi } from "../../../Store/apiCalls"
import { set } from "lodash"
import * as moment from 'moment'
const useHook = () => {
  const navigation = useNavigation()
  const [userDetail, setUserDetail] = useState({})
  const [checkbox, setCheckbox] = useState({})
  const [error, setError] = useState({})
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([
    { label: 'Pop', value: 'pop' },
    { label: 'Hip-hop and Rap', value: 'hip-hop-rap' },
    { label: 'Rock', value: 'rock' },
    { label: 'Dance and Electronics music', value: 'dance-and-electric-music' },
    { label: 'Jazz', value: 'jazz' },
    { label: 'Classical Music', value: 'classical-music' },
    { label: 'K-Pop', value: 'k-pop' },
    { label: 'Opera', value: 'opera' },
    { label: 'Metal', value: 'metal' },
    { label: 'Other', value: 'other' },
  ]);
  const [date, setDate] = useState('');
  const secondFlashMessage = createRef();
  const textOnchange = (text, name) => {
    if (name == 'age') setDate(text)
    let user = userDetail
    user[name] = text
    setUserDetail(user)
  }
  const signup = () => {
   try {
    // setIsLoading(true)
    SignupApi(userDetail, res => {
      // setIsLoading(false)
      if (res.sucess) {
        secondFlashMessage.current.showMessage({
          message: "Success Message",
          description: "Registered Successfully",
          type: "success",
        });
      } else {
        secondFlashMessage.current.showMessage({
          message: "Error Message",
          description: res.error,
          type: "danger",
        });
      }
    })
   } catch (error) {
    // setIsLoading(false)
    secondFlashMessage.current.showMessage({
      message: "Error Message",
      description: error,
      type: "danger",
    });
   }
  }
  return {
    userDetail,
    setUserDetail,
    checkbox,
    setCheckbox,
    error,
    setError,
    isDatePickerVisible,
    setIsDatePickerVisible,
    open,
    value,
    items,
    date,
    setDate,
    setItems,
    setValue,
    setOpen,
    textOnchange,
    navigation,
    signup,
    secondFlashMessage,
    isLoading,
    setIsLoading
  }
}

export default useHook
