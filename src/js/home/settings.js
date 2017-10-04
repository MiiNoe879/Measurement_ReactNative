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
import Switch from 'react-native-customisable-switch';

const settingIcon = require('../../assets/images/settingIcon.png');
const cameraIcon = require('../../assets/images/cameraIcon.png');
const backIcon = require('../../assets/images/backIcon.png');
const camera = require('../../assets/images/camera.png');
const gallery = require('../../assets/images/gallery.png');
const selectLanguage = require('../../assets/images/pulldown.png');

export default class Measurement extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedIndex:0,
          saveDeviceOnOff:true
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
                  <Text style={{fontSize:18}}> Settings</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end'}}/>
            </View>
            <View style={{flex:40}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',height:60,marginLeft:20,marginRight:20,borderBottomWidth:1,borderBottomColor:'#53bee7'}}>
                    <View style={{flex:1,justifyContent:'center',}}>
                        <Text style={{backgroundColor:'transparent',color:'white',fontSize:16}}>Show tips during edit </Text>
                    </View>
                    <View style={{justifyContent:'center',}}>
                        <Switch
                            activeBackgroundColor={'#53d769'}
                            inactiveBackgroundColor={'white'}
                            activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                            inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                            switchWidth={40}
                            switchHeight={24}
                            switchBorderRadius={12}
                            switchBorderColor={'rgba(200, 200, 200, 1)'}
                            switchBorderWidth={1}
                            buttonWidth={24}
                            buttonHeight={24}
                            buttonBorderWidth={1}
                            buttonBorderColor={'rgba(200, 200, 200, 1)'}
                            buttonBorderRadius={12}
                            animationTime={10}
                            padding={false}
                            value={this.state.saveDeviceOnOff}
                            onChangeValue={(value) => {
                                this.setState({saveDeviceOnOff:value})
                            }}
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',height:60,marginLeft:20,marginRight:20,borderBottomWidth:1,borderBottomColor:'#53bee7'}}>
                    <View style={{flex:1,justifyContent:'center',}}>
                        <Text style={{backgroundColor:'transparent',color:'white',fontSize:16}}>Save photo in device</Text>
                    </View>
                    <View style={{justifyContent:'center',}}>
                        <Switch
                            activeBackgroundColor={'#53d769'}
                            inactiveBackgroundColor={'white'}
                            activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                            inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                            switchWidth={40}
                            switchHeight={24}
                            switchBorderRadius={12}
                            switchBorderColor={'rgba(200, 200, 200, 1)'}
                            switchBorderWidth={1}
                            buttonWidth={24}
                            buttonHeight={24}
                            buttonBorderWidth={1}
                            buttonBorderColor={'rgba(200, 200, 200, 1)'}
                            buttonBorderRadius={12}
                            animationTime={10}
                            padding={false}
                            value={this.state.saveDeviceOnOff}
                            onChangeValue={(value) => {
                                this.setState({saveDeviceOnOff:value})
                            }}
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',height:60,marginLeft:20,marginRight:20,borderBottomWidth:1,borderBottomColor:'#53bee7'}}>
                    <View style={{flex:1,justifyContent:'center',}}>
                        <Text style={{backgroundColor:'transparent',color:'white',fontSize:16}}>Show tutorial at start</Text>
                    </View>
                    <View style={{justifyContent:'center',}}>
                        <Switch
                            activeBackgroundColor={'#53d769'}
                            inactiveBackgroundColor={'white'}
                            activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                            inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                            switchWidth={40}
                            switchHeight={24}
                            switchBorderRadius={12}
                            switchBorderColor={'rgba(200, 200, 200, 1)'}
                            switchBorderWidth={1}
                            buttonWidth={24}
                            buttonHeight={24}
                            buttonBorderWidth={1}
                            buttonBorderColor={'rgba(200, 200, 200, 1)'}
                            buttonBorderRadius={12}
                            animationTime={10}
                            padding={false}
                            value={this.state.saveDeviceOnOff}
                            onChangeValue={(value) => {
                                this.setState({saveDeviceOnOff:value})
                            }}
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',height:60,marginLeft:20,marginRight:20,borderBottomWidth:1,borderBottomColor:'#53bee7'}}>
                    <View style={{flex:1,justifyContent:'center',}}>
                        <Text style={{backgroundColor:'transparent',color:'white',fontSize:16}}>Language settings</Text>
                    </View>
                    <View style={{justifyContent:'center',}}>
                      <TouchableOpacity>
                        <Image source={selectLanguage} style={{}}/>
                      </TouchableOpacity>  
                    </View>
                </View>
                <Text style={{marginTop:20,marginLeft:20,backgroundColor:'transparent',color:'white',fontSize:16}}>Imprint</Text>
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
