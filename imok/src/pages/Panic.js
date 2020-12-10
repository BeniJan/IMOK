import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';

import Constants from 'expo-constants';

import heart from '../../assets/temporaryHeart.png';

export default function Panic () {

    const handleHeartPress = () => { Linking.openURL('tel:188'); }

    return (

      <View style={ styles.panicView }>
          <TouchableOpacity onPress={ handleHeartPress }>
              <Image source={ heart } style={ styles.heartImage }/>
          </TouchableOpacity>

          <Text style={ styles.description }>
              {`Está tendo uma crise?\n Clique no coração e nós conectaremos você com o CVV-188 agora mesmo!`}
          </Text>
      </View>
    )
}

const styles = StyleSheet.create ({

    panicView: {
      flex: 1,
      padding: 8,
      paddingHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',

    },

    description: {
      fontSize: 16,
      paddingTop: 20,
      textAlign: 'center'
    },

    heartImage: {
      height: 250,
      width: 250
    }
})