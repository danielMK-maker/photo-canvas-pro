import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImagePicker from 'react-native-image-picker';
import { AdMobBanner } from 'expo-ads-admob';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const openImagePicker = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };  

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };  
        // Use the selected image
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Photo Canvas</Text>
      <Button title="Select Photo" onPress={openImagePicker} />
      <View style={styles.featureGrid}>
        {["Filters", "Draw", "Crop", "Text", "Stickers", "Effects"].map(feature => (
          <View style={styles.featureItem} key={feature}>
            <Text>{feature}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.premiumBanner}>Premium Promotion Banner</Text>
      <AdMobBanner
        bannerAdUnitId="ca-app-pub-xxxxxxxxxxxxxxxx/xxxxxxxxxx"
        servePersonalizedAds
        onAdFailedToLoad={error => console.log(error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 16,
    borderRadius: 10,
    // Add gradient background if necessary
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 20,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  featureItem: {
    width: '30%',
    backgroundColor: '#1e1e1e',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  premiumBanner: {
    color: '#FFD700',
    marginVertical: 20,
    fontSize: 18,
  },
});

export default HomeScreen;