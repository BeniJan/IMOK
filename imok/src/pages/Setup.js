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
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Text>
    </View>

    <View>
      <Text style={styles.text}>Vem com a gente?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sim!</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 16, 100)'
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  text: {
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 24,
    borderBottomWidth: 0.5, 
    borderColor: 'white',
    padding: 10,
    marginVertical: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(40, 53, 147)',
  },
  buttonText: {
    color: 'white'
  }
});

export default Setup;