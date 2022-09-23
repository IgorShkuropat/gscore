import { useState } from 'react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from 'store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type UsePaginationProps = {
  contentPerPage: number;
  count: number;
};

type UsePaginationReturn = {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
};

type UsePagination = (UsePaginationProps) => UsePaginationReturn;

export const usePagination: UsePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  const changePage = (direction: boolean) => {
    setPage(state => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    firstContentIndex,
    lastContentIndex,
    page,
  };
};
