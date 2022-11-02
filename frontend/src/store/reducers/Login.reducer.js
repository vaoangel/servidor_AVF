import ActionTypes from '../ActionTypes'

const initialState = {
    currentUser: window.localStorage.getItem('user')!==null ? JSON.parse(window.localStorage.getItem('user')) : null,
}

const user = (state,action) =>{
    console.log(action.payload);
    
     return{
         ...state,
         currentUser:  action.error ? null : action.payload
     }
 }
 
 const update_profile = (state,action) =>{
    console.log(action.payload);
    
     return{
         ...state,
         currentUser:  action.error ? null : action.payload
     }
 }
 const Action = ActionTypes.LOGIN_TYPE

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>{

    console.log(action.payload, action.type);
    switch(action.type){
        case Action.LOGIN:
            return user(state,action);
        case Action.LOGIN_SUCCESS:
            return {...state,currentUser:action.payload}
        case Action.UPDATE_PROFILE:
            return update_profile(state,action)
        case Action.UPDATE_PROFILE_SUCCESS:
            return {...state,currentUser:action.payload}
             
       
        default:
            return {...state}
    }
}