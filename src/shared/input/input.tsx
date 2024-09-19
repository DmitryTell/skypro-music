"use client";

import { FC } from "react";
import styles from "./input.module.scss";


export const Input: FC<Input> = ({
    type,
    placeholder,
    value,
    onChange,
}) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
    />
);