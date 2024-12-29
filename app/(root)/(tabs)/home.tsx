import { useUser } from "@clerk/clerk-expo";
import {  Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import Search from "@/components/Search";

export default function Home() {
  const {user} = useUser()
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between p-3 rounded-md mt-5]">
          <View className="flex flex-row items-center ">
          <Image
            source={{uri: user?.imageUrl}}
            className="size-8 rounded-full"
          />
          <View className="flex flex-col items-start ml-3 justify-center ">
            <Text className="text-xs font-rubik text-black">Good Morning !</Text>
            <Text className="text-xs font-rubik-medium text-black-300">{user?.fullName}</Text>
          </View>
          </View>
          <Entypo name="light-up" size={20} color={'black'}/>
        </View>
      </View>
      <Search />
      <View className="my-5">
          <View className="flex flex-row mx-4 items-center justify-between">
            <Text className="text-lg font-rubik-bold text-black-300">Featured</Text>
            <TouchableOpacity className="">
              <Text className="text-sm font-rubik-semibold text-blue-700">show all</Text>
            </TouchableOpacity>
          </View>

      </View>
      {/* TODO: implement cards */}
    </SafeAreaView>    
  );
}
