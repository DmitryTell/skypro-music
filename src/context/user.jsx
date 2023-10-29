import React, { useContext } from "react";

export const UserContext = React.createContext({
    username: null,
    userId: null,
    clearUser: () => {},
});
export const useUserContext = () => {
    const user = useContext(UserContext);

    if (!user) {
        return null;
    }

    return user;
};
