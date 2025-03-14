import { FullWallpaper, Wallpaper } from "@/hooks/useWallpapers";
import { FlatList, StyleSheet } from "react-native";
import { ImageCard } from "./ImageCard";
import { ThemedView } from "./ThemedView";

const IMAGE_SIZE = 150; // Define image size

export function Splitview({ wallpapers, onSelectWallpaper }: { wallpapers: FullWallpaper[], onSelectWallpaper: (wallpaper: Wallpaper) => void }) {
  return (
    <FlatList
      data={wallpapers}
      numColumns={2} // Two-column grid layout
      contentContainerStyle={styles.gridContainer}
      renderItem={({ item }) => (
        <ThemedView style={styles.wallpaperItem}>
          <ImageCard
            Wallpaper={item}
            onPress={() => onSelectWallpaper(item)}
          />
        </ThemedView>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  wallpaperItem: {
    width: IMAGE_SIZE,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 12,
    marginHorizontal: 5,
    backgroundColor: "#2a2a35", // Slightly lighter than the background for contrast
    elevation: 5, // Adds a subtle shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
