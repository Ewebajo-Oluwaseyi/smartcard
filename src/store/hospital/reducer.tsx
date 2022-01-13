import * as reducerType from './type'

const initialState = {
  user: [],
  error: "",
  loading: true
}

const hospitalReducer = (state=initialState, action: any) => {
    switch(action.type) {
      case reducerType.SET_HOSPITAL_LOADING:
         return {
          ...state,
          loading: action.payload
        }
      default:
        return state;
    }
}

export default hospitalReducer;