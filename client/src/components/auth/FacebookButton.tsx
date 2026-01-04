import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSocialLogin } from "@/src/hooks/auth/useSocialLogin";

const FacebookButton = () => {
  const handlePress = useSocialLogin("oauth_facebook");

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.3}
      className="border border-gray-300 rounded-full w-full py-4 flex-row items-center justify-center gap-5 bg-blue-600"
    >
      <Image
        source={require("@/assets/images/facebook.png")}
        width={20}
        height={20}
        className="size-6"
      />
      <Text className="font-medium text-white">Continue with Facebook</Text>
    </TouchableOpacity>
  );
};

export default FacebookButton;
