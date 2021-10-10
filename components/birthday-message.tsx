import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { Contact } from "expo-contacts";

type BirthdayMessageProps = {
  contact: Contact;
  onSend: (contact: Contact, message: string) => void;
};

export function BirthdayMessage({ contact, onSend }: BirthdayMessageProps) {
  const [message, setMessage] = useState(`Happy Birthday ${contact.name}!`);

  return (
    <View style={styles.birthdayMessageContainer}>
      <TextInput
        style={styles.birthdayInput}
        editable
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />
      <Button title={"Send Msg"} onPress={() => onSend(contact, message)} />
    </View>
  );
}

const styles = StyleSheet.create({
  birthdayMessageContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  birthdayInput: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#8f8888",
  },
});
