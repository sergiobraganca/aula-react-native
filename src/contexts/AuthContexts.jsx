import { createContext, useState } from "react";
import { login } from "../services/auth";

const AuthContext = createContext({ logado: false });


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginContext = async () => {
        const response = await login()
        console.log("login context" , response)
    }

    const logoutContext = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider
            value={{ logado: !!user, loginContext }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext