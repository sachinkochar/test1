var data;
export const authProgress=()=>{
	{
		type:'authProgress'
	}
}
export const authSuccess=(payload)=>({
		type:'authSuccess',
		payload:data,

})
export const authFailure=()=>{
	{
		type:'authFailure'
	}
}
export const ifUserLoggedIn=()=>{
	data={
		user:'test'
	}
	return true;
}

export const checkAuth=()=>dispatch=>{
	// dispatch(authProgress())
	if(ifUserLoggedIn()){
		dispatch(authSuccess())
	}else{dispatch(authFailure())}
	
}
