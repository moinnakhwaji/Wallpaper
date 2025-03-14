import { Wallpaper,FullWallpaper } from "@/hooks/useWallpapers";
import { Image, View, StyleSheet, useColorScheme, TouchableOpacity } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface ImageCardProps {
  Wallpaper: FullWallpaper;
  onPress: () => void;  // Accept onPress prop
}

export function ImageCard({ Wallpaper, onPress }: ImageCardProps) {
  const theme = useColorScheme() ?? "light";

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>  
      <ThemedView style={styles.container}>
        <Image style={styles.image} source={{ uri: Wallpaper.url }} />
        <View style={styles.div}>
          <ThemedText style={styles.label}>{Wallpaper.name}</ThemedText>
          <View style={styles.iconConatiner}>
            <Ionicons name={"heart"} size={18} color={theme === "light" ? Colors.light.icon : Colors.dark.icon} />
          </View>
        </View>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconConatiner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 8,
  },
  container: {
    width: "100%",
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 12,
  },
  div: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  label: {
    flexShrink: 1,
    color: "white",
    width: "80%",
    paddingLeft: 4,
  },
});
