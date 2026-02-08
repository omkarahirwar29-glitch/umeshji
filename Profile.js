import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>User Profile 👤</Text>
      <Text style={{ marginVertical: 10 }}>Email: user@example.com</Text>
      <Button 
        title="Logout" 
        color="red" 
        onPress={() => alert('Logged Out!')} 
      />
    </View>
  );
};

export default ProfileScreen;
