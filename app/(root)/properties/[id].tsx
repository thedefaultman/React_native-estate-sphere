import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import images from '@/constants/images'

const Property = () => {
  const {id} = useLocalSearchParams<{id: string}>()
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} className='pb-32 bg-white'>
        <View className='relative w-full'>
          <Image
            source={images.newYork}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Property