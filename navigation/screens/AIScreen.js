import * as React from 'react';
import {View, Text } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import {bundleResourceIO} from '@tensorflow/tfjs-react-native';

export default class AIScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isTfReady: false,
    };
  }

  async componentDidMount() {
     await tf.ready()
     this.setState({ isTfReady: true })

     const modelJSON = require('../../model/model.json');
     const modelWeights = require('../../model/weights.bin');
     const model = await tf.loadGraphModel(bundleResourceIO(modelJSON, modelWeights));
     this.setState({ model })
  }


  render() {
    return (
       <View style={{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
       }}>
         <Text>
           TF: {this.state.isTfReady ? "Ready" : "Waiting"}
         </Text>
         <Text>
           MODEL: {this.state.model ? "Ready" : "Waiting"}
         </Text>
       </View>
    )
  }   
}
