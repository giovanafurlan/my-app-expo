import { PixelButton } from "@/components/pixel-button";
import { PixelDialogueModal } from "@/components/pixel-dialogue-modal";
import { DIALOGUES } from "@/constants/dialogues";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [showIntro, setShowIntro] = useState(false);

  return (
    <ImageBackground
      source={require("@/assets/images/scenes/start.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <PixelButton
          title="Start"
          style={styles.startButtonContainer}
          textStyle={styles.startButton}
          onPress={() => setShowIntro(true)}
        />
      </View>

      <PixelDialogueModal
        visible={showIntro}
        title={DIALOGUES.intro.title}
        messages={DIALOGUES.intro.messages}
        position="center"
        onFinish={() => {
          setShowIntro(false);
          router.push("/map");
        }}
      />
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
  dialogueText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
