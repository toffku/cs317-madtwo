import {
  View,
  Text,
  Modal,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import FontComponent from "./FontComponent";
import Bronze from "./svgs/Bronze";
import Silver from "./svgs/Silver";
import Gold from "./svgs/Gold";
import GlobalStyles from "../global/GlobalStyles";
import Crimson from "./svgs/Crimson";
import Platinum from "./svgs/Platinum";
import Diamond from "./svgs/Diamond";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const NewDivisionModal = ({ toggle, openModal }) => {
  const divisions = [
    {
      name: "BRONZE",
      component: <Bronze width={70} height={70} />,
      color: "#dca570",
    },
    {
      name: "SILVER",
      component: <Silver width={70} height={70} />,
      color: "#aaa9ad",
    },
    {
      name: "GOLD",
      component: <Gold width={70} height={70} />,
      color: "#EEBC70",
    },
    {
      name: "PLATINUM",
      component: <Platinum width={70} height={70} />,
      color: "#82C1F5",
    },
    {
      name: "DIAMOND",
      component: <Diamond width={70} height={70} />,
      color: "#59FDA4",
    },
    {
      name: "CRIMSON",
      component: <Crimson width={70} height={70} />,
      color: "#FF1919",
    },
    {
      name: "IRIDESCENT",
      component: (
        <Image
          source={require("../assets/images/iridescent.png")}
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
          }}
        />
      ),
      color: "#FB42FF",
    },
    {
      name: "???",
      component: (
        <Image
          source={require("../assets/images/master.png")}
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
          }}
        />
      ),
      color: "#777",
    },
  ];

  return (
    <Modal
      visible={openModal}
      transparent={true}
      animationType="fade"
      statusBarTranslucent
    >
      <View className="flex-1 justify-between p-5 bg-black/90">
        <View className="flex-1 items-start justify-between w-full">
          <View className="mb-4 mt-5 flex-row justify-between w-full">
            <View>
              <FontComponent
                className=" text-4xl"
                bold={true}
                style={GlobalStyles.themeText}
              >
                DIVISIONS
              </FontComponent>
              <FontComponent className="text-white text-lg">
                COMING SOON
              </FontComponent>
            </View>
            <TouchableOpacity onPress={toggle}>
              <Icon
                name="window-close"
                size={30}
                color="rgba(255, 255, 255, 0.3)"
              />
            </TouchableOpacity>
          </View>
          {divisions.map(({ name, component, color }) => (
            <View key={name} className="w-full flex-row items-center ">
              {component}
              <View className="flex-1 mr-6 items-center ">
                <FontComponent
                  className="text-lg"
                  bold={true}
                  style={{ color: color }}
                >
                  {name}
                </FontComponent>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default NewDivisionModal;
