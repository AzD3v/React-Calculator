(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),ResultBoard=function ResultBoard(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:props.style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,props.result," "))};__webpack_exports__.a=ResultBoard,ResultBoard.__docgenInfo={description:"",methods:[],displayName:"ResultBoard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResultBoard.js"]={name:"ResultBoard",docgenInfo:ResultBoard.__docgenInfo,path:"src/components/ResultBoard.js"})},278:function(module,exports,__webpack_require__){__webpack_require__(279),__webpack_require__(389),module.exports=__webpack_require__(390)},3:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),Button=function Button(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{style:props.style,onClick:props.onClickButton,value:props.value},props.label)};__webpack_exports__.a=Button,Button.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/Button.js"})},300:function(module,exports){},390:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(48);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(597),module)}.call(this,__webpack_require__(96)(module))},597:function(module,exports,__webpack_require__){var map={"./index.stories.js":598};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=597},598:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(599),__webpack_require__(612),__webpack_require__(613)},599:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(48),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(82),_src_components_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).add("styled",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Button__WEBPACK_IMPORTED_MODULE_3__.a,{style:{fontSize:"25px",padding:"12px 26px",background:"#192a56",color:"#f5f6fa",border:"none"},onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("click"),label:"3²"})})).add("styled and rounded",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Button__WEBPACK_IMPORTED_MODULE_3__.a,{style:{fontSize:"25px",padding:"15px 26px",background:"#192a56",color:"#f5f6fa",border:"none",borderRadius:"12px"},onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("click"),label:"3²"})})).add("styled with symbol as label",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Button__WEBPACK_IMPORTED_MODULE_3__.a,{style:{fontSize:"25px",padding:"12px 26px",background:"#192a56",color:"#f5f6fa",border:"none"},onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("click"),label:"⏎"})}))}).call(this,__webpack_require__(96)(module))},612:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(48),_src_components_Touchpad__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(82),__webpack_require__(83));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Touchpad",module).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Touchpad__WEBPACK_IMPORTED_MODULE_3__.a,null)})).add("wide",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Touchpad__WEBPACK_IMPORTED_MODULE_3__.a,{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",margin:"50px"}})})).add("compressed",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Touchpad__WEBPACK_IMPORTED_MODULE_3__.a,{style:{height:"200px",width:"400px",display:"grid",gridTemplateColumns:"repeat(6, 1fr)",margin:"0",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}))}).call(this,__webpack_require__(96)(module))},613:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(48),_src_components_ResultBoard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(125);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("ResultBoard",module).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_ResultBoard__WEBPACK_IMPORTED_MODULE_2__.a,{style:{background:"#111",color:"#fff"},html:"3²"})})).add("compressed",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_ResultBoard__WEBPACK_IMPORTED_MODULE_2__.a,{style:{margin:"0 200px",background:"#111",color:"#fff"}})})).add("compressed and styled",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_ResultBoard__WEBPACK_IMPORTED_MODULE_2__.a,{style:{margin:"0 200px",background:"#535c68",color:"#fff"}})}))}).call(this,__webpack_require__(96)(module))},83:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),Touchpad=function Touchpad(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:props.style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"7",label:"7"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"8",label:"8"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"9",label:"9"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"÷",label:"÷"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onUndo,label:"⏎",value:""}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onClear,label:"C",value:""}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"4",label:"4"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"5",label:"5"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"6",label:"6"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"x",label:"x"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"(",label:"("}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:")",label:")"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"1",label:"1"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"2",label:"2"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"3",label:"3"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"-",label:"-"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onPowerOf2,value:"",label:"x²"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"√",label:"√"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"0",label:"0"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:".",label:"."}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"%",label:"%"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:props.onChosenValueClick,value:"+",label:"+"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{onClickButton:function onClickButton(){return props.onCalculateResultClick(props.result)},value:"",label:"="}))};__webpack_exports__.a=Touchpad,Touchpad.__docgenInfo={description:"",methods:[],displayName:"Touchpad"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Touchpad.js"]={name:"Touchpad",docgenInfo:Touchpad.__docgenInfo,path:"src/components/Touchpad.js"})}},[[278,1,2]]]);
//# sourceMappingURL=main.0508cfb68e6d0a3638c0.bundle.js.map