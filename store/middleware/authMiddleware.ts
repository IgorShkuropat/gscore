import { getUserInfo } from './../../ducks/user/userSlice';
import { AnyAction, Dispatch } from 'redux';
import { REHYDRATE } from 'redux-persist';
import { http } from '../../services/http';
import { signIn } from 'ducks/user';
import { getCookie, setCookie } from 'services/cookie';
export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    if (action.type === signIn.fulfilled.type) {
      action.payload?.token && setCookie('token', action.payload.token);
      action.payload?.user.username &&
        setCookie('username', action.payload.user.username);
      http.setAuthorizationHeader(action.payload.token);
      console.log(action.payload.user.username, 'dasdas');
    }

    if (action.type === REHYDRATE) {
      http.setAuthorizationHeader(getCookie('token'));
    }
    return next(action);
  };
