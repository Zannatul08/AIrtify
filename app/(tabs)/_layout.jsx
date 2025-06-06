import { useUser } from '@clerk/clerk-expo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { useContext, useEffect } from 'react';
import Colors from '../../constants/Colors';
import GlobalApi from '../../services/GlobalApi.jsx';
import { UserDetailContext } from './../../context/UserDetailContext';

export default function TabLayout() {
  const { user } = useUser();
 const {userDetail,setUserDetail}=useContext(UserDetailContext)
  useEffect(() => {
    if (user) {
      VerifyUser();
    }
  }, [user]);

  const VerifyUser = async () => {
    try {
      const result = await GlobalApi.GetUserInfo(user?.primaryEmailAddress?.emailAddress);
      console.log(result.data.data);

      if (result.data.data.length !== 0) {
        setUserDetail(result.data.data[0])
        return;
      }

      const data = {
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      };
      const createResult = await GlobalApi.CreateNewUser(data);
      console.log(createResult?.data?.data);
      setUserDetail(result.data.data[0])
    } catch (e) {
      console.error('Error in VerifyUser:', e);
    }
  };

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.PRIMARY }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: 'Collection',
          tabBarIcon: ({ color }) => <Ionicons name="folder-open" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="people-circle" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}