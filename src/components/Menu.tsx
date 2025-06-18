import { usePathname, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function Menu() {
  const pathname = usePathname();
  const router = useRouter();

  function getHome() {
    if (pathname !== "/") {
      router.replace("/");
    }
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={getHome}>
        <Text>{pathname === "/" ? "" : "Inicio"}</Text>
      </Pressable>

      <Text>Menu</Text>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: "orange",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
