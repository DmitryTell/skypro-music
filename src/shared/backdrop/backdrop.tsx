import { FC } from "react";
import styles from "./backdrop.module.scss";


export const Backdrop: FC<Backdrop> = ({ children }) => (
    <div className={styles.wrapper}>
        { children }
    </div>
);