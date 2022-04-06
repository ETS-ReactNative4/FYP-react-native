import * as React from 'react';

import { StatusBar, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import AIScreen from './screens/AIScreen';

import TrackerScreen from './screens/TrackerScreen';

import AccountScreen from './screens/AccountScreen';
import SignupScreen from './screens/SignupScreen';
import UserScreen from './screens/UserScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import RedeemedRewardScreen from './screens/RedeemedRewardScreen.js';

import RecyclemallScreen from './screens/RecyclemallScreen';
import RewardScreen from './screens/RewardScreen';
import CouponScreen from './screens/CouponScreen';
//Screen names
const homeName = "Home";
const AIName = "AI Identify";
const accountName = "Account";
const recycelmallName = "Recycle Mall";
const trackerName = "Tracker";

const Tab = createBottomTabNavigator();

GLOBAL = require('../globalVar/global');


function MainContainer() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="seagreen" />
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: 'seagreen' },
          headerTintColor: "white",
          "tabBarHideOnKeyboard": "true",
          "tabBarActiveTintColor": "seagreen",
          "tabBarInactiveTintColor": "grey",
          "tabBarLabelStyle": {
            "paddingBottom": 10,
            "fontSize": 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {

              iconName = focused ? 'compass' : 'compass-outline';

            } else if (rn === AIName) {

              iconName = focused ? 'camera' : 'camera-outline';

            } else if (rn === recycelmallName) {

              iconName = focused ? 'gift' : 'gift-outline';

            } else if (rn === accountName) {

              iconName = focused ? 'person' : 'person-outline';

            } else if (rn === trackerName) {

              iconName = focused ? 'bar-chart' : 'bar-chart-outline';

            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={AIName} component={AIScreen} />
        <Tab.Screen
          options={{
            headerShown: false
          }}
          name={recycelmallName} component={RecycleMall} />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name={trackerName} component={Tracker} />
        <Tab.Screen
          options={{
            headerShown: false
          }}
          name={accountName}
          component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function Account() {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'seagreen' },
          headerTintColor: "white",
          headerShown: true
        }}>
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen options={{ headerShown: false }} name="User" component={UserScreen} />
        <Stack.Screen name="Change Password" component={ChangePasswordScreen} />
        <Stack.Screen name="Profile" component={MyProfileScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Avaliable Reward" component={RedeemedRewardScreen} />
        <Stack.Screen name="Redeemed Reward" component={CouponScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function RecycleMall({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      
      if (GLOBAL.isLoggedIn == false){
        Alert.alert(
          'Alert',
          "Please Login",
          [
              { text: 'OK', onPress: () => navigation.navigate('Account', { screen: 'Account' }) },
          ],
          { cancelable: false },
      );
        }
      // The screen is focused
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'seagreen' },
          headerTintColor: "white",
          headerShown: true
        }}>
        <Stack.Screen name="Recycle Mall" component={RecyclemallScreen} />
        <Stack.Screen name="Reward" component={RewardScreen} />
        <Stack.Screen name="Redeemed Reward" component={CouponScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function Tracker({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      
      if (GLOBAL.isLoggedIn == false){
        Alert.alert(
          'Alert',
          "Please Login",
          [
              { text: 'OK', onPress: () => navigation.navigate('Account', { screen: 'Account' }) },
          ],
          { cancelable: false },
      );
        }
      // The screen is focused
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'seagreen' },
          headerTintColor: "white",
          headerShown: true
        }}>
        <Stack.Screen name="Tracker" component={TrackerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default MainContainer;

