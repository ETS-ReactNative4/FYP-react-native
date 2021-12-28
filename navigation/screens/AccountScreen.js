import * as React from 'react';
import {useState} from "react";
import {View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import Logo from '../../assets/images/logo.png';
import CustomInput from '../../CustomInput';
import CustomButton from '../../CustomButton/CutomButton';
import SignupScreen from './SignupScreen';
import { TextInput } from 'react-native-gesture-handler';


export default function AccountScreen({navigation}){

    const [userEmail, setUserEmail] = useState('');

    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onCreateAccountPressed = () => {
        navigation.navigate('SignupScreen')
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
            <Image source={Logo} style={styles.logo} resizeMode='contain'></Image>
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
            onPress = {onCreateAccountPressed}>
            <Text style={{color: 'grey',
        marginVertical: 5,}}>Don't have an Account? Create One</Text>   
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