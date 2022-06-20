import {Platform} from "react-native"

/**
 * You can find a list of available fonts on both iOS and Android here:
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Text /> component.
 */

const androidFont = {
  /**
   * The primary font.  Used in most places.
   */
  primary: "Kara",

  /**
   * The light font.
   */
  light: "KaraLight",

  /**
   * The bold font.
   */
  bold: "KaraSemiBold",

  /**
   * The bold font.
   */
  medium: "KaraSemiBold",
};

const iosFont = {
  /**
   * The primary font.  Used in most places.
   */
  primary: "Kara",

  /**
   * The light font.
   */
  light: "KaraLight",

  /**
   * The bold font.
   */
  bold: "KaraSemiBold",

  /**
   * The bold font.
   */
  medium: "KaraSemiBold",
};

export const typography = (Platform.OS === "android" ? androidFont : iosFont);
