import React, {useEffect,useState,useRef} from 'react';
import {Platform,View, Text, StyleSheet,Dimensions } from 'react-native';
import {Camera} from 'expo-camera';
import * as tf from '@tensorflow/tfjs';
import {bundleResourceIO, cameraWithTensors, } from '@tensorflow/tfjs-react-native';
import { useIsFocused } from '@react-navigation/native';
import Canvas from 'react-native-canvas';

const TensorCamera = cameraWithTensors(Camera);
const modelJSON = require('../../model/wasteidentifyv2/model.json');
// model weights
const modelWeights1 = require('../../model/wasteidentifyv2/group1-shard1of3.bin');
const modelWeights2 = require('../../model/wasteidentifyv2/group1-shard2of3.bin');
const modelWeights3 = require('../../model/wasteidentifyv2/group1-shard3of3.bin');
const { width, height } = Dimensions.get('window');




const labelMap = {
    1:{name:'Plastic', color:'brown'},
    2:{name:'Metal', color:'yellow'},
    3:{name:'Paper', color:'blue'},
    4:{name:'Glass', color:'green'},
}

const styles = StyleSheet.create({
      container: { 
          flex: 1,//setTimeout(() => loop(), 500);
          backgroundColor: '#fff',
      },
      camera:{
          ...StyleSheet.absoluteFillObject,
          height:600,
          width:400,
          top:50,
          left:7
      },
      canvas:{
          ...StyleSheet.absoluteFillObject,
          top:50,
          left:7,
          zIndex: 1000000000,
      },
});

   let textureDims;
   if (Platform.OS === 'ios') {
    textureDims = {
      height: 1920,
      width: 1080,
    };
   } else {
    textureDims = {
      height: 1200,
      width: 1600,
    };
   }

export default function AIScreen(navigation){
    var plastic = 0
    var metal = 0
    var paper= 0
    var glass = 0; 

    const isFocused = useIsFocused();
    const [model, setModel] = useState();
    const [text,setText] = useState("Plastic: "+plastic+" Metal: "+metal+" Paper: "+paper+" Glass: "+glass);
    let context = useRef(null);
    let canvas = useRef(null);



    function handleCameraStream(images){

      const loop = async() => {
          const nextImageTensor = await images.next().value;
          if(nextImageTensor !== undefined && nextImageTensor !== null){
              const resized = await tf.image.resizeBilinear(nextImageTensor.expandDims(0),[224,224]);
              const casted = await resized.cast('int32');
              const output = await model.executeAsync(casted);

              if(!model && output) throw new Error('No model or image tensor');
              const prediction = await Promise.all(output.map(t => t.array()));
              //const boxes = await output[0].array()
              //prediction[0] = scores
              //prediction[6] = classes
              //prediction[1] = boxes
              //console.log(prediction[3]);
              const boxes = prediction[1];
              const classes = prediction[6];
              const scores = prediction[0];
              //console.log(prediction); 
              //model.executeAsync(casted).then((prediction =>{
              //  drawRectangle(prediction,nextImageTensor);
              //}).catch((error) => {
              //  console.log(error);
              //}));
              context.current.clearRect(0,0,width,height);
              plastic = 0;
              metal = 0;
              paper = 0;
              glass = 0;
              drawRectangle(prediction,nextImageTensor,boxes[0],classes[0],scores[0]);
              tf.dispose(nextImageTensor);
              tf.dispose(resized);
              tf.dispose(casted);
              tf.dispose(output);
              tf.dispose(prediction);
              requestAnimationFrame(loop);
          } 
      };
        loop();
    } 
    

    function drawRectangle(prediction, nextImageTensor,boxes,classes,scores){
        if(!context.current || !canvas.current){console.log('No context/canvas'); return};
        
        //context.current.strokeRect(0, 0, canvas.current.width,canvas.current.height)
        for (let n = 0; n < boxes.length; n++) {
                if(scores[n] >= 0.8){
                    const[x,y,boxwidth,boxheight] = boxes[n];
                    const flipHorizontal = Platform.OS == 'ios' ? false : true;
                    const boundingBoxX = flipHorizontal ? 
                    canvas.current.width - y*canvas.current.width - boxheight*canvas.current.width : 
                    y*canvas.current.width;
                    const boundingBoxY = x*canvas.current.height;

                    //Color each classes with different colors
                    //console.log(classes[n]);
                    //console.log(labelMap[classes[n]]['color']);

                    handleNumber(labelMap[classes[n]]['name']);

                    context.current.strokeStyle = labelMap[classes[n]]['color'];
                    //console.log(boundingBoxX, boundingBoxY, boxheight*canvas.current.width, boxwidth*canvas.current.height);
                    context.current.strokeRect(boundingBoxX, boundingBoxY, boxheight*canvas.current.width, boxwidth*canvas.current.height);

                    context.current.fillText(labelMap[classes[n]]['name'],boundingBoxX - 5,boundingBoxY - 5);
                }
            
            }
    setText("Plastic: "+plastic+" Metal: "+metal+" Paper: "+paper+" Glass: "+glass);
    }

   async function handleCanvas(can){ 
       if(can){
           can.width = 400;
           can.height = 600;
           //console.log(can.width,can.height);
           const ctx = can.getContext('2d');
           ctx.fillStyle = 'white';
           ctx.lineWidth = 3;
            ctx.font = '20px Arial'  
           context.current = ctx;
           canvas.current = can;
       }
   }
  function handleNumber(type){ 
    if(type == 'Plastic'){
        plastic = plastic+1;
    }else if(type == 'Metal'){
        metal = metal+1;
    }else if(type == 'Paper'){
        paper = paper + 1;
    }else if(type == 'Glass'){
        glass = glass + 1;
    }
  }

  function changeText(paramtext){
    this.setState()
  } 

  useEffect(() => {
      async function readyCamera(){

        await Camera.requestCameraPermissionsAsync();

      }

      async function readyTensorFlow(){
        await tf.ready();
        setModel(await tf.loadGraphModel(bundleResourceIO(modelJSON, [modelWeights1,modelWeights2,modelWeights3])));
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
            <Text style={{bottom:330}} >{text}</Text> 
        {   isFocused && //Mount camera once loaded in AIScreen and unmount when not in AIScreen
            <TensorCamera style={styles.camera}
            type={Camera.Constants.Type.back}
            cameraTextureHeight={textureDims.height}
            cameraTextureWidth={textureDims.width}
            resizeWidth={224}
            resizeHeight={224}
            resizeDepth={3}
            onReady={handleCameraStream}
            autorender={true}
            />
       }
       <Canvas style={styles.canvas} ref={handleCanvas}/>
       </View>
    )
}






