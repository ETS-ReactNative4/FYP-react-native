import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, ScrollView } from 'react-native';
import profilePic from '../../assets/images/user.png';
import ParknShopIcon from '../../assets/images/ParknShopIcon.png';
import WellcomeIcon from '../../assets/images/wellcomeIcon.jpg';
import FortressIcon from '../../assets/images/FortressIcon.jpg'

export default function RewardScreen({ route, navigation }) {

    const { rewardId } = route.params;

    return(
        <Text>Reward ID: {JSON.stringify(rewardId)}</Text>
    );

}