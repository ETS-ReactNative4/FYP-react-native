import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, ScrollView } from 'react-native';
import QRCode from '../../assets/images/rickRollQRCode.png'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

export default function CoupponScreen({route, navigation }) {

    const { rewardName } = route.params;

    return (
        <View style={{justifyContent: 'center'}}>
            <Text style={styles.text}>{JSON.parse(JSON.stringify(rewardName))}</Text>
            <Image source={QRCode} style={styles.QRCode}/>
        </View>
    )
}
const styles = StyleSheet.create({
    QRCode:{
        alignSelf:'center',
        resizeMode: 'contain',
        width:'80%',
        height: '80%'   
    },
    text: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20
    },
})