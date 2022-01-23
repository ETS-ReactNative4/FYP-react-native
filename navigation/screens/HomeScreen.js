import React,{ Component } from 'react'
import {View, Text,StyleSheet,Dimensions,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import Marker from 'react-native-maps';
const coords = require('../../constants/coords.json');

const initRegion = {latitude: 22.312626,longitude: 114.222802,latitudeDelta: 0.04,longitudeDelta: 0.05};
export default class HomeScreen extends Component{
    state = {
        coordinates:[
            {name:"1", latitude: 22.3179753, longitude: 114.2129413888889, pic:"../assests/marker_icon.png"},
            {name:"2", latitude: 21.3179753, longitude: 114.2129413888889, pic:"../assests/station_icon.png"},
            {name:"3", latitude: 20.3179753, longitude: 114.2129413888889, pic:"../assests/marker_icon.png"}
        ]
    }

    render() {

    return(
        <View style={styles.container}>
            <Entypo name="home" size={24} color="black" />
                    <Polyline
                        strokeWidth={2}
                        strokeColor="red"
                        coordinates={this.state.coordinates}
                    />  
            <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={initRegion}> 
            { //Need to specify 'MapView' before their component name e.g. <MapView.{ComponentName}>

                <MapView.Marker
                coordinate={{latitude: 22.3179753,
                longitude: 114.2129413888889}}
                title={"title"}
                description={"description"}>
                    <MapView.Callout>
                <Text>Sample Text</Text>
                </MapView.Callout>
                </MapView.Marker>
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
