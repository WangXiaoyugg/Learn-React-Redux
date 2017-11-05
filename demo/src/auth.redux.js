const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

//创建reducer
export function auth(state={isAuth:false,user:"李云龙"},action){
	switch (action.type) {
		case LOGIN:
			return {...state,isAuth:ture}
		case LOGOUT:
			return {...state,isAuth:false}	
		default:
			return state
	}
}

//创建action
export function login(){
	return {type:LOGIN}
}

export function logout(){
	return {type:LOGOUT}
}
