import React from "react";
import {
    View, 
    TouchableHighlight,
    Text
} from "react-native";
import { Entypo } from '@expo/vector-icons';

class ModalSwitcher extends React.Component {

    onUpClick = () => {
        if(this.props.maxValue && this.props.value === this.props.maxValue) {
            return this.props.onChange(1);
        }

        this.props.onChange(this.props.value + 1);
    }

    onDownClick = () => {
        if(this.props.value === 1) {

            if(this.props.maxValue) {
                return this.props.onChange(this.props.maxValue);
            }

            return;
        }

        return this.props.onChange(this.props.value - 1);
    }

    getLabel = () => {
        if(!this.props.labels) return this.props.value;

        return this.props.labels[this.props.value - 1];
    }

    render() {
        return (
            <View style={{
                margin: 5
            }}>
                <TouchableHighlight style={{
                    paddingTop: 2,
                    paddingBottom: 2,
                    paddingLeft: 5,
                    paddingRight: 5,
                    backgroundColor: "#336699",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2
                }} onPress={this.onUpClick}>
                    <Entypo name="chevron-up" size={25} color="white" />
                </TouchableHighlight>
                <View style={{
                    backgroundColor: "white",
                    padding: 5,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Text style={{
                    fontSize: 20
                }}>{this.getLabel()}</Text>
                </View>
                <TouchableHighlight style={{
                    paddingTop: 2,
                    paddingBottom: 2,
                    paddingLeft: 5,
                    paddingRight: 5,
                    backgroundColor: "#336699",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 2
                }} onPress={this.onDownClick}>
                    <Entypo name="chevron-down" size={25} color="white" />
                </TouchableHighlight>
            </View>
        );
    }
}

export default ModalSwitcher;