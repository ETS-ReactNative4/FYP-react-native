import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import profilePic from '../../assets/images/user.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TrackerScreen({ navigation }) {

    GLOBAL = require('../../globalVar/global');

    const [UserCredit, setUserCredit] = useState('0');

    const [UserName, setUserName] = useState('');

    const [recordArray, setRecordArray] = useState([]);


        if (GLOBAL.isLoggedIn){
             useEffect(() => {
            api();
            Accountapi();
        
        }, []);
        }
       
    

    const api = async () => {
        await fetch("http://3.217.241.125/FYP_api/getRecycleRecord.php")
            .then((res) => res.json())
            .then((data) =>  {
                    if (data.message != 'No Recycle Record'){
                        setRecordArray(data.record);
                    }else{
                        setRecordArray([]);
                    }
                    
            });
               
    };

    const Accountapi = async () => {
        await fetch("http://3.217.241.125/FYP_api/getAccountDetail.php")
            .then((res) => res.json())
            .then((data) => {
                if (data.message == 'success') {
                    setUserCredit(data.usercredit);
                    setUserName(data.username);
                }
            })

    };

    const onRefreshPressed = () => {
       api();
       Accountapi();
    }

    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                flex: 0.4,
                backgroundColor: 'seagreen',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                justifyContent: 'center'

            }}>
                <Image source={profilePic} style={styles.icon} resizeMode='cover'></Image>
                <Text style={styles.username}>{UserName}</Text>

                <View style={{
                    borderRadius: 20,
                    margin: 2,
                    backgroundColor: '#1d5837',
                    flexDirection: 'row',

                }}>
                    <Text style={styles.recyclePoints}>{UserCredit} Recycle Points</Text>
                    <TouchableOpacity
                        onPress={onRefreshPressed}
                        style={styles.refreshBtn}>
                        <Ionicons name="refresh" size={17} color="whitesmoke" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}>

                {
                    recordArray.map(record => (
                        <View 
                        style={styles.record}
                        key={record.recycle_ID}
                        >
                            <View style={{ margin: 5 }}>
                                <Text style={styles.recordHeader}>{record.StoreName}</Text>
                                <Text style={styles.recordText}>{record.recycle_Date}</Text>
                                <Text style={styles.recordText}>Plastic: {record.Plastic} | Glass: {record.Glass} | Paper: {record.Paper} | Metal: {record.Metal}</Text>
                                <Text style={styles.recordPoints}>{record.Credit}</Text>
                            </View>
                        </View>
                    ))
                }
                    

            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    scrollView: {
        paddingTop: 10,
        alignSelf: 'center',
        flex: 1,
        height: '100%',
        width: '92%',
        fontSize: 15,
        backgroundColor: '#F2F2F2',
    },
    record: {
        flex: 1,
        marginBottom: 15,
        alignSelf: 'center',
        width: '99%',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
    },
    recordPoints: {
        alignSelf: 'flex-end',
        color: 'black',
        fontSize: 15
    },
    recordText: {
        color: 'black',
        fontSize: 15
    },
    recordHeader: {
        color: 'black',
        fontSize: 18,
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 150 / 2,
        overflow: "hidden"
    },
    username: {
        margin: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'whitesmoke',
    },
    recyclePoints: {
        fontSize: 15,
        padding: 5,
        color: 'white',
    },
    refreshBtn: {
        alignSelf: 'center',
        marginRight: 5
    }

});