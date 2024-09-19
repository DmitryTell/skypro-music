export const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const loginInput = form.elements[0] as HTMLInputElement;
    const passwordInput = form.elements[1] as HTMLInputElement;
    const passwordConfirmInput = form.elements[2] as HTMLInputElement;

    console.log({
        login: loginInput.value,
        password: passwordInput.value,
        confirm: passwordConfirmInput.value,
    });
};