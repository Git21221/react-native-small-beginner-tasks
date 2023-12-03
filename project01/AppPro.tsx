import React from "react";

import { 
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
 } from 'react-native'

 import App from './App'
function AppPro(): JSX.Element{
  const isDarkMode = useColorScheme() === 'dark'
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText: styles.darkText}>Youtube</Text>
      </View>
      <App />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    alignItems: 'center',
    
  },
  whiteText:{
    color: '#FFFFFF',
    fontSize: 30,
  },
  darkText: {
    color: '#000000',
    fontSize: 30,
    fontWeight: "800"
  }

})

export default AppPro