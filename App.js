import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';




const App = () => {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;


























/*   const getTasks = async () => {
    const { data } = await api.get("/tasks")
    console.log(data)
    setTasks(data);
  }
 */



/*     <View style={styles.container}>
      <Text style={styles.texto}>{nome}</Text>
      <TextInput
        placeholder="Digite seu nome"
        onChangeText={setNomeInput}
        value={nomeInput}
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setNome(nomeInput)}>
        <Text>CLIQUE AQUI</Text>
      </TouchableOpacity>
    </View> */
/* botao: {
  backgroundColor: 'lightblue',
  padding: 15,
  borderRadius: 15,
  marginTop: 16,
}, */