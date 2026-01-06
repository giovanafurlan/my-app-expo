import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type ModalPosition = "top" | "center" | "bottom";

type PixelDialogueModalProps = {
  visible: boolean;
  title: string;
  messages: readonly string[];
  onFinish: () => void;
  position?: ModalPosition;
};

export function PixelDialogueModal({
  visible,
  title,
  messages,
  onFinish,
  position = "bottom",
}: PixelDialogueModalProps) {
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (index < messages.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
      onFinish();
    }
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Pressable style={styles.overlay} onPress={handleNext}>
        <View style={[styles.wrapper, positionStyles[position]]}>
          <View style={styles.dialogueBox}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{messages[index]}</Text>
            <Text style={styles.hint}>tap to continue</Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    padding: 16,
  },

  wrapper: {
    width: "100%",
  },

  dialogueBox: {
    backgroundColor: "#0b0b0b",
    borderWidth: 3,
    borderColor: "#5a5a5a",
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 0,
    elevation: 8,
  },

  title: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
  },

  text: {
    color: "#eaeaea",
    fontSize: 17,
    lineHeight: 20,
    marginBottom: 14,
  },

  hint: {
    color: "#8c8c8c",
    fontSize: 11,
    textAlign: "right",
    textTransform: "uppercase",
  },
});

const positionStyles: Record<ModalPosition, ViewStyle> = {
  top: {
    marginTop: 40,
  },
  center: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  bottom: {
    marginTop: "auto",
    marginBottom: 40,
  },
};
