import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@hook/';
import { setDateFilter, getStateMenu } from '@redux/';

import * as Styled from './modals.styled';


interface IModalRealeaseDates {
  dateFilter: string | null;
}

export const ModalReleaseDates: FC<IModalRealeaseDates> = ({ dateFilter }) => {
  const dispatch = useAppDispatch();

  const { isDarkTheme } = useAppSelector(getStateMenu);

  const FIRST_OLD = 'first_old';
  const FIRST_NEW = 'first_new';

  const handleClickFilter = (event: React.MouseEvent, filter: string) => {
    event.preventDefault();

    if (!dateFilter) {
      dispatch(setDateFilter({ dateFilter: filter }));
    } else if (dateFilter === filter) {
      dispatch(setDateFilter({ dateFilter: null }));
    } else {
      dispatch(setDateFilter({ dateFilter: null }));
      dispatch(setDateFilter({ dateFilter: filter }));
    }
  };

  return (
    <Styled.ModalYear $background={ isDarkTheme ? '#313131' : '#F6F5F3' }>
      <Styled.ModalContainer>
        <Styled.ModalLink
          $color={ isDarkTheme ? '#fff' : '#313131' }
          $colorActive={ dateFilter === FIRST_OLD }
          href="/#"
          onClick={ (event) => handleClickFilter(event, FIRST_OLD) }
        >
          Сначала старые
        </Styled.ModalLink>
        <Styled.ModalLink
          $color={ isDarkTheme ? '#fff' : '#313131' }
          $colorActive={ dateFilter === FIRST_NEW }
          href="/#"
          onClick={ (event) => handleClickFilter(event, FIRST_NEW) }
        >
          Сначала новые
        </Styled.ModalLink>
      </Styled.ModalContainer>
    </Styled.ModalYear>
  );
};
