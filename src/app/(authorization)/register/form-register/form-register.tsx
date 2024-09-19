"use client";

import styles from "./form-register.module.scss";
import { Button, Input } from "@/shared";
import { InputTypes, ButtonTypes } from "@/types";
import {
    REGISTER_NAME,
    LOGIN_PLACEHOLDER,
    PASSWORD_PLACEHOLDER,
    PASSWORD_CONFIRM_PLACEHOLDER,

} from "@/constants";
import { handleRegisterSubmit } from "./lib/handle-register-submit";


export const FormRegister = () => (
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
    </form>
);