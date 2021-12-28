import * as React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import AIScreen from './screens/AIScreen';
import AccountScreen from './screens/AccountScreen';
import RecyclemallScreen from './screens/RecyclemallScreen';
import TrackerScreen from './screens/TrackerScreen';
import SignupScreen from './screens/SignupScreen';


//Screen names
const homeName = "Home";
const AIName = "AI Identify";
const accountName = "Account";
const recycelmallName = "Recycle Mall";
const trackerName = "Tracker";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          "tabBarHideOnKeyboard":"true",
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
        <Tab.Screen name={recycelmallName} component={RecyclemallScreen} />
        <Tab.Screen name={trackerName} component={TrackerScreen}  />
        <Tab.Screen name={accountName} component={Account} />
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
        headerShown: false
       }}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
    </NavigationContainer>

  )}


export default MainContainer;
