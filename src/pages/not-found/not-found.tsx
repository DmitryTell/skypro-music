import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@hook/';
import { getStateMenu } from '@redux/';
import { Button } from '@shared/';
import { ReactComponent as SmileCrying } from '@assets/icon/SmileCrying.svg';

import * as Styled from './not-found.styled';


export const NotFound = () => {
  const navigate = useNavigate();

  const { isDarkTheme } = useAppSelector(getStateMenu);

  return (
    <Styled.NotFoundWrapper>
      <Styled.NotFoundContainer>
        <Styled.NotFoundTitle $color={ isDarkTheme ? '#fff' : '#000' }>
          404
        </Styled.NotFoundTitle>
        <Styled.NotFoundTextBox>
          <Styled.NotFoundBgText $color={ isDarkTheme ? '#fff' : '#000' }>
            Страница не найдена
          </Styled.NotFoundBgText>
          <Styled.NotFoundImg>
            <SmileCrying />
          </Styled.NotFoundImg>
        </Styled.NotFoundTextBox>
        <Styled.NotFoundSmText $color={ isDarkTheme ? '#4E4E4E' : '#B1B1B1' }>
          Возможно, она была удалена или перенесена на другой адрес
        </Styled.NotFoundSmText>
        <Styled.NotFoundButtonBox>
          <Button text="Вернуться на главную" onClick={ () => navigate('/skypro-music', { replace: true }) } />
        </Styled.NotFoundButtonBox>
      </Styled.NotFoundContainer>
    </Styled.NotFoundWrapper>
  );
};
