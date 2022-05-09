//Como StatusBar no lo estan utilizando, deben de limpiarlo
// import { StatusBar } from 'expo-status-bar';

import { View } from 'react-native';
//Estos imports, excepto View, pueden ser borrados porque no se necesita ningun Componente Core de RN
// import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
//Importamos la Screen que va a estar renderizando nuestro conjunto de componentes, estados y metodos

export default function App() {
  return (
    <View >
      <Home />
      {/* <StatusBar style="auto" />
      Deben limpiar StatusBar */}
    </View>
  );
}

//Deben limpiar esto
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
