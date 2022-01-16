import * as React from 'react'
import {View, Text,StyleSheet,Dimensions,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
const coords = require('../../constants/coords.json');

const initRegion = {latitude: 22.312626,longitude: 114.222802,latitudeDelta: 0.04,longitudeDelta: 0.05};
export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Entypo name="home" size={24} color="black" />
            <MapView style={styles.map} initialRegion={initRegion}>
            { //Returned error, probably due to using json instead of state?
                coords.coordinates.map(marker => (
                    <Marker key={marker.name} coordinate={{latitude:marker.latitude, longitude:marker.longitude}} title={marker.name}>
                    <Image source={require('../../assets/images/marker_icon.png')}/>
                    </Marker>
                ))
            }
           </MapView>  
        </View>
  );    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
