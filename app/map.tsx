import { PixelButton } from "@/components/pixel-button";
import { useGameProgress } from "@/context/GameProgressContext";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function MapScreen() {
  const router = useRouter();
  const { level1Completed, level2Completed } = useGameProgress();

  return (
    <ImageBackground
      source={require("@/assets/images/scenes/map.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.levelsContainer}>
        <PixelButton
          title="1"
          onPress={() => router.push("/level-1")}
          style={styles.level1}
        />

        <PixelButton
          title="2"
          disabled={!level1Completed}
          onPress={() => router.push("/level-2")}
          style={styles.level2}
        />

        <PixelButton
          title="3"
          disabled={!level2Completed}
          onPress={() => router.push("/level-3")}
          style={styles.level3}
        />
      </View>
    </ImageBackground>
  );
}

const levelButton = {
  backgroundColor: "black",
  padding: 5,
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  levelsContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 22, fontWeight: "bold", color: "white" },
  levelButton: levelButton,
  level1: { ...levelButton, right: 102, bottom: 20 },
  level2: { ...levelButton, left: 60, top: 115 },
  level3: { ...levelButton, left: 154, top: 280 },
});
