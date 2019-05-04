import { createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import Detail from "../screens/Detail";
import Timer from "../components/Timer";

export default createStackNavigator(
  {
    Home: HomeScreen,
    Detail: Detail,
    Notification: Timer
  },
  {
    initialRouteName: "Home"
  }
);
