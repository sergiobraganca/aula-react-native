import {  createContext, useContext } from "react";

const AuthContext = createContext({ logado: false });


export const AuthProvider = ({children}) => {


    return (
      <AuthContext.Provider value={{logado: false}}>
        {children}
      </AuthContext.Provider>
    )
}


export default AuthContext