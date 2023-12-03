import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated card</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
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
  headingText:{
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },

})