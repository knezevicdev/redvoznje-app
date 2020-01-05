import React from "react";
import { 
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput
} from "react-native";
import Autocomplete from "react-native-autocomplete-input";

class StanicaSelector extends React.Component {

    state = {
        data: [],
        inputStyle: {
            borderColor: "transparent"
        },
        inputContainerStyle: {
            borderColor: "#B9B9B9"
        }
    }

    onFocus = () => {
        this.setState({
            inputStyle: {
                borderColor: "#336699"
            },
            inputContainerStyle: {
                borderColor: "#336699"
            }
        });
    }

    onBlur = () => {
        this.setState({
            inputStyle: {
                borderColor: "transparent"
            },
            inputContainerStyle: {
                borderColor: "#B9B9B9"
            }
        });
    }

    _hangleTextChange = (text) => {
        this.props.handleChange(text, null);

        text = text.trim();

        if(text.length === 0) {
            this.setState({
                data: []
            });
            return;
        }

        fetch(`http://w3.srbrail.rs/ZSRedVoznje//api/stanica/?term=${text}`, {
            method: 'GET',
            Accept: 'application/json, text/javascript, */*; q=0.01'
        })
        .then(response => response.json())
        .then(data => this.setState({ data }))
        .catch(error => console.log(error));
    }

    render = () => (
        <View style={{
            height: 40,
            margin: 3
        }}>
            <View style={styles.autocompleteContainer}>
                <Autocomplete
                    data={this.state.data}
                    renderTextInput={() => (
                        <TextInput
                            value={this.props.text} 
                            onChangeText={this._hangleTextChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            style={[{
                                paddingLeft: 5,
                                paddingRight: 5,
                                borderWidth: 2,
                                borderRadius: 5
                            }, this.state.inputStyle]}
                         />
                    )}
                    renderItem={item => (
                        <TouchableOpacity style={{
                            padding: 5,
                            borderBottomColor: "#A5A5A5",
                            borderBottomWidth: 1
                        }} onPress={() => {
                            this.props.handleChange(item.naziv, item);
                            this.setState({ data: [] });
                        }}>
                            <Text>{item.naziv}</Text>
                        </TouchableOpacity>
                    )}
                    listStyle={{
                        margin: 5,
                        zIndex: 99,
                        maxHeight: 180
                    }}
                    style={{
                        zIndex: 1
                    }}
                    hideResults={this.props.item !== null || this.props.text.trim().length===0}
                    inputContainerStyle={{
                        ...this.state.inputContainerStyle,
                        borderRadius: 5
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    autocompleteContainer: {
      flex: 1,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0
    }
  });

export default StanicaSelector;