import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSocialLogin } from "@/src/hooks/auth/useSocialLogin";

const GoogleButton = () => {
  const handlePress = useSocialLogin("oauth_google");

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.3}
      className="border border-gray-300 rounded-full w-full py-4 flex-row items-center justify-center gap-5 bg-black"
    >
      <Image
        source={require("@/assets/images/google.png")}
        width={20}
        height={20}
        className="size-5"
      />
      <Text className="font-medium text-white">Continue with Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleButton;
