import { View, Text, ImageBackground } from "react-native";
import React from "react";
import beachImage from "../assets/meditation-images/beach.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar'
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

export default function App() {
  const router = useRouter()
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient color={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 justify-between px-1 ">
            <View>
              <Text className="text-white text-center font-bold text-3xl">
                Simple Meditation
              </Text>
              <Text className="text-white text-center mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>

            <View>
              <CustomButton
                title="Get Started"
                onPress={() => router.push("nature-meditate")}
              ></CustomButton>
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
        
      </ImageBackground>
    </View>
  );
}
