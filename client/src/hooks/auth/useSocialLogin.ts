import { useWarmUpBrowser } from "./useWarmUpBrowser";
import * as Linking from "expo-linking";
import { useSSO } from "@clerk/clerk-expo";

export type OAuthStrategy = "oauth_facebook" | "oauth_google";

export const useSocialLogin = (strategy: OAuthStrategy) => {
    useWarmUpBrowser();

    const { startSSOFlow } = useSSO();

    return async () => {
        try {
            const redirectUrl = Linking.createURL("oauth-native-callback");

            const { createdSessionId, setActive } = await startSSOFlow({
                strategy,
                redirectUrl,
            });

            if (createdSessionId) {
                setActive!({
                    session: createdSessionId,
                });
            }
        } catch (error) {
            console.error(`${strategy} login error`, error);
        }
    }

}