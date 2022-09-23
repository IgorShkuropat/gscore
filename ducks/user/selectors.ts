import { createSelector } from '@reduxjs/toolkit';
import { State } from './../../store/persistReducer';
import type { UserResponseDto } from './types';

export const selectUsername = state => state.user.username;

export const selectUserEmail = state => state.user.email;
export const selectUserSubscriptions: (
  state: State,
) => UserResponseDto['subscribes'] | null = state => state.user.subscribes;

export const selectUserCodes: (
  subscribeId: number,
) => (
  state: State,
) => UserResponseDto['codes'] | null | undefined = subscribeId =>
  createSelector(selectUserSubscriptions, subcribtion =>
    subcribtion?.find(sub => sub.id === subscribeId),
  );
