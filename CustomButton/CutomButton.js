import * as React from 'react';
import {View, Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButton({onPress, text}){

    return(
        <Pressable 
            onPress={onPress} 
            style={styles.container}>
            <Text style={styles.text}>{text}</Text>   
        </Pressable>
  );    
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'seagreen',
        width: '80%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,

    },

    container_PRIMARY:{
        backgroundColor: 'seagreen',
    },
    
    container_TERTIARY:{},

    text:{
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY:{
        color: 'grey',
    }
});