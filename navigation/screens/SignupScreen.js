import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import CustomInput from '../../CustomInput';
import CustomButton from '../../CustomButton/CutomButton';
import { useForm, Controller } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SignupScreen({ navigation }) {

    const [UserName, setUserName] = useState(''); 

    const [UserEmail, setUserEmail] = useState(''); 

    const [UserPassword, setUserPassword] = useState(''); 
    

    const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    const onSignUpPressed = () => {
        Alert.alert("Account", UserName);
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
                        required: 'Username is required',
                        minLength: { value: 3, message: 'Username should be longer than 3 characters' },
                        maxLength: { value: 24, message: 'Username should be shorter than 24 characters' }
                    }
                    }
                    render={({ field: { onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.input, { borderColor: error ? 'red' : '#e8e8e8' }]}
                                value={UserName}
                                onChangeText={text => setUserName(text)}
                                onBlur={onBlur}
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
                    name="useremail"
                    rules={{
                        required: 'Email Address is required',
                        pattern: { value: EMAIL_REGEX, message: 'Invalid Email' },
                    }
                    }
                    render={({ field: { onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.input, { borderColor: error ? 'red' : '#e8e8e8' }]}
                                value={UserEmail}
                                onChangeText={text => setUserEmail(text)}
                                onBlur={onBlur}
                                placeholder="Email address"
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
                    rules={{
                        required: 'Password is required',
                        minLength: { value: 8, message: 'Password should be longer than 8 characters' },
                        maxLength: { value: 24, message: 'Password should be shorter than 24 characters' }
                    }
                    }
                    render={({ field: { onBlur }, fieldState: { error } }) => (
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
                    )}
                />

                <Controller
                    control={control}
                    name="userconfirmpassword"
                    rules={{
                        validate: value => 
                            value === pwd  || 'Password do not match',
                        }
                    }
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.input, { borderColor: error ? 'red' : '#e8e8e8' }]}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholder="Confirm Password"
                                secureTextEntry={true}
                            />
                            {error && (
                                <Text style={{ color: 'red' }}>
                                    {error.message || 'Error'}
                                </Text>)}
                        </>
                    )}
                />
                <CustomButton text="Register" onPress={handleSubmit(onSignUpPressed)} />

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
    }

});