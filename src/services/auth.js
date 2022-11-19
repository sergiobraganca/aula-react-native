export const login = (email, senha) => {
    // api.post("/login") , (login: email, passowrd: senha)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: "ahushuahuhauhuhsuahush.ahduabydsdvb",
                user: {
                    name: "junior",
                    email: "junior"
                }
            })

        }, 1000)
    })

}