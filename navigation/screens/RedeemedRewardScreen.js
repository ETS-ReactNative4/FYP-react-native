import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import bottle from '../../assets/images/bottle.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function RedeemedRewardScreen({ route, navigation }) {

    const [redeemedRewardArray, setRedeemedRewardArray] = useState([]);

    useEffect(() => {
        api();
    }, []);

    const api = async () => {
        await fetch("http://3.217.241.125/FYP_api/getRedeemedReward.php")
            .then((res) => res.json())
            .then((data) => setRedeemedRewardArray(data.reward));
        console.log("redeemedRewardArray");
    };


    const onBackPressed = () => {
        navigation.navigate('User');
    }

    return (


        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F2F2F2'

        }}>
            <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
            <View style={{
                flex: 0.1,
                flexDirection: 'row',
            }}>
                <Ripple style={styles.SelectedTopBarBtn}>
                    <Text style={styles.TopBarTxt}>Avaliable</Text>
                </Ripple>
            </View>

            <ScrollView style={{
                flex: 1,
            }}>

                {
                    redeemedRewardArray.map(reward => (
                        <TouchableOpacity
                            key={reward.userOrder_ID}
                            style={styles.reward}
                            >
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


                <TouchableOpacity
                    style={styles.reward}
                    onPress={{}}>
                    <View style={{
                        flexDirection: 'row',

                    }}>
                        <Image source={bottle} style={styles.coupocIcon}></Image>
                        <Text style={styles.productText}>Eco Bottle</Text>
                        <View style={styles.requiredPtView}>
                            <Text>100 Points</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <TouchableOpacity onPress={onBackPressed} style={styles.BackBtn}>
                <Ionicons name="arrow-back-circle" size={20} color="dimgrey" />
                <Text style={styles.BackBtnTxt}>Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    SelectedTopBarBtn: {
        backgroundColor: '#F2F2F2',
        alignSelf: 'center',
        padding: 10,
        flex: 1,
        width: '100%',
        borderBottomWidth: 2,
        borderColor: 'seagreen'
    },
    TopBarTxt: {
        fontSize: 15,
        color: 'seagreen',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    TopBarBtn: {
        backgroundColor: '#F2F2F2',
        alignSelf: 'center',
        padding: 10,
        flex: 1,
        width: '100%',
    },
    BackBtn: {
        borderWidth: 1,
        alignSelf: 'center',
        width: '95%',
        padding: 5,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'dimgrey',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    BackBtnTxt: {
        marginLeft: 5,
        fontSize: 20,
        color: 'dimgrey',
        justifyContent: 'center',
        alignSelf: 'center',
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
})