import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const contacts = [
  {
    id: '101005577',
    name: 'Saikat Das',
    avater_url: 'https://avatars.githubusercontent.com/u/101005577?v=4',
  },
  {
    id: '96655128',
    name: 'Sumon Mitra',
    avater_url: 'https://avatars.githubusercontent.com/u/96655128?v=4',
  },
  {
    id: '146007118',
    name: 'Sunny Mishra',
    avater_url: 'https://avatars.githubusercontent.com/u/146007118?v=4',
  },
  {
    id: '77888604',
    name: 'Rahul Das',
    avater_url: 'https://avatars.githubusercontent.com/u/77888604?v=4',
  },
];

const ContactList = () => {
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}>
        {contacts.map(contact => (
          <View key={contact.id} style={styles.contactList}>
            <View>
                <Image
                  source={{
                    uri: contact.avater_url,
                  }}
                  style={styles.image}
                />
            </View>
            <View>
              <Text style={styles.name}>{contact.name}</Text>
              <Text>{contact.id}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  container: {},
  contactList: {
    backgroundColor: '#99c5ff',
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60/2
  },
  name: {
    fontSize: 17,
    color: '#000',
    fontWeight: '800'
  }
});
