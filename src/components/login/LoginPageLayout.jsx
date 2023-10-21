import { useState } from "react";
import { SighnIn } from "./SighnIn";
import { SighnUp } from "./SighnUp";
import { LOGIN } from "../../data/pages";

export const LoginPageLayout = ({ page, newError, setNewError, setUser }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [secondPassword, setSecondPassword] = useState(null);
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);

    return page === LOGIN ? (
        <SighnIn
            newError={newError}
            setNewError={setNewError}
            setUser={setUser}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLoadingBtn={isLoadingBtn}
            setIsLoadingBtn={setIsLoadingBtn}
        />
    ) : (
        <SighnUp
            newError={newError}
            setNewError={setNewError}
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
        />
    );
};
