import { combineReducers } from 'redux';
import AnimalsReducer from './Animals.reducer'
import RiviaReducer from './Rivia.reducer'
import LoginReducer from './Login.reducer';
export default combineReducers({
    AnimalsReducer,
    RiviaReducer,
    LoginReducer
    

    
});