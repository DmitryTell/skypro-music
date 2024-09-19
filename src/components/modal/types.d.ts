import { MouseEventHandler } from "react";


declare global {
    interface Modal {
        isError?: boolean;
        title: string;
        text: string;
        buttonName: string;
        onClick: MouseEventHandler;
    }
}