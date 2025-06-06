import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache'; // ✅ correct import

import Constants from 'expo-constants';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}
      tokenCache={tokenCache} // ✅ pass as object (not a function call)
    >
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}
