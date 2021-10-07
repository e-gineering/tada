import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import ContactsList from './components/contacts-list';

export default function App() {
  return (
    <View>
      <ContactsList />
      <StatusBar backgroundColor="#448aff" barStyle="light-content" />
    </View>
  );
}
