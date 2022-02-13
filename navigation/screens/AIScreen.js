import React, {useEffect,useState,useRef} from 'react';
import {Platform,View, Text, StyleSheet,Dimensions } from 'react-native';
import {Camera} from 'expo-camera';
import * as tf from '@tensorflow/tfjs';
import {bundleResourceIO, cameraWithTensors, } from '@tensorflow/tfjs-react-native';
import { useIsFocused } from '@react-navigation/native';
import Canvas from 'react-native-canvas';

const TensorCamera = cameraWithTensors(Camera);
const modelJSON = require('../../model/model.json');
const modelWeights = require('../../model/weights.bin');
const { width, height } = Dimensions.get('window');



const labelMap = {
    0:{name:'Plastic', color:'brown'},
    1:{name:'Metal', color:'yellow'},
    2:{name:'Paper', color:'blue'},
    3:{name:'Glass', color:'green'},
}

const styles = StyleSheet.create({
      container: { 
          flex: 1,
          backgroundColor: '#fff',
      },
      camera:{
          ...StyleSheet.absoluteFillObject 
      },
      canvas:{
          ...StyleSheet.absoluteFillObject,
          zIndex: 1000000000,
      },
});

const NEW_OD_OUTPUT_TENSORS = ['detected_boxes', 'detected_scores', 'detected_classes'];

export default function AIScreen(navigation){
    const isFocused = useIsFocused();
    const [model, setModel] = useState();
    let context = useRef(null);
    let canvas = useRef(null);
    let textureDims = Platform.OS == 'ios' 
      ? {height: 1920, width: 1080}
      : {height: 1200, width: 1600};


    function handleCameraStream(images){
    //  Loop and detect hands

      const loop = async() => {
          const nextImageTensor = await images.next().value;
          const resized = await nextImageTensor.expandDims(0);
          const casted = await resized.cast('float32');
          //if(!model || !casted) throw new Error('No model or image tensor');
          const output = await model.executeAsync(casted);
          const prediction = await Promise.all(output.map(t => t.array()));
          //const boxes = await output[0].array()
          const boxes = prediction[2];
          const classes = prediction[0];
          const scores = prediction[1];
          console.log(prediction); 
          //model.executeAsync(casted).then((prediction =>{
          //  drawRectangle(prediction,nextImageTensor);
          //}).catch((error) => {
          //  console.log(error);
          //}));
          tf.dispose(nextImageTensor);
          tf.dispose(resized);
          tf.dispose(casted);
          tf.dispose(output);
          tf.dispose(prediction);
          requestAnimationFrame(() => drawRectangle(prediction,nextImageTensor,boxes,classes,scores));
      };
        setTimeout(() => loop(), 500);
    }

    function drawRectangle(prediction, nextImageTensor,boxes,classes,scores){
        if(!context.current || !canvas.current){console.log('No context/canvas'); return};
        for (let n = 0; n < prediction[0].length; n++) {
                console.log('Predicting waste');
                if(scores[n] >= 0.5){
                        //to match the size of camera preview 
                    const imageWidth = nextImageTensor.shape[1];
                    const imageHeight = nextImageTensor.shape[0];
                    const scaleWidth = width / nextImageTensor.shape[1];
                    const scaleHeight = height / nextImageTensor.shape[0];

                    const flipHorizontal = Platform.OS == 'ios' ? false : true;

                    //Clear previous prediction
                    //context.current.clearRect(0,0,width,height);
                    
                    const[x,y,width,height] = boxes[n]; 
                    //const x = (boxes[n][0] * imageWidth) + 10;
                    //onst y = (boxes[n][1] * imageHeight) - 10;
                    //const width = (boxes[n][2] * imageWidth) - x + 20;
                    //const height = (boxes[n][3] * imageHeight) - y + 10;

                    //Draw the rectangle for each prediction
                    //for(const prediction of prediction){
                    //    const [x,y,width,height] = prediction.bbox;
                    //}
                    console.log('Waste '+n+'x: '+x+'y: '+y+'width : '+width+'height : '+height);
                    //Scale coordinates based on the ratio calculated
                    const boundingBoxX = flipHorizontal 
                    ? canvas.current.width - x * imageWidth - width * imageWidth
                    : x * imageWidth;
                    const boundingBoxY = y * imageHeight;

                    //Color each classes with different colors
                    console.log(classes[n]);
                    console.log(labelMap[classes[n]]['color']);
                    context.current.strokeStyle = labelMap[classes[n]]['color'];
                    context.current.strokeRect(boundingBoxX, boundingBoxY, width * imageWidth, height * imageHeight);

                    context.current.fillText(labelMap[classes[n]]['name'],boundingBoxX - 5,boundingBoxY - 5);
                }
            }

    }

   async function handleCanvas(can){ 
       if(can){
           can.width = width;
           can.height = height;
           const ctx = can.getContext('2d');
           ctx.fillStyle = 'white';
           ctx.lineWidth = 3;
            ctx.font = '20px Arial'  
           context.current = ctx;
           canvas.current = can;
       }
   }

  useEffect(() => {
      async function readyCamera(){

        await Camera.requestCameraPermissionsAsync();

      }

      async function readyTensorFlow(){
        await tf.ready();
        setModel(await tf.loadGraphModel(bundleResourceIO(modelJSON, modelWeights)));
      }

      readyCamera();
      readyTensorFlow();
  }, [])

    return (

       <View style={{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
       }}>
        {   isFocused && //Mount camera once loaded in AIScreen and unmount when not in AIScreen
            <TensorCamera style={styles.camera}
            type={Camera.Constants.Type.back}
            cameraTextureHeight={textureDims.height}
            cameraTextureWidth={textureDims.Width}
            resizeHeight={320}
            resizeWidth={320}
            resizeDepth={3}
            onReady={handleCameraStream}
            autorender={true}
            useCustomShadersToResize={false}/>
       }
       <Canvas style={styles.canvas} ref={handleCanvas}/>
       </View>
    )
  }   






