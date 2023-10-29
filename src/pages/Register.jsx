import { LoginPageLayout } from "../components/login/LoginPageLayout";
import { REGISTER } from "../data/pages";

export const Register = ({ newError, setNewError, setUser }) => {
    return (
        <LoginPageLayout
            page={REGISTER}
            newError={newError}
            setNewError={setNewError}
            setUser={setUser}
        />
    );
};
