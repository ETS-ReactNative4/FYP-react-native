import * as React from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';

export default function CustomInput({value, setValue, placeholder}){
    return(
        <View style={styles.container}>
                <TextInput
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={setValue}
                />
        </View>
  );    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        padding: 10,
        marginVertical: 5,
    },
    input: {},
})