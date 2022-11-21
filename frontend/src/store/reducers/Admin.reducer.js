import ActionTypes from '../ActionTypes'

const initialState = {
    allEnterprises: undefined
}

const get_enterprise = (state,action) =>{
    
     return{
         ...state,
         allEnterprises:  action.error ? null : action.payload
     }
 }
 

 const delete_enterprise = (state,action)=>{
    return{
        ...state,
        allEnterprises:  action.error ? null : action.payload
    }
 }

 const add_enterprise = (state,action)=>{
    return{
        ...state,
        allEnterprises:  action.error ? null : action.payload
    }
 }

 const Action = ActionTypes.ADMIN_TYPE

export default (state = initialState, action) =>{


    switch(action.type){
        case Action.GET_ENTERPRISE:
            return get_enterprise(state,action);
        case Action.GET_ENTERPRISE_SUCCESS:
        return {...state,allEnterprises:action.payload}

        case Action.DELETE_ENTERPRISE:
            return delete_enterprise(state,action);
        case Action.DELETE_ENTERPRISE_SUCCESS:
            return {...state,allEnterprises:action.payload}  
       
        case Action.ADD_ENTERPRISE:
            return add_enterprise(state,action);
        case Action.ADD_ENTERPRISE_SUCCESS:
            return {...state,allEnterprises:action.payload}  
       
        default:
            return {...state}
            
    }
}