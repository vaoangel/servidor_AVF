import ActionTypes from '../ActionTypes'

const initialState = {
    allEnterprises: undefined,
    allCities:undefined,
    users_by_enterprise: undefined
}

const get_enterprise = (state,action) =>{
    
     return{
         ...state,
         allEnterprises:  action.error ? null : action.payload
     }
 }
 
 const get_cities = (state,action) =>{
    
    return{
        ...state,
        allCities:  action.error ? null : action.payload
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
 const get_all_users_by_enterprise = (state,action)=>{

    console.log(action.payload);
    return{
        ...state,
        users_by_enterprise:  action.error ? null : action.payload
    }
 }
 const delete_users_by_enterprise = (state,action)=>{
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

        case Action.GET_CITIES:
            return get_cities(state,action);
        case Action.GET_CITIES_SUCCESS:
        return {...state,allCities:action.payload}

        case Action.DELETE_ENTERPRISE:
            return delete_enterprise(state,action);
        case Action.DELETE_ENTERPRISE_SUCCESS:
            return {...state,allEnterprises:action.payload}  
       
        case Action.ADD_ENTERPRISE:
            return add_enterprise(state,action);
        case Action.ADD_ENTERPRISE_SUCCESS:
            return {...state,allEnterprises:action.payload}  
            case Action.GET_USERS_BY_ENTERPRISE:
            return get_all_users_by_enterprise(state,action);
            case Action.GET_USERS_BY_ENTERPRISE_SUCCESS:
            return {...state,users_by_enterprise:action.payload}  


            case Action.DELETE_USERS_BY_ENTERPRISE:
            return delete_users_by_enterprise(state,action);
        case Action.DELETE_USERS_BY_ENTERPRISE_SUCCESS:
            return {...state,users_by_enterprise:action.payload}  
        default:
            return {...state}
            
    }
}