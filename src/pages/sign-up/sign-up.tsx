import { LayoutAuth } from '@layouts/';
import { Form } from '@components/';
import { Input, Button } from '@shared/';

import * as Styled from './sign-up.styled';


export const SignUp = () => (
  <LayoutAuth>
    <Form>
      <Styled.Inputs>
        <Input placeholder="Имя" type="text" onChange={ (e) => console.log(e.target.value) } />
        <Input placeholder="Почта" type="email" onChange={ (e) => console.log(e.target.value) } />
        <Input placeholder="Пароль" type="password" onChange={ (e) => console.log(e.target.value) } />
        <Input placeholder="Повторите пароль" type="password" onChange={ (e) => console.log(e.target.value) } />
      </Styled.Inputs>
      <Styled.ErrorBox />
      <Styled.Buttons>
        <Styled.ButtonBox>
          <Button text="Зарегистрироваться" onClick={ () => console.log('Click register') } />
        </Styled.ButtonBox>
      </Styled.Buttons>
    </Form>
  </LayoutAuth>
);
