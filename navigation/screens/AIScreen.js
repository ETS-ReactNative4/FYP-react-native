import * as React from 'react';
import {View, Text } from 'react-native';

export default function AIScreen({navigation}){
  //TODO (Create a custom tensorflow.js model)
  //Step 1: Goto microsoft azure and import the images
  //Step 2: Export the training model into tensorflow.js
  //Step 3: Load the model to react native using bundleResourceIO (https://stackoverflow.com/questions/64189903/importing-your-own-tensorflow-model-to-react-native)
  //Step 4: Import tensorflow camera for real-time object detection (https://www.youtube.com/watch?v=kSLY59X5iaA)
  //Step 5: Edit the tensorflow camera to draw rectangles around the objects
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => navigation.navigate('Home')} style={{ fontSize: 26, fontWeight: 'bold'}}>
                Detail Screen
            </Text>
        </View>
  );    
}
