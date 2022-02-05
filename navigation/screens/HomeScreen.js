
import React,{ Component } from 'react'
import {View, Text,StyleSheet,Dimensions,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import Marker from 'react-native-maps';
const coords = require('../../constants/coords.json');

const initRegion = {latitude: 22.312626,longitude: 114.222802,latitudeDelta: 0.04,longitudeDelta: 0.05};
export default class HomeScreen extends Component{
    state = {
    }

    render() {

    return(
        <View style={styles.container}>
            <Entypo name="home" size={24} color="black" />
            <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={initRegion}> 
            { //Need to specify 'MapView' before their component name e.g. <MapView.{ComponentName}>
            coords.coordinates.map(marker => (
                <MapView.Marker 
                key={marker.name} 
                coordinate={{latitude:marker.latitude, longitude:marker.longitude}} 
                title={marker.name}>
                    <Image source={require("../../assets/images/marker_icon.png")}/>
                </MapView.Marker>
            ))
            }
            </MapView>
        </View>
  )
    };    
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject 
  },
});
