import { leave } from './usersActions';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

export const setCurrentUser(user) {
    return {

    }
}
 export const login = (data) => {
	 const token = data.token
	 localStorage.setItem('token', token)
	setAuthorizationToken(token);
 }
export const signout = () => {
	return dispatch => {
		localStorage.removeItem('token');
		  setAuthorizationToken(false);
		//   dispatch(setCurrentUser({}))
		//   dispatch(leave());
	};
};
