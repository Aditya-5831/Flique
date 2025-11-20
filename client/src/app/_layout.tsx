import { Slot, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import {
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    PoppinsSemi: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,
    Inter: Inter_400Regular,
    InterSemibold: Inter_600SemiBold,
    InterMedium: Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
}
