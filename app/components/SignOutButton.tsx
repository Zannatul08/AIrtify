// components/SignOutButton.tsx
// import { useClerk } from '@clerk/clerk-expo';
// import * as Linking from 'expo-linking';
// import { Text, TouchableOpacity } from 'react-native';

// function SignOutButton() {
//   const { signOut } = useClerk();

//   const handleSignOut = async () => {
//     try {
//       await signOut();
//       // Redirect to home page after signing out
//       Linking.openURL(Linking.createURL('/'));
//     } catch (err) {
//       console.error(JSON.stringify(err, null, 2));
//     }
//   };

//   return (
//     <TouchableOpacity onPress={handleSignOut}>
//       <Text>Sign out</Text>
//     </TouchableOpacity>
//   );
// }

// export default SignOutButton;

// components/SignOutButton.tsx
import { useClerk } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

function SignOutButton() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace('/login');
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <TouchableOpacity
      onPress={handleSignOut}
      style={{
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 0.4,              // Add border thickness
        borderColor: 'black',        // Set border color to black
        borderRadius: 20,            // Move borderRadius to TouchableOpacity
        alignItems: 'center',
        // Optional: Add a background to see the border
      }}
    >
      <Text style={{
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        // Remove borderRadius from Text (not needed here)
      }}>
        Sign out
      </Text>
    </TouchableOpacity>
  );
}

export default SignOutButton;