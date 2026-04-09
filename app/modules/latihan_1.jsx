import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function latihan_1() {
  return (
    <View>
      <Text>latihan_1</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </Text>
      <Redirect href="/modules/latihan_2" />
    </View>
  );
}
