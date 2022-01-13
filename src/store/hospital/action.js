import * as actionType from './type'
import axiosConfig from '../../config/axiosConfig';

export const registerHospital = (payload) => async(dispath) => {
    console.log(payload)
   try {
      const response = await axiosConfig.post('/hospital/register', payload);
       console.log(response);
      dispath({type: actionType.POST_HOSPITAL_SUCESS, payload: response})
   } catch (error) {
    dispath({type: actionType.POST_HOSPITAL_FAILURE, payload: error})
   } 
}

export const loginHospital= (payload) => async(dispath) => {
    try {
        const response = await axiosConfig.post('/hospital/login', payload);
         console.log(response);
        dispath({type: actionType.POST_HOSPITAL_SUCESS, payload: response})
    } catch (error) {
      dispath({type: actionType.POST_HOSPITAL_FAILURE, payload: error})
    } 
}