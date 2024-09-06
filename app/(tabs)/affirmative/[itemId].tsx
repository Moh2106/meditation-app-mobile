import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { GalleryPreviousData } from "@/model/AffirmativeCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmationGallery";
import AppGradient from "@/components/AppGradient";
import Feather from "@expo/vector-icons/Feather";

const ItemId = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmative, setAffirmative] = useState<GalleryPreviousData>();

  const [sentence, setSentence] = useState<string[]>();

  useEffect(() => {
    for (let id = 0; id < AFFIRMATION_GALLERY.length; id++) {
      const affirmationData = AFFIRMATION_GALLERY[id].data;

      const affirmativeToStart = affirmationData.find(
        (a) => a.id === Number(itemId)
      );

      if (affirmativeToStart) {
        const affirmativeArray = affirmativeToStart.text.split(".");
        setAffirmative(affirmativeToStart);

        if (affirmativeArray[affirmativeArray.length - 1] === "") {
          affirmativeArray.pop();
        }

        setSentence(affirmativeArray);

        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmative?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient color={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 "
          >
            <Feather name="arrow-left-circle" size={24} color="white" />
          </Pressable>

          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                {sentence?.map((sent, idx) => (
                  <Text key={idx} className="text-white font-bold text-2xl text-center mb-4">
                    {sent}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default ItemId;
