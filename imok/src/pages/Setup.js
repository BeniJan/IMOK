import React from 'react';
import { 
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const Setup = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.welcomeContainer}>
      <Text style={styles.title}>Seja bem-vindo!</Text>
      <Text style={styles.text}>
        Esse é o aplicativo que você pode recorrer quando 
        tiver aquele dia difícil. Aproveite das nossas 
        ferramentaspara ficar mais tranquilo :)
      </Text>
    </View>

    <View>
      <Text style={[styles.text, { fontSize: 18 }]}>
        Vem com a gente?
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sim!</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgb(40, 53, 147)',
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },
  title: {
    color: 'white',
    fontSize: 26,
    borderBottomWidth: 1, 
    borderColor: 'white',
    padding: 10,
    marginVertical: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: 'row'
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  }
});

export default Setup;