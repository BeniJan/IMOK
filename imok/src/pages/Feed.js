import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Image} from 'react-native';

import Constants from 'expo-constants';

import logo from '../../assets/icon.png';

export default function Feed () {
  
  const goodNews = [
  {
    id: '1',
    title: 'Fotos adoráveis de bebês animais com seus pais',
    img: 'https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg'
  },
  {
    id: '2',
    title: '5 boas notícias da ciência sobre o coronavírus',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB8O1ZA6phGwj5Ao-g0VYT_6VXO8NuTQaO89kjm38x_T3EOEqG&usqp=CAU' 
  },
  {
    id: '3',
    title: 'Animais de abrigos estão sendo adotados aos montes durante a quarentena',
    img: 'https://christmasfantasy.gr/wp-content/uploads/blog-img-link.jpg'
  },
   {
    id: '1',
    title: 'Caminhoneiros estão recebendo almoço',
    img: 'https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg'
  },
  {
    id: '2',
    title: 'Second new',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB8O1ZA6phGwj5Ao-g0VYT_6VXO8NuTQaO89kjm38x_T3EOEqG&usqp=CAU' 
  },
  {
    id: '3',
    title: 'Third new',
    img: 'https://christmasfantasy.gr/wp-content/uploads/blog-img-link.jpg'
  },
   {
    id: '1',
    title: 'First new',
    img: 'https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg'
  },
  {
    id: '2',
    title: 'Second new',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB8O1ZA6phGwj5Ao-g0VYT_6VXO8NuTQaO89kjm38x_T3EOEqG&usqp=CAU' 
  },
  {
    id: '3',
    title: 'Third new',
    img: 'https://christmasfantasy.gr/wp-content/uploads/blog-img-link.jpg'
  }
];

  return (
    <View style={ styles.container }>

    <FlatList style={ styles.incidentsList } data={goodNews} 
        keyExtractor={ goodNew => String(goodNew.id) }
        showsVerticalScrollIndicator={ false }
        onEndReachedThreshold={ 0.2 }
        renderItem={({ item }) => (
        <TouchableOpacity onPress>
        <View style={ styles.newsContainer }>
        <ImageBackground source={{uri: item.img }} style= { styles.newsImage } imageStyle={{ borderRadius: 5 }}>
          </ImageBackground><Text style={ styles.newsTitle }>
            {item.title}
          </Text>
        </View></TouchableOpacity>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 3
    },

    newsContainer: {
        minHeight: 90,
        borderRadius: 7,
        marginBottom: 10,
        borderColor: '#4167BF',
        borderWidth: 1
    },

    newsTitle: {
        fontSize: 16,
        fontWeight: '600',
        paddingHorizontal: 10,
        position: 'absolute',
        justifyContent: 'flex-end'
    },

    newsImage: {
        flex:1,
        minHeight: 90,
        borderRadius: 7,
        opacity: .4
    }
})