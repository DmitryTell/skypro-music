import { useNavigate } from 'react-router-dom';

import { Button } from '@shared/';
import { ReactComponent as SmileCrying } from '@assets/icon/SmileCrying.svg';

import * as Styled from './not-found.styled';


export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Styled.NotFoundWrapper>
      <Styled.NotFoundContainer>
        <Styled.NotFoundTitle>404</Styled.NotFoundTitle>
        <Styled.NotFoundTextBox>
          <Styled.NotFoundBgText>Страница не найдена</Styled.NotFoundBgText>
          <Styled.NotFoundImg>
            <SmileCrying />
          </Styled.NotFoundImg>
        </Styled.NotFoundTextBox>
        <Styled.NotFoundSmText>
          Возможно, она была удалена или перенесена на другой адрес
        </Styled.NotFoundSmText>
        <Styled.NotFoundButtonBox>
          <Button text="Вернуться на главную" onClick={ () => navigate('/', { replace: true }) } />
        </Styled.NotFoundButtonBox>
      </Styled.NotFoundContainer>
    </Styled.NotFoundWrapper>
  );
};
