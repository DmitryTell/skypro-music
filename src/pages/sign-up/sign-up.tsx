import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form } from '@components/';
import { Input, Button } from '@shared/';
import { useAppDispatch } from '@hook/';
import { setNewToken, setNewUser } from '@redux/';
import { registerUser, createToken } from '@api/';

import * as Styled from './sign-up.styled';


export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secondPassword, setSecondPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  const handleRegisterUser = async () => {
    setErrorText(null);

    if (!name) {
      setErrorText('Введите имя');
      return;
    }

    if (!email) {
      setErrorText('Введите почту');
      return;
    }

    if (!password) {
      setErrorText('Введите пароль');
      return;
    }

    if (password !== secondPassword) {
      setErrorText('Пароли не совпадают');
      return;
    }

    setIsLoading(true);

    try {
      const userData = await registerUser(name, email, password);
      const tokenData = await createToken(email, password);

      setIsLoading(false);

      dispatch(setNewUser({ user: userData }));
      dispatch(setNewToken({
        token: {
          access: tokenData.access,
          refresh: tokenData.refresh,
          isAuth: true,
        },
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
    <Form>
      <Styled.Inputs>
        <Input placeholder="Имя" type="text" onChange={ (e) => setName(e.target.value) } />
        <Input placeholder="Почта" type="email" onChange={ (e) => setEmail(e.target.value) } />
        <Input placeholder="Пароль" type="password" onChange={ (e) => setPassword(e.target.value) } />
        <Input placeholder="Повторите пароль" type="password" onChange={ (e) => setSecondPassword(e.target.value) } />
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
            <Button text="Зарегистрироваться" onClick={ handleRegisterUser } />
          ) }
        </Styled.ButtonBox>
      </Styled.Buttons>
    </Form>
  );
};
