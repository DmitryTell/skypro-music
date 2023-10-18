import { SighnIn } from "./SighnIn";
import { SighnUp } from "./SighnUp";
import { LOGIN } from "../../data/pages";

export const LoginPageLayout = ({ page }) => {
    return page === LOGIN ? <SighnIn /> : <SighnUp />;
};
