import { GameProgressProvider } from "@/context/GameProgressContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GameProgressProvider>
      <Stack
      screenOptions={{
        animation: "slide_from_right", // "slide_from_right", "slide_from_bottom", "none"
        headerShown: false,
      }}
    />
    </GameProgressProvider>
  );
}
