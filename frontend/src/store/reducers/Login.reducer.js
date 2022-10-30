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
 

 const Action = ActionTypes.LOGIN_TYPE

export default (state = initialState, action) =>{

    console.log(action.payload);
    switch(action.type){
        case Action.LOGIN:
            return user(state,action);
        case Action.LOGIN_SUCCESS:
            return {...state,currentUser:action.payload}

             
       
        default:
            return {...state}
    }
}