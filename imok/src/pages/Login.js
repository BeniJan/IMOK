import React from 'react';
import { 
  SafeAreaView,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const Login = () => (
  <SafeAreaView style={styles.container}>
    <Image source={require('../../assets/icon.png')} style={styles.logo} />

    <View style={styles.titleContainer}>
      <Text style={styles.title}>Que bom que voltou!</Text>
      <Text style={styles.subtitle}>Estávamos com saudades :)</Text>
    </View>

    <View style={styles.formContainer}>
      <Text style={styles.text}>Insira suas informações abaixo</Text>

      <TextInput style={styles.input} placeholder='Qual o seu nome mesmo?' />
      <TextInput style={styles.input} placeholder='Digite sua senha' />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Pronto!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotButtonText}>Esqueci minha senha :(</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30
  },
  logo: {
    width: 150,
    height: 150
  },
  titleContainer: {
    alignItems: 'center',

    padding: 10,
    margin: 30,

    borderBottomWidth: 3,
    borderBottomColor: 'grey'
  },
  title: {
    fontSize: 24
  },
  subtitle: {
    fontSize: 15
  },
  formContainer: {
    marginVertical: 10
  },
  text: {
    fontSize: 15,
    marginVertical: 10
  },
  input: {
    borderColor: 'rgb(40, 53, 147)',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    fontSize: 15
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: 'rgb(40, 53, 147)',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginVertical: 5
  },
  loginButtonText: {
    color: 'white',
    fontSize: 15
  },
  forgotButton: {
    alignItems: 'center',
    borderColor: 'rgb(40, 53, 147)',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginVertical: 5
  },
  forgotButtonText: {
    color: 'rgb(40, 53, 147)',
    fontSize: 15
  }
});

export default Login;