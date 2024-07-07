import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { successDialog, failureDialog } from '../Helper/Utils';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Live Input !!!"
    }
  }
  render() {
    return (
      <View >
        <Text style={styles.title}>{this.state.data}</Text>
      </View>
    )
  }
}

const LoginView = () => {
  const navigation = useNavigation();
  const [showProgress, setShowProgress] = useState(false);
  const [hideLoginButton, sethideLoginButton] = useState(false);
  const [email, setEmail] = useState('maaz.arfi');
  const [password, setPassword] = useState('1234');
  const staticEmail = "maaz.arfi";
  const staticPassword = "1234";

  const navigateToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Profile',
            params: {
              name: "MaazArfi",
              bio: "I am a professional Android Developer and a software architect.",
              email: staticEmail,
              phone: "+918X3186XXXX"
            }
          },
        ],
      })
    );
  };

  const showProgressFunc = () => {
    setShowProgress(true);
    setTimeout(() => {
      setShowProgress(false);
      navigateToHome();
    }, 3000)
  }

  const handleLogin = () => {
    if (email === '' && password === '') {
      failureDialog('Important', 'Enter login credentials', false);
      return;
    } else if (email === '') {
      failureDialog('Important', 'Enter your email', false);
      return;
    } else if (password === '') {
      failureDialog('Important', 'Enter your password', false);
      return;
    } else {
      if (email === staticEmail && password === staticPassword) {
        //successDialog('Login Success', 'Your login was successful');
        sethideLoginButton(true);
        showProgressFunc();
      } else {
        failureDialog('Error', 'Invalid credentials', false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        color='back'
        placeholder="Password"
        placeholderTextColor="#aaa"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCapitalize="none"
      />

      {hideLoginButton ? null : <TouchableOpacity style={styles.button} onPress={handleLogin} hid>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>}
      <ActivityIndicator color={'green'} animating={showProgress} />
      <Text style={styles.footerText}>Don't have an account? Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderRadius: 25,
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 1,
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
    color: '#fff',
    fontSize: 18,
  },
  footerText: {
    color: '#aaa',
    marginTop: 20,
  },
});

export { LoginView };
