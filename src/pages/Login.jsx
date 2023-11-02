import { LoginPageLayout } from "../components/login/LoginPageLayout";
import { LOGIN } from "../data/pages";

export const Login = ({ setUser }) => {
    return <LoginPageLayout page={LOGIN} setUser={setUser} />;
};
