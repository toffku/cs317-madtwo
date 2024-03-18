import React from "react";
import { View } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const Diamond = ({ width, height }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 370 444" fill="none">
        <Path
          d="M359.987 71.1555L191.52 1.33C187.308 -0.443333 182.875 -0.443333 178.663 1.33L10.1968 71.1555C3.99015 73.8155 0 79.8006 0 86.4506V168.246C0 286.616 70.0465 394.123 178.22 441.782C180.437 442.668 182.653 443.111 184.87 443.111C187.087 443.111 189.525 442.668 191.52 441.782C299.915 394.123 369.74 286.616 369.74 168.246V86.4506C370.405 79.8006 366.193 73.8155 359.987 71.1555Z"
          fill="url(#paint0_linear_279_17)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_279_17"
            x1="185.784"
            y1="0"
            x2="185.784"
            y2="443.511"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#4584FD" />
            <Stop offset={0.493174} stopColor="#59FDA4" />
            <Stop offset={0.864} stopColor="#256CF4" />
            <Stop offset={1} stopColor="#0022D5" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default Diamond;
