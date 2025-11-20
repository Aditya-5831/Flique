import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown } from "react-native-reanimated";
import GoogleAuthButton from "@/src/components/public/GoogleAuthButton";
import FacebookAuthButton from "@/src/components/public/FacebookAuthButton";

const AuthScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView className="h-full w-full items-center justify-center">
        <View className="h-1/2 w-full">
          <Image
            source={require("@/assets/images/bg.png")}
            className="h-full w-full"
            resizeMode="contain"
          />
        </View>

        <View className="w-full gap-10 p-6">
          <View className="flex-col items-center gap-5">
            <View className="flex-row items-center gap-2">
              <Text className="font-poppinsSemi text-3xl">Flique</Text>
            </View>
            <Animated.Text
              entering={FadeInDown}
              className="text-center font-interSemibold text-lg"
            >
              Sign up to see photos and videos from your friends
            </Animated.Text>
          </View>

          <View className="w-full gap-4">
            <Animated.View entering={FadeInDown.delay(100)}>
              <GoogleAuthButton />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(200)}>
              <FacebookAuthButton />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
