import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

export default function RewardScreen({ route, navigation }) {

    const [modalVisible, setModalVisible] = React.useState(false);

    const onRedeemPressed = () => {
        Alert.alert(
            "Reward",
            "Are you sure you want to redeem \n"+JSON.parse(JSON.stringify(rewardName)) +" ?",
            [
                {
                    text: "Yes",
                    onPress: () => 
                    navigation.navigate('Redeemed Reward',{
                        rewardName: JSON.parse(JSON.stringify(rewardName)),
                        redeemID:  JSON.parse(JSON.stringify(redeemID))
                    }),
                },
                { text: "No" }
            ]
        );

    }

    const { rewardName, requiredPoints, rewardPic, description, redeemID } = route.params;

    return (
        <ScrollView style={{ flex: 1 }}>
            <Image source={{uri: JSON.parse(JSON.stringify(rewardPic))}} style={styles.coupocIcon}></Image>
            <Text style={styles.text}>{JSON.parse(JSON.stringify(rewardName))}</Text>
            <Text style={styles.requiredPoints}>Requied Points: {JSON.parse(JSON.stringify(requiredPoints))}</Text>
            <View style={{ padding: 15 }}>
                <Text
                    style={styles.description}>{"\n"}Description: {"\n\n"} {JSON.parse(JSON.stringify(description))}</Text>
            </View>
            <Ripple
                onPress={onRedeemPressed}
                style={styles.redeemBtn}>
                <Ionicons name="gift" size={17} color="whitesmoke" />
                <Text style={styles.redeemBtnTxt}>Redeem</Text>
            </Ripple>
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