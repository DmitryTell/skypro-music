import type { Metadata } from "next";
import { FormContainer } from "@/components";
import { FormRegister } from "./form-register";


export const metadata: Metadata = {
    title: "Skypro Music - Регистрация"
};

export default function Register() {
    return (
        <FormContainer>
            <FormRegister />
        </FormContainer>
    );
}