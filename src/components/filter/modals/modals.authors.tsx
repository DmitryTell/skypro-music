import React, { FC } from 'react';

import { useAppDispatch } from '@hook/';
import { setAuthorsFilter } from '@redux/';
import { isSelectedElement } from '@utils/';

import * as Styled from './modals.styled';


interface IModalAuthors {
  authors: string[];
  authorsFilter: string[] | [];
}

export const ModalAuthors: FC<IModalAuthors> = ({ authors, authorsFilter }) => {
  const dispatch = useAppDispatch();

  const handleClickAuthor = (event: React.MouseEvent, author: string) => {
    event.preventDefault();

    dispatch(setAuthorsFilter({ author, authorsFilter }));
  };

  return (
    <Styled.ModalAuthor>
      <Styled.ModalContainer>
        { authors.map((author, index) => (
          <Styled.ModalLink
            // eslint-disable-next-line react/no-array-index-key
            key={ String(index) }
            $color={ isSelectedElement(author, authorsFilter) }
            href="/#"
            onClick={ (event) => handleClickAuthor(event, author) }
          >
            { author }
          </Styled.ModalLink>
        )) }
      </Styled.ModalContainer>
    </Styled.ModalAuthor>
  );
};
