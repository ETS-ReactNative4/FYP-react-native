import * as React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, Alert, ScrollView, StatusBar } from 'react-native';
import profilePic from '../../assets/images/user.png';
import ParknShopIcon from '../../assets/images/ParknShopIcon.png';
import WellcomeIcon from '../../assets/images/wellcomeIcon.jpg';
import FortressIcon from '../../assets/images/FortressIcon.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

export default function UsedRewardScreen({ navigation }) {

    const onParnShopPress = (data) => {

        navigation.navigate('Redeemed Reward', {
            rewardName: 'PARKnSHOP Gift Coupon | HK$50',
            requiredPoints: 100,
            rewardPic: require('../../assets/images/ParknShopIcon.png'),
            description: '1.    During the promotion period, eligible MoneyBack members shop at PARKnSHOP eShop or PARKnSHOP Mobile App over $1000 can get two HK$50 eCoupon. Upon completion of delivery, the eCoupon will be awarded to “eCoupon” section of MoneyBack account within 14 days and a SMS will be sent (only applicable to members who subscribed and agreed to receive promotional message).  The eCoupon can be used once only. Expired or unused eCoupon will not be re-issued. \n 2.    The offer is only available to MoneyBack App user. \n 3.    eCoupon valid till 8 Nov 2022.'
        })
    }

    const onWellcomePress = (data) => {
        navigation.navigate('Redeemed Reward', {
            rewardName: 'Wellcome Gift Coupon | HK$100',
            requiredPoints: 150,
            rewardPic: require('../../assets/images/wellcomeIcon.jpg'),
            description: '1.    During the promotion period, eligible MoneyBack members shop at Wellcome eShop or Wellcome Mobile App over $1000 can get two HK$50 eCoupon. Upon completion of delivery, the eCoupon will be awarded to “eCoupon” section of MoneyBack account within 14 days and a SMS will be sent (only applicable to members who subscribed and agreed to receive promotional message).  The eCoupon can be used once only. Expired or unused eCoupon will not be re-issued. \n 2.    The offer is only available to MoneyBack App user. \n 3.    eCoupon valid till 8 Nov 2022.'
        })
    }

    const onFortressPress = (data) => {
        navigation.navigate('Redeemed Reward', {
            rewardName: 'Fortress Voucher | HK$100',
            requiredPoints: 175,
            rewardPic: require('../../assets/images/FortressIcon.jpg'),
            description: '1.    During the promotion period, eligible MoneyBack members shop at Fortress eShop or Fortress Mobile App over $1000 can get two HK$50 eCoupon. Upon completion of delivery, the eCoupon will be awarded to “eCoupon” section of MoneyBack account within 14 days and a SMS will be sent (only applicable to members who subscribed and agreed to receive promotional message).  The eCoupon can be used once only. Expired or unused eCoupon will not be re-issued. \n 2.    The offer is only available to MoneyBack App user. \n 3.    eCoupon valid till 8 Nov 2022.'
        })
    }


    const onAvaliablePress = () => {
        navigation.goBack();
    }

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
                flexDirection: 'row',
            }}>
                <Ripple style={styles.TopBarBtn} onPress={onAvaliablePress}>
                    <Text style={styles.TopBarTxt}>Avaliable</Text>
                </Ripple>
                <Ripple style={styles.SelectedTopBarBtn}>
                    <Text style={styles.TopBarTxt}>Used</Text>
                </Ripple>
            </View>

            <ScrollView style={{
                flex: 1,
            }}>


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
                        <Text style={styles.productText}>Fortress Voucher | HK$100 {"\n"} (Used)</Text>
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

            <Ripple onPress={onBackPressed} style={styles.BackBtn}>
                <Ionicons name="arrow-back-circle" size={20} color="dimgrey" />
                <Text style={styles.BackBtnTxt}>Back</Text>
            </Ripple>
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
    }
})