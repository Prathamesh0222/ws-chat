import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({} as any);

export const useAuthContext = () => {
    return useContext(AuthContext);
}

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({children}) => {
    const storedUser = localStorage.getItem("chat-user");
    const [authUser, setAuthUser]  = useState(storedUser ? JSON.parse(storedUser) : null);

    return <AuthContext.Provider
    value={{authUser,setAuthUser}}
    >
        {children}
    </AuthContext.Provider>
}   
