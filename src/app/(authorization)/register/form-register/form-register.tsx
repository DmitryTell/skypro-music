"use client";

import { useRouter } from "next/navigation";
import styles from "./form-register.module.scss";
import { useAuthorization } from "@/hooks";
import { Button, Input } from "@/shared";
import { Loader, Modal } from "@/components";
import { InputTypes, ButtonTypes, Routes } from "@/types";
import {
    REGISTER_NAME,
    LOGIN_PLACEHOLDER,
    PASSWORD_PLACEHOLDER,
    PASSWORD_CONFIRM_PLACEHOLDER,
    AUTH_ERROR_NAME,
    LOGIN_NAME,
} from "@/constants";


export const FormRegister = () => {
    const router = useRouter();

    const {
        isLoading,
        authError,
        succesRegister,
        handleRegisterSubmit,
        handleResetError,
    } = useAuthorization();

    const handleNavigateLogin = () => {
        router.push(Routes.LOGIN)
    };

    return (
        <form
            onSubmit={handleRegisterSubmit}
            className={styles.form}
        >
            <div className={styles.inputs}>
                <Input type={InputTypes.TEXT} placeholder={LOGIN_PLACEHOLDER} />
                <Input type={InputTypes.PASSWORD} placeholder={PASSWORD_PLACEHOLDER} />
                <Input type={InputTypes.PASSWORD} placeholder={PASSWORD_CONFIRM_PLACEHOLDER} />
            </div>
            <div className={styles.buttons}>
                <Button type={ButtonTypes.SUBMIT}>
                    { REGISTER_NAME }
                </Button>
            </div>
            { isLoading && <Loader /> }
            { authError.isError && (
                <Modal
                    isError={authError.isError}
                    title={authError.titleError}
                    text={authError.textError}
                    buttonName={AUTH_ERROR_NAME}
                    onClick={handleResetError}
                />
            ) }
            { succesRegister && (
                <Modal
                    title={succesRegister.title}
                    text={succesRegister.text}
                    buttonName={LOGIN_NAME}
                    onClick={handleNavigateLogin}
                />
            ) }
        </form>
    );
};