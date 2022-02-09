import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'react-native';
import profilePic from '../../assets/images/user.png';
import CustomButton from '../../CustomButton/CutomButton';
import { TextInput } from 'react-native-gesture-handler';
import { useForm, Controller } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

export default function MyProfileScreen({ navigation }) {

    const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    const onSaveChangesPressed = () => {
        Alert.alert("Profile", "Saved Changes");
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
                    name="useremail"
                    rules={{
                        required: 'Email Address is required',
                        pattern: { value: EMAIL_REGEX, message: 'Invalid Email' },
                    }
                    }
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.input, { borderColor: error ? 'red' : '#e8e8e8' }]}
                                value={value}
                                defaultValue='info@gmail.com'
                                onChangeText={onChange}
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
                    name="userphone"
                    rules={{
                        required: 'Phone Number is required',
                        maxLength: { value: 8, message: 'Phone Number should be 8 digits ' },
                        minLength: { value: 8, message: 'Phone Number should be 8 digits ' }
                    }
                    }
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.input, { borderColor: error ? 'red' : '#e8e8e8' }]}
                                value={value}
                                defaultValue='39282000'
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholder="Phone Number"
                                keyboardType='numeric'
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
                    name="useraddress"
                    rules={{
                        required: 'Address is required'
                    }
                    }
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.input, { borderColor: error ? 'red' : '#e8e8e8' }]}
                                value={value}
                                defaultValue='3 King Ling Road, Tseung Kwan O'
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholder="Address"
                            />
                            {error && (
                                <Text style={{ color: 'red' }}>
                                    {error.message || 'Error'}
                                </Text>)}
                        </>
                    )}
                />

                <Ripple
                    onPress={onChangePasswordPressed}
                    style={styles.changePWD}>
                    <Text style={styles.changePWDtxt}>Change Password</Text>
                </Ripple>

                <CustomButton text="Save" onPress={handleSubmit(onSaveChangesPressed)} />

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
    changePWD:{
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