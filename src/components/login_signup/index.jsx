import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getNewToken, registerUser } from "../../api/user";
import * as S from "./index.styles";
import { setToken, setNewError } from "../../store/slices/user";

export const SighnUp = ({
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
    newError,
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initRegister = () => {
        setIsLoadingBtn(true);

        if (!name) {
            dispatch(setNewError({ textError: "Придумайте имя" }));
            setIsLoadingBtn(false);
            return;
        }
        if (!email) {
            dispatch(setNewError({ textError: "Введите email" }));
            setIsLoadingBtn(false);
            return;
        }
        if (!password) {
            dispatch(setNewError({ textError: "Введите пароль" }));
            setIsLoadingBtn(false);
            return;
        }
        if (!secondPassword) {
            dispatch(setNewError({ textError: "Подтвердите пароль" }));
            setIsLoadingBtn(false);
            return;
        }
        if (password !== secondPassword) {
            dispatch(setNewError({ textError: "Пароли не совпадают" }));
            setIsLoadingBtn(false);
            return;
        }

        getNewToken(email, password)
            .then((newToken) => {
                window.localStorage.setItem("REFRESH", newToken.refresh);

                dispatch(
                    setToken({
                        access: newToken.access,
                        refresh: newToken.refresh,
                    }),
                );
            })
            .catch((error) =>
                dispatch(setNewError({ textError: error.message })),
            );
        registerUser(name, email, password)
            .then((user) => {
                const userJson = JSON.stringify(user);

                window.localStorage.setItem("USER", userJson);

                setUser(user);
                setIsLoadingBtn(false);
                dispatch(setNewError({ textError: null }));

                navigate("/", { replace: true });
            })
            .catch((error) => {
                dispatch(setNewError({ textError: error.message }));
                setIsLoadingBtn(false);
            });
    };

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
                        loading={isLoadingBtn ? "yes" : ""}
                        onClick={initRegister}
                    >
                        {!isLoadingBtn && "Зарегистрироваться"}
                    </S.ModalButtonRegister>
                </S.ModalFormLogin>
            </S.ModalBlock>
        </S.ContainerLogin>
    );
};
