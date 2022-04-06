import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import profilePic from '../../assets/images/user.png';
import FortressIcon from '../../assets/images/FortressIcon.jpg';
import bottle from '../../assets/images/bottle.jpg';
import tshirt from '../../assets/images/t-shirt.jpg';
import bag from '../../assets/images/bag.jpg';
import unbrella from '../../assets/images/umbrella.jpg';
import Ripple from 'react-native-material-ripple';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RecyclemallScreen({ navigation }) {

    
    GLOBAL = require('../../globalVar/global');


    if(GLOBAL.isLoggedIn){
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
                setUserCredit(res.usercredit);
                setUserName(res.username);
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
                    { text: 'OK'},
                ],
                { cancelable: false },
            );
        });
    }
    


    const [UserCredit, setUserCredit] = useState('0');

    const [UserName, setUserName] = useState('');

    const [disabled, setDisabled] = useState(false);

    const [RecyclePoints, setRecyclePoints] = useState('100');

    const onBottlePress = (data) => {
        setRecyclePoints(RecyclePoints - 100);
        navigation.navigate('Reward', {
            redeemID: '202202014001',
            rewardName: 'Eco Bottle',
            requiredPoints: 100,
            rewardPic: require('../../assets/images/bottle.jpg'),
            description: '1.    During the promotion period, eligible MoneyBack members shop at PARKnSHOP eShop or PARKnSHOP Mobile App over $1000 can get two HK$50 eCoupon. Upon completion of delivery, the eCoupon will be awarded to “eCoupon” section of MoneyBack account within 14 days and a SMS will be sent (only applicable to members who subscribed and agreed to receive promotional message).  The eCoupon can be used once only. Expired or unused eCoupon will not be re-issued. \n 2.    The offer is only available to MoneyBack App user. \n 3.    eCoupon valid till 8 Nov 2022.'
        })
    }

    const onTShirtPress = (data) => {
        navigation.navigate('Reward', {
            redeemID: '202202014002',
            rewardName: 'Eco Clothes',
            requiredPoints: 150,
            rewardPic: require('../../assets/images/t-shirt.jpg'),
            description: '1.    During the promotion period, eligible MoneyBack members shop at Wellcome eShop or Wellcome Mobile App over $1000 can get two HK$50 eCoupon. Upon completion of delivery, the eCoupon will be awarded to “eCoupon” section of MoneyBack account within 14 days and a SMS will be sent (only applicable to members who subscribed and agreed to receive promotional message).  The eCoupon can be used once only. Expired or unused eCoupon will not be re-issued. \n 2.    The offer is only available to MoneyBack App user. \n 3.    eCoupon valid till 8 Nov 2022.'
        })
    }

    const onBagPress = (data) => {
        navigation.navigate('Reward', {
            redeemID: '202202014003',
            rewardName: 'Recycle Bag',
            requiredPoints: 175,
            rewardPic: require('../../assets/images/bag.jpg'),
            description: '1.    During the promotion period, eligible MoneyBack members shop at Fortress eShop or Fortress Mobile App over $1000 can get two HK$50 eCoupon. Upon completion of delivery, the eCoupon will be awarded to “eCoupon” section of MoneyBack account within 14 days and a SMS will be sent (only applicable to members who subscribed and agreed to receive promotional message).  The eCoupon can be used once only. Expired or unused eCoupon will not be re-issued. \n 2.    The offer is only available to MoneyBack App user. \n 3.    eCoupon valid till 8 Nov 2022.'
        })
    }

    const onUmbrellaPress = (data) => {
        navigation.navigate('Reward', {
            redeemID: '202202014004',
            rewardName: 'Eco Umbrella',
            requiredPoints: 200,
            rewardPic: require('../../assets/images/umbrella.jpg'),
            description: '1.    During the promotion period, eligible MoneyBack members shop at Fortress eShop or Fortress Mobile App over $1000 can get two HK$50 eCoupon. Upon completion of delivery, the eCoupon will be awarded to “eCoupon” section of MoneyBack account within 14 days and a SMS will be sent (only applicable to members who subscribed and agreed to receive promotional message).  The eCoupon can be used once only. Expired or unused eCoupon will not be re-issued. \n 2.    The offer is only available to MoneyBack App user. \n 3.    eCoupon valid till 8 Nov 2022.'
        })
    }

    const onRefreshPressed = () => {
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
                    setUserCredit(res.usercredit);
                    setUserName(res.username);
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
                        { text: 'OK', onPress: () => navigation.navigate('Account', { screen: 'Account' }) },
                    ],
                    { cancelable: false },
                );
            });

    } 
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'seagreen'
        }}>
            <View style={{
                flex: 0.4,
                margin: 20,
                width: '95%',
                flexDirection: 'row',
                textAlign: 'left',
                fontSize: 15,
                backgroundColor: '#1d5837',
                borderRadius: 10
            }}>
                <Image source={profilePic} style={styles.icon} resizeMode='cover'></Image>
                <Text style={styles.username}>{UserName}</Text>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    marginBottom: 5
                }}>
                    <Text style={{
                        paddingRight: 5,
                        paddingTop: 85,
                        fontSize: 15,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        color: 'whitesmoke',
                    }}>
                        Recycle Points
                    </Text>

                    <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginBottom: 5
                        }}>
                         <Text style={styles.text} >{UserCredit}</Text>
                    <TouchableOpacity
                        disabled={disabled}
                        onPress={onRefreshPressed}
                        style={styles.refreshBtn}>
                        <Ionicons name="refresh" size={20} color="whitesmoke" />
                    </TouchableOpacity>
                    </View>
                   
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,
                    width: '95%',
                    height: '100%',
                    backgroundColor: '#f2f2f2',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}>

                <Ripple
                    style={styles.reward}
                    onPress={onBottlePress}>
                    <View style={{
                        flexDirection: 'row',

                    }}>
                        <Image source={bottle} style={styles.coupocIcon}></Image>
                        <Text style={styles.productText}>Eco Bottle</Text>
                        <View style={styles.requiredPtView}>
                            <Text>100 Points</Text>
                        </View>
                    </View>
                </Ripple>

                <Ripple
                    style={styles.reward}
                    onPress={onTShirtPress}>
                    <View style={{
                        flexDirection: 'row',

                    }}>
                        <Image source={tshirt} style={styles.coupocIcon}></Image>
                        <Text style={styles.productText}>Eco Clothes</Text>
                        <View style={styles.requiredPtView}>
                            <Text>150 Points</Text>
                        </View>
                    </View>
                </Ripple>

                <Ripple
                    style={styles.reward}
                    onPress={onBagPress}>
                    <View style={{
                        flexDirection: 'row',

                    }}>
                        <Image source={bag} style={styles.coupocIcon}></Image>
                        <Text style={styles.productText}>Recycle Bag </Text>
                        <View style={styles.requiredPtView}>
                            <Text>175 Points</Text>
                        </View>
                    </View>
                </Ripple>

                <Ripple
                    style={styles.reward}
                    onPress={onUmbrellaPress}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image source={unbrella} style={styles.coupocIcon}></Image>
                        <Text style={styles.productText}>Eco Umbrella</Text>
                        <View style={styles.requiredPtView}>
                            <Text>200 Points</Text>
                        </View>
                    </View>
                </Ripple>

            </ScrollView>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'seagreen',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    reward: {
        height: 150,
        margin: 10,
        borderColor: 'dimgrey',
        borderWidth: 1,
        borderRadius: 10,
    },
    requiredPtView: {
        paddingTop: 100,
        alignSelf: 'flex-end',
        margin: 5
    },
    text: {
        fontSize: 25,
        alignSelf: 'center',
        color: 'whitesmoke',
        paddingTop: 5,
        paddingRight: 5,
        paddingLeft: 60,
        paddingBottom: 5
    },
    icon: {
        marginTop: 15,
        margin: 10,
        width: 125,
        height: 125,
        borderRadius: 70,
    },
    username: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'whitesmoke',
    },
    coupocIcon: {
        borderRadius: 5,
        margin: 10,
        width: 125,
        height: 125,
    },
    productText: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: "row",
        paddingTop: 5,
        fontSize: 18,
        color: 'black',
    },
    refreshBtn: {
        alignSelf: 'center',
        marginRight: 1,
        marginRight: 3
    }
})