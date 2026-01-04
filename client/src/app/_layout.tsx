import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { useFonts } from "expo-font";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_900Black,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <GestureHandlerRootView>
        <Stack screenOptions={{ headerShown: false }} />
      </GestureHandlerRootView>
    </ClerkProvider>
  );
}
