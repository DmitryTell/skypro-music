import { useState } from "react";
import { useSelector } from "react-redux";
import { SighnIn } from "../login_signin/index";
import { SighnUp } from "../login_signup/index";
import { LOGIN } from "../../data/pages";
import { commonNewErrorSelector } from "../../store/selectors/common";

export const LoginPageLayout = ({ page, setUser }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [secondPassword, setSecondPassword] = useState(null);
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);

    const newError = useSelector(commonNewErrorSelector);

    return page === LOGIN ? (
        <SighnIn
            setUser={setUser}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLoadingBtn={isLoadingBtn}
            setIsLoadingBtn={setIsLoadingBtn}
            newError={newError}
        />
    ) : (
        <SighnUp
            setUser={setUser}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            name={name}
            setName={setName}
            secondPassword={secondPassword}
            setSecondPassword={setSecondPassword}
            isLoadingBtn={isLoadingBtn}
            setIsLoadingBtn={setIsLoadingBtn}
            newError={newError}
        />
    );
};
