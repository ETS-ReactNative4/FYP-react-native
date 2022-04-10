import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, StatusBar } from 'react-native';
import QRCode from '../../assets/images/rickRollQRCode.png'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

export default function CoupponScreen({ route, navigation }) {

    const { verifyCode, rewardName, userOrderID, qty } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
            <StatusBar barStyle="dark-content" backgroundColor="seagreen" />
            <Text style={styles.text}>Reward successfully redeemed!</Text>
            <Ionicons name="checkmark-circle-outline" size={200} color="dimgrey" style={{ justifyContent: 'center', alignSelf: 'center' }} />
            <Text style={styles.text}>{JSON.parse(JSON.stringify(rewardName))}</Text>
             <Text style={styles.text}>Order ID: {JSON.parse(JSON.stringify(userOrderID))}</Text>
             <Text style={styles.text}>QTY: {qty}</Text>
           
            <Text style={styles.verifyCode}>Verify Code: {JSON.parse(JSON.stringify(verifyCode))}</Text>
            <Text style={{
                justifyContent: 'center',
                fontSize: 13,
                alignSelf: 'center',
                color: 'grey',
                marginTop: 50

            }}>Please show this Message to our staff to claim the reward</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        justifyContent: 'center',
        fontSize: 20,
        alignSelf: 'center',
        color: 'black',
        marginTop: 10
    },
    verifyCode: {
        fontWeight: 'bold',
        backgroundColor: 'seagreen',
        justifyContent: 'center',
        fontSize: 20,
        alignSelf: 'center',
        color: 'white',
        marginTop: 10,
        padding: 5,
        borderRadius: 5
    },
})