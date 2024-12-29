import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { LogOut } from "@/lib/auth";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-blue-500">get out </Text>
      <Link href={'/home'}>home</Link>
      <Link href={'/explore'}>explore</Link>
      <Link href={'/properties/1'}>properties</Link>
      <Link href={'/profile'}>progile</Link>
      <Button title="sign out" onPress={LogOut}></Button>
    </View>
  );
}
