/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import SegmentControl from 'react-native-segmented-control-tab'
import {Actions,} from 'react-native-router-flux'
import Modal from 'react-native-modal';

const settingIcon = require('../../assets/images/settingIcon.png');
const cameraIcon = require('../../assets/images/cameraIcon.png');
const backIcon = require('../../assets/images/backIcon.png');
const camera = require('../../assets/images/camera.png');
const gallery = require('../../assets/images/gallery.png');

export default class Measurement extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedIndex:0,
          isModalVisible:false
        };
      }

  handleIndexChange = (index) => {
      this.setState({
        selectedIndex: index,
      });
    }
  goTutorial(){
    Actions.tutorial();
  }
  onCamera(){
    this.setState({
      isModalVisible:false,
    })
    Actions.cameraform();
  }
  cameraGallery(){
    this.setState({
      isModalVisible:true,
    })
  }
  modalRemove(){
    this.setState({isModalVisible:false})
  }

  render() {
    return (
      <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'white'}}/>
            <View style={{flex:3,alignItems:'center',flexDirection:'row',backgroundColor:'white'}}>
                <View style={{flex:1}}/>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:18}}> Measurment</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end'}}>
                    <TouchableOpacity onPress={this.goTutorial.bind(this)} style={{width:20,height:20,borderRadius:10,borderWidth:1,justifyContent:'center',alignItems:'center',marginRight:10,}}>
                      <Text style={{backgroundColor:'transparent'}}>!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:40}}>
                <View style={{flex:1,padding:20}}>
                    <SegmentControl
                      tabStyle = {{marginTop:10,height:50,backgroundColor:'#144f97'}}
                      tabTextStyle = {{color:'#53bee7'}}
                      activeTabStyle = {{backgroundColor:'#06366f'}}
                      activeTabTextStyle = {{color:'white'}}
                      values={['PHOTOS', 'FOLDER']}
                      selectedIndex={this.state.selectedIndex}
                      onTabPress = {this.handleIndexChange}
                    />
                </View>
            </View>
          </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  typeButton: {
    padding: 5,
  },
  flashButton: {
    padding: 5,
  },
  buttonsSpace: {
    width: 10,
  },
});

AppRegistry.registerComponent('Measurement', () => Measurement);
