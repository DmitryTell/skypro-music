import { FC } from "react";
import styles from "./form-container.module.scss";
import { LogoIcon, SkyproIcon } from "@/constants";


export const FormContainer: FC<FormContainer> = ({ children }) => (
    <div className={styles.container}>
        <div className={styles.icons}>
            <LogoIcon />
            <SkyproIcon />
        </div>
        { children }
    </div>
);