
import React from 'react';
import {connect} from 'react-redux'
const mapDispatchToProps = dispatch => ({
/*     login: (email, password) =>
    dispatch({ type: "CHECK_USER", payload: AuthApi.login(email, password)

}), *//* agent.Auth.login(email, password)   new Promise((resolve,reject)=>{
        let res = {user:{username:"test",token:"guau un token"}}
        resolve(res);
    }) */
});

const mapStateToProps = state => ({
    currentUser: state.LoginReducer.currentUser,
});
class ProfileC extends React.Component{

    constructor(props){
        super(props);
    }

     

    render(){
        console.log(this.props.currentUser);

        
        return(
            <div>
                profile
        </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileC)