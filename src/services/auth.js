
export const login = (userName, password) => {
    //return await api.post("/login", {login: email, senha: senha})
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: "abc123fgh456", 
                user: {
                    name: "Teste",
                    email: "teste@gmail.com"
                }
            })
        }, 1000)
    })
}