import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import profilePic from '../../assets/images/user.png';
import CustomButton from '../../CustomButton/CutomButton';
import { TextInput } from 'react-native-gesture-handler';
import { useForm, Controller } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ChangePasswordScreen({ navigation }) {

    


    const [oldPassword, setOldPassword] = useState('');

    const [newPassword, setNewPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [disabled, setDisabled] = useState(false);

    const onSavePressed = () => {
        setDisabled(true);

        fetch('http://3.217.241.125/FYP_api/updatePassword.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                oldPassword: oldPassword,
                newPassword: newPassword,
                confirmPassword: confirmPassword
            })
        })
            .then((response) => response.json())
            .then((res) => {
                    Alert.alert(
                        'Alert',
                        res.message,
                        [
                            { text: 'OK', onPress: () => setDisabled(false) },
                        ],
                        { cancelable: false },
                    );                
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
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 30, }}>
                <Image source={profilePic} style={styles.icon} resizeMode='cover'></Image>
                <Text style={styles.username}>Username</Text>

                <TextInput
                    style={styles.input}
                    value={oldPassword}
                    onChangeText={text => setOldPassword(text)}
                    placeholder="Old Password"
                    secureTextEntry={true}
                />

                <TextInput
                    style={styles.input}
                    value={newPassword}
                    onChangeText={text => setNewPassword(text)}
                    placeholder="Old Password"
                    secureTextEntry={true}
                />

                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    placeholder="Confrim Password"
                    secureTextEntry={true}
                />




                <TouchableOpacity
                    disabled={disabled}
                    onPress={onSavePressed}
                    style={styles.container}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#82c844',
        margin: 10,
        flexDirection: 'row',
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
    icon: {
        width: 125,
        height: 125,
        borderRadius: 150 / 2,
        overflow: "hidden",
    },
    username: {
        margin: 10,
        fontSize: 25,
        color: 'black',
    },
    changePWD: {
        backgroundColor: 'white',
        width: '80%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    changePWDtxt: {
        fontWeight: 'bold',
        color: 'seagreen',
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