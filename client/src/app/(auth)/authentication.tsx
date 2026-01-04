import { Image, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown } from "react-native-reanimated";
import GoogleButton from "@/src/components/auth/GoogleButton";
import FacebookButton from "@/src/components/auth/FacebookButton";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const Authentication = () => {
  return (
    <SafeAreaView className="w-full h-full p-6">
      <View className="items-center justify-center w-full h-full gap-5">
        <Image
          source={require("@/assets/images/bg.png")}
          width={100}
          height={100}
          resizeMode="cover"
          className="w-[400px] h-[300px] mb-5"
        />

        <View className="items-center gap-2 mb-2.5">
          <Text className="text-3xl font-bold font-nunito_bold">Flique</Text>
          <Animated.Text
            entering={FadeInDown}
            className="text-gray-800 text-center font-nunito_bold text-xl"
          >
            Make a new Friends
          </Animated.Text>
        </View>
        <Animated.View entering={FadeInDown.delay(100)} className="w-full">
          <GoogleButton />
        </Animated.View>

        <Text className="text-gray-600">or</Text>

        <Animated.View entering={FadeInDown.delay(200)} className="w-full">
          <FacebookButton />
        </Animated.View>

        <Text className="text-center text-sm text-gray-600 px-10">
          By continuing, you agree to our&nbsp;
          <Text className="underline">Terms</Text>&nbsp; and &nbsp;
          <Text className="underline">Privacy Policy.</Text>
        </Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <Text className="text-sm text-gray-600">
            Already have an account?
          </Text>
          <Link href="/authentication">
            <Text className="underline text-sm text-gray-600">Sign in</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Authentication;
