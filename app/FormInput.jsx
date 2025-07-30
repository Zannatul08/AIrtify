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



// import { Cloudinary } from '@cloudinary/url-gen';
// import { upload } from 'cloudinary-react-native';
// import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
// import { useContext, useEffect, useState } from 'react';
// import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
// import ImageUploadComponent from '../compNew/FormInput/ImageUploadComponent';
// import TextInput_ from '../compNew/FormInput/TextInput_';
// import Colors from '../constants/Colors';
// import GlobalApi from '../services/GlobalApi';
// import { UserDetailContext } from './../context/UserDetailContext';

// export default function FormInput() {
//   const params = useLocalSearchParams();
//   const navigation = useNavigation();
//   const [aiModel, setAiModel] = useState({});
//   // const [loading, setLoading] = useState(true);
//   const [userInput, setUserInput] = useState(''); // Fixed: Added initial value
//   const [userImage, setUserImage] = useState();

//   const [loading, setLoading] = useState(false);

//   const [generatedImage, setGeneratedImage] = useState();

//   const router = useRouter();

//   const { userDetail, setUserDetail } = useContext(UserDetailContext)


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

//   const OnGenerate = async () => {

 

//     const data = {

//       aiModelName: aiModel?.aiModelName,
//       inputPrompt: userInput,
//       defaultPrompt: aiModel?.defaultPrompt

//     }

//     if(aiModel?.userImageUpload=='false' || aiModel?.userImageUpload== false )
//     {
//       TextToImage();
//     }
//     else{
//       ImageToAiImage()
//     }
    

//   }

//   const TextToImage=async()=>{
//     setLoading(true)
//      try {


//       const result = await GlobalApi.AIGenerateImage(data);
//       const AIImage = result.data.result;
//       console.log("Image", result.data.result);

//       //To Update User Credits

//       const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, { credits: Number(userDetail?.credits) - 1 });

//       setUserDetail(updatedResult?.data.data);

//       //Save generated image URL
//       const SaveImageData = {

//         imageUrl: AIImage,
//         userEmail: userDetail?.userEmail

//       }
//       const SaveImageResult = await GlobalApi.AddAiImageRecord(SaveImageData);
//       console.log(SaveImageResult.data.data);
//       setLoading(false);

//       router.push({
//         pathname: 'viewAiImage',
//         params:{
//           imageUrl: AIImage,
//           prompt: userInput
//         }
//       })
//     }
//     catch (e) {
//       setLoading(false);
//     }
//   }


//   const ImageToAiImage=async()=>{
//     setLoading(true)
//     //Upload the Image to Cloudinary 
//       const cld = new Cloudinary({
//     cloud: {
//       cloudName: 'dud6rzpa2'
//     },
//     url: {
//       secure: true
//     }
//   });

//   const options = {
//     upload_preset: 'uzasy1rr',
//     unsigned: true,
//   }

//     await upload(cld, {file: userImage , options: options, callback: (error, response) => {
//         //.. handle response
//         console.log(response)
//         setLoading(false)
//     }})

//     //Generate AI Image
//   }


//   return (
//     <View style={{ padding: 20, backgroundColor: Colors.WHITE, height: '100%' }}>
//       <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{aiModel?.name}</Text>

//       <View>
//         {aiModel?.userImageUpload === "true" ? (
//           <ImageUploadComponent uploadedImage={(value) => setUserImage(value)} />
//         ) : (
//           <TextInput_ userInputValue={(value) => setUserInput(value)} />
//         )}
//         <Text style={{ color: Colors.GRAY, marginVertical: 5 }}>
//           Note: 1 Credit will be used to generate AI image
//         </Text>

//         <TouchableOpacity
//           onPress={() => OnGenerate()}
//           disabled={loading}
//           style={{
//             padding: 15,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 15,
//             marginVertical: 30,
//             width: '100%',
//           }}
//         >
//           {loading ? <ActivityIndicator size={'large'} color={'#fff'} /> : <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 20 }}>
//             Generate
//           </Text>}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// This one worked using chatgpt grok

// import axios from 'axios';
// import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
// import { useContext, useEffect, useState } from 'react';
// import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
// import ImageUploadComponent from '../compNew/FormInput/ImageUploadComponent';
// import TextInput_ from '../compNew/FormInput/TextInput_';
// import Colors from '../constants/Colors';
// import { UserDetailContext } from '../context/UserDetailContext';
// import GlobalApi from '../services/GlobalApi';

// export default function FormInput() {
//   const params = useLocalSearchParams();
//   const navigation = useNavigation();
//   const [aiModel, setAiModel] = useState({});
//   const [userInput, setUserInput] = useState(''); // Initial value
//   const [userImage, setUserImage] = useState();
//   const [loading, setLoading] = useState(false);
//   const [generatedImage, setGeneratedImage] = useState();
//   const router = useRouter();
//   const { userDetail, setUserDetail } = useContext(UserDetailContext);

//   useEffect(() => {
//     console.log('Params:', params);
//     console.log('userImageUpload:', params?.userImageUpload, typeof params?.userImageUpload);
//     setAiModel(params || {});
//     setLoading(false);
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: params?.name,
//     });
//   }, []);

//   if (loading) return <Text>Loading...</Text>;

//   const OnGenerate = async () => {
//     // Tutorial line: This call expects no parameters, but your GlobalApi.AIGenerateImage requires a 'data' object.
//     // Adjust with appropriate data (e.g., { aiModelName, inputPrompt }) to match your implementation.
//     try {
//       const result = await GlobalApi.AIGenerateImage();
//       console.log('Tutorial Test Result:', result.data);
//     } catch (error) {
//       console.error('Tutorial Test Failed:', error);
//     }

//     const data = {
//       aiModelName: aiModel?.aiModelName,
//       inputPrompt: userInput,
//       defaultPrompt: aiModel?.defaultPrompt,
//     };

//     if (aiModel?.userImageUpload === 'false' || aiModel?.userImageUpload === false) {
//       TextToImage();
//     } else {
//       ImageToAiImage();
//     }
//   };

//   const TextToImage = async () => {
//     setLoading(true);
//     try {
//       const result = await GlobalApi.AIGenerateImage(data);
//       const AIImage = result.data.result;
//       console.log('Image', result.data.result);

//       // Update User Credits
//       const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
//         credits: Number(userDetail?.credits) - 1,
//       });
//       setUserDetail(updatedResult?.data.data);

//       // Save generated image URL
//       const SaveImageData = {
//         imageUrl: AIImage,
//         userEmail: userDetail?.userEmail,
//       };
//       const SaveImageResult = await GlobalApi.AddAiImageRecord(SaveImageData);
//       console.log(SaveImageResult.data.data);
//       setLoading(false);

//       router.push({
//         pathname: 'viewAiImage',
//         params: {
//           imageUrl: AIImage,
//           prompt: userInput,
//         },
//       });
//     } catch (e) {
//       console.error('TextToImage failed:', e);
//       setLoading(false);
//     }
//   };

//   const ImageToAiImage = async () => {
//     setLoading(true);
//     try {
//       const formData = new FormData();
//       formData.append('file', {
//         uri: userImage,
//         type: 'image/jpeg',
//         name: 'upload.jpg',
//       });
//       formData.append('upload_preset', 'uzasy1rr');

//       // Wrap axios call in a Promise to simulate the tutorial's upload callback
//       await new Promise((resolve, reject) => {
//         axios
//           .post('https://api.cloudinary.com/v1_1/dud6rzpa2/upload', formData, {
//             headers: { 'Content-Type': 'multipart/form-data' },
//           })
//           .then(async (response) => {
//             // Tutorial's async callback structure
//             const callback = async (error, response) => {
//               if (error) {
//                 throw new Error(error.message);
//               }
//               console.log('Uploaded Image URL:', response.secure_url);

//               // Construct data object as per the previous tutorial snippet
//               const data = {
//                 defaultPrompt: aiModel?.defaultPrompt,
//                 userImageUrl: response.secure_url, // Use the uploaded image URL
//                 aiModelName: aiModel?.aiModelName
     
//               };

//               // Call GlobalApi.AIGenerateImage with the constructed data
//               const result = await GlobalApi.AIGenerateImage(data);
              
//               const AIImage = result.data.result;
//               console.log('AI Generated Image:', AIImage);

//               // Update User Credits
//               const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
//                 credits: Number(userDetail?.credits) - 1,
//               });
//               setUserDetail(updatedResult?.data.data);

//               // Save generated image URL
//               const saveImageData = {
//                 imageUrl: AIImage,
//                 userEmail: userDetail?.userEmail,
//               };
//               const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
//               console.log(saveImageResult.data.data);

//               setLoading(false);
//               router.push({
//                 pathname: 'viewAiImage',
//                 params: {
//                   imageUrl: AIImage,
//                   prompt: userInput,
//                 },
//               });
//             };

//             // Execute the callback
//             await callback(response.data.error, response.data);
//             resolve();
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     } catch (error) {
//       console.error('ImageToAiImage failed:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={{ padding: 20, backgroundColor: Colors.WHITE, height: '100%' }}>
//       <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{aiModel?.name}</Text>
//       <View>
//         {aiModel?.userImageUpload === 'true' ? (
//           <ImageUploadComponent uploadedImage={(value) => setUserImage(value)} />
//         ) : (
//           <TextInput_ userInputValue={(value) => setUserInput(value)} />
//         )}
//         <Text style={{ color: Colors.GRAY, marginVertical: 5 }}>
//           Note: 1 Credit will be used to generate AI image
//         </Text>
//         <TouchableOpacity
//           onPress={() => OnGenerate()}
//           disabled={loading}
//           style={{
//             padding: 15,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 15,
//             marginVertical: 30,
//             width: '100%',
//           }}
//         >
//           {loading ? (
//             <ActivityIndicator size={'large'} color={'#fff'} />
//           ) : (
//             <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 20 }}>Generate</Text>
//           )}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

//Working but made some changes
// import axios from 'axios';
// import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
// import { useContext, useEffect, useState } from 'react';
// import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
// import ImageUploadComponent from '../compNew/FormInput/ImageUploadComponent';
// import TextInput_ from '../compNew/FormInput/TextInput_';
// import Colors from '../constants/Colors';
// import { UserDetailContext } from '../context/UserDetailContext';
// import GlobalApi from '../services/GlobalApi';

// export default function FormInput() {
//   const params = useLocalSearchParams();
//   const navigation = useNavigation();
//   const [aiModel, setAiModel] = useState({});
//   const [userInput, setUserInput] = useState(''); // Initial value
//   const [userImage, setUserImage] = useState();
//   const [loading, setLoading] = useState(false);
//   const [generatedImage, setGeneratedImage] = useState();
//   const router = useRouter();
//   const { userDetail, setUserDetail } = useContext(UserDetailContext);

//   useEffect(() => {
//     console.log('Params:', params);
//     console.log('userImageUpload:', params?.userImageUpload, typeof params?.userImageUpload);
//     setAiModel(params || {});
//     setLoading(false);
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: params?.name,
//     });
//   }, []);

//   if (loading) return <Text>Loading...</Text>;

//   const OnGenerate = async () => {
    
//  const data = {
//       aiModelName: aiModel?.aiModelName,
//       inputPrompt: userInput,
//       defaultPrompt: aiModel?.defaultPrompt,
//     };
//     if (aiModel?.userImageUpload === 'false' || aiModel?.userImageUpload === false) {
//       await TextToImage(data); // Pass data explicitly
//     } else {
//       await ImageToAiImage();
//     }
//   };

//   const TextToImage = async (data) => {
//     setLoading(true);
   
//     try {
//       const result = await GlobalApi.AIGenerateImage(data);
//       const AIImage = Array.isArray(result.data.result) ? result.data.result[0] : result.data.result;
//       console.log('Image', AIImage);

//       // Update User Credits
//       const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
//         credits: Number(userDetail?.credits) - 1,
//       });
//       setUserDetail(updatedResult?.data.data);

//       // Save generated image URL
//       const SaveImageData = {
//         imageUrl: AIImage,
//         userEmail: userDetail?.userEmail,
//       };
//       const SaveImageResult = await GlobalApi.AddAiImageRecord(SaveImageData);
//       console.log(SaveImageResult.data.data);
//       setLoading(false);

//       router.push({
//         pathname: 'viewAiImage',
//         params: {
//           imageUrl: AIImage,
//           prompt: userInput,
//         },
//       });
//     } catch (e) {
//       console.error('TextToImage failed:', e);
//       setLoading(false);
//     }
//   };

//   const ImageToAiImage = async () => {
//     setLoading(true);
//     try {
//       console.log('userImage before upload:', userImage); // Debug log
//       const formData = new FormData();
//       formData.append('file', {
//         uri: userImage,
//         type: 'image/jpeg',
//         name: 'upload.jpg',
//       });
//       formData.append('upload_preset', 'uzasy1rr');

//       // Wrap axios call in a Promise to simulate the tutorial's upload callback
//       await new Promise((resolve, reject) => {
//         axios
//           .post('https://api.cloudinary.com/v1_1/dud6rzpa2/upload', formData, {
//             headers: { 'Content-Type': 'multipart/form-data' },
//           })
//           .then(async (response) => {
//             // Tutorial's async callback structure
//             const callback = async (error, response) => {
//               if (error) {
//                 throw new Error(error.message);
//               }
//               console.log('Uploaded Image URL:', response.secure_url);

//               // Construct data object as per the tutorial snippet
//               const data = {
//                 defaultPrompt: aiModel?.defaultPrompt,
//                 userImageUrl: response.secure_url,
//                 aiModelName: aiModel?.aiModelName,
//               };

//               // Call GlobalApi.AIGenerateImage with the constructed data
//               const result = await GlobalApi.AIGenerateImage(data);
//               const AIImage = Array.isArray(result.data.result) ? result.data.result[0] : result.data.result;
//               console.log('AI Generated Image:', AIImage);
// //copied
//               router.push({
//         pathname: 'viewAiImage',
//         params: {
//           imageUrl: AIImage,
//           prompt: aiModel?.name
//         },
//       });

//               // Update User Credits
//               const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
//                 credits: Number(userDetail?.credits) - 1,
//               });
//               setUserDetail(updatedResult?.data.data);

//               // Save generated image URL
//               const saveImageData = {
//                 imageUrl: AIImage,
//                 userEmail: userDetail?.userEmail,
//               };
//               const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
//               console.log(saveImageResult.data.data);

//               setLoading(false);
//               router.push({
//                 pathname: 'viewAiImage',
//                 params: {
//                   imageUrl: AIImage,
//                   prompt: userInput,
//                 },
//               });
//             };

//             // Execute the callback
//             await callback(response.data.error, response.data);
//             resolve();
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     } catch (error) {
//       console.error('ImageToAiImage failed:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={{ padding: 20, backgroundColor: Colors.WHITE, height: '100%' }}>
//       <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{aiModel?.name}</Text>
//       <View>
//         {aiModel?.userImageUpload === 'true' ? (
//           <ImageUploadComponent
//             uploadedImage={(value) => {
//               console.log('Received userImage:', value); // Debug log
//               setUserImage(value);
//             }}
//           />
//         ) : (
//           <TextInput_ userInputValue={(value) => setUserInput(value)} />
//         )}
//         <Text style={{ color: Colors.GRAY, marginVertical: 5 }}>
//           Note: 1 Credit will be used to generate AI image
//         </Text>
//         <TouchableOpacity
//           onPress={() => OnGenerate()}
//           disabled={loading}
//           style={{
//             padding: 15,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 15,
//             marginVertical: 30,
//             width: '100%',
//           }}
//         >
//           {loading ? (
//             <ActivityIndicator size={'large'} color={'#fff'} />
//           ) : (
//             <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 20 }}>Generate</Text>
//           )}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

//Earlier both issue fixed

// import axios from 'axios';
// import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
// import { useContext, useEffect, useState } from 'react';
// import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
// import ImageUploadComponent from '../compNew/FormInput/ImageUploadComponent';
// import TextInput_ from '../compNew/FormInput/TextInput_';
// import Colors from '../constants/Colors';
// import { UserDetailContext } from '../context/UserDetailContext';
// import GlobalApi from '../services/GlobalApi';

// export default function FormInput() {
//   const params = useLocalSearchParams();
//   const navigation = useNavigation();
//   const [aiModel, setAiModel] = useState({});
//   const [userInput, setUserInput] = useState('');
//   const [userImage, setUserImage] = useState();
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const { userDetail, setUserDetail } = useContext(UserDetailContext);

//   useEffect(() => {
//     console.log('Params:', params);
//     console.log('userImageUpload:', params?.userImageUpload, typeof params?.userImageUpload);
//     setAiModel(params || {});
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: params?.name,
//     });
//   }, []);

//   const OnGenerate = async () => {
//     if (aiModel?.userImageUpload === 'true' && !userImage) {
//       console.error('Error: No image provided for image-to-image generation');
//       return;
//     }
//     if (aiModel?.userImageUpload !== 'true' && !userInput.trim()) {
//       console.error('Error: No prompt provided for text-to-image generation');
//       return;
//     }

//     setLoading(true);
//     const data = {
//       aiModelName: aiModel?.aiModelName,
//       inputPrompt: userInput,
//       defaultPrompt: aiModel?.defaultPrompt,
//     };

//     if (aiModel?.userImageUpload === 'true') {
//       await ImageToAiImage();
//     } else {
//       await TextToImage(data);
//     }
//   };

//   const TextToImage = async (data) => {
//     try {
//       console.log('TextToImage data:', data);
//       const result = await GlobalApi.AIGenerateImage(data);
//       const AIImage = Array.isArray(result.data.result) ? result.data.result[0] : result.data.result;
//       console.log('Generated Image URL:', AIImage);

//       const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
//         credits: Number(userDetail?.credits) - 1,
//       });
//       setUserDetail(updatedResult?.data.data);

//       const saveImageData = {
//         imageUrl: AIImage,
//         userEmail: userDetail?.userEmail,
//       };
//       const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
//       console.log('Saved Image Record:', saveImageResult.data.data);

//       router.push({
//         pathname: 'viewAiImage',
//         params: {
//           imageUrl: AIImage,
//           prompt: userInput,
//         },
//       });
//     } catch (e) {
//       console.error('TextToImage failed:', e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const ImageToAiImage = async () => {
//     try {
//       console.log('userImage before upload:', userImage);
//       const formData = new FormData();
//       formData.append('file', {
//         uri: userImage,
//         type: 'image/jpeg',
//         name: 'upload.jpg',
//       });
//       formData.append('upload_preset', 'uzasy1rr');

//       const response = await axios.post('https://api.cloudinary.com/v1_1/dud6rzpa2/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       if (response.data.error) {
//         throw new Error(response.data.error.message);
//       }

//       console.log('Uploaded Image URL:', response.data.secure_url);
//       const data = {
//         defaultPrompt: aiModel?.defaultPrompt,
//         userImageUrl: response.data.secure_url,
//         aiModelName: aiModel?.aiModelName,
//       };

//       console.log('ImageToAiImage data:', data);
//       const result = await GlobalApi.AIGenerateImage(data);
//       const AIImage = Array.isArray(result.data.result) ? result.data.result[0] : result.data.result;
//       console.log('AI Generated Image:', AIImage);

//       const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
//         credits: Number(userDetail?.credits) - 1,
//       });
//       setUserDetail(updatedResult?.data.data);

//       const saveImageData = {
//         imageUrl: AIImage,
//         userEmail: userDetail?.userEmail,
//       };
//       const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
//       console.log('Saved Image Record:', saveImageResult.data.data);

//       router.push({
//         pathname: 'viewAiImage',
//         params: {
//           imageUrl: AIImage,
//           prompt: userInput || aiModel?.name, // Fallback to aiModel.name if userInput is empty
//         },
//       });
//     } catch (error) {
//       console.error('ImageToAiImage failed:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={{ padding: 20, backgroundColor: Colors.WHITE, height: '100%' }}>
//       <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{aiModel?.name}</Text>
//       <View>
//         {aiModel?.userImageUpload === 'true' ? (
//           <ImageUploadComponent
//             uploadedImage={(value) => {
//               console.log('Received userImage:', value);
//               setUserImage(value);
//             }}
//           />
//         ) : (
//           <TextInput_ userInputValue={(value) => setUserInput(value)} />
//         )}
//         <Text style={{ color: Colors.GRAY, marginVertical: 5 }}>
//           Note: 1 Credit will be used to generate AI image
//         </Text>
//         <TouchableOpacity
//           onPress={() => OnGenerate()}
//           disabled={loading}
//           style={{
//             padding: 15,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 15,
//             marginVertical: 30,
//             width: '100%',
//           }}
//         >
//           {loading ? (
//             <ActivityIndicator size={'large'} color={'#fff'} />
//           ) : (
//             <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 20 }}>Generate</Text>
//           )}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// import axios from 'axios';
// import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
// import { useContext, useEffect, useState } from 'react';
// import { ActivityIndicator, Alert, Text, TouchableOpacity, View } from 'react-native';
// import ImageUploadComponent from '../compNew/FormInput/ImageUploadComponent';
// import TextInput_ from '../compNew/FormInput/TextInput_';
// import Colors from '../constants/Colors';
// import { UserDetailContext } from '../context/UserDetailContext';
// import GlobalApi from '../services/GlobalApi';

// export default function FormInput() {
//   const params = useLocalSearchParams();
//   const navigation = useNavigation();
//   const [aiModel, setAiModel] = useState({});
//   const [userInput, setUserInput] = useState('');
//   const [userImage, setUserImage] = useState();
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const { userDetail, setUserDetail } = useContext(UserDetailContext);

//   useEffect(() => {
//     console.log('Params:', params);
//     console.log('userImageUpload:', params?.userImageUpload, typeof params?.userImageUpload);
//     setAiModel(params || {});
//     navigation.setOptions({
//       headerShown: true,
//       headerTitle: params?.name || 'Generate',
//     });
//   }, []); // Empty dependency array to run once on mount, matching original behavior

//   const showToast = (message) => {
//     Alert.alert(
//       'Notification',
//       message,
//       [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
//       { cancelable: false }
//     );
//   };

//   const OnGenerate = async () => {
//     if (userDetail.credits <= 0) {
//       showToast('You do not have enough credits to generate an image.');
//       return;
//     }

//     if (aiModel?.userImageUpload === 'true' && !userImage) {
//       console.error('Error: No image provided for image-to-image generation');
//       showToast('Please upload an image for image-to-image generation.');
//       return;
//     }
//     if (aiModel?.userImageUpload !== 'true' && !userInput.trim()) {
//       console.error('Error: No prompt provided for text-to-image generation');
//       showToast('Please enter a prompt for text-to-image generation.');
//       return;
//     }

//     setLoading(true);
//     let data = {
//       inputPrompt: userInput,
//       defaultPrompt: aiModel?.defaultPrompt || 'High quality image',
//     };

//     const feature = params?.feature || aiModel?.feature || 'default'; // Corrected typo from original
//     switch (feature) {
//       case 'remove-bg':
//         data.aiModelName = 'cjwbw/rembg:fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003';
//         break;
//       case 'upscale':
//         data.aiModelName = 'nightmareai/real-esrgan:f121d640bd286e1fdc67f9799164c1d5be36ff74576ee11c803ae5b665dd46aa';
//         data.scale = 2;
//         break;
//       case 'avatar':
//       case 'true':
//         data.aiModelName = 'bytedance/pulid:43d309c37ab4e62361e5e29b8e9e867fb2dcbcec77ae91206a8d95ac5dd451a0';
//         data.prompt = userInput || aiModel?.defaultPrompt || 'portrait, impressionist painting, loose brushwork, vibrant color, light and shadow play';
//         break;
//       default:
//         data.aiModelName = aiModel?.aiModelName || 'bytedance/sdxl-lightning-4step:6f7a773af6fc3e8de9d5a3c00be77c17308914bf67772726aff83496ba1e3bbe';
//     }

//     if (aiModel?.userImageUpload === 'true') {
//       await ImageToAiImage(data);
//     } else {
//       await TextToImage(data);
//     }
//   };

//   // const TextToImage = async (data) => {
//   //   try {
//   //     console.log('TextToImage data:', data);
//   //     const result = await GlobalApi.AIGenerateImage(data);
//   //     const AIImage = Array.isArray(result.data.result) ? result.data.result[0] : result.data.result;
//   //     console.log('Generated Image URL:', AIImage);

//   //     const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
//   //       credits: Number(userDetail?.credits) - 1,
//   //     });
//   //     setUserDetail(updatedResult?.data.data);

//   //     // const saveImageData = {
//   //     //   imageUrl: AIImage,
//   //     //   userEmail: userDetail?.userEmail,
//   //     // };
//   //     // const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
//   //     // console.log('Saved Image Record:', saveImageResult.data.data);

//   //     // router.push({
//   //     //   pathname: 'viewAiImage',
//   //     //   params: {
//   //     //     imageUrl: AIImage,
//   //     //     prompt: userInput,
//   //     //   },
//   //     // });


//   //     UploadImageAndSave(AIImage);

//   //   } catch (e) {
//   //     console.error('TextToImage failed:', e);
//   //     showToast('An error occurred while generating the image.');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };


//   const TextToImage = async (data) => {
//   try {
//     console.log('TextToImage data:', data);
//     const result = await GlobalApi.AIGenerateImage(data);
//     const AIImage = Array.isArray(result.data.result) ? result.data.result[0] : result.data.result;
//     console.log('Generated Image URL:', AIImage);

//     const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
//       credits: Number(userDetail?.credits) - 1,
//     });
//     console.log('Updated User Credits:', updatedResult.data);
//     setUserDetail(updatedResult?.data.data);

//     // Save the generated image URL directly to Strapi
//     const saveImageData = {
//       imageUrl: AIImage,
//       userEmail: userDetail?.userEmail,
//     };
//     console.log('Saving Image Data:', saveImageData);
//     const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
//     console.log('Saved Image Record:', JSON.stringify(saveImageResult.data, null, 2));

//     router.push({
//       pathname: 'viewAiImage',
//       params: {
//         imageUrl: AIImage,
//         prompt: userInput,
//       },
//     });
//   } catch (e) {
//     console.error('TextToImage failed:', e.message, e.stack);
//     showToast('An error occurred while generating the image: ' + e.message);
//   } finally {
//     setLoading(false);
//   }
// };

//   const ImageToAiImage = async (data) => {
//   try {
//     console.log('userImage before upload:', userImage);
//     const formData = new FormData();
//     formData.append('file', {
//       uri: userImage,
//       type: 'image/jpeg',
//       name: 'upload.jpg',
//     });
//     formData.append('upload_preset', 'uzasy1rr');

//     const response = await axios.post('https://api.cloudinary.com/v1_1/dud6rzpa2/upload', formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });

//     if (response.data.error) {
//       throw new Error(response.data.error.message);
//     }
//     console.log('Cloudinary Uploaded Image URL:', response.data.secure_url);

//     const imageData = {
//       ...data,
//       userImageUrl: response.data.secure_url,
//     };
//     console.log('ImageToAiImage data:', imageData);

//     const result = await GlobalApi.AIGenerateImage(imageData);
//     const AIImage = Array.isArray(result.data.result) ? result.data.result[0] : result.data.result;
//     console.log('AI Generated Image:', AIImage);

//     const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
//       credits: Number(userDetail?.credits) - 1,
//     });
//     console.log('Updated User Credits:', updatedResult.data);
//     setUserDetail(updatedResult?.data.data);

//     const saveImageData = {
//       imageUrl: AIImage,
//       userEmail: userDetail?.userEmail,
//     };
//     console.log('Saving Image Data:', saveImageData);
//     const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
//     console.log('Saved Image Record:', JSON.stringify(saveImageResult.data, null, 2));

//     router.push({
//       pathname: 'viewAiImage',
//       params: {
//         imageUrl: AIImage,
//         prompt: userInput || aiModel?.name,
//       },
//     });
//   } catch (error) {
//     console.error('ImageToAiImage failed:', error.message, error.stack);
//     showToast('An error occurred while processing the image: ' + error.message);
//   } finally {
//     setLoading(false);
//   }
// };

// //   const UploadImageAndSave = async(AIImage) => {

// //    //Upload the Image to Cloudinary Storage
// //   const formData = new FormData();
// // formData.append('file', {
// //   uri: AIImage,
// //   type: 'image/jpeg',
// //   name: 'upload.jpg',
// // });
// // formData.append('upload_preset', 'uzasy1rr');

// // const response = await axios.post('https://api.cloudinary.com/v1_1/dud6rzpa2/upload', formData, {
// //   headers: { 'Content-Type': 'multipart/form-data' },
// // });

// // if (response.data.error) {
// //   throw new Error(response.data.error.message);
// // }
// //    //Save generated image URL
// //     const saveImageData = {
// //       imageUrl: response?.url,
// //       userEmail: userDetail?.userEmail,
// //     };
// //     const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
// //     console.log('Saved Image Record:', saveImageResult.data.data);

// //     router.push({
// //       pathname: 'viewAiImage',
// //       params: {
// //         imageUrl: AIImage,
// //         prompt: userInput,
// //       },
// //     });
// //   }

// // const UploadImageAndSave = async (AIImage) => {
// //   try {
// //     // Upload the Image to Cloudinary Storage
// //     const formData = new FormData();
// //     formData.append('file', {
// //       uri: AIImage, // Ensure AIImage is a valid local URI
// //       type: 'image/jpeg',
// //       name: 'upload.jpg',
// //     });
// //     formData.append('upload_preset', 'uzasy1rr');

// //     const response = await axios.post('https://api.cloudinary.com/v1_1/dud6rzpa2/upload', formData, {
// //       headers: { 'Content-Type': 'multipart/form-data' },
// //     });

// //     if (response.data.error) {
// //       throw new Error(response.data.error.message);
// //     }

// //     // Save the generated image URL
// //     const saveImageData = {
// //       imageUrl: response.data.secure_url, // Use secure_url from Cloudinary response
// //       userEmail: userDetail?.userEmail,
// //     };
// //     const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
// //     console.log('Saved Image Record:', saveImageResult.data.data);

// //     router.push({
// //       pathname: 'viewAiImage',
// //       params: {
// //         imageUrl: AIImage,
// //         prompt: userInput,
// //       },
// //     });
// //   } catch (error) {
// //     console.error('UploadImageAndSave failed:', error);
// //     showToast('An error occurred while uploading the image to Cloudinary.');
// //   }
// // };
// const UploadImageAndSave = async (AIImage) => {
//   try {
//     console.log('Attempting to upload AIImage to Cloudinary:', AIImage);
//     // Since AIImage is a URL, we need to fetch it first
//     const response = await axios.get(AIImage, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data, 'binary');

//     const formData = new FormData();
//     formData.append('file', {
//       uri: `data:image/jpeg;base64,${buffer.toString('base64')}`,
//       type: 'image/jpeg',
//       name: 'upload.jpg',
//     });
//     formData.append('upload_preset', 'uzasy1rr');

//     const uploadResponse = await axios.post('https://api.cloudinary.com/v1_1/dud6rzpa2/upload', formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });

//     if (uploadResponse.data.error) {
//       throw new Error(uploadResponse.data.error.message);
//     }
//     console.log('Cloudinary Upload Response:', uploadResponse.data.secure_url);

//     // Save the Cloudinary URL to Strapi
//     const saveImageData = {
//       imageUrl: uploadResponse.data.secure_url,
//       userEmail: userDetail?.userEmail,
//     };
//     const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
//     console.log('Saved Image Record:', saveImageResult.data);

//     router.push({
//       pathname: 'viewAiImage',
//       params: {
//         imageUrl: uploadResponse.data.secure_url,
//         prompt: userInput,
//       },
//     });
//   } catch (error) {
//     console.error('UploadImageAndSave failed:', error.message, error.stack);
//     showToast('An error occurred while uploading the image to Cloudinary: ' + error.message);
//   } finally {
//     setLoading(false);
//   }
// };


//   return (
//     <View style={{ padding: 20, backgroundColor: Colors.WHITE, height: '100%' }}>
//       <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{aiModel?.name}</Text>
//       <View>
//         {aiModel?.userImageUpload === 'true' ? (
//           <ImageUploadComponent
//             uploadedImage={(value) => {
//               console.log('Received userImage:', value);
//               setUserImage(value);
//             }}
//           />
//         ) : (
//           <TextInput_ userInputValue={(value) => setUserInput(value)} />
//         )}
//         <Text style={{ color: Colors.GRAY, marginVertical: 5 }}>
//           Note: 1 Credit will be used to generate AI image
//         </Text>
//         <TouchableOpacity
//           onPress={() => OnGenerate()}
//           disabled={loading}
//           style={{
//             padding: 15,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 15,
//             marginVertical: 30,
//             width: '100%',
//           }}
//         >
//           {loading ? (
//             <ActivityIndicator size={'large'} color={'#fff'} />
//           ) : (
//             <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 20 }}>Generate</Text>
//           )}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

import axios from 'axios';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Text, TouchableOpacity, View } from 'react-native';
import ImageUploadComponent from '../compNew/FormInput/ImageUploadComponent';
import TextInput_ from '../compNew/FormInput/TextInput_';
import Colors from '../constants/Colors';
import { UserDetailContext } from '../context/UserDetailContext';
import GlobalApi from '../services/GlobalApi';

export default function FormInput() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const [aiModel, setAiModel] = useState({});
  const [userInput, setUserInput] = useState('');
  const [userImage, setUserImage] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  useEffect(() => {
    console.log('Params:', params);
    console.log('userImageUpload:', params?.userImageUpload, typeof params?.userImageUpload);
    setAiModel(params || {});
    navigation.setOptions({
      headerShown: true,
      headerTitle: params?.name || 'Generate',
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

  const OnGenerate = async () => {
    if (userDetail.credits <= 0) {
      showToast('You do not have enough credits to generate an image.');
      return;
    }

    if (aiModel?.userImageUpload === 'true' && !userImage) {
      console.error('Error: No image provided for image-to-image generation');
      showToast('Please upload an image for image-to-image generation.');
      return;
    }
    if (aiModel?.userImageUpload !== 'true' && !userInput.trim()) {
      console.error('Error: No prompt provided for text-to-image generation');
      showToast('Please enter a prompt for text-to-image generation.');
      return;
    }

    setLoading(true);
    let data = {
      inputPrompt: userInput,
      defaultPrompt: aiModel?.defaultPrompt || 'High quality image',
    };

    const feature = params?.feature || aiModel?.feature || 'default';
    switch (feature) {
      case 'remove-bg':
        data.aiModelName = 'cjwbw/rembg:fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003';
        break;
      case 'upscale':
        data.aiModelName = 'nightmareai/real-esrgan:f121d640bd286e1fdc67f9799164c1d5be36ff74576ee11c803ae5b665dd46aa';
        data.scale = 2;
        break;
      case 'avatar':
      case 'true':
        data.aiModelName = 'bytedance/pulid:43d309c37ab4e62361e5e29b8e9e867fb2dcbcec77ae91206a8d95ac5dd451a0';
        data.prompt = userInput || aiModel?.defaultPrompt || 'portrait, impressionist painting, loose brushwork, vibrant color, light and shadow play';
        break;
      default:
        data.aiModelName = aiModel?.aiModelName || 'bytedance/sdxl-lightning-4step:6f7a773af6fc3e8de9d5a3c00be77c17308914bf67772726aff83496ba1e3bbe';
    }

    if (aiModel?.userImageUpload === 'true') {
      await ImageToAiImage(data);
    } else {
      await TextToImage(data);
    }
  };

  const TextToImage = async (data) => {
    try {
      console.log('TextToImage data:', data);
      const result = await GlobalApi.AIGenerateImage(data);
      const AIImage = Array.isArray(result.data.result) ? result.data.result[0] : result.data.result;
      console.log('Generated Image URL:', AIImage);

      const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
        credits: Number(userDetail?.credits) - 1,
      });
      console.log('Updated User Credits:', JSON.stringify(updatedResult.data, null, 2));
      setUserDetail(updatedResult?.data.data);

      // Upload to Cloudinary and save to Strapi
      await UploadImageAndSave(AIImage);
    } catch (e) {
      console.error('TextToImage failed:', e.message, e.stack);
      showToast('An error occurred while generating the image: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  const ImageToAiImage = async (data) => {
    try {
      console.log('userImage before upload:', userImage);
      const formData = new FormData();
      formData.append('file', {
        uri: userImage,
        type: 'image/jpeg',
        name: 'upload.jpg',
      });
      formData.append('upload_preset', 'uzasy1rr');

      const response = await axios.post('https://api.cloudinary.com/v1_1/dud6rzpa2/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.error) {
        throw new Error(response.data.error.message);
      }
      console.log('Cloudinary Uploaded Image URL:', response.data.secure_url);

      const imageData = {
        ...data,
        userImageUrl: response.data.secure_url,
      };
      console.log('ImageToAiImage data:', imageData);

      const result = await GlobalApi.AIGenerateImage(imageData);
      const AIImage = Array.isArray(result.data.result) ? result.data.result[0] : result.data.result;
      console.log('AI Generated Image:', AIImage);

      const updatedResult = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
        credits: Number(userDetail?.credits) - 1,
      });
      console.log('Updated User Credits:', JSON.stringify(updatedResult.data, null, 2));
      setUserDetail(updatedResult?.data.data);

      const saveImageData = {
        imageUrl: AIImage,
        userEmail: userDetail?.userEmail,
      };
      console.log('Saving Image Data:', saveImageData);
      const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
      console.log('Saved Image Record:', JSON.stringify(saveImageResult.data, null, 2));

      router.push({
        pathname: 'viewAiImage',
        params: {
          imageUrl: AIImage,
          prompt: userInput || aiModel?.name,
        },
      });
    } catch (error) {
      console.error('ImageToAiImage failed:', error.message, error.stack);
      showToast('An error occurred while processing the image: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const UploadImageAndSave = async (AIImage) => {
    try {
      console.log('Attempting to upload AIImage to Cloudinary:', AIImage);
      // Upload the Replicate URL directly to Cloudinary
      const formData = new FormData();
      formData.append('file', AIImage); // Cloudinary accepts URLs directly
      formData.append('upload_preset', 'uzasy1rr');

      const uploadResponse = await axios.post('https://api.cloudinary.com/v1_1/dud6rzpa2/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (uploadResponse.data.error) {
        throw new Error(uploadResponse.data.error.message);
      }
      console.log('Cloudinary Upload Response:', uploadResponse.data.secure_url);

      // Save the Cloudinary URL to Strapi
      const saveImageData = {
        imageUrl: uploadResponse.data.secure_url,
        userEmail: userDetail?.userEmail,
      };
      const saveImageResult = await GlobalApi.AddAiImageRecord(saveImageData);
      console.log('Saved Image Record:', JSON.stringify(saveImageResult.data, null, 2));

      router.push({
        pathname: 'viewAiImage',
        params: {
          imageUrl: uploadResponse.data.secure_url,
          prompt: userInput,
        },
      });
    } catch (error) {
      console.error('UploadImageAndSave failed:', error.message, error.stack);
      showToast('An error occurred while uploading the image to Cloudinary: ' + error.message);
    }
  };

  return (
    <View style={{ padding: 20, backgroundColor: Colors.WHITE, height: '100%' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{aiModel?.name}</Text>
      <View>
        {aiModel?.userImageUpload === 'true' ? (
          <ImageUploadComponent
            uploadedImage={(value) => {
              console.log('Received userImage:', value);
              setUserImage(value);
            }}
          />
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
          {loading ? (
            <ActivityIndicator size={'large'} color={'#fff'} />
          ) : (
            <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 20 }}>Generate</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}