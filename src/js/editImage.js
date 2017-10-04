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
  TextInput,
  Animated,
  PanResponder,
  Easing,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import SegmentControl from 'react-native-segmented-control-tab'
import {Actions,} from 'react-native-router-flux'
import ImageZoom from 'react-native-image-pan-zoom';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const backgroundImage = require('../assets/images/background.png');
const tittle = require('../assets/images/edit_tittle.png');
const dimension = require('../assets/images/edit_dimension.png');
const note = require('../assets/images/edit_note.png');
const folder = require('../assets/images/edit_folder.png');

const tittle_selected = require('../assets/images/edit_tittle_selected.png');
const dimension_selected = require('../assets/images/edit_dimension_selected.png');
const note_selected = require('../assets/images/edit_note_selected.png');
const folder_selected = require('../assets/images/edit_folder_selected.png');
const dimension_indicator_1 = require('../assets/images/dimension_indicator_1.png');
const dimension_indicator_2 = require('../assets/images/dimension_indicator_2.png');
const dimension_indicator_3 = require('../assets/images/dimension_indicator_3.png');
const note_indicator_1 = require('../assets/images/note_indicator_1.png');
const note_indicator_2 = require('../assets/images/note_indicator_2.png');
const note_indicator_3 = require('../assets/images/note_indicator_3.png');
const tittle_close = require('../assets/images/tittle_close.png');
const grid = require('../assets/images/grid.png');
var NUMBERS  =[]
var i = 0;
var x1 = [],y1 = [],x2 = [],y2 = [];
export default class Measurement extends Component {
    constructor(props) {
        super(props);
        this.state = {
          istittle:true,
          isdemension:false,
          isnote:false,
          isfolder:false,
          tittlebar:true,
          x2:[],
          y2:[],
          x1:[],
          y1:[],
          isLine:false,
          panToMove       : true,
          pinchtoZoom     : true,
          refresh:false,
        };
        i  = 0;
  }

  goAbout(){

  }
  showDimension(){
    this.setState({
      istittle:false,
      isdemension:true,
      isnote:false,
      isfolder:false,
    })
  }
  selectImageEdit_1(){
    this.setState({
      panToMove:false,
      pinchtoZoom:false,
      isLine:true,
    })
  }
  showTittle(){
    this.setState({
      istittle:true,
      isdemension:false,
      isnote:false,
      isfolder:false,
      tittlebar:true,
      isLine:false,
    })
  }
  showNote(){
    this.setState({
      istittle:false,
      isdemension:false,
      isnote:true,
      isfolder:false,
      isLine:false,
    })
  }
  showFolder(){
    this.setState({
      istittle:false,
      isdemension:false,
      isnote:false,
      isfolder:true,
      isLine:false,
    })
  }
  closeTittle(){
    this.setState({tittlebar:false})
  }

  subTools(){
    if(this.state.istittle&&this.state.tittlebar)
      return(
        <View style={{marginLeft:20,marginRight:20,height:60,alignItems:'center',backgroundColor:'white',marginBottom:5,flexDirection:'row',}}>
          <TextInput style={{flex:1,marginLeft:20,paddingTop:0,paddingBottom:0}} placeholder='Tittle....' placeholderTextColor="#afaeae"/>
          <TouchableOpacity onPress={this.closeTittle.bind(this)}>
            <Image source={tittle_close} style={{marginRight:20,width:10,height:10,resizeMode:'cover'}}/>
          </TouchableOpacity>
        </View>
      )
    else if(this.state.isdemension)
      return(
        <View style={{marginBottom:5,paddingTop:15,paddingBottom:15,flexDirection:'row',backgroundColor:'white',justifyContent:'space-between',marginRight:20,paddingRight:40,marginLeft:20,paddingLeft:40,alignItems:'center'}}>
            <TouchableOpacity onPress={this.selectImageEdit_1.bind(this)}>
              <Image source={dimension_indicator_1} style={{width:40,height:18,resizeMode:'cover'}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={dimension_indicator_2}  style={{width:40,height:18,resizeMode:'cover'}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={dimension_indicator_3}  style={{width:28,height:30,resizeMode:'cover'}}/>
            </TouchableOpacity>
        </View>
      )
    else if(this.state.isnote)
      return(
        <View style={{marginBottom:5,paddingTop:15,paddingBottom:15,flexDirection:'row',backgroundColor:'white',justifyContent:'space-between',marginRight:20,paddingRight:40,marginLeft:20,paddingLeft:40,alignItems:'center'}}>
            <TouchableOpacity>
              <Image source={note_indicator_1} style={{width:22,height:30,resizeMode:'cover'}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={note_indicator_2}  style={{width:46,height:30,resizeMode:'cover'}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={note_indicator_3}  style={{width:30,height:30,resizeMode:'cover'}}/>
            </TouchableOpacity>
        </View>
      )
    else if(this.state.isfolder)
      return(
        <View />
      )
  }

  goBack(){
    Actions.home();
  }
  onMoveShouldSetResponderCapture(evt){
    x2[i]=evt.nativeEvent.locationX,
    y2[i]=evt.nativeEvent.locationY,
    this.setState({
      refresh:true,
    });
  }
  onStartShouldSetResponderCapture(evt){
    i++;
    x1[i]=evt.nativeEvent.locationX,
    y1[i]=evt.nativeEvent.locationY,
    x2[i]=evt.nativeEvent.locationX,
    y2[i]=evt.nativeEvent.locationY,
    this.setState({
      refresh:false,
    });
  }
  drawLine() {
      return (
              <Svg height="300" width={width-40}>
                    <Line
                        x1={x1[i]}
                        y1={y1[i]}
                        x2={x2[i]}
                        y2={y2[i]}
                        stroke="red"
                        strokeWidth="2"
                      />
                    <Line
                        x1={(x1[i]<x2[i])?x2[i]-10*Math.cos(Math.atan((y2[i]-y1[i])/(x2[i]-x1[i]))+0.5):x2[i]+10*Math.cos(Math.atan((y2[i]-y1[i])/(x2[i]-x1[i]))+0.5)}
                        y1={(x1[i]<x2[i])?y2[i]-10*Math.sin(Math.atan((y2[i]-y1[i])/(x2[i]-x1[i]))+0.5):y2[i]+10*Math.sin(Math.atan((y2[i]-y1[i])/(x2[i]-x1[i]))+0.5)}
                        x2={x2[i]}
                        y2={y2[i]}
                        stroke="red"
                        strokeWidth="2"
                      />
                    <Line
                        x1={(x1[i]<x2[i])?x2[i]-10*Math.cos(Math.atan((y2[i]-y1[i])/(x2[i]-x1[i]))-0.5):x2[i]+10*Math.cos(Math.atan((y2[i]-y1[i])/(x2[i]-x1[i]))-0.5)}
                        y1={(x1[i]<x2[i])?y2[i]-10*Math.sin(Math.atan((y2[i]-y1[i])/(x2[i]-x1[i]))-0.5):y2[i]+10*Math.sin(Math.atan((y2[i]-y1[i])/(x2[i]-x1[i]))-0.5)}
                        x2={x2[i]}
                        y2={y2[i]}
                        stroke="red"
                        strokeWidth="2"
                      />
            </Svg>
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={backgroundImage} style={{flex:1,width:null,height:null,resizeMode:'cover'}}>
            <View style={{flex:1,backgroundColor:'white'}}/>
            <View style={{flex:3,alignItems:'center',flexDirection:'row',backgroundColor:'white'}}>
                <View style={{flex:1,justifyContent:'center'}}>
                  <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text style={{fontSize:14,marginLeft:10}}>Back</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:18}}> Measurment</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end'}}>
                      <TouchableOpacity onPress={this.goAbout.bind(this)}
                          style={{width:20,height:20,borderRadius:10,borderWidth:1,justifyContent:'center',alignItems:'center',marginRight:10,}}>
                          <Text style={{backgroundColor:'transparent'}}>!</Text>
                      </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:40}}>
                  <View style={{flex:1,}}>
                        <Text style={{backgroundColor:'transparent',marginTop:40,color:'white',fontSize:18,textAlign:'center'}}>EDIT IMAGE</Text>

                              <View onMoveShouldSetResponderCapture={(event)=>this.onMoveShouldSetResponderCapture(event)}
                                    onStartShouldSetResponderCapture ={(event)=>this.onStartShouldSetResponderCapture(event)}
                                    style={{flex:1,marginTop:60,marginLeft:20,marginRight:20,alignItems:'center'}}>
                                    <ImageZoom
                                     panToMove = {this.state.panToMove}
                                     pinchtoZoom = {this.state.pinchtoZoom}
                                     cropWidth={width-40}
                                     cropHeight={300}
                                     imageWidth={width-40}
                                     imageHeight={300}>
                                          <Image
                                            source={{uri: this.props.path}}
                                            style={{width:width-40,height:300,resizeMode:'cover'}}
                                            >
                                                <Image source={grid} style={{opacity:0.5,width:width-40,height:300}}>
                                                      {(this.state.refresh&&this.state.isLine)?this.drawLine():null}
                                                </Image>
                                          </Image>
                                    </ImageZoom>
                              </View>

                  <View>
                  {this.subTools()}
                </View>
              </View>
              <View style={{height:70,backgroundColor:'#2861a6',flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between'}}>
                  <TouchableOpacity onPress={this.showTittle.bind(this)} style={{flex:1,alignItems:'center'}}>
                    <Image source={(!this.state.istittle)?tittle:tittle_selected} style={{width:30,height:30,resizeMode:'stretch',marginBottom:5}}/>
                    <Text style={(!this.state.istittle)?{backgroundColor:'transparent',color:'white',marginBottom:5}:{backgroundColor:'transparent',color:'#53bee7',marginBottom:5}}>Titile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.showDimension.bind(this)} style={{flex:1,alignItems:'center'}}>
                    <Image source={(!this.state.isdemension)?dimension:dimension_selected} style={{width:30,height:30,resizeMode:'stretch',marginBottom:5}}/>
                    <Text style={(!this.state.isdemension)?{backgroundColor:'transparent',color:'white',marginBottom:5}:{backgroundColor:'transparent',color:'#53bee7',marginBottom:5}}>Dimension</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.showNote.bind(this)} style={{flex:1,alignItems:'center'}}>
                    <Image source={(!this.state.isnote)?note:note_selected} style={{width:30,height:30,resizeMode:'stretch',marginBottom:5}}/>
                    <Text style={(!this.state.isnote)?{backgroundColor:'transparent',color:'white',marginBottom:5}:{backgroundColor:'transparent',color:'#53bee7',marginBottom:5}}>Notes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.showFolder.bind(this)} style={{flex:1,alignItems:'center'}}>
                    <Image source={(!this.state.isfolder)?folder:folder_selected} style={{width:30,height:30,resizeMode:'stretch',marginBottom:5}}/>
                    <Text style={(!this.state.isfolder)?{backgroundColor:'transparent',color:'white',marginBottom:5}:{backgroundColor:'transparent',color:'#53bee7',marginBottom:5}}>Folder</Text>
                  </TouchableOpacity>
              </View>
            </View>
        </Image>

      </View>
    );
  }
}
let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
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
  dropZone    : {
        height  : 100,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : 0,
        left        : 0,
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : 1,
        height              : 1,
        borderRadius        : 1
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
