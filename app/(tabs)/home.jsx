import { View } from 'react-native'
import AiFeaturedModel from '../../compNew/Home/AiFeaturedModel'
import Banner from '../../compNew/Home/Banner'
import Header from '../../compNew/Home/Header'

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
   {/* Featured List */}
   <AiFeaturedModel/>
    </View>
  )
}