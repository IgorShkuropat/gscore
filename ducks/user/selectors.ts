import { SubscribeResponseDto } from 'api/generated';
import { createSelector } from '@reduxjs/toolkit';
import { State } from './../../store/persistReducer';
import type { UserResponseDto } from './types';

export const selectUsername = state => state.user.username;

export const selectUserEmail = state => state.user.email;
export const selectUserSubscriptions: (
  state: State,
) => UserResponseDto['subscribes'] | null = state => state.user.subscribes;

export const selectCurrentSubcribe: (
  subscribeId: number,
) => (state: State) => SubscribeResponseDto = subscribeId =>
  createSelector(selectUserSubscriptions, subscribe =>
    subscribe?.find(sub => sub.id === subscribeId),
  );
export const selectAttachedCodes: (
  subscribeId: number,
) => (
  subcribe: State,
) => UserResponseDto['codes'] | null | undefined = subscribeId =>
  createSelector(
    selectUserSubscriptions,
    subcribe => subcribe?.find(sub => sub.id === subscribeId)?.codes,
  );
