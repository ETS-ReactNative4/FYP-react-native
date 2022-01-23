import * as React from 'react';
import { Controller } from 'react-hook-form';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function CustomInput({ control, name, placeholder, secureTextEntry }) {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange, onBlur } }) => (
                    <TextInput
                        placeholder={placeholder}
                        style={styles.input}
                        onChangeText={setValue}
                        secureTextEntry={secureTextEntry}
                    />
                )}
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