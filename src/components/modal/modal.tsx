"use client";

import { FC } from "react";
import styles from "./modal.module.scss";
import { Backdrop, Button } from "@/shared";
import { ErrorIcon, AUTH_ERROR_NAME } from "@/constants";


export const Modal: FC<Modal> = ({
    title,
    text,
    onClick,
}) => (
    <Backdrop>
        <div className={styles.container}>
            <ErrorIcon />
            <div className={styles.content}>
                <h2 className={styles.title}>{ title }</h2>
                <p className={styles.text}>{ text }</p>
            </div>
            <div className={styles.button}>
                <Button onClick={onClick}>
                    { AUTH_ERROR_NAME }
                </Button>
            </div>
        </div>
    </Backdrop>
);