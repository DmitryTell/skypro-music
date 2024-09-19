"use client";

import { FC } from "react";
import cn from "classnames";
import styles from "./button.module.scss";
import {
    ButtonTypes,
    ButtonVariants,
    ThemeTypes,
} from "@/types";


export const Button: FC<Button> = ({
    type = ButtonTypes.BUTTON,
    variant = ButtonVariants.BASE,
    theme,
    children,
    onClick,
}) => (
    <button
        type={type}
        onClick={onClick}
        className={cn(styles.button, {
            [styles.base]: variant === ButtonVariants.BASE,
            [styles.ghost]: variant === ButtonVariants.GHOST,
            [styles.filter]: variant === ButtonVariants.FILTER,
            [styles.dark]: theme === ThemeTypes.DARK,
            [styles.light]: theme === ThemeTypes.LIGHT,
        })}
    >
        { children }
    </button>
);