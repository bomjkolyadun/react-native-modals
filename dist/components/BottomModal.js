Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/BottomModal.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _SlideAnimation=require('../animations/SlideAnimation');var _SlideAnimation2=_interopRequireDefault(_SlideAnimation);var _Modal=require('./Modal');var _Modal2=_interopRequireDefault(_Modal);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}var babelPluginFlowReactPropTypes_proptype_ModalProps=require('../type').babelPluginFlowReactPropTypes_proptype_ModalProps||require('prop-types').any;var styles=_reactNative.StyleSheet.create({container:{justifyContent:'flex-end'},modal:{borderBottomRightRadius:0,borderBottomLeftRadius:0}});var BottomModal=function BottomModal(_ref){var style=_ref.style,modalStyle=_ref.modalStyle,restProps=_objectWithoutProperties(_ref,['style','modalStyle']);return _react2.default.createElement(_Modal2.default,_extends({modalAnimation:new _SlideAnimation2.default({slideFrom:'bottom'})},restProps,{style:_reactNative.StyleSheet.flatten([styles.container,style]),modalStyle:_reactNative.StyleSheet.flatten([styles.modal,modalStyle]),width:1,swipeDirection:'down',__source:{fileName:_jsxFileName,lineNumber:24}}));};BottomModal.propTypes=babelPluginFlowReactPropTypes_proptype_ModalProps===require('prop-types').any?{}:babelPluginFlowReactPropTypes_proptype_ModalProps;exports.default=BottomModal;