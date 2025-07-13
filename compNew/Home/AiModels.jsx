import { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import GlobalApi from '../../services/GlobalApi';
export default function AiModels({ type }) {

    const [aiModelList, setAiModelList] = useState();
    useEffect(() => {
        GetAiModels();
    }, [])

    const GetAiModels = async () => {
        const result = await GlobalApi.GetAiModels(type);
        console.log(result?.data.data);
        setAiModelList(result.data.data);
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
                    <View style={{
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
                    </View>

                )}

            />
        </View>
    )
}