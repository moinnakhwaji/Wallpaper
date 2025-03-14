import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { DownoloadPicture } from "@/components/Bottomsheet";
import { Splitview } from "@/components/Splitview";

const { width } = Dimensions.get("window");
const IMAGE_SIZE = width / 2 - 20; // Adjusted for a perfect two-column layout

const Explore = () => {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* Parallax Header */}
      <ParallaxScrollView
        headerImage={
          <Image
            style={styles.pageImage}
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/Hma-KogESI-h9o8oyO1YKg",
            }}
            resizeMode="cover"
          />
        }
        headerBackgroundColor={{ dark: "#1f1e24", light: "#fff" }}
      >
        {/* Wallpaper Grid */}
        <Splitview wallpapers={wallpapers} onSelectWallpaper={setSelectedWallpaper} />
      </ParallaxScrollView>

      {/* Show Download Modal only when a wallpaper is selected */}
      {selectedWallpaper && (
        <DownoloadPicture  onClose={() => setSelectedWallpaper(null)} wallpaper={selectedWallpaper} />
      )}
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1e24", // Dark theme background
  },
  pageImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
});
