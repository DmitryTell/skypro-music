import { Link, useNavigate } from "react-router-dom";
import * as S from "./Login.styles";

export const SighnIn = () => {
    const navigate = useNavigate();

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
                        name="login"
                        placeholder="Почта"
                    />
                    <S.ModalInputPassword
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                    <S.ModalButtonEnter>Войти</S.ModalButtonEnter>
                    <S.ModalButtonSignUp
                        onClick={() => navigate("/register", { replace: true })}
                    >
                        Зарегистрироваться
                    </S.ModalButtonSignUp>
                </S.ModalFormLogin>
            </S.ModalBlock>
        </S.ContainerLogin>
    );
};
