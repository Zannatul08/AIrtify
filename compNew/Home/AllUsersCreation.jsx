import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, Text, View } from 'react-native';
import GlobalApi from '../../services/GlobalApi';

export default function AllUsersCreation() {
  const navigation = useNavigation();
  const [pageSize, setPageSize] = useState(5);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [aiImageList, setAiImageList] = useState([]);
  const ColumnWidth = Dimensions.get('screen').width * 0.9 / 2;

  const GetAllAiImages = async (start, limit) => {
    try {
      setLoading(true);
      const result = await GlobalApi.GetAllAiImages(start, limit);
      console.log('Fetched Images:', JSON.stringify(result.data, null, 2));
      const resultData = result.data.data || [];
      setAiImageList(prev => [...prev, ...resultData]);
      setLoading(false);
    } catch (error) {
      console.error('GetAllAiImages failed:', error.message, error.stack);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetAllAiImages(0, pageSize);
    const unsubscribe = navigation.addListener('focus', () => {
      setAiImageList([]); // Clear list to avoid duplicates
      setStartIndex(0);
      GetAllAiImages(0, pageSize); // Refetch on focus
    });
    return unsubscribe;
  }, [pageSize]);

  const loadMoreImages = () => {
    if (!loading) {
      const newStart = startIndex + pageSize;
      setStartIndex(newStart);
      GetAllAiImages(newStart, pageSize);
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>User's Creation</Text>
      {loading && aiImageList.length === 0 ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={aiImageList}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Image
                source={{ uri: item.imageUrl }}
                style={{
                  width: ColumnWidth,
                  height: 250,
                  margin: 5,
                }}
                onError={(e) =>
                  console.log('Image load error:', item.imageUrl, e.nativeEvent.error)
                }
              />
            </View>
          )}
          onEndReached={loadMoreImages}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading && aiImageList.length > 0 ? <ActivityIndicator size="large" /> : null}
          ListEmptyComponent={<Text>No images found.</Text>}
        />
      )}
    </View>
  );
}