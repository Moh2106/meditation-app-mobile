import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import MEDITATION_IMAGE from '@/constants/meditationImage'
import AppGradient from '@/components/AppGradient'
import { router } from 'expo-router'

const meditate = () => {
  return (
    <View className='flex-1'>
      <ImageBackground source={MEDITATION_IMAGE[0]} resizeMode='cover' className='flex-1'>
        <AppGradient color={["transparent", "rgba(0,0,0,0.8)"]}>
            <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'></Pressable>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default meditate