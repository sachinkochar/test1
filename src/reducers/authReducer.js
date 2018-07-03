import { 
	authProgress,
    authSuccess,
    authFailure
  } from '../actions/authVerifyActions';

const initialState = {
	loggedIn:false,
	authProgress:false,
	userData:{}
}
export default function authReducer(state = initialState, {type,payload}) {
	switch(type){
	 case authSuccess :
		return {
			...state,
			loggedIn:true,
			authProgress:false,
			userData:payload
		}
	 case authFailure :
		return {
			...state,
			loggedIn:false,
			authProgress:false
		}
	case authProgress :
		return {
			...state,
			loggedIn:false,	
			authProgress:true
		}
	 default :
	    return state;
    }
}