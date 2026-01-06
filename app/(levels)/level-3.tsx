import { PixelDialogueModal } from "@/components/pixel-dialogue-modal";
import { DIALOGUES } from "@/constants/dialogues";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function Level3Screen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/scenes/level-3.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <PixelDialogueModal
          visible
          title={DIALOGUES.level3.title}
          messages={DIALOGUES.level3.intro}
          position="bottom"
          onFinish={() => {
            router.replace("/final");
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
