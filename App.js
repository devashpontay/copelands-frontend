import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Navigator from "./navigation/navigationStack";

const getFonts = () =>
  Font.loadAsync({
    "ibmPlexMono-regular": require("./assets/fonts/IBMPlexMono-Regular.ttf"),
    "ibmPlexMono-light": require("./assets/fonts/IBMPlexMono-Light.ttf"),
    "ibmPlexMono-extraLight": require("./assets/fonts/IBMPlexMono-ExtraLight.ttf"),
    "ibmPlexMono-semiBold": require("./assets/fonts/IBMPlexMono-SemiBold.ttf"),
    "ibmPlexMono-bold": require("./assets/fonts/IBMPlexMono-Bold.ttf"),
    "ibmPlexMono-boldItalic": require("./assets/fonts/IBMPlexMono-BoldItalic.ttf"),
    "ibmPlexMono-medium": require("./assets/fonts/IBMPlexMono-Medium.ttf"),
    "ibmPlexMono-mediumItalic": require("./assets/fonts/IBMPlexMono-MediumItalic.ttf"),
  });

export default function App() {
  const [loadFonts, setLoadFonts] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
      .then(() => getFonts())
      .then(() => setLoadFonts(true))
      .catch(console.warn)
      .finally(() => SplashScreen.hideAsync());
  }, []);

  if (loadFonts) {
    console.log("@navigator")
    return <Navigator />;
  } else {
    console.log("@else")

    return null;
  }
}
