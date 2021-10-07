import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const ContactsList = (props: any) => {
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
          data={props.results}
          keyExtractor={item => item.id}
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
