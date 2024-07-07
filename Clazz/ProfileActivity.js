import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileView = ({ route }) => {
  const [data, setData] = useState(undefined);
  const navigation = useNavigation();
  
  const API = async () => {
    const QParams = "source";
    const URL = `https://msftechsolutions.co.in/endpoints/public/APIs/react-native/libengine?${QParams}`;
    const URL2 = `https://jsonplaceholder.typicode.com/posts`;
    let resp = await fetch(URL2);
    resp = await resp.json();
    setData(resp);
  };

  useEffect(() => {
    API();
  }, []);

  const { name, bio, email, phone } = route.params;

  const handleLoginPress = () => {
    if (data) {
      navigation.navigate('API', { data });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png' }}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>About Me</Text>
        <Text style={styles.infoText}>{bio}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Contact Information</Text>
        <Text style={styles.infoText}>Email: {email}</Text>
        <Text style={styles.infoText}>Phone: {phone}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Read Posts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export { ProfileView };