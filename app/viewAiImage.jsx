// import * as MediaLibrary from 'expo-media-library';
// import { useLocalSearchParams, useNavigation } from 'expo-router';
// import { useEffect } from 'react';
// import { Image, Text, TouchableOpacity, View } from 'react-native';
// import Colors from '../constants/Colors';

// export default function ViewAiImage() {
//     const navigation = useNavigation();
//     const params=useLocalSearchParams();
//     const [status,requestPermission]= MediaLibrary.usePermissions();
//     useEffect(()=>{
//         console.log(params);
//         navigation.setOptions({
//             headerShown:true,
//             headerTitle:'AI Generated Image'
//         },[])
//     })


//     const downloadImage=async()=>{
//         //Permission
//            try{
              
//                 if(!status?.granted)
//                 {
//                     const permissionResp=await requestPermission();
//                     if(!permissionResp?.granted)
//                     {
//                       showToast('No permission to download the image')  
//                        return ; 
//                     }
//                 }


//            }catch(e)
//            {

//            }
//         //Download Image
//     }
//   return (
//     <View style={{
//         padding:20,
//         backgroundColor:Colors.WHITE,
//         height: '100%'
//     }} >
//         <Image source={{uri:params?.imageUrl}} style={{
//             width:'100%',
//             height:400,
//             borderRadius:20
//         }}/>
      

//        <Text style={{
//         marginVertical:10,
//         fontSize:16,
//         color:Colors.PRIMARY
//        }}>PROMPT: {params?.prompt}</Text>



     

//        <View style={{
//         display:'flex',
//         flexDirection:'row',
//         gap:10,
//         marginTop:50
//        }}>

//         <TouchableOpacity 
         
//          onPress={downloadImage}
        
//         style={{
//             padding:15,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius:10,
//             width:'50%'

//         }}>
//             <Text style={{
//                 color: Colors.WHITE,
//                 textAlign:'center',
//                 fontSize:18
//             }}>Download</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={{
//             padding:15,
//             backgroundColor: Colors.YELLOW,
//             borderRadius:10,
//               width:'50%'
//         }}>
//             <Text style={{
//                 color: Colors.WHITE,
//                 textAlign:'center',
//                 fontSize:18
//             }}>Share</Text>
//         </TouchableOpacity>
//        </View>
//   <Text style={{
//         marginVertical:10,
//         fontSize:15,
//         color:Colors.GRAY
//        }}>NOTE: Image will be available only for the next 30 minutes</Text>
//     </View>
//   )
// }


// import * as FileSystem from 'expo-file-system';
// import * as MediaLibrary from 'expo-media-library';
// import { useLocalSearchParams, useNavigation } from 'expo-router';
// import { useEffect } from 'react';
// import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
// import Colors from '../constants/Colors';

// export default function ViewAiImage() {
//   const navigation = useNavigation();
//   const params = useLocalSearchParams();
//   const [status, requestPermission] = MediaLibrary.usePermissions();

//   useEffect(() => {
//     console.log(params);
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: 'AI Generated Image',
//     });
//   }, []); // Dependency array added to prevent warnings

//   const showToast = (message) => {
//     Alert.alert(
//       'Notification',
//       message,
//       [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
//       { cancelable: false }
//     );
//   };

//   const downloadImage = async () => {
//     // Permission
//     try {
//         console.log(status);
//       if (!status?.granted) {
//         const permissionResp = await requestPermission();
//         if (!permissionResp?.granted) {
//           showToast('No permission to download the image');
//           return;
//         }
//       }

//         // Download Image 
//         const fileUri=FileSystem.documentDirectory+Date.now()+"_AIrtify.jpg";
//         const {uri}=await FileSystem.downloadAsync(params?.imageUrl,fileUri);
        
//         //Used to Save in Gallery
//         const asset=await MediaLibrary.createAssetAsync(uri);
//         if(asset)
//         {
//             showToast('Image Downloaded Successfully');
//         }

//     } catch (e) {
//       console.error('Permission error:', e);
//       showToast('An error occurred while requesting permission');
//     }
  
//     // Placeholder: Add your download logic here using expo-file-system if needed
//     console.log('Downloading image:', params?.imageUrl);
//     showToast('Image download started'); // Placeholder toast
//   };

//   return (
//     <View
//       style={{
//         padding: 20,
//         backgroundColor: Colors.WHITE,
//         height: '100%',
//       }}
//     >
//       <Image
//         source={{ uri: params?.imageUrl }}
//         style={{
//           width: '100%',
//           height: 400,
//           borderRadius: 20,
//         }}
//       />
//       <Text
//         style={{
//           marginVertical: 10,
//           fontSize: 16,
//           color: Colors.PRIMARY,
//         }}
//       >
//         PROMPT: {params?.prompt}
//       </Text>
//       <View
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           gap: 10,
//           marginTop: 50,
//         }}
//       >
//         <TouchableOpacity
//           onPress={downloadImage}
//           style={{
//             padding: 15,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 10,
//             width: '50%',
//           }}
//         >
//           <Text
//             style={{
//               color: Colors.WHITE,
//               textAlign: 'center',
//               fontSize: 18,
//             }}
//           >
//             Download
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             padding: 15,
//             backgroundColor: Colors.YELLOW,
//             borderRadius: 10,
//             width: '50%',
//           }}
//         >
//           <Text
//             style={{
//               color: Colors.WHITE,
//               textAlign: 'center',
//               fontSize: 18,
//             }}
//           >
//             Share
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <Text
//         style={{
//           marginVertical: 10,
//           fontSize: 15,
//           color: Colors.GRAY,
//         }}
//       >
//         NOTE: Image will be available only for the next 30 minutes
//       </Text>
//     </View>
//   );
// }

import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react'; // Added useState for loading
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';

export default function ViewAiImage() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [loading, setLoading] = useState(false); // Added loading state

  useEffect(() => {
    console.log(params);
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'AI Generated Image',
    });
  }, []);

  const showToast = (message) => {
    Alert.alert(
      'Notification',
      message,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  const downloadImage = async () => {
    setLoading(true); // Start loading
    try {
      console.log('Permission status:', status);
      if (!status?.granted) {
        const permissionResp = await requestPermission();
        if (!permissionResp?.granted) {
          showToast('No permission to download the image');
          return;
        }
      }

      // Download Image
      const fileUri = FileSystem.documentDirectory + Date.now() + '_AIrtify.jpg';
      const downloadRes = await FileSystem.downloadAsync(params?.imageUrl, fileUri);
      if (downloadRes.status !== 200) {
        throw new Error('Download failed: ' + downloadRes.status);
      }

      // Save to Gallery
      const asset = await MediaLibrary.createAssetAsync(downloadRes.uri);
      if (asset) {
        showToast('Image downloaded successfully');
      } else {
        throw new Error('Failed to save image to gallery');
      }
    } catch (e) {
      console.error('Download or save error:', e);
      showToast('An error occurred while downloading the image: ' + e.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <Image
        source={{ uri: params?.imageUrl }}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 20,
        }}
      />
      <Text
        style={{
          marginVertical: 10,
          fontSize: 16,
          color: Colors.PRIMARY,
        }}
      >
        PROMPT: {params?.prompt}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          onPress={downloadImage}
          disabled={loading} // Disable button while loading
          style={{
            padding: 15,
            backgroundColor: loading ? Colors.GRAY : Colors.PRIMARY, // Gray out when loading
            borderRadius: 10,
            width: '50%',
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: 'center',
              fontSize: 18,
            }}
          >
            {loading ? 'Downloading...' : 'Download'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: Colors.YELLOW,
            borderRadius: 10,
            width: '50%',
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: 'center',
              fontSize: 18,
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginVertical: 10,
          fontSize: 15,
          color: Colors.GRAY,
        }}
      >
        NOTE: Image will be available only for the next 30 minutes
      </Text>
    </View>
  );
}