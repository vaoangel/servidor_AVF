import ActionTypes from '../ActionTypes'

const initialState = {
    currentUser: window.localStorage.getItem('user')!==null ? JSON.parse(window.localStorage.getItem('user')) : null,
}

const user = (state,action) =>{
    
     return{
         ...state,
         currentUser:  action.error ? null : action.payload
     }
 }
 
 const update_profile = (state,action) =>{
    
     return{
         ...state,
         currentUser:  action.error ? null : action.payload
     }
 }

 const logout = (state)=>{

    return { ...state, 
        
        currentUser: null,
        };
 }
 const Action = ActionTypes.LOGIN_TYPE

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>{

    switch(action.type){
        case Action.LOGIN:
            return user(state,action);
        case Action.LOGIN_SUCCESS:
        console.log(action.payload[0]);
        var jso = JSON.stringify(action.payload)
            localStorage.setItem("user" ,jso)
            console.log("login payload: " + action.payload);
            return {...state,currentUser:action.payload}
        case Action.UPDATE_PROFILE:
            return update_profile(state,action)
        case Action.UPDATE_PROFILE_SUCCESS:
            return {...state,currentUser:action.payload}
        case Action.LOGOUT:
        localStorage.setItem("user" ,null)

        return logout(state,action)
       
       
        default:
            return {...state}
    }
}