import { useState, useEffect ,createRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import { passwordValidator } from '../../../Theme/utils';
import { LoginApi } from '../../../Store/apiCalls';

const useHook = () => {
  const navigation = useNavigation();

  const [userDetail, setUserDetail] = useState({});
  const secondFlashMessage = createRef();
  const [isLoading, setIsLoading] = useState(false);
  const textOnchange = (text, name) => {
    let user = userDetail;
    user[name] = text;
    setUserDetail(user);
  };

  const login = () => {
    try {
     // setIsLoading(true)
      LoginApi(userDetail, res => {
        // setIsLoading(false)
        if (res.sucess) {
          secondFlashMessage.current.showMessage({
            message: "Success Message",
            description: "Login Successfully",
            type: "success",
          });
          setTimeout(()=>{
            navigation.navigate('DashboardScreen')
          },1000)
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
  };

  return {
    userDetail,
    setUserDetail,
    textOnchange,
    navigation,
    login,
    secondFlashMessage,
    isLoading,
    setIsLoading
  };
};

export default useHook;
