import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from "react-native"
import {useState} from "react";
import {useContext} from "react";
import AuthContext from "../../contexts/AuthContexts";


const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const {loginContext} = useContext(AuthContext)


    const handleLogin = async () => {
        if (userName != "" && password != "") {
            loginContext();
        }
    }

    return (
        <View style={
            styles.container
        }>
            <View style={styles.login}>
<View>

                <Text style={styles.text}>Login</Text>
                <TextInput style={styles.textInput} placeholder="    INSIRA SEU LOGIN" onChange={setUserName} value={userName}/>
                <TextInput style={styles.textInput } placeholder="    INSIRA SUA SENHA"onChange={setPassword} value={password}/>
</View>
<View>

                <Button title="ENTRAR" onPress={ () => handleLogin() }/>
</View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "darkblue",
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: "center"
    },
    login: {
        width: "80%"
    },
    textInput: {
        borderWidth: 1,
        margin: 10,
        width: 320,
        justifyContent: "center",
        backgroundColor: 'white',
        width: "80%",
        alignItems: "center",
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
});

export default Login;
