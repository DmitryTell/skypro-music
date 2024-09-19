export const validateRegisterForm = (login: string, password: string, confirm: string) => {
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

    if (!confirm) {
        return {
            textError: "Отсутствует подтверждение пароля",
            isError: true,
        };
    }

    if (password !== confirm) {
        return {
            textError: "Пароли не совпадают",
            isError: true,
        };
    }

    return null;
};