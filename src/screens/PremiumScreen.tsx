import React from 'react';
import { View, Text, Button } from 'react-native';

const PremiumScreen = () => {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Premium Subscription</Text>
            <Text style={{ marginVertical: 20 }}>Unlock exclusive features with our premium subscription plan!</Text>

            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Pricing Options:</Text>
            <Text>1. Monthly Plan: $9.99/month</Text>
            <Text>2. Annual Plan: $99.99/year (Save 20%)</Text>

            <Text style={{ marginVertical: 10, fontSize: 18, fontWeight: 'bold' }}>Features:</Text>
            <Text>- Unlimited photo storage</Text>
            <Text>- Access to premium filters and tools</Text>
            <Text>- Priority customer support</Text>
            <Text>- Early access to new features</Text>

            <Button title="Subscribe Now" onPress={() => alert('Subscription process started!')} />
        </View>
    );
};

export default PremiumScreen;