import React, { FC } from 'react';

import { useAppDispatch } from '@hook/';
import { setGenresFilter } from '@redux/';
import { isSelectedElement } from '@utils/';

import * as Styled from './modals.styled';


interface IModalGenres {
  genres: string[];
  genresFilter: string[] | [];
}

export const ModalGenres: FC<IModalGenres> = ({ genres, genresFilter }) => {
  const dispatch = useAppDispatch();

  const handleClickGenre = (event: React.MouseEvent, genre: string) => {
    event.preventDefault();

    dispatch(setGenresFilter({ genre, genresFilter }));
  };

  return (
    <Styled.ModalGenre>
      <Styled.ModalContainer>
        { genres.map((genre, index) => (
          <Styled.ModalLink
            // eslint-disable-next-line react/no-array-index-key
            key={ String(index) }
            $color={ isSelectedElement(genre, genresFilter) }
            href="/#"
            onClick={ (event) => handleClickGenre(event, genre) }
          >
            { genre }
          </Styled.ModalLink>
        )) }
      </Styled.ModalContainer>
    </Styled.ModalGenre>
  );
};
