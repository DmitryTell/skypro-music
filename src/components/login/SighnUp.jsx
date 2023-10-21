import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/user";
import * as S from "./Login.styles";

export const SighnUp = ({
    newError,
    setNewError,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    secondPassword,
    setSecondPassword,
    isLoadingBtn,
    setIsLoadingBtn,
}) => {
    const navigate = useNavigate();

    const initRegister = () => {
        setIsLoadingBtn(true);

        if (!name) {
            setNewError("Придумайте имя");
            setIsLoadingBtn(false);
            return;
        }
        if (!email) {
            setNewError("Введите email");
            setIsLoadingBtn(false);
            return;
        }
        if (!password) {
            setNewError("Введите пароль");
            setIsLoadingBtn(false);
            return;
        }
        if (!secondPassword) {
            setNewError("Подтвердите пароль");
            setIsLoadingBtn(false);
            return;
        }
        if (password !== secondPassword) {
            setNewError("Пароли не совпадают");
            setIsLoadingBtn(false);
            return;
        }

        registerUser(name, email, password)
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
                        type="text"
                        name="username"
                        placeholder="Имя"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <S.ModalInputLogin
                        type="email"
                        name="login"
                        placeholder="Почта"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <S.ModalInputPasswordFirst
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <S.ModalInputPassword
                        type="password"
                        name="password"
                        placeholder="Повторите пароль"
                        onChange={(e) => setSecondPassword(e.target.value)}
                    />
                    {newError && (
                        <S.ModalErrorText>{newError}</S.ModalErrorText>
                    )}
                    <S.ModalButtonRegister
                        disabled={isLoadingBtn}
                        onClick={initRegister}
                    >
                        {!isLoadingBtn && "Зарегистрироваться"}
                    </S.ModalButtonRegister>
                </S.ModalFormLogin>
            </S.ModalBlock>
        </S.ContainerLogin>
    );
};
