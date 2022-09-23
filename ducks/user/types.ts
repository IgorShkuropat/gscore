export type { UserResponseDto, LicenceCodeResponseDto } from 'api/generated';
import { UserResponseDto, SubscribeResponseDto } from 'api/generated';
export type { SubscribeResponseDto } from 'api/generated';

export type TInitialState = {
  id: null | number;
  email: null | string;
  username: null | string;
  subscribes: SubscribeResponseDto[] | null;
};
export type UserRegisterInfo = {
  email: string;
  username: string;
  password: string;
};
export type RegisterResponse = Omit<UserRegisterInfo, 'password'> & {
  token: string;
};

export type UserLoginInfo = Omit<UserRegisterInfo, 'username'>;

export type PasswordData = {
  currentPassword: string;
  newPassword: string;
};

export type UserData = {
  username: string;
  email: string;
};
