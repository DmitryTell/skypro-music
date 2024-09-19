import { ReactNode } from "react";


declare global {
    interface Backdrop {
        children: ReactNode;
    }
}