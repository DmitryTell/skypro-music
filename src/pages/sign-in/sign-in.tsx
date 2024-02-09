import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LayoutAuth } from '@layouts/';
import { Form } from '@components/';
import { Input, Button, ButtonReg } from '@shared/';
import { useAppDispatch } from '@hook/';
import { setNewUser } from '@redux/';
import { loginUser, createToken } from '@api/';

import * as Styled from './sign-in.styled';


export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  const handleLoginUser = async () => {
    setErrorText(null);

    if (!email) {
      setErrorText('Почта не указана');
      return;
    }

    if (!password) {
      setErrorText('Пароль не указан');
      return;
    }

    setIsLoading(true);

    try {
      const userData = await loginUser(email, password);
      const tokenData = await createToken(email, password);

      setIsLoading(false);

      dispatch(setNewUser({
        token: {
          access: tokenData.access,
          refresh: tokenData.refresh,
          isAuth: true,
        },
        user: userData,
      }));
      navigate('/', { replace: true });
    } catch (error) {
      if (error instanceof Error) {
        setIsLoading(false);
        setErrorText(error.message);
      }
    }
  };

  return (
    <LayoutAuth>
      <Form>
        <Styled.Inputs>
          <Input placeholder="Почта" type="email" onChange={ (e) => setEmail(e.target.value) } />
          <Input placeholder="Пароль" type="password" onChange={ (e) => setPassword(e.target.value) } />
        </Styled.Inputs>
        <Styled.ErrorBox>
          { errorText && (
            <Styled.ErrorText>{ errorText }</Styled.ErrorText>
          ) }
        </Styled.ErrorBox>
        <Styled.Buttons>
          <Styled.ButtonBox>
            { isLoading ? (
              <Styled.ButtonLoading />
            ) : (
              <Button text="Войти" onClick={ handleLoginUser } />
            ) }
          </Styled.ButtonBox>
          <Styled.ButtonBox>
            <ButtonReg onClick={ () => navigate('/register', { replace: true }) } />
          </Styled.ButtonBox>
        </Styled.Buttons>
      </Form>
    </LayoutAuth>
  );
};
