import { useState } from "react";
import { IError } from "@/interfaces";
import { validateLoginForm, validateRegisterForm } from "./lib";


export const useAuthorization = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [authError, setAuthError] = useState<IError>({
        titleError: "Ошибка авторизации",
        textError: "",
        isError: false,
    });
    const [succesRegister, setSuccessRegister] = useState<{ title: string; text: string } | null>(null);

    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const form = e.target as HTMLFormElement;
        const loginInput = form.elements[0] as HTMLInputElement;
        const passwordInput = form.elements[1] as HTMLInputElement;
    
        setIsLoading(true);

        const validatedData = validateLoginForm(loginInput.value, passwordInput.value);

        if (validatedData) {
            setIsLoading(false);
            setAuthError({
                ...authError,
                textError: validatedData.textError,
                isError: validatedData.isError,
            });
            return;
        }

        console.log("Data is ready");
    };

    const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const form = e.target as HTMLFormElement;
        const loginInput = form.elements[0] as HTMLInputElement;
        const passwordInput = form.elements[1] as HTMLInputElement;
        const passwordConfirmInput = form.elements[2] as HTMLInputElement;
    
        setIsLoading(true);

        const validatedData = validateRegisterForm(loginInput.value, passwordInput.value, passwordConfirmInput.value);

        if (validatedData) {
            setIsLoading(false);
            setAuthError({
                ...authError,
                textError: validatedData.textError,
                isError: validatedData.isError,
            });
            return;
        }

        console.log("Data is ready");
    };

    const handleResetError = () => {
        setAuthError({
            ...authError,
            textError: "",
            isError: false,
        });
    };

    return {
        isLoading,
        authError,
        succesRegister,
        handleLoginSubmit,
        handleRegisterSubmit,
        handleResetError,
    };
};