import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import * as Contacts from 'expo-contacts';

const ContactsList = (props: any) => {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    async function loadContacts() {
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Birthday],
        });

        const today = new Date();
        const results: any[] = [];

        data.map((contact: any) => {
          if (contact.birthday
            && contact.birthday.month === today.getMonth()
            && contact.birthday.day === today.getDate()) {
              results.push(contact);
            }
        });

        setContacts(results);
      }
    }

    loadContacts();
  }, []);

  const renderItem = (item: any) => {
    return (
      <View style={styles.listItem}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={contacts}
          keyExtractor={item => item.lookupKey}
          renderItem={({item}) => renderItem(item)}
          ListEmptyComponent={() => (
            <View style={styles.noResults}>
              <Text>No birthdays today!</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
  },
  noResults: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
});

export default ContactsList;
