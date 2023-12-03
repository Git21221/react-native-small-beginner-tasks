import React from 'react';

import {View, Text, SafeAreaView, TextInput, StyleSheet} from 'react-native';

function App() {
  const [text, setText] = React.useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          editable
          style={styles.input}
          onChangeText={setText}
          value={text}
        />
        <View>
          <Text>@Youtube India {text}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    width: 300,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
