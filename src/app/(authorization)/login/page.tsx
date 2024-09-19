import type { Metadata } from "next";
import { FormContainer } from "@/components";
import { FormLogin } from "./form-login";


export const metadata: Metadata = {
    title: "Skypro Music - Авторизация"
};

export default function Login() {
    return (
        <FormContainer>
            <FormLogin />
        </FormContainer>
    );
}