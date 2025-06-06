import { useSSO, useUser } from '@clerk/clerk-expo';

import * as Linking from 'expo-linking';
import { Redirect } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';
import { useWarmUpBrowser } from '../../utils/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function IndexScreen() {
  useWarmUpBrowser();
  const { startSSOFlow } = useSSO();
  const { user } = useUser();

  // Redirect authenticated users to /tabs/home
  if (user) {
    console.log('User already signed in, redirecting to /tabs/home');
    return <Redirect href="/(tabs)/home" />;
  }

  const handleContinue = async () => {
    try {
      const redirectUrl = Linking.createURL('/(tabs)/home', { scheme: 'airtify' });
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: 'oauth_google',
        redirectUrl,
      });
      if (createdSessionId) {
        await setActive({ session: createdSessionId });
        console.log('SSO successful, should redirect to /tabs/home');
      }
    } catch (err) {
      console.error('Google Login Error:', JSON.stringify(err, null, 2));
      if (err.errors?.some(e => e.code === 'session_exists')) {
        console.log('Session exists, redirecting to /tabs/home');
        return <Redirect href="/(tabs)/home" />;
      }
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