import React from 'react'
import { Dimensions, Image, View, Text, StyleSheet, } from 'react-native'

const size = Dimensions.get('window')
const w = size.width
const h = size.height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'theater-afisha',
    fontSize: 18,
    alignSelf: 'flex-start',
    color: 'white'
  },
  cover: {
    margin:10,
    width: w / 2.4,
    height: h * 0.30,
    borderRadius: 20,
  }
})


const ImageCard = ({ data }) => {
  const { container, h1, cover } = styles
  try {
    image = data.show.image.original
  }
  catch (e) {
    {
      return <Image style={{
        margin:10,
        padding: 100,
        width: w / 2.4,
        height: h * 0.30,
        borderRadius: 50,
      }}
        source={require('../Movies/images/404.png')} />
    }
  }

  const name = data.show.name
  const date = data.show.premiered
  const status = data.show.status
  console.log(data.show.image.original)
  return (
    <View style={container}>
      <Image style={cover} source={{ uri: image }} />
      <View style={{ flex: 3, flexDirection: 'column', paddingLeft: 5, }}>
        <Text style={h1}>{name}</Text>
        <Text style={h1}>Дата: {date}</Text>
        <Text style={h1}>Статус: {status}</Text>
      </View>
    </View>
  )
}

export default ImageCard