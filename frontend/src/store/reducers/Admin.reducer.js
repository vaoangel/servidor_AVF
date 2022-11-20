import ActionTypes from '../ActionTypes'

const initialState = {
    allEnterprises: null
}

const get_enterprise = (state,action) =>{
    console.log(action.payload);
    
     return{
         ...state,
         allEnterprises:  action.error ? null : action.payload
     }
 }
 

 const Action = ActionTypes.ADMIN_TYPE

export default (state = initialState, action) =>{
    console.log(action.payload);

    switch(action.type){
        case Action.GET_ENTERPRISE:
            return get_enterprise(state,action);
        case Action.GET_ENTERPRISE_SUCCESS:
            return {...state,allEnterprises:action.payload}

             
       
        default:
            return {...state}
    }
}