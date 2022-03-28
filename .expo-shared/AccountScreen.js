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

    const [disabled, setDisabled] = useState(false);

    const onSignInPressed = (data) => {

       // navigation.navigate('User')

        fetch('http://119.236.195.94/FYP_api/login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                username: UserName,
                userpassword: UserPassword
            })
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.message == "success"){
                    navigation.navigate('User');
                }else{
                    alert(res.message);
                }   
            })
            .catch((error) => {
                console.log("error fetching data")
                console.log(error)
                console.log(error.message) // Server can't be reached!
                alert("Connection Error");
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
                                value = {value}
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
                    rules={{ }}
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
    }

});