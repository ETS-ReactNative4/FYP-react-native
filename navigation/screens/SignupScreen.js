import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Logo from '../../assets/images/logo.png';
import CustomButton from '../../CustomButton/CutomButton';
import UserScreen from './UserScreen';
import { TextInput } from 'react-native-gesture-handler';
import Ripple from 'react-native-material-ripple';
import { useForm, Controller } from 'react-hook-form';




export default function SignupScreen({ navigation }) {


    const [UserName, setUserName] = useState('');

    const [UserPassword, setUserPassword] = useState('');

    const [confirmUserPassword, setConfirmUserPassword] = useState('');

    const [disabled, setDisabled] = useState(false);


    const onSignUpPressed = () => {

        setDisabled(true);

        fetch('http://3.217.241.125/FYP_api/signup.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                username: UserName,
                userpassword: UserPassword,
                confirmpassword: confirmUserPassword
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

    const onHaveAnAcount = () => {
        navigation.navigate('Account')
    }

    const { control, handleSubmit, watch, formState: { errors } } = useForm();

    const pwd = watch('userpassword');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 30, }}>
                <Text style={styles.title}>Create an Account</Text>




                <Controller
                    control={control}
                    name="username"
                    rules={{
                        minLength: { value: 3, message: 'Username should be longer than 3 characters' }
                    }}
                    render={({ field: { value, }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.input, { borderColor: error ? 'red' : '#e8e8e8' }]}
                                value={value}
                                onChangeText={text => setUserName(text)}
                                placeholder="Username"
                            />
                            {error && (
                                <Text style={{ color: 'red' }}>
                                    {error.message || 'Error'}
                                </Text>)}
                        </>
                    )}
                />


                <Controller
                    control={control}
                    name="userpassword"
                    rules={{}}
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.input, { borderColor: error ? 'red' : '#e8e8e8' }]}
                                value={UserPassword}
                                onChangeText={text => setUserPassword(text)}
                                onBlur={onBlur}
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                            {error && (
                                <Text style={{ color: 'red' }}>
                                    {error.message || 'Error'}
                                </Text>)}
                        </>
                    )
                    }
                />

                <Controller
                    control={control}
                    name="confirmuserpassword"
                    rules={{}}
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.input, { borderColor: error ? 'red' : '#e8e8e8' }]}
                                value={confirmUserPassword}
                                onChangeText={text => setConfirmUserPassword(text)}
                                onBlur={onBlur}
                                placeholder="Confirm Password"
                                secureTextEntry={true}
                                touchableInactive={false}
                            />
                            {error && (
                                <Text style={{ color: 'red' }}>
                                    {error.message || 'Error'}
                                </Text>)}
                        </>
                    )
                    }
                />

                <TouchableOpacity
                    disabled={disabled}
                    onPress={onSignUpPressed}
                    style={styles.container}>
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>

                <Pressable
                    onPress={onHaveAnAcount}>
                    <Text style={{ color: 'grey', marginVertical: 5, }}>
                        Already have an Account? Sign In</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
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