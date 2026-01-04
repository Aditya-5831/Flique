import { View, ActivityIndicator } from "react-native";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

const OAuthNativeCallback = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (isSignedIn) {
      router.replace("/protected");
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" />
    </View>
  );
};

export default OAuthNativeCallback;
