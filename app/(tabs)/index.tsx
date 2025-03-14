import { DownoloadPicture } from '@/components/Bottomsheet';

import { Splitview } from '@/components/Splitview';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useLibrary, useLiked, useSuggested, Wallpaper } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  
  const theme = useColorScheme()
  return (
    <ThemedView style={{ flex: 1, width: '100%' }}>
  <Tab.Navigator style={{
            flex: 1,
        }} screenOptions={{
          //@ts-ignore
            tabBarActiveTintColor: Colors[theme].tint,
            tabBarStyle: {
                //@ts-ignore
                backgroundColor: Colors[theme].background,
            }, 
            tabBarIndicatorStyle: {
                //@ts-ignore
                backgroundColor: Colors[theme].indicator,
                height: 5
            }
        }}>
     <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Like" component={Like} />
      <Tab.Screen name="suggested" component={suggested} />
     
    </Tab.Navigator>
    </ThemedView>
  );
}

function Library() {
  const wallpapers = useLibrary();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);

  console.log("Selected Wallpaper in Library:", selectedWallpaper);

  return (
    <SafeAreaView style={{ flex: 1 }}>
     <ThemedView style={styles.themedView}>
      <Splitview wallpapers={wallpapers} onSelectWallpaper={setSelectedWallpaper} />
      
      {selectedWallpaper && (
        <>
          {console.log("Rendering DownoloadPicture:", selectedWallpaper)}
          <DownoloadPicture 
            
            onClose={() => setSelectedWallpaper(null)} 
            wallpaper={selectedWallpaper} 
          />
        </>
      )}
     </ThemedView>
    </SafeAreaView>
  );
}




function Like() {
  const wallpapers = useLiked();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ThemedView style={styles.themedView}>
      <Splitview wallpapers={wallpapers} onSelectWallpaper={setSelectedWallpaper} />
      
      {selectedWallpaper && (
        <>
          <DownoloadPicture 
              onClose={() => setSelectedWallpaper(null)} 
            wallpaper={selectedWallpaper} 
          />
        </>
      )}
      </ThemedView>
    </SafeAreaView>
  );
}

function suggested() {
  const wallpapers = useSuggested();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
  return (
   
    <SafeAreaView style={{ flex: 1 }}>
       <ThemedView>
      <Splitview wallpapers={wallpapers} onSelectWallpaper={setSelectedWallpaper} />
      
      {selectedWallpaper && (
        <>
          <DownoloadPicture 
            
            onClose={() => setSelectedWallpaper(null)} 
            wallpaper={selectedWallpaper} 
          />
        </>
      )}
       </ThemedView>
    </SafeAreaView>
   
  );
}


const styles = StyleSheet.create({
  themedView: {
    flexGrow: 0,
    height:'100%',
    width: '100%',
  },
});