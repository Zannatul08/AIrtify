import { Image, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../constants/Colors'
export default function Banner() {
    return (
        <View style={{
            marginTop: 20
        }}>
            <Image source={require('./../../assets/images/bt4.jpg')}
                style={{
                    width: '100%',
                    height: 230,
                    borderRadius: 15
                }}

            />
            <View style={{
                position: 'absolute',
                padding: 15
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: Colors.LIGHT_CYAN
                }}>Turn words</Text>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: Colors.LIGHT_CYAN
                }}>into ART</Text>
            </View>
            <TouchableOpacity style={{
                padding:7,
                backgroundColor:Colors.LIGHT_CYAN,
                position:'absolute',
                bottom:0,
                right:0,
                margin:15,
                borderRadius:7,
                paddingHorizontal:15

            }}>
                <Text>Explore</Text>
            </TouchableOpacity>
        </View>
    )
}