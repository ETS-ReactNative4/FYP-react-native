import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, StatusBar } from 'react-native';
import QRCode from '../../assets/images/rickRollQRCode.png'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

export default function CoupponScreen({route, navigation }) {

    const { rewardName, redeemID } = route.params;

    return (
        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
            <StatusBar barStyle="dark-content" backgroundColor="seagreen" />
            <Text style={styles.text}>Reward successfully redeemed!</Text>
            <Ionicons name="checkmark-circle-outline" size={200} color="dimgrey" style={{justifyContent: 'center', alignSelf: 'center'}} />
            <Text style={styles.text}>{JSON.parse(JSON.stringify(rewardName))}</Text>
            <Text style={styles.text}>Redeem ID: {JSON.parse(JSON.stringify(redeemID))}</Text>
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
})