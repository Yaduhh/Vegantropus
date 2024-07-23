// utils/fonts.js
import * as Font from "expo-font";

export const loadFonts = () => {
  return Font.loadAsync({
    "poppins-regular": require("./../assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("./../assets/fonts/Poppins-Medium.ttf"),
    "poppins-semibold": require("./../assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-bold": require("./../assets/fonts/Poppins-Bold.ttf"),
  });
};
