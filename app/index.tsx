import { PixelButton } from "@/components/pixel-button";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/start.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <PixelButton
          title="Start"
          style={styles.startButtonContainer}
          textStyle={styles.startButton}
          onPress={() => {
            router.push("/map");
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  startButtonContainer: {
    bottom: 5,
    width: "62%",
  },
  startButton: {
    fontSize: 30,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
