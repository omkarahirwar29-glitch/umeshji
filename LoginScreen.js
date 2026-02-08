import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { loginWithEmail, loginWithGoogle } from './AuthService';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async () => {
    const res = await loginWithEmail(email, password);
    if (!res.success) alert(res.error);
  };

  const handleGoogleLogin = async () => {
    const res = await loginWithGoogle();
    if (!res.success) alert(res.error);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        onChangeText={setEmail} 
      />
      <TextInput 
        placeholder="Password" 
        style={styles.input} 
        secureTextEntry 
        onChangeText={setPassword} 
      />
      
      <Button title="Login with Email" onPress={handleEmailLogin} />

      <View style={{ marginVertical: 10 }}>
        <Button title="Login with Google" color="#de4d41" onPress={handleGoogleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 }
});

export default LoginScreen;
