import { Link } from "react-router-dom";
import * as S from "./Login.styles";

export const SighnUp = () => {
    return (
        <S.ContainerLogin>
            <S.ModalBlock>
                <S.ModalFormLogin>
                    <Link to="/">
                        <S.ModalLogo>
                            <img src="img/logo_modal.png" alt="logo" />
                        </S.ModalLogo>
                    </Link>
                    <S.ModalInputLogin
                        type="text"
                        name="username"
                        placeholder="Имя"
                    />
                    <S.ModalInputLogin
                        type="text"
                        name="login"
                        placeholder="Почта"
                    />
                    <S.ModalInputPasswordFirst
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                    <S.ModalInputPassword
                        type="password"
                        name="password"
                        placeholder="Повторите пароль"
                    />
                    <S.ModalButtonRegister>
                        Зарегистрироваться
                    </S.ModalButtonRegister>
                </S.ModalFormLogin>
            </S.ModalBlock>
        </S.ContainerLogin>
    );
};
