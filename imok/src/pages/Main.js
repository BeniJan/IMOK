import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const colors = {
  'blue': 'rgb(40, 53, 147)',
  'dark-blue': 'rgb(0, 16, 100)'
}

const Main = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle='light-content' backgroundColor={colors["dark-blue"]} />

    <View style={{ width: 80, height: 80, backgroundColor: 'white' }} />

    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>REGISTRAR</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 20,
    backgroundColor: colors["blue"]
  },
  buttonsContainer: {
    flexDirection: 'row',

    position: 'absolute',
    bottom: 0,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    
    margin: 10,
    paddingVertical: 14,

    borderRadius: 4,

    borderColor: 'white',
    borderWidth: 2,

    backgroundColor: colors['blue']
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: 'white'
  }
});
