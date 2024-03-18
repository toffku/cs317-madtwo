import { View, Text, Modal, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import FontComponent from "./FontComponent";
import Crimson from "./svgs/Crimson";
import GlobalStyles from "../global/GlobalStyles";

const NewDivisionModal = ({ toggle, openModal }) => {
  return (
    <Modal visible={openModal} transparent={true} animationType="fade">
      <View className="flex-1 justify-between p-8 bg-black/80">
        <View className="flex-1 items-center justify-center w-full ">
          <FontComponent className="text-white text-lg mb-5 mt-8" bold={true}>
            NEW DIVISION
          </FontComponent>
          <Crimson width={200} height={200} />
          <FontComponent
            bold={true}
            style={{ color: "#FF1919" }}
            className="text-4xl mt-8"
          >
            CRIMSON
          </FontComponent>
        </View>

        <TouchableOpacity
          style={GlobalStyles.bgColor}
          className="w-full h-16 items-center justify-center rounded-lg self-end"
          onPress={() => toggle()}
        >
          <FontComponent style={GlobalStyles.themeText} className="text-lg">
            Done
          </FontComponent>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default NewDivisionModal;
