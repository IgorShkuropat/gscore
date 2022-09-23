import userReducer from './userSlice';

export {
  signUp,
  signIn,
  updatePassword,
  updatePersonalData,
  getUserInfo,
} from './userSlice';
export {
  selectUsername,
  selectUserEmail,
  selectUserSubscriptions,
  selectUserCodes,
} from './selectors';

export default userReducer;
