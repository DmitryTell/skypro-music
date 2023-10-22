import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/user";
import * as S from "./Login.styles";

export const SighnIn = ({
    newError,
    setNewError,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    isLoadingBtn,
    setIsLoadingBtn,
}) => {
    const navigate = useNavigate();

    const initLogin = () => {
        setIsLoadingBtn(true);

        if (!email) {
            setNewError("Введите адрес почты");
            setIsLoadingBtn(false);
            return;
        }
        if (!password) {
            setNewError("Введите пароль");
            setIsLoadingBtn(false);
            return;
        }

        loginUser(email, password)
            .then((user) => {
                const userJson = JSON.stringify(user);

                window.localStorage.setItem("USER", userJson);

                setUser(user);
                setIsLoadingBtn(false);
                setNewError(null);

                navigate("/", { replace: true });
            })
            .catch((error) => {
                setNewError(error.message);
                setIsLoadingBtn(false);
            });
    };

    useEffect(() => {
        setUser(null);
        setNewError(null);
    }, []);

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
                        type="email"
                        name="login"
                        placeholder="Почта"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <S.ModalInputPassword
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {newError && (
                        <S.ModalErrorText>{newError}</S.ModalErrorText>
                    )}
                    <S.ModalButtonEnter
                        disabled={isLoadingBtn}
                        loading={isLoadingBtn ? "yes" : ""}
                        onClick={initLogin}
                    >
                        {!isLoadingBtn && "Войти"}
                    </S.ModalButtonEnter>
                    <S.ModalButtonSignUp
                        onClick={() => {
                            setNewError(null);
                            navigate("/register", { replace: true });
                        }}
                    >
                        Зарегистрироваться
                    </S.ModalButtonSignUp>
                </S.ModalFormLogin>
            </S.ModalBlock>
        </S.ContainerLogin>
    );
};
