import React, {useState} from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import profilePic from '../../assets/images/user.png';
import { TextInput } from 'react-native-gesture-handler';

export default function MyProfileScreen({ navigation }) {




    const onChangePasswordPressed = () => {
        navigation.navigate('Change Password');
    }

    const [UserName, setUserName] = useState('');

    const [newUserName, setNewUserName] = useState('');
   
    const [newPhone, setNewPhone] = useState('');

    const [phone, setPhone] = useState('');

    const [UserEmail, setUserEmail] = useState('');

    const [disabled, setDisabled] = useState(false);



    fetch('http://3.217.241.125/FYP_api/getAccountDetail.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        })
    })
        .then((response) => response.json())
        .then((res) => {

            if (res.message == 'success') {
                if(res.userphone == null){
                    setPhone('Phone Number')
                    setUserName(res.username);
                    setUserEmail(res.useremail)
                }else{
                setPhone(res.userphone);
                setUserName(res.username);
                setUserEmail(res.useremail)
                }
            }

        })
        .catch((error) => {
            console.log("error fetching data")
            console.log(error)
            console.log(error.message) // Server can't be reached!
            Alert.alert(
                'Alert',
                "Connection Error",
                [
                    { text: 'OK', onPress: () => navigation.navigate('Account') },
                ],
                { cancelable: false },
            );
        });

    const onSaveChangesPressed = () => {
        setDisabled(true);

        fetch('http://3.217.241.125/FYP_api/updateProfile.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                newUserName: newUserName,
                newPhone: newPhone
            })
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.message == "success") {
                    Alert.alert(
                        'Alert',
                        'Profile Update Successful',
                        [
                            { text: 'OK', onPress: () => { setDisabled(false) } },
                        ],
                        { cancelable: false },
                    );
                } else {
                    Alert.alert(
                        'Alert',
                        res.message,
                        [
                            { text: 'OK', onPress: () => setDisabled(false) },
                        ],
                        { cancelable: false },
                    );
                }
            })
            .catch((error) => {
                console.log("error fetching data")
                console.log(error)
                console.log(error.message) // Server can't be reached!
                Alert.alert(
                    'Alert',
                    "Connection Error",
                    [
                        { text: 'OK', onPress: () => setDisabled(false) },
                    ],
                    { cancelable: false },
                );
            });
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 30, }}>
                <Image source={profilePic} style={styles.icon} resizeMode='cover'></Image>
                <Text style={styles.username}>{UserEmail}</Text>

                <TextInput
                    style={styles.input}
                    value={newUserName}
                    onChangeText={text => setNewUserName(text)}
                    placeholder={UserName}
                />

                <TextInput
                    style={styles.input}
                    value={newPhone}
                    onChangeText={text => setNewPhone(text)}
                    placeholder={phone}
                    keyboardType={"number-pad"}
                />

                <TouchableOpacity
                    onPress={onChangePasswordPressed}
                    style={styles.changePWD}>
                    <Text style={styles.changePWDtxt}>Change Password</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    disabled={disabled}
                    onPress={onSaveChangesPressed}
                    style={styles.container}>
                    <Text style={styles.text}>Save Changes</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
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
    },
    container: {
        backgroundColor: 'seagreen',
        width: '80%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },

});
