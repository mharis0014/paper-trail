import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const wp = (percentage) => {
  const width = deviceWidth;
  return (percentage * width) / 100;
};

export const hp = (percentage) => {
  const height = deviceHeight;
  return (percentage * height) / 100;
};

export const getColumnCount = () => {
  //desktop
  if (deviceWidth >= 1024) {
    return 4;
  } else if (deviceWidth >= 768) {
    //tablet
    return 3;
  } else {
    // mobile
    return 2;
  }
};

export const getImageSize = (height, width) => {
  if (width > height) {
    // landscape
    return 250;
  } else if (width < height) {
    // square
    return 300;
  } else {
    // portrait
    return 200;
  }
};

export const capitalize = (string) => {
  return string.replace(/\b\w/g, (l) => l.toUpperCase());
};
