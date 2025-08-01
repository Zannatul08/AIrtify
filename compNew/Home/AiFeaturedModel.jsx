// import { useEffect, useState } from 'react';
// import { Image, Text, View } from 'react-native';
// import { FlatList } from 'react-native-web';
// import GlobalApi from '../../services/GlobalApi';

// export default function AiFeaturedModel() {

//   const [aiModelList,setAiModelList] = useState([]);

//     useEffect(()=>{  
//          GetAiModelFeaturedList();

//     },[])

//     const GetAiModelFeaturedList=async()=>{
//         const result = await GlobalApi.GetFeaturedCategoryList();
//         console.log(result.data.data);
//         setAiModelList(result.data.data);
//     }

//   return (
//     <View style={{
//       marginTop:20
//     }} >
//       <Text style={{
//         fontSize:22,
//         fontWeight:'bold'
//       }}>FEATURED</Text>

//       <FlatList
//       data ={aiModelList}
//       renderItem={({item,index})=>(
//         <View>
//                     <View>
//                       <Image source={{uri:item?.icon?.url}}
//                       style={{
//                         width:35,
//                         height:35,
//                       }}

//                       />
//                       </View>
//           </View>
//       )
//     }
//     />
//     </View>
//   )
// }


// import { useEffect, useState } from 'react';
// import { FlatList, Image, Text, View } from 'react-native';

// import GlobalApi from '../../services/GlobalApi';

// export default function AiFeaturedModel() {
//   const [aiModelList, setAiModelList] = useState([]);

//   useEffect(() => {
//     GetAiModelFeaturedList();
//   }, []);

//   const GetAiModelFeaturedList = async () => {
//     try {
//       console.log('Attempting API call...');
//       const result = await GlobalApi.GetFeaturedCategoryList();
//       console.log('Raw API Response:', result.data);
//       console.log('Data to set:', result.data.data);
//       setAiModelList(result.data.data || []); // Default to empty array if undefined
//     } catch (error) {
//       console.error('Error fetching AI model featured list:', error.message);
//       console.error('Full error object:', error);
//     }
//   };

//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text style={{ fontSize: 22, fontWeight: 'bold' }}>FEATURED</Text>
//       {aiModelList.length === 0 ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={aiModelList}
//           renderItem={({ item, index }) => (
//             <View style={{ margin: 10 }}>
//               <Image
//                 source={{ uri: item?.icon?.url || 'https://via.placeholder.com/35' }}
//                 style={{ width: 35, height: 35 }}
//                 onError={(e) => console.log('Image failed to load:', e)}
//               />
//             </View>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       )}
//     </View>
//   );
// }

// import { useEffect, useState } from 'react';
// import { FlatList, Image, Text, View } from 'react-native';

// import GlobalApi from '../../services/GlobalApi';

// export default function AiFeaturedModel() {
//   const [aiModelList, setAiModelList] = useState([]);

//   useEffect(() => {
//     GetAiModelFeaturedList();
//   }, []);

//   const GetAiModelFeaturedList = async () => {
//     try {
//       console.log('Attempting API call to:', GlobalApi.GetFeaturedCategoryList);
//       const result = await GlobalApi.GetFeaturedCategoryList();
//       console.log('Raw API Response:', result.data);
//       console.log('Data to set:', result.data.data);
//       // Adjust for Strapi response structure
//       const formattedData = result.data.data.map(item => ({
//         icon: { url: item.attributes?.icon?.url }, // Typical Strapi structure
//       }));
//       setAiModelList(formattedData);
//     } catch (error) {
//       console.error('Error fetching AI model featured list:', error.message);
//       console.error('Full error object:', error);
//     }
//   };

//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text style={{ fontSize: 22, fontWeight: 'bold' }}>FEATURED</Text>
//       {aiModelList.length === 0 ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={aiModelList}
//           renderItem={({ item, index }) => (
//             <View style={{ margin: 10 }}>
//               <Image
//                 source={{ uri: item?.icon?.url || 'https://via.placeholder.com/35' }}
//                 style={{ width: 35, height: 35 }}
//                 onError={(e) => console.log('Image failed to load:', e)}
//               />
//             </View>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       )}
//     </View>
//   );
// }

// import { useEffect, useState } from 'react';
// import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
// import Colors from '../../constants/Colors';

// import { useRouter } from 'expo-router';
// import GlobalApi from '../../services/GlobalApi';

// export default function AiFeaturedModel() {
//   const [aiModelList, setAiModelList] = useState([]);
//   const router=useRouter();


//   useEffect(() => {
//     GetAiModelFeaturedList();
//   }, []);

//   const GetAiModelFeaturedList = async () => {
//     try {
//       console.log('Attempting API call to:', GlobalApi.GetFeaturedCategoryList);
//       const result = await GlobalApi.GetFeaturedCategoryList();
//       console.log('Raw API Response:', result.data);
//       console.log('Data to set:', result.data.data);
//       const formattedData = result.data.data.map(item => ({
//         icon: { url: item.icon.url }, // Use the direct icon.url
//         name: item.name,
//       }));
//       setAiModelList(formattedData);
//       console.log('Formatted Data:', formattedData); // Debug the mapped data
//     } catch (error) {
//       console.error('Error fetching AI model featured list:', error.message);
//       console.error('Full error object:', error);
//     }
//   };

//   const OnClickAiModel=(item)=>{
//    router?.push({
//     pathname:'FormInput',
//     params:item 
//    })

//   }


//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text style={{ fontSize: 18, fontWeight: 'bold' }}>FEATURED</Text>
//       {aiModelList.length === 0 ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={aiModelList}
//           numColumns={4}
//           style={{marginTop:7}}
//           renderItem={({ item, index }) => (
//             <TouchableOpacity onPress={()=>OnClickAiModel(item)} style={{
//               flex:1,
//               alignItems: 'center'
          
//             }}>
//               <View style={{ 
//                 margin: 10, 
//                 padding: 9,
//                 borderRadius: 7,
//                 backgroundColor: Colors.LIGHT_GRAY
                
//                 }}>
//                 <Image
//                   source={{ uri: item?.icon?.url || 'https://via.placeholder.com/35' }}
//                   style={{ width: 35, height: 35 }}
//                   onError={(e) => console.log('Image failed to load:', e.nativeEvent.error)}
//                 />
//               </View>
//                 <Text 
//                 style={{
//                   fontSize:13,
//                   textAlign:'center',
//                   color: Colors.PRIMARY,
//                   marginTop:2
//                 }}>{item?.name}</Text>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       )}
//     </View>
//   );
// }

// import { useRouter } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
// import Colors from '../../constants/Colors';
// import GlobalApi from '../../services/GlobalApi';

// export default function AiFeaturedModel() {
//   const [aiModelList, setAiModelList] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     GetAiModelFeaturedList();
//   }, []);

//   const GetAiModelFeaturedList = async () => {
//   try {
//     console.log('Attempting API call to:', GlobalApi.GetFeaturedCategoryList);
//     const result = await GlobalApi.GetFeaturedCategoryList();
//     console.log('Raw API Response:', result.data);
//     console.log('Data to set:', result.data.data);
//     const formattedData = result.data.data.map(item => ({
//       icon: { url: item.icon.url },
//       name: item.name,
//       aiModelName: item.aiModelName || "bytedance/sdxl-lightning-4step:6f7a773af6fc3e8de9d5a3c00be77c17308914bf67772726aff83496ba1e3bbe", // Default if missing
//       defaultPrompt: item.defaultPrompt || "A default prompt",
//     }));
//     setAiModelList(formattedData);
//     console.log('Formatted Data:', formattedData);
//   } catch (error) {
//     console.error('Error fetching AI model featured list:', error.message);
//     console.error('Full error object:', error);
//   }
// };

//   // const OnClickAiModel = (item) => {
//   //   // Features that require ImageUploadComponent
//   //   const imageUploadFeatures = ["Upscale Image", "Mockup/Fine Tune", "Remove BG"];
//   //   const params = imageUploadFeatures.includes(item.name)
//   //     ? { ...item, userImageUpload: "true" }
//   //     : item;
//   //   router?.push({
//   //     pathname: 'FormInput',
//   //     params: params,
//   //   });
//   // };
//   const OnClickAiModel = (item) => {
//   const imageUploadFeatures = ["Upscale Image", "Mockup/Fine Tune", "Remove BG"];
//   const params = imageUploadFeatures.includes(item.name)
//     ? { ...item, userImageUpload: "true" }
//     : item;
//   console.log("Params being pushed:", params); // Add this line
//   router?.push({
//     pathname: 'FormInput',
//     params: params,
//   });
// };

//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text style={{ fontSize: 18, fontWeight: 'bold' }}>FEATURED</Text>
//       {aiModelList.length === 0 ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={aiModelList}
//           numColumns={4}
//           style={{ marginTop: 7 }}
//           renderItem={({ item, index }) => (
//             <TouchableOpacity onPress={() => OnClickAiModel(item)} style={{
//               flex: 1,
//               alignItems: 'center',
//             }}>
//               <View style={{ 
//                 margin: 10, 
//                 padding: 9,
//                 borderRadius: 7,
//                 backgroundColor: Colors.LIGHT_GRAY,
//               }}>
//                 <Image
//                   source={{ uri: item?.icon?.url || 'https://via.placeholder.com/35' }}
//                   style={{ width: 35, height: 35 }}
//                   onError={(e) => console.log('Image failed to load:', e.nativeEvent.error)}
//                 />
//               </View>
//               <Text 
//                 style={{
//                   fontSize: 13,
//                   textAlign: 'center',
//                   color: Colors.PRIMARY,
//                   marginTop: 2,
//                 }}
//               >
//                 {item?.name}
//               </Text>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       )}
//     </View>
//   );
// } 


//Worked Previously
// import { useRouter } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
// import Colors from '../../constants/Colors';
// import GlobalApi from '../../services/GlobalApi';

// export default function AiFeaturedModel() {
//   const [aiModelList, setAiModelList] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     GetAiModelFeaturedList();
//   }, []);

//   const GetAiModelFeaturedList = async () => {
//     try {
//       console.log('Attempting API call to:', GlobalApi.GetFeaturedCategoryList);
//       const result = await GlobalApi.GetFeaturedCategoryList();
//       console.log('Raw API Response:', result.data);
//       console.log('Data to set:', result.data.data);
//       const formattedData = result.data.data.map(item => ({
//         icon: { url: item.icon.url }, // Use the direct icon.url
//         name: item.name,
//       }));
//       setAiModelList(formattedData);
//       console.log('Formatted Data:', formattedData); // Debug the mapped data
//     } catch (error) {
//       console.error('Error fetching AI model featured list:', error.message);
//       console.error('Full error object:', error);
//     }
//   };

//   const OnClickAiModel = (item) => {
//     // Features that require ImageUploadComponent
//     const imageUploadFeatures = ["Upscale Image", "Mockup/Fine Tune", "Remove BG"];
//     const params = imageUploadFeatures.includes(item.name)
//       ? { ...item, userImageUpload: "true" }
//       : item;
//     router?.push({
//       pathname: 'FormInput',
//       params: params,
//     });
//   };

//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text style={{ fontSize: 18, fontWeight: 'bold' }}>FEATURED</Text>
//       {aiModelList.length === 0 ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={aiModelList}
//           numColumns={4}
//           style={{ marginTop: 7 }}
//           renderItem={({ item, index }) => (
//             <TouchableOpacity onPress={() => OnClickAiModel(item)} style={{
//               flex: 1,
//               alignItems: 'center',
//             }}>
//               <View style={{ 
//                 margin: 10, 
//                 padding: 9,
//                 borderRadius: 7,
//                 backgroundColor: Colors.LIGHT_GRAY,
//               }}>
//                 <Image
//                   source={{ uri: item?.icon?.url || 'https://via.placeholder.com/35' }}
//                   style={{ width: 35, height: 35 }}
//                   onError={(e) => console.log('Image failed to load:', e.nativeEvent.error)}
//                 />
//               </View>
//               <Text 
//                 style={{
//                   fontSize: 13,
//                   textAlign: 'center',
//                   color: Colors.PRIMARY,
//                   marginTop: 2,
//                 }}
//               >
//                 {item?.name}
//               </Text>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       )}
//     </View>
//   );
// }


import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';
import GlobalApi from '../../services/GlobalApi';

export default function AiFeaturedModel() {
  const [aiModelList, setAiModelList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetAiModelFeaturedList();
  }, []);

  const GetAiModelFeaturedList = async () => {
    try {
      console.log('Attempting API call to:', GlobalApi.GetFeaturedCategoryList);
      const result = await GlobalApi.GetFeaturedCategoryList();
      console.log('Raw API Response:', result.data);
      console.log('Data to set:', result.data.data);
      const formattedData = result.data.data.map(item => ({
        icon: { url: item.icon.url }, // Use the direct icon.url
        name: item.name,
      }));
      setAiModelList(formattedData);
      console.log('Formatted Data:', formattedData); // Debug the mapped data
    } catch (error) {
      console.error('Error fetching AI model featured list:', error.message);
      console.error('Full error object:', error);
    }
  };

  const OnClickAiModel = (item) => {
    // Map feature names to specific feature parameters
    const featureMap = {
      'Upscale Image': 'upscale',
      'Remove BG': 'remove-bg',
      'Mockup/Fine Tune': 'mockup', // Add other features as needed
      'Avatar Generator': 'avatar', // Example for avatar feature
    };
    const imageUploadFeatures = ["Upscale Image", "Remove BG", "Avatar Generator"];
    const params = imageUploadFeatures.includes(item.name)
      ? { ...item, userImageUpload: "true", feature: featureMap[item.name] || 'default' }
      : item;
    console.log('Params being pushed:', params); // Debug log
    router?.push({
      pathname: 'FormInput',
      params: params,
    });
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>FEATURED</Text>
      {aiModelList.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={aiModelList}
          numColumns={4}
          style={{ marginTop: 7 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => OnClickAiModel(item)} style={{
              flex: 1,
              alignItems: 'center',
            }}>
              <View style={{ 
                margin: 10, 
                padding: 9,
                borderRadius: 7,
                backgroundColor: Colors.LIGHT_GRAY,
              }}>
                <Image
                  source={{ uri: item?.icon?.url || 'https://via.placeholder.com/35' }}
                  style={{ width: 35, height: 35 }}
                  onError={(e) => console.log('Image failed to load:', e.nativeEvent.error)}
                />
              </View>
              <Text 
                style={{
                  fontSize: 13,
                  textAlign: 'center',
                  color: Colors.PRIMARY,
                  marginTop: 2,
                }}
              >
                {item?.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}


