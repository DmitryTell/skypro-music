import { ReactNode } from "react";


declare global {
    interface FormContainer {
        children: ReactNode;
    }
}