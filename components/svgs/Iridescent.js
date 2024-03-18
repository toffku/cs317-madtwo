import React from "react";
import { View } from "react-native";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";

const Iridescent = ({ width, height }) => {
  return (
    <View>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 370 444"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M359.987 71.156L191.52 1.33c-4.212-1.773-8.645-1.773-12.857 0L10.197 71.156C3.99 73.816 0 79.8 0 86.45v81.795c0 118.37 70.046 225.877 178.22 273.536 2.217.886 4.433 1.329 6.65 1.329 2.217 0 4.655-.443 6.65-1.329 108.395-47.659 178.22-155.166 178.22-273.536V86.451c.665-6.65-3.547-12.635-9.753-15.295z"
          fill="url(#paint0_radial_279_21)"
        />
        <Path
          d="M359.987 71.156L191.52 1.33c-4.212-1.773-8.645-1.773-12.857 0L10.197 71.156C3.99 73.816 0 79.8 0 86.45v81.795c0 118.37 70.046 225.877 178.22 273.536 2.217.886 4.433 1.329 6.65 1.329 2.217 0 4.655-.443 6.65-1.329 108.395-47.659 178.22-155.166 178.22-273.536V86.451c.665-6.65-3.547-12.635-9.753-15.295z"
          fill="url(#paint1_angular_279_21)"
          fillOpacity={0.7}
          style={{
            mixBlendMode: "screen",
          }}
        />
        <Defs>
          <RadialGradient
            id="paint0_radial_279_21"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(34.344 -183.798 123.036) scale(357.373 389.512)"
          >
            <Stop offset={0.0760668} stopColor="#6E7CFB" />
            <Stop offset={0.351413} stopColor="#FB42FF" />
            <Stop offset={0.634538} stopColor="#FF42F7" />
            <Stop offset={1} stopColor="#4277FF" />
          </RadialGradient>
          <RadialGradient
            id="paint1_angular_279_21"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0 221.556 -184.905 0 184.905 221.556)"
          >
            <Stop offset={0.046875} stopColor="#fff" stopOpacity={0.72} />
            <Stop offset={0.244792} />
            <Stop offset={0.421875} stopColor="#fff" stopOpacity={0.72} />
            <Stop offset={0.625} />
            <Stop offset={0.802083} stopColor="#fff" stopOpacity={0.72} />
            <Stop offset={1} />
          </RadialGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default Iridescent;
