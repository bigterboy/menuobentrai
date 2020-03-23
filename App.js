/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Drawer from 'react-native-drawer';



export default class App extends Component {

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };


  render(){
    return(
      <Drawer
        openDrawerOffset={0.5} 
        tapToClose={true}
        ref={(ref) => this._drawer = ref}
        content={
          <View style={{flex:1,backgroundColor: "yellow"}}></View>
        }
        >
        <View style={{flex: 1,backgroundColor:"red",padding: 50}}>
          <TouchableOpacity onPress={()=>{this.openControlPanel()}}>
            <Text>CHANGE</Text>
          </TouchableOpacity>
        </View>
      </Drawer>
    );
  }
}
