import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import Logo from '../../assets/images/logo.png';
import CustomButton from '../../CustomButton/CutomButton';
import SignupScreen from './SignupScreen';
import UserScreen from './UserScreen';
import { TextInput } from 'react-native-gesture-handler';
import { useForm, Controller } from 'react-hook-form';



export default function AccountScreen({ navigation }) {

    const [UserName, setUserName] = useState('');


    const [UserPassword, setUserPassword] = useState('');

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSignInPressed = (data) => {
        fetch('',{

        })
        .then((response) => response.json())
        .then((response) => {
            alert(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });

        navigation.navigate('User')
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

                <Controller
                    control={control}
                    name="username"
                    rules={{
                        required: 'Username is required',
                        minLength: { value: 3, message: 'Username should be longer than 3 characters' }
                    }}
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
                    name="userpassword"
                    rules={{ required: 'Password is required' }}
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

                <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

                <Pressable
                    onPress={onCreateAccountPressed}>
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
    }

});