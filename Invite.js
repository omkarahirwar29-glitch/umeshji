import React from 'react';
import { View, Text, Button, Share } from 'react-native';

const InviteScreen = () => {
  const onInvite = async () => {
    try {
      await Share.share({ message: 'Hey! Join my awesome app using this link: https://myapp.com' });
    } catch (error) { console.log(error.message); }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Doston ko Invite Karein 🤝</Text>
      <Button title="Invite Friends" onPress={onInvite} />
    </View>
  );
};

export default InviteScreen;
