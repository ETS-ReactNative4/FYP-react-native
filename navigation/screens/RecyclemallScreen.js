import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, ScrollView } from 'react-native';
import profilePic from '../../assets/images/user.png';
import ParknShopIcon from '../../assets/images/ParknShopIcon.png';
import WellcomeIcon from '../../assets/images/wellcomeIcon.jpg';
import FortressIcon from '../../assets/images/FortressIcon.jpg'
import { createStackNavigator } from '@react-navigation/stack';

export default function RecyclemallScreen({ navigation }) {

    const onParnShopPress = (data) => {
        navigation.navigate('Reward')
    }

    const onWellcomePress = (data) => {
        alert('redeemed Wellcome');
    }

    const onFortressPress = (data) => {
        alert('redeemed Fortress');
    }

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            fontSize: 15,
            backgroundColor: 'seagreen'
        }}>
            <View style={{
                flex: 0.45,
                margin: 20,
                height: '22%',
                width: '95%',
                flexDirection: 'row',
                textAlign: 'left',
                fontSize: 15,
                backgroundColor: '#1d5837',
                borderRadius: 10
            }}>
                <Image source={profilePic} style={styles.icon} resizeMode='cover'></Image>
                <Text style={styles.username}>Username</Text>
                <View style={{ flexDirection: 'column' }}>
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
                    <Text style={styles.text}>100</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
                style={{
                    flex: 1, 
                    width: '95%', 
                    height: '100%', 
                    backgroundColor: '#f2f2f2', 
                    borderRadius: 10
                }}>

                <Pressable onPress={onParnShopPress}>
                    <View style={{
                        height: 150,
                        margin: 10,
                        borderColor: 'grey',
                        borderWidth: 1,
                        borderRadius: 10,
                    }}>
                        <View style={{
                            flexDirection: 'row',

                        }}>
                            <Image source={ParknShopIcon} style={styles.coupocIcon}></Image>
                            <Text style={styles.productText}>PARKnSHOP Gift Coupon | HK$50 </Text>
                            <View style={{
                                paddingTop: 100,
                                alignSelf: 'flex-end',
                                margin: 5
                            }}>
                                <Text>100 Points</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>

                <Pressable onPress={onWellcomePress}>
                    <View style={{
                        height: 150,
                        margin: 10,
                        borderColor: 'grey',
                        borderWidth: 1,
                        borderRadius: 10,
                    }}>
                        <View style={{
                            flexDirection: 'row',

                        }}>
                            <Image source={WellcomeIcon} style={styles.coupocIcon}></Image>
                            <Text style={styles.productText}>Wellcome Gift Coupon | HK$100 </Text>
                            <View style={{
                                paddingTop: 100,
                                alignSelf: 'flex-end',
                                margin: 5
                            }}>
                                <Text>150 Points</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>

                <Pressable onPress={onFortressPress}>
                    <View style={{
                        height: 150,
                        margin: 10,
                        borderColor: 'grey',
                        borderWidth: 1,
                        borderRadius: 10,
                    }}>
                        <View style={{
                            flexDirection: 'row',

                        }}>
                            <Image source={FortressIcon} style={styles.coupocIcon}></Image>
                            <Text style={styles.productText}>Fortress Voucher | HK$100 </Text>
                            <View style={{
                                paddingTop: 100,
                                alignSelf: 'flex-end',
                                margin: 5
                            }}>
                                <Text>175 Points</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>

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
    }
})