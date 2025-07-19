// import { useLocalSearchParams, useNavigation } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
// // import ImageUploadComponent from '../compNew/FormInput/ImageUploadComponent';
// import ImageUploadComponent from './../compNew/FormInput/ImageUploadComponent';
// import TextInput_ from './../compNew/FormInput/TextInput_';
// import Colors from './../constants/Colors';
// export default function FormInput() {
//   const params = useLocalSearchParams();
//   const navigation = useNavigation();
//   const [aiModel, setAiModel] = useState();

//   useEffect(() => {
//     console.log("Params:", params);
//     setAiModel(params)
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: params?.name

//     })
//   }, [])

//   return (
//     <View style={{
//       padding: 20,
//       backgroundColor: Colors.WHITE,
//       height: '100%'
//     }}>
//       <Text
//         style={{
//           fontSize: 20,
//           fontWeight: 'bold'
//         }}
//       >{aiModel?.name}</Text>

//       <View>

//         {aiModel?.userImageUpload !== "true" ?
//           <TextInput_ /> :
//           <ImageUploadComponent />}

//           <Text
//           style={{
//             color:Colors.GRAY,
//             marginVertical:5

//           }}

//           >Note: 1 Credit will be used to generate AI image</Text>

//           <TouchableOpacity style={{
//             padding:15,
//             backgroundColor:Colors.PRIMARY,
//             borderRadius:15,
//             marginVertical:30,
//             width:'100%',


//           }}>

//            <Text
//            style={{
//             textAlign:'center',
//             color: Colors.WHITE,
//             fontSize:20
//            }}
//            >Generate</Text>
//           </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// import { useLocalSearchParams, useNavigation } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
// import ImageUploadComponent from '../compNew/FormInput/ImageUploadComponent';
// import TextInput_ from '../compNew/FormInput/TextInput_';
// import Colors from '../constants/Colors';

// export default function FormInput() {
//   const params = useLocalSearchParams();
//   const navigation = useNavigation();
//   const [aiModel, setAiModel] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [userInput,setUserInput]=useState;
//   useEffect(() => {
//     console.log("Params:", params);
//     console.log("userImageUpload:", params?.userImageUpload, typeof params?.userImageUpload);
//     setAiModel(params || {});
//     setLoading(false);
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: params?.name,
//     });
//   }, []);

//   if (loading) return <Text>Loading...</Text>;

//   const OnGenerate=()=>{
//     console.log(userInput);

//   }

//   return (
//     <View style={{ padding: 20, backgroundColor: Colors.WHITE, height: '100%' }}>
//       <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{aiModel?.name}</Text>

//       <View>
//         {aiModel?.userImageUpload === "true" ? (
//           <ImageUploadComponent />
//         ) : (
//           <TextInput_ userInputValue={(value)=>setUserInput(value)}/>
//         )}
//         <Text style={{ color: Colors.GRAY, marginVertical: 5 }}>
//           Note: 1 Credit will be used to generate AI image
//         </Text>

//         <TouchableOpacity
//         onPress={()=> OnGenerate()}
//           style={{
//             padding: 15,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 15,
//             marginVertical: 30,
//             width: '100%',
//           }}
//         >
//           <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 20 }}>
//             Generate
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// import { useLocalSearchParams, useNavigation } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
// import ImageUploadComponent from '../compNew/FormInput/ImageUploadComponent';
// import TextInput_ from '../compNew/FormInput/TextInput_';
// import Colors from '../constants/Colors';
// import GlobalApi from '../services/GlobalApi';

// export default function FormInput() {
//   const params = useLocalSearchParams();
//   const navigation = useNavigation();
//   const [aiModel, setAiModel] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [userInput, setUserInput] = useState(''); // Fixed: Added initial value
//   const [userImage,setUserImage]=useState();

//   // useEffect(() => {
//   //   console.log("Params:", params);
//   //   console.log("userImageUpload:", params?.userImageUpload, typeof params?.userImageUpload);
//   //   setAiModel(params || {});
//   //   setLoading(false);
//   //   navigation.setOptions({
//   //     headerShown: true,
//   //     headerTitle: params?.name,
//   //   });
//   // }, []);
//   useEffect(() => {
//   console.log("Params received:", params);
//   console.log("userImageUpload:", params?.userImageUpload, typeof params?.userImageUpload);
//   setAiModel(params || {});
//   setLoading(false);
//   navigation.setOptions({
//     headerShown: true,
//     headerTitle: params?.name,
//   });
// }, []);

//   if (loading) return <Text>Loading...</Text>;

// //   const OnGenerate =async() => {
// //     const data={

// //       aiModelName:aiModel?.aiModelName,
// //       inputPrompt:userInput,
// //       defaultPrompt:aiModel?.defaultPrompt

// //     }

// //     // const result = await GlobalApi.AIGenerateImage(data);
// //     // console.log(result);
// //     const result = await GlobalApi.AIGenerateImage(data);
// // if (result?.result) {
// //   console.log("Image URL:", result.result);
// // } else {
// //   console.log("No image generated:", result);
// // }
// //   }
// const OnGenerate = async () => {
//   const data = {
//     aiModelName: aiModel?.aiModelName,
//     inputPrompt: userInput,
//     defaultPrompt: aiModel?.defaultPrompt
//   };
//   console.log("Data sent to API:", data); // Add this line
//   const result = await GlobalApi.AIGenerateImage(data);
//   if (result?.result) {
//     console.log("Image URL:", result.result);
//   } else {
//     console.log("No image generated:", result);
//   }
// };

//   return (
//     <View style={{ padding: 20, backgroundColor: Colors.WHITE, height: '100%' }}>
//       <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{aiModel?.name}</Text>

//       <View>
//         {aiModel?.userImageUpload === "true" ? (
//           <ImageUploadComponent  uploadedImage={(value)=>setUserImage(value)}/>
//         ) : (
//           <TextInput_ userInputValue={(value) => setUserInput(value)} />
//         )}
//         <Text style={{ color: Colors.GRAY, marginVertical: 5 }}>
//           Note: 1 Credit will be used to generate AI image
//         </Text>

//         <TouchableOpacity
//           onPress={() => OnGenerate()}
//           style={{
//             padding: 15,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 15,
//             marginVertical: 30,
//             width: '100%',
//           }}
//         >
//           <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 20 }}>
//             Generate
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import ImageUploadComponent from '../compNew/FormInput/ImageUploadComponent';
import TextInput_ from '../compNew/FormInput/TextInput_';
import Colors from '../constants/Colors';
import GlobalApi from '../services/GlobalApi';
import { UserDetailContext } from './../context/UserDetailContext';


export default function FormInput() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const [aiModel, setAiModel] = useState({});
  // const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState(''); // Fixed: Added initial value
  const [userImage, setUserImage] = useState();

  const [loading, setLoading] = useState(false);

  const [generatedImage, setGeneratedImage] = useState();

  const router = useRouter();

  const { userDetail, setUserDetail } = useContext(UserDetailContext)


  useEffect(() => {
    console.log("Params:", params);
    console.log("userImageUpload:", params?.userImageUpload, typeof params?.userImageUpload);
    setAiModel(params || {});
    setLoading(false);
    navigation.setOptions({
      headerShown: true,
      headerTitle: params?.name,
    });
  }, []);

  if (loading) return <Text>Loading...</Text>;

  const OnGenerate = async () => {

    setLoading(true);

    const data = {

      aiModelName: aiModel?.aiModelName,
      inputPrompt: userInput,
      defaultPrompt: aiModel?.defaultPrompt

    }

    try {


      const result = await GlobalApi.AIGenerateImage(data);
      const AIImage = result.data.result;
      console.log("Image", result.data.result);

      //To Update User Credits

      const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, { credits: Number(userDetail?.credits) - 1 });

      setUserDetail(updatedResult?.data.data);

      //Save generated image URL
      const SaveImageData = {

        imageUrl: AIImage,
        userEmail: userDetail?.userEmail

      }
      const SaveImageResult = await GlobalApi.AddAiImageRecord(SaveImageData);
      console.log(SaveImageResult.data.data);
      setLoading(false);

      router.push({
        pathname: 'viewAiImage',
        params:{
          imageUrl: AIImage,
          prompt: userInput
        }
      })
    }
    catch (e) {
      setLoading(false);
    }



  }

  return (
    <View style={{ padding: 20, backgroundColor: Colors.WHITE, height: '100%' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{aiModel?.name}</Text>

      <View>
        {aiModel?.userImageUpload === "true" ? (
          <ImageUploadComponent uploadedImage={(value) => setUserImage(value)} />
        ) : (
          <TextInput_ userInputValue={(value) => setUserInput(value)} />
        )}
        <Text style={{ color: Colors.GRAY, marginVertical: 5 }}>
          Note: 1 Credit will be used to generate AI image
        </Text>

        <TouchableOpacity
          onPress={() => OnGenerate()}
          disabled={loading}
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginVertical: 30,
            width: '100%',
          }}
        >
          {loading ? <ActivityIndicator size={'large'} color={'#fff'} /> : <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 20 }}>
            Generate
          </Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}