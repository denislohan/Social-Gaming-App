import { leave } from './usersActions';
// export const setCurrentUser(user) {
//     return {

//     }
// }

export const signout = () => {
	return dispatch => {
		localStorage.removeItem('token');
		//   setAuthorizationToken(false);
		//   dispatch(setCurrentUser({}))
		//   dispatch(leave());
	};
};
