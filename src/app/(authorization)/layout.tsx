import { ReactNode } from "react";
import styles from "./layout.module.scss";


export default function AuthorizationLayout({ children }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                { children }
            </div>
        </div>
    );
}