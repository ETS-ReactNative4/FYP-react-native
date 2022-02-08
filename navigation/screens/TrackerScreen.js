import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import profilePic from '../../assets/images/user.png';

export default function TrackerScreen({ navigation }) {
    return (
        <View style={{
            flex:1,
            }}>
            <View style={{
                flex: 0.4,
                backgroundColor: 'seagreen',
                alignItems: 'center',
                paddingTop: 20,
                justifyContent: 'center'
            }}>
                <Image source={profilePic} style={styles.icon} resizeMode='cover'></Image>
                <Text style={styles.username}>Username</Text>

                <View style={{
                    borderRadius: 20,
                    margin: 2,
                    backgroundColor: '#F2F2F2',
                    marginBottom: 15,
                }}>
                    <Text style={styles.recyclePoints}>100 Recycle Points</Text>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}>
                <View style={styles.record}>
                    <View style={{ margin: 5 }}>
                        <Text style={styles.recordHeader}>Tseung Kwan O | 8-2-2022</Text>
                        <Text style={styles.recordText}>Bottle: 10 | Glass: 5 | Paper: 0 | Can: 5</Text>
                        <Text style={styles.recordPoints}>20</Text>
                    </View>
                </View>

                <View style={styles.record}>
                    <View style={{ margin: 5 }}>
                        <Text style={styles.recordHeader}>Tiu Keng Leng | 7-2-2022</Text>
                        <Text style={styles.recordText}>Bottle: 0 | Glass: 5 | Paper: 0 | Can: 0</Text>
                        <Text style={styles.recordPoints}>5</Text>
                    </View>
                </View>

                <View style={styles.record}>
                    <View style={{ margin: 5 }}>
                        <Text style={styles.recordHeader}>Bo Lam | 28-1-2022</Text>
                        <Text style={styles.recordText}>Bottle: 8 | Glass: 0 | Paper: 0 | Can: 10</Text>
                        <Text style={styles.recordPoints}>18</Text>
                    </View>
                </View>

                <View style={styles.record}>
                    <View style={{ margin: 5 }}>
                        <Text style={styles.recordHeader}>Kwun Tong | 15-1-2022</Text>
                        <Text style={styles.recordText}>Bottle: 10 | Glass: 3 | Paper: 7 | Can: 5</Text>
                        <Text style={styles.recordPoints}>25</Text>
                    </View>
                </View>

                <View style={styles.record}>
                    <View style={{ margin: 5 }}>
                        <Text style={styles.recordHeader}>Kwun Tong | 15-1-2022</Text>
                        <Text style={styles.recordText}>Bottle: 10 | Glass: 3 | Paper: 7 | Can: 5</Text>
                        <Text style={styles.recordPoints}>25</Text>
                    </View>
                </View>

                <View style={styles.record}>
                    <View style={{ margin: 5 }}>
                        <Text style={styles.recordHeader}>Kwun Tong | 4-1-2022</Text>
                        <Text style={styles.recordText}>Bottle: 1 | Glass: 3 | Paper: 0 | Can: 1</Text>
                        <Text style={styles.recordPoints}>5</Text>
                    </View>
                </View>
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
        width: 378,
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
        color: 'seagreen',
    }

});