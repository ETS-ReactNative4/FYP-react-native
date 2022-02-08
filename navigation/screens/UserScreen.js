import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, ScrollView } from 'react-native';
import profilePic from '../../assets/images/user.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyProfileScreen from './MyProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Ripple from 'react-native-material-ripple';


export default function UserScreen({ navigation }) {

    const logOutPresssed = () => {
        navigation.navigate('Account');
    }

    const onMyProfilePressed = () => {
        navigation.navigate('Profile');
    }

    const onContactUsPressed = () => {
        Alert.alert("Contact Us", "Tel: 12345678 \n Email: erecycle@gmail.com");
    }

    return (

        <View style={{
            flex:1,
            backgroundColor:'seagreen'
            }}>
            <View style={{
                flex: 1.2,
                backgroundColor: 'seagreen',
                alignItems: 'center',
                paddingTop: 20,
                justifyContent: 'center'
            }}>
                <Image source={profilePic} style={styles.icon} resizeMode='cover'></Image>
                <Text style={styles.username}>Username</Text>

                <View style={{
                    borderRadius: 20,
                    margin: 2,
                    backgroundColor: '#F2F2F2',
                }}>
                    <Text style={styles.recyclePoints}>100 Recycle Points</Text>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    backgroundColor: '#F2F2F2',
                    flex: 0.5,
                   borderTopLeftRadius: 15,
                   borderTopRightRadius: 15,

                }}>

                <Ripple
                    onPress={onMyProfilePressed}
                    style={styles.acFunctionBtn}>
                    <Ionicons name="person-outline" size={30} color="dimgrey" />
                    <Text style={styles.acFunctionTxt}>My Profile</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="dimgrey" />
                </Ripple>

                <Ripple
                    //onPress={}
                    style={styles.acFunctionBtn}>
                    <Ionicons name="gift-outline" size={30} color="dimgrey" />
                    <Text style={styles.acFunctionTxt}>Redeemed Rewards</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="dimgrey" />
                </Ripple>

                <Ripple
                    onPress={onContactUsPressed}
                    style={styles.acFunctionBtn}>
                    <Ionicons name="call-outline" size={30} color="dimgrey" />
                    <Text style={styles.acFunctionTxt}>Contact Us</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="dimgrey" />
                </Ripple>

            </ScrollView>
            <View style={{ 
                paddingBottom: 5, 
                alignItems: 'center', 
                justifyContent: 'flex-end', 
                flex: 1,
                backgroundColor: '#F2F2F2' }}>

                <Ripple
                    onPress={logOutPresssed}
                    style={styles.container}>
                    <Ionicons name="log-out-sharp" size={17} color="whitesmoke" />
                    <Text style={styles.text}>Log Out</Text>
                </Ripple>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '95%',
        backgroundColor: 'seagreen',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: 'whitesmoke',
        marginLeft: 10
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 150 / 2,
        overflow: "hidden"
    },
    username: {
        margin: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'whitesmoke',
    },
    acFunctionBtn: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15,
        width: '100%',
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',

    },
    acFunctionTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'dimgrey',
        paddingLeft: 10,
    },
    recyclePoints: {
        fontSize: 15,
        padding: 5,
        color: 'seagreen'
    }

})
