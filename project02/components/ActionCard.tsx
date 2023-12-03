import {Linking, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <TouchableOpacity
      onPressOut={() => openWebsite('https://github.com/')}
      >
        <Text>Read more(Link)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
});
