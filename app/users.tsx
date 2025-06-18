import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

function Users() {
  const router = useRouter();

  function getHome() {
    router.back();
  }

  return (
    <View>
      <Text>Users</Text>

      <Pressable onPress={getHome}>
        <Text>Go to Back</Text>
      </Pressable>
    </View>
  );
}

export default Users;
