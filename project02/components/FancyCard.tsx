import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View>
        <Image
        source={{
          uri: 'https://cdn.wallpapersafari.com/27/22/sJC2Ac.jpg'
        }}
        style={styles.cardImage}
        />
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
  headingText:{
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 8,
    backgroundColor: '#00ebbc',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  cardImage:{
    height: 180,
  }
})