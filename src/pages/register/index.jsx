import { LoginPageLayout } from "../../components/login/index";
import { REGISTER } from "../../data/pages";

export const Register = ({ setUser }) => {
    return <LoginPageLayout page={REGISTER} setUser={setUser} />;
};
