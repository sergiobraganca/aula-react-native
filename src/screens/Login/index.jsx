import { StyleSheet, Text, View, Button, TextInput } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { login } from "../../services/auth";

const Login = () => {
    const [userName, setUserName] = useState("")
    const [passoword, setPassoword] = useState("")

    const handleLogin = async () => {
        const response = await Login();
        console.log(response)
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput style={styles.textImput} placeholder="    INSIRA SEU LOGIN" onChange={setUserName} valeu={userName} />
            <TextInput style={styles.textImput} placeholder="    INSIRA SUA SENHA" onChange={setPassoword} valeu={passoword} />
            <Button title="ENTRAR" onPress={() => handleLogin()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: "center",
    },
    textImput: {
        borderWidth: 1,
        width: "80%",
        alignItems: "center",
        justifyContent: 'center',
    }
});

export default Login;