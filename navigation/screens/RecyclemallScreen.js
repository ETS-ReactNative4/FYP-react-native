import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import profilePic from '../../assets/images/user.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RecyclemallScreen({ navigation }) {


    GLOBAL = require('../../globalVar/global');

    const [UserCredit, setUserCredit] = useState('0');

    const [UserName, setUserName] = useState('');

    const [rewardArray, setRewardArray] = useState([]);

    const [disabled, setDisabled] = useState(false);


    const onPress = (rewardName, rewardId, requiredPoints, imgURL, fullDescription) => {
        navigation.navigate('Reward', {
            rewardName: rewardName,
            rewardId: rewardId,
            requiredPoints: requiredPoints,
            imgURL: imgURL,
            fullDescription: fullDescription,
        })
    }


    useEffect(() => {
        api();
    }, []);

    const api = async () => {
        await fetch("http://3.217.241.125/FYP_api/getRecycleMallReward.php")
            .then((res) => res.json())
            .then((data) => setRewardArray(data.reward));
        console.log('success');
    };


    const onRefreshPressed = () => {
        
            fetch("http://3.217.241.125/FYP_api/getAccountDetail.php")
                .then((res) => res.json())
                .then((data) => {
                    if (data.message == 'success') {
                        setUserCredit(data.usercredit);
                        setUserName(data.username);
                        console.log("get ac success");
                    }
                }) 
    }

    if (GLOBAL.isLoggedIn) {
        

        useEffect(() => {
            Accountapi();
        }, []);

        const Accountapi = async () => {
            await fetch("http://3.217.241.125/FYP_api/getAccountDetail.php")
                .then((res) => res.json())
                .then((data) => {
                    if (data.message == 'success') {
                        setUserCredit(data.usercredit);
                        setUserName(data.username);
                        console.log("get ac success");
                    }
                })

        };
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
                            onPress={onRefreshPressed}
                            style={styles.refreshBtn}>
                            <Ionicons name="refresh" size={17} color="whitesmoke" />
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

                {
                    rewardArray.map(reward => (
                        <TouchableOpacity
                            disabled={disabled}
                            key={reward.id}
                            style={styles.reward}
                            onPress={() => onPress(reward.name, reward.id, reward.point, reward.img, reward.fullDescription)} >
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <Image source={{ uri: reward.img }} style={styles.coupocIcon}></Image>
                                <Text style={styles.productText}>{reward.name}</Text>
                                <View style={styles.requiredPtView}>
                                    <Text>{reward.point} points</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                    ))
                }

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