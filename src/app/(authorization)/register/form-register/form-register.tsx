"use client";

import styles from "./form-register.module.scss";
import { useAuthorization } from "@/hooks";
import { Button, Input } from "@/shared";
import { Loader, Modal } from "@/components";
import { InputTypes, ButtonTypes } from "@/types";
import {
    REGISTER_NAME,
    LOGIN_PLACEHOLDER,
    PASSWORD_PLACEHOLDER,
    PASSWORD_CONFIRM_PLACEHOLDER,

} from "@/constants";


export const FormRegister = () => {
    const {
        isLoading,
        authError,
        handleRegisterSubmit,
        handleResetError,
    } = useAuthorization();

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
                    title={authError.titleError}
                    text={authError.textError}
                    onClick={handleResetError}
                />
            ) }
        </form>
    );
};