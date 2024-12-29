import * as Linking from "expo-linking";
import { useClerk, useOAuth } from "@clerk/clerk-expo";
import { Alert } from "react-native";

export const Login = async () => {
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/', { scheme: 'estate-sphere' }),
      })
      if (createdSessionId) {
        setActive!({ session: createdSessionId })
        return true
      } else {
        throw new Error('failed to open session')
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
      return false
    }
  }

  export const LogOut = async () => {
    const { signOut } = useClerk()
    console.log('logging out wait');
    try {
      await signOut()
      Linking.openURL(Linking.createURL('/'))
    } catch (err) {
      Alert.alert(JSON.stringify(err))
      console.error(JSON.stringify(err, null, 2))
    }
  }