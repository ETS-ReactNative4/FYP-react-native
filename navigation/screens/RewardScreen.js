import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
export default function RewardScreen({ route, navigation }) {


    const [disabled, setDisabled] = useState(false);

    const { rewardName, rewardId, requiredPoints, imgURL, fullDescription} = route.params;


    const onRedeemPressed = () => {

        setDisabled(true);

        Alert.alert(
            "Reward",
            "Are you sure you want to redeem \n" + JSON.parse(JSON.stringify(rewardName)) + " ?",
            [
                {
                    text: "Yes",
                    onPress: () => redeemReward()                      
                },
                {
                    text: "No",
                    onPress: () => setDisabled(false)
                }
            ]
        );

    }

    const redeemReward = () => {
        fetch('http://3.217.241.125/FYP_api/redeemReward.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                rewardID: rewardId,
                requiredPoint: requiredPoints,
            })
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.message == 'success') {                
                    navigation.navigate('Redeemed Reward', {
                        verifyCode : res.verifyCode,
                        rewardName: rewardName,
                        userOrderID : res.userOrderID,
                        qty: 1.
                    })
                    setDisabled(false);
                } else if(res.message == 'Not Enough Recycle Points'){
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
        <ScrollView style={{ flex: 1 }}>
            <Image source={{ uri: JSON.parse(JSON.stringify(imgURL)) }} style={styles.coupocIcon}></Image>
            <Text style={styles.text}>{JSON.parse(JSON.stringify(rewardName))}</Text>
            <Text style={styles.requiredPoints}>Requied Points: {JSON.parse(JSON.stringify(requiredPoints))}</Text>
            <View style={{ padding: 15 }}>
                <Text
                    style={styles.description}>{"\n"}Description: {"\n\n"} {JSON.parse(JSON.stringify(fullDescription))}</Text>
            </View>
            <TouchableOpacity
                disabled={disabled}
                onPress={onRedeemPressed}
                style={styles.redeemBtn}>
                <Ionicons name="gift" size={17} color="whitesmoke" />
                <Text style={styles.redeemBtnTxt}>Redeem</Text>
            </TouchableOpacity>
        </ScrollView>

    );

}
const styles = StyleSheet.create({
    coupocIcon: {
        alignSelf: 'center',
        borderRadius: 5,
        margin: 10,
        width: 125,
        height: 125,
    },
    text: {
        fontSize: 18,
        alignSelf: 'flex-start',
        color: 'black',
        marginLeft: 10,
        fontWeight: 'bold',
        paddingTop: 10,
    },
    requiredPoints: {
        paddingTop: 10,
        fontSize: 15,
        alignSelf: 'flex-start',
        color: 'seagreen',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    description: {
        color: 'black',
        fontSize: 14,
    },
    redeemBtn: {

        alignSelf: 'center',
        width: '95%',
        backgroundColor: 'seagreen',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    redeemBtnTxt: {
        fontWeight: 'bold',
        color: 'whitesmoke',
        marginLeft: 10
    },
})