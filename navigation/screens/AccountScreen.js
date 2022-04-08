import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Logo from '../../assets/images/logo.png';
import CustomButton from '../../CustomButton/CutomButton';
import SignupScreen from './SignupScreen';
import UserScreen from './UserScreen';
import { TextInput } from 'react-native-gesture-handler';
import { useForm, Controller } from 'react-hook-form';
import { isLoggedIn } from '../../globalVar/global';



export default function AccountScreen({ navigation }) {

    GLOBAL = require('../../globalVar/global')

    const [UserEmail, setUserEmail] = useState('');

    const [UserPassword, setUserPassword] = useState('');

    const [disabled, setDisabled] = useState(false);

    const onSignInPressed = (data) => {


        setDisabled(true);

        fetch('http://3.217.241.125/FYP_api/login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                usernemail: UserEmail,
                userpassword: UserPassword
            })
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.message == "success") {

                    GLOBAL.isLoggedIn = true;               

                    Alert.alert(
                        'Alert',
                        'Login Successful',
                        [
                            { text: 'OK', onPress: () => {setDisabled(false), navigation.navigate('User'); }},
                        ],
                        { cancelable: false },
                    );                  
                } else {
                    Alert.alert(
                        'Alert',
                        res.message,
                        [
                            { text: 'OK', onPress: () => setDisabled(false) },
                        ],
                        { cancelable: false },
                    );
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
                        { text: 'OK', onPress: () => setDisabled(false) },
                    ],
                    { cancelable: false },
                );
            });
    }

    const onCreateAccountPressed = () => {
        navigation.navigate('Signup')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
                <Image source={Logo} style={styles.logo} resizeMode='contain'></Image>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#82c844', paddingBottom: 5 }}>
                    E-Recycle
                </Text>

                            <TextInput
                                style={styles.input}
                                value={UserEmail}
                                onChangeText={text => setUserEmail(text)}
                                placeholder="Email Address"
                            />

                            <TextInput
                                style={styles.input}
                                value={UserPassword}
                                onChangeText={text => setUserPassword(text)}
                                placeholder="Password"
                                secureTextEntry={true}
                            />

                <TouchableOpacity
                    disabled={disabled}
                    onPress={onSignInPressed}
                    style={styles.container}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <Pressable
                    onPress={onCreateAccountPressed}
                    disabled={false}
                >
                    <Text style={{
                        color: 'grey',
                        marginVertical: 5,
                    }}>Don't have an Account? Create One</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 200,
        marginBottom: 5
    },
    input: {
        backgroundColor: 'white',
        width: '80%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        padding: 10,
        marginVertical: 5,
    },
    container: {
        backgroundColor: 'seagreen',
        width: '80%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,

    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },

});