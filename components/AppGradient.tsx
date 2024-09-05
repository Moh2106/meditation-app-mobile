import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Content from "./Content";

const AppGradient = ({children, color}: {children:any; color: string[]}) => {
  return (
    <LinearGradient
      className="flex-1"
      // Background Linear Gradient
      colors={color}
    >
        <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;
