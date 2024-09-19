export const validateLoginForm = (login: string, password: string) => {
    if (!login) {
        return {
            textError: "Отсутствует логин",
            isError: true,
        };
    }

    if (!password) {
        return {
            textError: "Отсутствует пароль",
            isError: true,
        };
    }

    return null;
};