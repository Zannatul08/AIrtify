import { useSSO } from '@clerk/clerk-expo';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useWarmUpBrowser } from '../../utils/useWarmUpBrowser';
import Colors from './../../constants/Colors';

WebBrowser.maybeCompleteAuthSession();

export default function IndexScreen() {
  useWarmUpBrowser(); // 🔥 Warm up the browser for faster login
  const { startSSOFlow } = useSSO(); // 🔐 Get the function to start login

  // ✅ Logic to handle login with Google
  const handleContinue = async () => {
    try {
      const redirectUrl = AuthSession.makeRedirectUri(); // handles redirect correctly
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: 'oauth_google',
        redirectUrl,
      });

      if (createdSessionId) {
        await setActive({ session: createdSessionId }); // 🎉 Set session on success
      }
    } catch (err) {
      console.error('Google Login Error:', JSON.stringify(err, null, 2));
    }
  };

  return (
    <View>
      <Image
        source={require('./../../assets/images/login.jpg')}
        style={{
          width: '100%',
          height: 600,
        }}
      />

      <View style={styles.loginContainer}>
        <Text style={styles.heading}>Welcome to AIrtify</Text>
        <Text style={styles.subtitle}>Create AI Art in Just one Click</Text>

        {/* 🟢 Button with login logic connected */}
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          By continuing you agree to our terms and conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    padding: 25,
    marginTop: -20,
    backgroundColor: 'white',
    height: 600,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.GRAY,
    textAlign: 'center',
    marginTop: 15,
  },
  button: {
    width: '100%',
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 13,
    color: Colors.GRAY,
  },
});
