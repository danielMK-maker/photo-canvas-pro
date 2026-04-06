import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdMobInterstitial } from 'expo-ads-admob';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return(
    <></>
  );
};

const App = () => {
  React.useEffect(() => {
    const loadAd = async () => {
      await AdMobInterstitial.setAdUnitID('your-admob-unit-id'); // Replace with your AdMob unit ID
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
    };
    loadAd();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;