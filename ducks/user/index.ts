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
  selectAttachedCodes,
  selectCurrentSubcribe,
} from './selectors';

export default userReducer;
