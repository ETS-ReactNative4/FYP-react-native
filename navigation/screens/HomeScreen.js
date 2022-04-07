
import React,{ Component,useState,useEffect } from 'react'
import {View, Text,StyleSheet,Dimensions,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import Marker from 'react-native-maps';
import Ionicons  from 'react-native-vector-icons/Ionicons';


export default function HomeScreen(){

const initRegion = {latitude: 22.312626,longitude: 114.222802,latitudeDelta: 0.04,longitudeDelta: 0.05};
const [coords,setCoords] = useState([]);

   fetch('http://3.217.241.125/FYP_api/getStoreDetail.php', {
       method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        })
    })
        .then((response) => response.json())
        .then((res) => {

                setCoords(res.coordinates);

        })
       .catch((error) => {
        console.log(error); 
        console.log(error.message);
       })



    return(

        <View style={styles.container}>
            <Entypo name="home" size={24} color="black" />
            <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={initRegion}> 
            { //Need to specify 'MapView' before their component name e.g. <MapView.{ComponentName}>
            coords.map(marker => (
                <MapView.Marker 
                key={marker.id} 
                coordinate={{latitude:parseFloat(marker.latitude), longitude:parseFloat(marker.longitude)}} 
                title={marker.name}>
                    <Image source={require("../../assets/images/marker_icon.png")}/>
                <MapView.Callout style={styles.markerCallout}>
                    <Text style={styles.markerTitle}>{marker.name}</Text> 
                    <Text style={styles.markerDesc}><Ionicons name="pin" style={styles.icon}></Ionicons>{marker.address}</Text>
                </MapView.Callout>
                </MapView.Marker>
            ))
            }
            </MapView>
        </View>
  )
    };    

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
  markerCallout: {
      width:150
  },
    markerTitle: {
    fontWeight:'bold',
  },
  markerDesc:{
  },
});
