import { useNavigate } from 'react-router-dom';

import { LayoutAuth } from '@layouts/';
import { Form } from '@components/';
import { Input, Button, ButtonReg } from '@shared/';

import * as Styled from './sign-in.styled';


export const SignIn = () => {
  const navigate = useNavigate();

  return (
    <LayoutAuth>
      <Form>
        <Styled.Inputs>
          <Input placeholder="Почта" type="email" onChange={ (e) => console.log(e.target.value) } />
          <Input placeholder="Пароль" type="password" onChange={ (e) => console.log(e.target.value) } />
        </Styled.Inputs>
        <Styled.ErrorBox />
        <Styled.Buttons>
          <Styled.ButtonBox>
            <Button text="Войти" onClick={ () => console.log('Click enter') } />
          </Styled.ButtonBox>
          <Styled.ButtonBox>
            <ButtonReg onClick={ () => navigate('/register', { replace: true }) } />
          </Styled.ButtonBox>
        </Styled.Buttons>
      </Form>
    </LayoutAuth>
  );
};
