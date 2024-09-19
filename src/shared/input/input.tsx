"use client";

import { FC } from "react";
import styles from "./input.module.scss";


export const Input: FC<Input> = ({
    type,
    placeholder,
}) => (
    <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
    />
);