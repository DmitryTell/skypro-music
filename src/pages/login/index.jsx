import { LoginPageLayout } from "../../components/login/index";
import { LOGIN } from "../../data/pages";

export const Login = ({ setUser }) => {
    return <LoginPageLayout page={LOGIN} setUser={setUser} />;
};
