import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const APIDataView = ({ route }) => {
  const { data } = route.params;
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{item.title ? item.title : 'No Title'}</Title>
          <Paragraph>{item.body ? item.body : 'No Body Content'}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    marginVertical: 10,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default APIDataView;