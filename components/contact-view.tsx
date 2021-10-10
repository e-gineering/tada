import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Contact } from "expo-contacts";
import { BirthdayMessage } from "./birthday-message";

type ContactViewProps = {
  contact: Contact;
  onSendContactBirthdayMessage: (contact: Contact, message: string) => void;
};

export function ContactView({
  contact,
  onSendContactBirthdayMessage,
}: ContactViewProps) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.contactName}>{contact.name}</Text>
      <BirthdayMessage
        contact={contact}
        onSend={onSendContactBirthdayMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
  },
  contactName: {
    fontSize: 18,
    paddingBottom: 4,
  },
});
