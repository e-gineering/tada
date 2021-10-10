import React from "react";
import ContactsList from "../components/contacts-list";
import { Contact } from "expo-contacts";
import { View, Text } from "react-native";

export function Birthdays() {
  return (
    <View>
      <ContactsList onSendBirthdayMessage={sendBirthdayMessage} />
    </View>
  );
}

function sendBirthdayMessage(contact: Contact, message: string) {
  // TODO: Issue #8 - Send a SMS message
  console.log(`Send birthday message: ${message}`);
}
