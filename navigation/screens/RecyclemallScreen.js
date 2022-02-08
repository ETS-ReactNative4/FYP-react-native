import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, ScrollView, TouchableHighlight } from 'react-native';
import profilePic from '../../assets/images/user.png';
import ParknShopIcon from '../../assets/images/ParknShopIcon.png';
import WellcomeIcon from '../../assets/images/wellcomeIcon.jpg';
import FortressIcon from '../../assets/images/FortressIcon.jpg';
import Ripple from 'react-native-material-ripple';

export default function RecyclemallScreen({ navigation }) {

    const onParnShopPress = (data) => {

        navigation.navigate('Reward', {
            rewardName: 'PARKnSHOP Gift Coupon | HK$50',
            requiredPoints: 100,
            rewardPic: require('../../assets/images/ParknShopIcon.png'),
            description: '1.    During the promotion period, eligible MoneyBack members shop at PARKnSHOP eShop or PARKnSHOP Mobile App over $1000 can get two HK$50 eCoupon. Upon completion of delivery, the eCoupon will be awarded to “eCoupon” section of MoneyBack account within 14 days and a SMS will be sent (only applicable to members who subscribed and agreed to receive promotional message).  The eCoupon can be used once only. Expired or unused eCoupon will not be re-issued. \n 2.    The offer is only available to MoneyBack App user. \n 3.    eCoupon valid till 8 Nov 2022.'
        })
    }

    const onWellcomePress = (data) => {
        navigation.navigate('Reward', {
            rewardName: 'Wellcome Gift Coupon | HK$100',
            requiredPoints: 150,
            rewardPic: require('../../assets/images/wellcomeIcon.jpg'),
            description: '1.    During the promotion period, eligible MoneyBack members shop at Wellcome eShop or Wellcome Mobile App over $1000 can get two HK$50 eCoupon. Upon completion of delivery, the eCoupon will be awarded to “eCoupon” section of MoneyBack account within 14 days and a SMS will be sent (only applicable to members who subscribed and agreed to receive promotional message).  The eCoupon can be used once only. Expired or unused eCoupon will not be re-issued. \n 2.    The offer is only available to MoneyBack App user. \n 3.    eCoupon valid till 8 Nov 2022.'
        })
    }

    const onFortressPress = (data) => {
        navigation.navigate('Reward', {
            rewardName: 'Fortress Voucher | HK$100',
            requiredPoints: 175,
            rewardPic: require('../../assets/images/FortressIcon.jpg'),
            description: '1.    During the promotion period, eligible MoneyBack members shop at Fortress eShop or Fortress Mobile App over $1000 can get two HK$50 eCoupon. Upon completion of delivery, the eCoupon will be awarded to “eCoupon” section of MoneyBack account within 14 days and a SMS will be sent (only applicable to members who subscribed and agreed to receive promotional message).  The eCoupon can be used once only. Expired or unused eCoupon will not be re-issued. \n 2.    The offer is only available to MoneyBack App user. \n 3.    eCoupon valid till 8 Nov 2022.'
        })
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
                    <Text style={styles.username}>Username</Text>
                <View style={{ flexDirection: 'column',
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
                    <Text style={styles.text}>100</Text>
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
                    style={{
                        height: 150,
                        margin: 10,
                        borderColor: 'dimgrey',
                        borderWidth: 1,
                        borderRadius: 10,
                    }} onPress={onParnShopPress}>
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
                </Ripple>

                <Ripple
                    style={{
                        height: 150,
                        margin: 10,
                        borderColor: 'dimgrey',
                        borderWidth: 1,
                        borderRadius: 10,
                    }} onPress={onWellcomePress}>
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
                </Ripple>

                <Ripple
                    style={{
                        height: 150,
                        margin: 10,
                        borderColor: 'dimgrey',
                        borderWidth: 1,
                        borderRadius: 10,
                    }} onPress={onFortressPress}>
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
    }
})