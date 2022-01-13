import * as actionType from './type'
import axiosConfig from '../../config/axiosConfig';
import { hospitalReg, hospitalLogIn } from '../../interface/auth.interface'

export const registerHospital = (payload: hospitalReg) => async(dispath: any) => {
   // console.log(payload)
   try {
      const response = await axiosConfig.post('/hospital/register', payload);
       console.log(response);
      dispath({type: actionType.POST_HOSPITAL_SUCESS, payload: response})
   } catch (error) {
    dispath({type: actionType.POST_HOSPITAL_FAILURE, payload: error})
   } 
}

export const loginHospital= (payload: hospitalLogIn) => async(dispath: any) => {
    try {
        const response = await axiosConfig.post('/hospital/login', payload);
         console.log(response);
        dispath({type: actionType.POST_HOSPITAL_SUCESS, payload: response})
    } catch (error) {
      dispath({type: actionType.POST_HOSPITAL_FAILURE, payload: error})
    } 
}