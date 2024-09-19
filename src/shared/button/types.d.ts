import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonTypes, ButtonVariants, ThemeTypes } from "@/types";


declare global {
    interface Button extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
        type?: ButtonTypes;
        variant?: ButtonVariants;
        theme?: ThemeTypes;
        children: ReactNode;
        onClick?: React.MouseEventHandler;
    }
}