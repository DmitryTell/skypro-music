import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { InputTypes } from "@/types";


declare global {
    interface Input extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
        type: InputTypes;
        placeholder: string;
        value: string;
        onChange: React.ChangeEventHandler;
    }
}