import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';


export default function ViewAiImage() {
    const navigation = useNavigation();
    const params=useLocalSearchParams();
    useEffect(()=>{
        console.log(params);
        navigation.setOptions({
            headerShown:true,
            headerTitle:'AI Generated Image'
        },[])
    })
  return (
    <View style={{
        padding:20
    }} >
        <Image source={{uri:params?.imageUrl}} style={{
            width:'100%',
            height:400,
            borderRadius:20
        }}/>
      

       <Text style={{
        marginVertical:10,
        fontSize:16,
        color:Colors.PRIMARY
       }}>PROMPT: {params?.prompt}</Text>



     

       <View style={{
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginTop:50
       }}>

        <TouchableOpacity style={{
            padding:15,
            backgroundColor: Colors.PRIMARY,
            borderRadius:10,
            width:'50%'

        }}>
            <Text style={{
                color: Colors.WHITE,
                textAlign:'center',
                fontSize:18
            }}>Download</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            padding:15,
            backgroundColor: Colors.YELLOW,
            borderRadius:10,
              width:'50%'
        }}>
            <Text style={{
                color: Colors.WHITE,
                textAlign:'center',
                fontSize:18
            }}>Share</Text>
        </TouchableOpacity>
       </View>
  <Text style={{
        marginVertical:10,
        fontSize:15,
        color:Colors.GRAY
       }}>NOTE: Image will be available only for the next 30 minutes</Text>
    </View>
  )
}