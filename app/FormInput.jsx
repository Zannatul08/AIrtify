import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ImageUploadComponent from '../compNew/FormInput/ImageUploadComponent';
import TextInput_ from './../compNew/FormInput/TextInput_';
import Colors from './../constants/Colors';
export default function FormInput() {
  const params=useLocalSearchParams();
  const navigation=useNavigation();
  const [aiModel,setAiModel]=useState();

  useEffect(()=>{
    console.log("Params:",params);
    setAiModel(params)
    navigation.setOptions({
      headerShown:true,
      headerTitle:params?.name 

    })
  },[])

  return (
    <View style={{
      padding:20,
      backgroundColor: Colors.WHITE,
      height:'100%'
    }}>
      <Text
      style={{
        fontSize:20,
        fontWeight:'bold'
      }}
      >{aiModel?.name}</Text>

      <View>
        {/*Text Input */}
        <TextInput_/>
        {/*Image Upload*/}
        <ImageUploadComponent/>
      </View>
    </View>
  )
}