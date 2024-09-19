import { useState } from "react";
import { IError } from "@/interfaces";
import { validateLoginForm } from "./lib";


export const useAuthorization = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [authError, setAuthError] = useState<IError>({
        titleError: "Ошибка авторизации",
        textError: "",
        isError: false,
    });

    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const form = e.target as HTMLFormElement;
        const loginInput = form.elements[0] as HTMLInputElement;
        const passwordInput = form.elements[1] as HTMLInputElement;
    
        setIsLoading(true);

        const validatedDate = validateLoginForm(loginInput.value, passwordInput.value);

        if (validatedDate) {
            setIsLoading(false);
            setAuthError({
                ...authError,
                textError: validatedDate.textError,
                isError: validatedDate.isError,
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
        handleLoginSubmit,
        handleResetError,
    };
};