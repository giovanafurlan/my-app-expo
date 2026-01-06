import { PixelDialogueModal } from "@/components/pixel-dialogue-modal";
import { DIALOGUES } from "@/constants/dialogues";
import { useGameProgress } from "@/context/GameProgressContext";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function Level2Screen() {
  const router = useRouter();
  const { completeLevel2 } = useGameProgress();

  return (
    <ImageBackground
      source={require("@/assets/images/scenes/level-2.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <PixelDialogueModal
          visible
          title={DIALOGUES.level2.title}
          messages={DIALOGUES.level2.intro}
          position="bottom"
          onFinish={() => {
            completeLevel2();
            router.replace("/map");
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
  },
  dialogueText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
