import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache'; // ✅ correct import

import Constants from 'expo-constants';
import { Stack } from 'expo-router';
import { useState } from 'react';

import { UserDetailContext } from './../context/UserDetailContext';
export default function RootLayout() {
  const [userDetail,setUserDetail]=useState();
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}
      tokenCache={tokenCache} // ✅ pass as object (not a function call)
    >
      <ClerkLoaded>
        <UserDetailContext.Provider value={{userDetail,setUserDetail}}>

          <Stack screenOptions={{
            headerShown: false
          }

          }>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="login/index" />
          </Stack>
        </UserDetailContext.Provider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
