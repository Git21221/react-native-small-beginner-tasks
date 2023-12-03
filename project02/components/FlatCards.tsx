import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <View>
        <Text style={styles.headingText}>Cards design</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>
    </View>
  );
}

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
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    overflow: 'scroll',
    width: 'auto'
  },
});
