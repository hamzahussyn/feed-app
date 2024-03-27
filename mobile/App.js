import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";

import BottomTabNavigator from "./base/navigators/BottomTabNavigator";

const App = () => {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        titlefont: require("./assets/fonts/Raleway-Medium.ttf"),
        bodyfont: require("./assets/fonts/TheanoDidot-Regular.ttf"),
        opensans: require("./assets/fonts/OpenSans-Regular.ttf")
      });
    }

    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
