import { MouseEventHandler } from "react";


declare global {
    interface Modal {
        title: string;
        text: string;
        onClick: MouseEventHandler;
    }
}