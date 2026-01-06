import { PixelDialogueModal } from "@/components/pixel-dialogue-modal";
import { DIALOGUES } from "@/constants/dialogues";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function FinalScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/scenes/final.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <PixelDialogueModal
          visible
          title={DIALOGUES.final.title}
          messages={DIALOGUES.final.messages}
          position="center"
          onFinish={() => {
            router.replace("/");
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
