import * as reducerType from './type'

const initialState = {
  user: [],
  error: "",
  loading: false
}

const hospitalReducer = (state=initialState, action: any) => {
    switch(action.type) {
      case reducerType.POST_HOSPITAL_SUCESS:
        return {
         ...state,
         user: action.payload
       }
      case reducerType.POST_HOSPITAL_FAILURE:
        return {
         ...state,
         error: action.payload
       }
      case reducerType.SET_LOADING:
         return {
          ...state,
          loading: action.payload
        }
      default:
        return state;
    }
}

export default hospitalReducer;