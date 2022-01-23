import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'react-native';
import profilePic from '../../assets/images/user.png';
import CustomButton from '../../CustomButton/CutomButton';
import { TextInput } from 'react-native-gesture-handler';
import { useForm, Controller } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ChangePasswordScreen({ navigation }) {

    const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    const onSavePressed = () => {
        Alert.alert("Profile", "Updated Passowrd");
    }

    const onChangePasswordPressed = () => {
        navigation.navigate('Change Password');
    }

    const { control, handleSubmit, watch, formState: { errors } } = useForm();

    const pwd = watch('userpassword');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 30, }}>
                <Image source={profilePic} style={styles.icon} resizeMode='cover'></Image>
                <Text style={styles.username}>Username</Text>

                <Controller
                    control={control}
                    name="useroldpassword"
                    rules={{
                        required: 'Password is required',
                        minLength: { value: 8, message: 'Password should be longer than 8 characters' },
                        maxLength: { value: 24, message: 'Password should be shorter than 24 characters' }
                    }
                    }
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.input, { borderColor: error ? 'red' : '#e8e8e8' }]}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholder="Old Password"
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
                    name="userpassword"
                    rules={{
                        required: 'Password is required',
                        minLength: { value: 8, message: 'Password should be longer than 8 characters' },
                        maxLength: { value: 24, message: 'Password should be shorter than 24 characters' }
                    }
                    }
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.input, { borderColor: error ? 'red' : '#e8e8e8' }]}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholder="New Password"
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
                            value === pwd || 'Password do not match',
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



                <CustomButton text="Save" onPress={handleSubmit(onSavePressed)} />

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
    }

});