import { View } from 'react-native'
import Header from '../../compNew/Home/Header'
import Banner from '../../compNew/Home/Banner'

export default function Home() {
  return (
    <View style={{
      padding:20,
      marginTop:20
    }}>
   {/* header */}
   <Header/>
   {/* banner */}
   <Banner/>
    </View>
  )
}