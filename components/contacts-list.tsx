import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import * as Contacts from "expo-contacts";
import { ContactView } from "./contact-view";
import { Contact } from "expo-contacts";

type ContactsListProps = {
  onSendBirthdayMessage: (contact: Contact, message: string) => void;
};

const ContactsList = ({ onSendBirthdayMessage }: ContactsListProps) => {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    async function loadContacts() {
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Birthday],
        });

        const today = new Date();
        const results: any[] = [];

        data.map((contact: any) => {
          if (
            contact.birthday &&
            contact.birthday.month === today.getMonth() &&
            contact.birthday.day === today.getDate()
          ) {
            results.push(contact);
          }
        });

        setContacts(results);
      }
    }

    loadContacts();
  }, []);

  const renderItem = (item: Contact) => {
    return (
      <ContactView
        contact={item}
        onSendContactBirthdayMessage={onSendBirthdayMessage}
      />
    );
  };

  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem(item)}
          ListEmptyComponent={() => (
            <View style={styles.noResults}>
              <Text>No birthdays today!</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  noResults: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default ContactsList;
