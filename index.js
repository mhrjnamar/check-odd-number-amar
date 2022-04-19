import { Dimensions } from "react-native";

export const isOdd = (num) => num%2==0? false: true; 

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const ph = (percent) => {
    return (percent * screenHeight) / 100;
  };
  
  export const pw = (percent) => {
    return (percent * screenWidth) / 100;
  };
  