import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmationGallery";
import GuidedAffirmationGallery from "@/components/GuidedAffirmationGallery";

const affirmative = () => {
  return (
    <View className="flex-1">
      <AppGradient color={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your beliefs withy affirmations
          </Text>

          <View>
            {AFFIRMATION_GALLERY.map((aff) => (
              <GuidedAffirmationGallery
                key={aff.title}
                title={aff.title}
                previews={aff.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default affirmative;
