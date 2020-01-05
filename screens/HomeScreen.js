import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Modal
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import StanicaSelector from "../components/StanicaSelector";
import ModalButton from "../components/ModalButton";
import ModalSwitcher from "../components/ModalSwitcher";

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <View style={{
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 5,
      paddingRight: 5
    }}>
      <Image source={require('../assets/images/logo.png')} style={{
        height: 30,
        width: 53
      }} />
      <Text style={{
        color: "#FFFFFF",
        marginLeft: 5,
        fontSize: 15
      }}>Red Vožnje</Text>
    </View>
  }

  state = {
    stanicaOdText: "",
    stanicaDoText: "",
    stanicaOdItem: null,
    stanicaDoItem: null,
    
    modalVisible: false,
    
    tempMonthValue: 1,
    tempDayValue: 9,
    tempYearValue: 2019
  }

  _handleChange = (name) => (text, item) => {
    this.setState({
      [`${name}Text`]: text,
      [`${name}Item`]: item
    });
  }

  promeniStanice = () => {
    this.setState({
      stanicaOdText: this.state.stanicaDoText,
      stanicaDoText: this.state.stanicaOdText,
      stanicaOdItem: this.state.stanicaDoItem,
      stanicaDoItem: this.state.stanicaOdItem
    });
  }

  clear = () => {
    this.setState({
      stanicaOdText: "",
      stanicaDoText: "",
      stanicaOdItem: null,
      stanicaDoItem: null
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _handleMonthChange = (value) => {
    this.setState({
      tempMonthValue: value
    })
  }

  _handleValueChange = (name) => (value) => {
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <View style={{
        padding: 5
      }}>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false)
          }}>
          <View style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <View style={{
              backgroundColor: "#e8f1f7"
            }}>
              <View style={{
                padding: 15,
                flexDirection: "row"
              }}>
                <ModalSwitcher 
                  labels={["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"]}
                  maxValue={12}
                  onChange={this._handleMonthChange}
                  value={this.state.tempMonthValue}
                />
                <ModalSwitcher 
                  maxValue={31}
                  onChange={this._handleValueChange("tempDayValue")}
                  value={this.state.tempDayValue}
                />
                <ModalSwitcher 
                  onChange={this._handleValueChange("tempYearValue")}
                  value={this.state.tempYearValue}
                />
              </View>
              <View style={{
                backgroundColor: "#a5a5a5",
                flexDirection: "row"
              }}>
                <ModalButton text="Postavi" onPress={()=>{}} />
                <ModalButton text="Izađi" onPress={() => this.setModalVisible(false)} />
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.label}>Stanica OD:</Text>
        <StanicaSelector
          text={this.state.stanicaOdText}
          item={this.state.stanicaOdItem}
          handleChange={this._handleChange('stanicaOd')}
        />
        <Text style={styles.label}>Stanica DO:</Text>
        <StanicaSelector 
          text={this.state.stanicaDoText}
          item={this.state.stanicaDoItem}
          handleChange={this._handleChange('stanicaDo')}
        />
        <View style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginBottom: 5
        }}>
          <TouchableHighlight style={styles.buttonStyle} onPress={() => {
            this.setModalVisible(true);
          }}>
            <React.Fragment>
              <Text style={{
                color: "white",
                marginRight: 5
              }}>Jan 9, 2019</Text>
              <Entypo name="calendar" size={32} color="white" />
            </React.Fragment>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonStyle} onPress={this.promeniStanice}>
            <Entypo name="select-arrows" size={32} color="white" />
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonStyle} onPress={this.clear}>
            <Entypo name="ccw" size={32} color="white" />
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={[{
          marginRight: 5
        }, styles.buttonStyle]} 
          onPress={() => {}}>
          <React.Fragment>
            <Entypo name="magnifying-glass" size={32} color="white" />
            <Text style={{
              color: "white",
              fontSize: 18,
              marginRight: 27,
              marginLeft: 5
            }}>TRAŽI</Text>
          </React.Fragment>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: "#336699"
  },
  buttonStyle: {
    padding: 5,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#cc1111",
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "rgba(223,223,223,0.6)"
  }
})