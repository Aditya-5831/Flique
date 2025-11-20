import { View, Text, Image } from "react-native";
import React from "react";
import { Pressable } from "react-native";

const FacebookAuthButton = () => {
  return (
    <Pressable className="w-full flex-row items-center justify-center gap-2 rounded-lg  border border-gray-300 p-4 text-center">
      <Image
        width={10}
        height={10}
        resizeMode="contain"
        source={require("@/assets/icons/fb-icon.png")}
        className="size-5"
      />
      <Text className="font-interSemibold">Continue with facebook</Text>
    </Pressable>
  );
};

export default FacebookAuthButton;
