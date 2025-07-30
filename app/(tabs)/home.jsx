import { FlatList, View } from 'react-native'
import AiFeaturedModel from '../../compNew/Home/AiFeaturedModel'
import AiModels from '../../compNew/Home/AiModels'
import AllUsersCreation from '../../compNew/Home/AllUsersCreation'
import Banner from '../../compNew/Home/Banner'
import Header from '../../compNew/Home/Header'

export default function Home() {
  return (
    <FlatList
      data={[1]}

      style={{
        padding: 20,
        marginTop: 20
      }}
      nestedScrollEnabled={true}
      renderItem={({ item }) =>
        <View>
          {/* header */}
          <Header />
          {/* banner */}
          <Banner />
          {/* Featured List */}
          <AiFeaturedModel />
          {/* Ai Models (Avatar) */}
          <AiModels type={'avatar'} />

          {/* Ai Models (Style) */}
          <AiModels type={'style'} />

             {/* Users Creation */}
             <AllUsersCreation/>

          <View style={{ height: 100 }}></View>
        </View>

      }

    >
</FlatList>
  
  )
}