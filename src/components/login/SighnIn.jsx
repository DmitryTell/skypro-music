import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getNewToken, loginUser } from "../../api/user";
import * as S from "./Login.styles";
import { setToken, setNewError } from "../../store/slices/user";

export const SighnIn = ({
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    isLoadingBtn,
    setIsLoadingBtn,
    newError,
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initLogin = () => {
        setIsLoadingBtn(true);

        if (!email) {
            dispatch(setNewError({ textError: "Введите адрес почты" }));
            setIsLoadingBtn(false);
            return;
        }
        if (!password) {
            dispatch(setNewError({ textError: "Введите пароль" }));
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
            .catch((error) => {
                dispatch(setNewError({ textError: error.message }));
            });
        loginUser(email, password)
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
                            dispatch(setNewError({ textError: null }));
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
