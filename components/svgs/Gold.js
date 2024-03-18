import React from "react";
import { View } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const Gold = ({ width, height }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 370 444" fill="none">
        <Path
          d="M359.987 71.1555L191.52 1.33C187.308 -0.443333 182.875 -0.443333 178.663 1.33L10.1968 71.1555C3.99015 73.8155 0 79.8006 0 86.4506V168.246C0 286.616 70.0465 394.123 178.22 441.782C180.437 442.668 182.653 443.111 184.87 443.111C187.087 443.111 189.525 442.668 191.52 441.782C299.915 394.123 369.74 286.616 369.74 168.246V86.4506C370.405 79.8006 366.193 73.8155 359.987 71.1555Z"
          fill="url(#paint0_linear_277_8)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_277_8"
            x1="179.357"
            y1="-2.11001e-05"
            x2="179.357"
            y2="443.111"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.0729167} stopColor="#E3A455" />
            <Stop offset={0.244792} stopColor="#F6DBA6" />
            <Stop offset={0.316} stopColor="#FFEBC4" />
            <Stop offset={0.532623} stopColor="#F0BE79" />
            <Stop offset={0.532723} stopColor="#EEBC70" />
            <Stop offset={0.708863} stopColor="#BA7F3B" />
            <Stop offset={0.824} stopColor="#8F653B" />
            <Stop offset={0.914} stopColor="#673D22" />
            <Stop offset={1} stopColor="#3F1F0F" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default Gold;
