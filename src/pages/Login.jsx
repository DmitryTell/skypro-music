import { LoginPageLayout } from "../components/login/LoginPageLayout";
import { LOGIN } from "../data/pages";

export const Login = ({ newError, setNewError }) => {
    return (
        <LoginPageLayout
            page={LOGIN}
            newError={newError}
            setNewError={setNewError}
        />
    );
};
