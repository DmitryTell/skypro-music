import styles from "./loader.module.scss";
import { Backdrop } from "@/shared";


export const Loader = () => (
    <Backdrop>
        <div className={styles.container}>
            <div className={styles.loader} />
        </div>
    </Backdrop>
);