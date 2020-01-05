import React from "react";
import {
    TouchableHighlight,
    Text
} from "react-native";

export default ({ text, onPress }) => (
    <TouchableHighlight style={{
        margin: 5,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#cc1111",
        borderWidth: 1,
        borderRadius: 1,
        borderColor: "rgba(223,223,223,0.6)"
      }} onPress={onPress}>
        <Text style={{
          color: "white"
        }}>{text}</Text>
    </TouchableHighlight>
)