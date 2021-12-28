import * as React from 'react';
import {useState} from "react";
import {View, Text, Image, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native';
import CustomInput from '../../CustomInput';
import CustomButton from '../../CustomButton/CutomButton';


export default function SignupScreen({navigation}){

    const [userEmail, setUserEmail] = useState('');

    const [userPassword, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onHaveAnAcount = () => {
        navigation.navigate('AccountScreen')
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
            <Text style={styles.title}>Create an Account</Text>

            <CustomInput 
                placeholder="Email Address" 
                value={userEmail} 
                setValue={setUserEmail}
            />

            <CustomInput 
                placeholder="Email Address"
                value={userEmail} 
                setValue={setUserEmail}
            />

            <TextInput
                secureTextEntry={true}
                placeholder="Password" 
                style={styles.password}                 
            />

            <CustomButton text="Sign In" onPress={onSignInPressed}/>

            <Pressable
            onPress = {onHaveAnAcount}>
            <Text style={{color: 'grey',marginVertical: 5,}}>
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
        color: 'darkslategray',
        margin: 10,

    },
    password:{
        backgroundColor: 'white',
        width: '80%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        padding: 10,
        marginVertical: 5,
    }

});