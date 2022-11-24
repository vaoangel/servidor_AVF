const ActionTypes={
    ASYNC_START:"ASYNC_START",
    ASYNC_END:"ASYNC_END",


    LOGIN_TYPE:{
        LOGIN:"LOGIN",
        LOGIN_SUCCESS: "LOGIN_SUCCESS",
        LOGIN_PENDING: "LOGIN_PENDING",
        UPDATE_PROFILE:"UPDATE_PROFILE",
        UPDATE_PROFILE_SUCCESS: "UPDATE_PROFILE_SUCCESS",
        UPDATE_PROFILE_PENDING: "UPDATE_PROFILE_PENDING",
        LOGOUT:"LOGOUT",
        LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
        LOGOUT_PENDING: "LOGOUT_PENDING",


    },


    ADMIN_TYPE:{

        GET_ENTERPRISE:"GET_ENTERPRISE",
        GET_ENTERPRISE_SUCCESS:"GET_ENTERPRISE_SUCCESS",
        GET_ENTERPRISE_PENDING:"GET_ENTERPRISE_PENDING",
        DELETE_ENTERPRISE: "DELETE_ENTERPRISE",
        DELETE_ENTERPRISE_SUCCESS:"DELETE_ENTERPRISE_SUCCESS",
        DELETE_ENTERPRISE_PENDING:"DELETE_ENTERPRISE_PENDING",
        ADD_ENTERPRISE: "ADD_ENTERPRISE",
        ADD_ENTERPRISE_SUCCESS: "ADD_ENTERPRISE_SUCCESS",
        ADD_ENTERPRISE_PENDING: "ADD_ENTERPRISE_PENDING",
        GET_USERS_BY_ENTERPRISE: "GET_USERS_BY_ENTERPRISE",
        GET_USERS_BY_ENTERPRISE_SUCCESS: "GET_USERS_BY_ENTERPRISE_SUCCESS",
        GET_USERS_BY_ENTERPRISE_PENDING: "GET_USERS_BY_ENTERPRISE_PENDING",
        DELETE_USERS_BY_ENTERPRISE: "DELETE_USERS_BY_ENTERPRISE",
        DELETE_USERS_BY_ENTERPRISE_SUCCESS:"DELETE_USERS_BY_ENTERPRISE_SUCCESS",
        DELETE_USERS_BY_ENTERPRISE_PENDING:"DELETE_USERS_BY_ENTERPRISE_PENDING",
        ADD_USER: "ADD_USER",
        ADD_USER_SUCCESS:"ADD_USER_SUCCESS",
        ADD_USER_PENDING:"ADD_USER_PENDING",


        //ADD_ENTERPRISE_PENDING: "ADD_ENTERPRISE_PENDING"
        
    },

    RECOVER_TYPE:{
        RECOVER:"RECOVER",
        RECOVER_SUCCESS: "RECOVER_SUCCESS",
        RECOVER_PENDING: "RECOVER_PENDING"

    }
}

export default ActionTypes