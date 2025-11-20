import { View, Text, Pressable, Image } from "react-native";
import React from "react";

const GoogleAuthButton = () => {
  return (
    <Pressable className="w-full flex-row items-center justify-center gap-2 rounded-lg bg-black p-4 text-center">
      <Image
        width={10}
        height={10}
        resizeMode="contain"
        source={require("@/assets/icons/google-icon.png")}
        className="size-5"
      />
      <Text className="font-interMedium text-white">Continue with google</Text>
    </Pressable>
  );
};

export default GoogleAuthButton;
