import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import ContactsList from './components/contacts-list';

export default function App() {
  const results: any = [
    { id: '1', name: 'Marty' },
    { id: '2', name: 'Doc' },
    { id: '3', name: 'Biff' },
    { id: '4', name: 'Jennifer' },
    { id: '5', name: 'George' },
    { id: '6', name: 'Lorraine' }
  ];

  return (
    <View>
      <ContactsList results={results} />
      <StatusBar backgroundColor="#448aff" barStyle="light-content" />
    </View>
  );
}
