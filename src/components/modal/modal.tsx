"use client";

import { FC } from "react";
import styles from "./modal.module.scss";
import { Backdrop, Button } from "@/shared";
import { ErrorIcon } from "@/constants";


export const Modal: FC<Modal> = ({
    isError = false,
    title,
    text,
    buttonName,
    onClick,
}) => (
    <Backdrop>
        <div className={styles.container}>
            { isError && <ErrorIcon /> }
            <div className={styles.content}>
                <h2 className={styles.title}>{ title }</h2>
                <p className={styles.text}>{ text }</p>
            </div>
            <div className={styles.button}>
                <Button onClick={onClick}>
                    { buttonName }
                </Button>
            </div>
        </div>
    </Backdrop>
);