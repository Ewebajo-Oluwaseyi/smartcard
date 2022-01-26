import * as actionType from './type'
import axiosConfig from '../../config/axiosConfig';
import { hospitalReg, hospitalLogIn } from '../../interface/auth.interface'

export const registerHospital = (payload: hospitalReg) => async(dispath: any) => {
   // console.log(payload)
   try {
       dispath({type: actionType.SET_LOADING, payload: true})
      const response = await axiosConfig.post('/hospital/register', payload);
      dispath({type: actionType.POST_HOSPITAL_SUCESS, payload: response.data.data})
   } catch (error) {
    dispath({type: actionType.POST_HOSPITAL_FAILURE, payload: error})
   } finally {
    dispath({type: actionType.SET_LOADING, payload: false})
   }
}

export const loginHospital= (payload: hospitalLogIn) => async(dispath: any) => {
    try {
        dispath({type: actionType.SET_LOADING, payload: true})
        const response = await axiosConfig.post('/hospital/login', payload);
        dispath({type: actionType.POST_HOSPITAL_SUCESS, payload: response.data.data})
    } catch (error) {
      dispath({type: actionType.POST_HOSPITAL_FAILURE, payload: error})
    } finally {
        dispath({type: actionType.SET_LOADING, payload: false})
       }
}