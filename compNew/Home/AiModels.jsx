// import { useEffect, useState } from 'react';
// import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

// import { useRouter } from 'expo-router';
// import Colors from '../../constants/Colors';
// import GlobalApi from '../../services/GlobalApi';
// export default function AiModels({ type }) {

//     const [aiModelList, setAiModelList] = useState();
//     const router=useRouter();
//     useEffect(() => {
//         GetAiModels();
//     }, [])

//     // const GetAiModels = async () => {
//     //     const result = await GlobalApi.GetAiModels(type);
//     //     console.log(result?.data.data);
//     //     setAiModelList(result.data.data);
//     // }
//     const GetAiModels = async () => {
//   const result = await GlobalApi.GetAiModels(type);
//   console.log(result?.data.data);
//   const formattedData = result.data.data.map(item => ({
//     banner: { url: item.banner.url },
//     name: item.name,
//     aiModelName: item.aiModelName || "bytedance/sdxl-lightning-4step:6f7a773af6fc3e8de9d5a3c00be77c17308914bf67772726aff83496ba1e3bbe",
//     defaultPrompt: item.defaultPrompt || "A default prompt",
//   }));
//   setAiModelList(formattedData);
// };

// const OnClickModel=(item)=>{
// router?.push({
//     pathname:'/FormInput',
//     params:item 
// })

// }

//     return (
//         <View>
//             <Text style={{
//                 fontSize: 20,
//                 fontWeight: 'bold',
//                 marginTop: 20,
//                 marginBottom: 10
//             }}>{type?.toUpperCase()}</Text>

//             <FlatList
//                 data={aiModelList}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//                 nestedScrollEnabled={true}
//                 renderItem={({ item, index }) => (
//                     <TouchableOpacity onPress={()=>OnClickModel(item)} style={{
//                         marginRight:15
//                     }}>
//                     <Image source={{uri:item?.banner?.url}}
//                     style={{
//                         width:140,
//                         height:180,
//                         borderRadius:15
//                     }}
//                     />
//                     <Text style={{
//                         position:'absolute',
//                         bottom:10,
//                         color:Colors.WHITE,
//                         width:'100%',
//                         textAlign: 'center',
//                         fontWeight:'medium',
//                         fontSize: 15
//                     }}>{item.name}</Text>
//                     </TouchableOpacity>

//                 )}

//             />
//         </View>
//     )
// } 
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import GlobalApi from '../../services/GlobalApi';
export default function AiModels({ type }) {

    const [aiModelList, setAiModelList] = useState();
    const router=useRouter();
    useEffect(() => {
        GetAiModels();
    }, [])

    const GetAiModels = async () => {
        const result = await GlobalApi.GetAiModels(type);
        console.log(result?.data.data);
        setAiModelList(result.data.data);
    }

const OnClickModel=(item)=>{
router?.push({
    pathname:'/FormInput',
    params:item 
})

}

    return (
        <View>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
                marginBottom: 10
            }}>{type?.toUpperCase()}</Text>

            <FlatList
                data={aiModelList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={()=>OnClickModel(item)} style={{
                        marginRight:15
                    }}>
                    <Image source={{uri:item?.banner?.url}}
                    style={{
                        width:140,
                        height:180,
                        borderRadius:15
                    }}
                    />
                    <Text style={{
                        position:'absolute',
                        bottom:10,
                        color:Colors.WHITE,
                        width:'100%',
                        textAlign: 'center',
                        fontWeight:'medium',
                        fontSize: 15
                    }}>{item.name}</Text>
                    </TouchableOpacity>

                )}

            />
        </View>
    )
}