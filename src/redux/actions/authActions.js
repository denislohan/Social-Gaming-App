import { SIGNOUT } from '../../constants/actionTypes'

export const signout = () => {
	return dispatch => {
		localStorage.removeItem('token');
		  dispatch({type: SIGNOUT})
	};
};
