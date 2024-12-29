import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

const Profile = () => {
  const {user} = useUser()
  console.log(user?.imageUrl);
  
  return (
    <View>
      <Text>{user?.fullName}</Text>
      <Image
        className='w-10 h-10'
        resizeMode='contain'
        source={{uri: user?.imageUrl}}
      />
    </View>
  )
}

export default Profile