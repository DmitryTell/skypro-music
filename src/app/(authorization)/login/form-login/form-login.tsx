"use client";

import { useRouter } from "next/navigation";
import styles from "./form-login.module.scss";
import { useAuthorization } from "@/hooks";
import { Button, Input } from "@/shared";
import { Loader, Modal } from "@/components";
import {
    InputTypes,
    ButtonTypes,
    ButtonVariants,
    Routes,
} from "@/types";
import {
    LOGIN_NAME,
    LOGIN_PLACEHOLDER,
    REGISTER_NAME,
    PASSWORD_PLACEHOLDER,
    AUTH_ERROR_NAME,
} from "@/constants";


export const FormLogin = () => {
    const router = useRouter();

    const {
        isLoading,
        authError,
        handleLoginSubmit,
        handleResetError,
    } = useAuthorization();

    const handleNavigateRegister = () => {
        router.push(Routes.REGISTER)
    };

    return (
        <form
            onSubmit={handleLoginSubmit}
            className={styles.form}
        >
            <div className={styles.inputs}>
                <Input type={InputTypes.TEXT} placeholder={LOGIN_PLACEHOLDER} />
                <Input type={InputTypes.PASSWORD} placeholder={PASSWORD_PLACEHOLDER} />
            </div>
            <div className={styles.buttons}>
                <Button type={ButtonTypes.SUBMIT}>
                    { LOGIN_NAME }
                </Button>
                <Button
                    variant={ButtonVariants.GHOST}
                    onClick={handleNavigateRegister}
                >
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
        </form>
    );
};