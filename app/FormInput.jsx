import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function FormInput() {
  const params=useLocalSearchParams();

  useEffect(()=>{
    console.log("Params:",params);
  },[])

  return (
    <View>
      <Text>FormInput</Text>
    </View>
  )
}