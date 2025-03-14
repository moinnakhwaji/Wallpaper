import { Slot, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { useEffect } from 'react';
import { setStatusBarStyle, setStatusBarBackgroundColor } from 'expo-status-bar';

export default function App() {
  const theme = useColorScheme(); // De
  useEffect(() => {
    // Set status bar text color (light for dark mode, dark for light mode)
    setStatusBarStyle(theme === 'dark' ? 'light' : 'dark');

    // Set Android status bar background color to match theme
    setStatusBarBackgroundColor(theme === 'dark' ? '#1f1e24' : '#ffffff', true);
  }, [theme]);
  return (
    <GestureHandlerRootView>
    <Stack screenOptions={{
        headerShown: false
    }} >
        <Stack.Screen name="(topbar)/accountinfo" options={{ headerShown: true, headerTitle: "Account info", headerBackTitle: "Go Back" }} />
    </Stack>
</GestureHandlerRootView>
  );
}