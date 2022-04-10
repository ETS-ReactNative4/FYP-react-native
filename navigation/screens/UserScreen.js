import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, Alert, ScrollView, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import profilePic from '../../assets/images/user.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyProfileScreen from './MyProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Ripple from 'react-native-material-ripple';
import BackGroundPattern from '../../assets/images/BackGrounfPattern.jpg'

export default function UserScreen({ navigation }) {

    GLOBAL = require('../../globalVar/global');

    const [UserCredit, setUserCredit] = useState('0');

    const [UserName, setUserName] = useState('');

    const [disabled, setDisabled] = useState(false);

    const getAccountInfo = () => {
        fetch('http://3.217.241.125/FYP_api/getAccountDetail.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
            })
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.message == 'success') {
                    setUserCredit(res.usercredit);
                    setUserName(res.username);
                }

            })
            .catch((error) => {
                console.log("error fetching data")
                console.log(error)
                console.log(error.message) // Server can't be reached!
                Alert.alert(
                    'Alert',
                    "Connection Error",
                    [
                        { text: 'OK', onPress: () => navigation.navigate('Account') },
                    ],
                    { cancelable: false },
                );
            });
    }

    getAccountInfo();

    const onRefreshPressed = () => {
        getAccountInfo();
    }

    const logOutPresssed = () => {

        GLOBAL.isLoggedIn = false;
        navigation.navigate('Account');

    }

    const onMyProfilePressed = () => {
        navigation.navigate('Profile');
    }

    const onRedeemedRwardPressed = () => {
        navigation.navigate('Avaliable Reward');
    }

    const onContactUsPressed = () => {
        Alert.alert("Contact Us", "Tel: 12345678 \n Email: erecycle@gmail.com");
    }

    const onTrackerPressed = () => {
        navigation.navigate('Tracker');
    }

    return (

        <View style={{
            flex: 1,
            backgroundColor: 'seagreen'
        }}>
            <StatusBar barStyle="dark-content" backgroundColor="seagreen" />
            <ImageBackground source={BackGroundPattern} style={{
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'center',
            }}>

                <View style={{
                    flex: 1.2,
                    alignItems: 'center',
                    paddingTop: 20,
                    justifyContent: 'center'
                }}>
                    <Image source={profilePic} style={styles.icon} resizeMode='cover'></Image>
                    <Text style={styles.username}>{UserName}</Text>

                    <View style={{
                        borderRadius: 15,
                        margin: 2,
                        backgroundColor: '#1d5837',
                        flexDirection: 'row'

                    }}>
                        <Text style={styles.recyclePoints}>{UserCredit} Recycle Points</Text>
                        <TouchableOpacity
                            disabled={disabled}
                            onPress={onRefreshPressed}
                            style={styles.refreshBtn}>
                            <Ionicons name="refresh" size={17} color="whitesmoke" />
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
            <View
                style={{
                    backgroundColor: '#F2F2F2',
                    flex: 1.2,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    height: '100%'

                }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{flex:1}}>

                    <TouchableOpacity
                        onPress={onMyProfilePressed}
                        style={styles.acFunctionBtn}>
                        <Ionicons name="person-outline" size={30} color="dimgrey" />
                        <Text style={styles.acFunctionTxt}>My Profile</Text>
                        <Ionicons name="chevron-forward-outline" size={20} color="dimgrey" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={onRedeemedRwardPressed}
                        style={styles.acFunctionBtn}>
                        <Ionicons name="gift-outline" size={30} color="dimgrey" />
                        <Text style={styles.acFunctionTxt}>Redeemed Rewards</Text>
                        <Ionicons name="chevron-forward-outline" size={20} color="dimgrey" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={onTrackerPressed}
                        style={styles.acFunctionBtn}>
                        <Ionicons name="bar-chart-outline" size={30} color="dimgrey" />
                        <Text style={styles.acFunctionTxt}>Tracker</Text>
                        <Ionicons name="chevron-forward-outline" size={20} color="dimgrey" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={onContactUsPressed}
                        style={styles.acFunctionBtn}>
                        <Ionicons name="call-outline" size={30} color="dimgrey" />
                        <Text style={styles.acFunctionTxt}>Contact Us</Text>
                        <Ionicons name="chevron-forward-outline" size={20} color="dimgrey" />
                    </TouchableOpacity>



                </ScrollView>

            </View>

            <View style={{
                paddingBottom: 5,
                alignItems: 'center',
                justifyContent: 'flex-end',
                flex: 0.8,
                backgroundColor: '#F2F2F2'
            }}>

                <TouchableOpacity
                    disabled={disabled}
                    onPress={logOutPresssed}
                    style={styles.container}>
                    <Ionicons name="log-out" size={17} color="whitesmoke" />
                    <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '95%',
        backgroundColor: 'seagreen',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: 'whitesmoke',
        marginLeft: 10
    },
    icon: {
        width: 90,
        height: 90,
        borderRadius: 150 / 2,
        overflow: "hidden"
    },
    username: {
        margin: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'whitesmoke',
    },
    acFunctionBtn: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15,
        width: '100%',
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    acFunctionTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'dimgrey',
        paddingLeft: 10,
    },
    recyclePoints: {
        fontSize: 15,
        padding: 6,
        color: 'white'
    },
    refreshBtn: {
        alignSelf: 'center',
        marginRight: 1
    }

})
