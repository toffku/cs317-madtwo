import React from "react";
import { View } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const Bronze = ({ width, height }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 370 444" fill="none">
        <Path
          d="M359.987 71.1555L191.52 1.33C187.308 -0.443333 182.875 -0.443333 178.663 1.33L10.1968 71.1555C3.99015 73.8155 0 79.8006 0 86.4506V168.246C0 286.616 70.0465 394.123 178.22 441.782C180.437 442.668 182.653 443.111 184.87 443.111C187.087 443.111 189.525 442.668 191.52 441.782C299.915 394.123 369.74 286.616 369.74 168.246V86.4506C370.405 79.8006 366.193 73.8155 359.987 71.1555Z"
          fill="url(#paint0_linear_279_11)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_279_11"
            x1="184.905"
            y1="0"
            x2="184.905"
            y2="443.111"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#4A311F" />
            <Stop offset={0.284} stopColor="#E7AA7F" />
            <Stop offset={1} stopColor="#5E300F" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default Bronze;
