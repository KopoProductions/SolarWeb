(this["webpackJsonpsolar-city"]=this["webpackJsonpsolar-city"]||[]).push([[0],Array(33).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(1),r=n.n(o),a=n(15),c=n.n(a),s=(n(33),n(34),n(8)),l=n(4),u=n(5),d=n(7),j=n(6),O=(n(35),function(){return Object(i.jsx)("section",{className:"VLine"})}),p=(n(36),function(e){var t=e.children;return Object(i.jsxs)("section",{className:"Article",children:[Object(i.jsx)(O,{}),Object(i.jsx)("section",{className:"Article__Container",children:t})]})}),h=(n(37),function(e){var t=e.children,n=e.onClick;return Object(i.jsx)("section",{className:"CTA",onClick:n,children:Object(i.jsx)("p",{className:"CTA__Text",children:t})})}),m=(n(38),function(e){var t=e.children;return Object(i.jsx)("p",{className:"Pointer",children:t})}),b=n(9),A=document.getElementById("modal"),f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).element=document.createElement("div"),i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){A.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){A.removeChild(this.element)}},{key:"render",value:function(){return Object(a.createPortal)(this.props.children,this.element)}}]),n}(o.Component),C=(n(43),{TOGGLE_MODAL_CARDS:"TOGGLE_MODAL_CARDS",TOGGLE_MODAL_QUESTIONNAIRE:"TOGGLE_MODAL_QUESTIONNAIRE"}),_={ZIPCODE:"ZIPCODE",EBILL:"EBILL",CONTACT:"CONTACT",NAME:"NAME",NO:"NO",YES:"YES"},x=_.ZIPCODE,w=_.EBILL,v=_.CONTACT,y=_.NAME,g=_.NO,N=_.YES,I=function(e){return{type:x,payload:e}},E=function(){return{type:g}},B=function(){return{type:N}},T={MOVEFORWARDS:"MOVEFORWARDS",MOVEBACKWARDS:"MOVEBACKWARDS"},S=T.MOVEFORWARDS,k=T.MOVEBACKWARDS,R=function(){return{type:S}},H=function(){return{type:k}},D=(n(44),n(45),function(e){var t=e.children;return Object(i.jsx)("h2",{className:"QuestionnaireTitle",children:t})}),Q=(n(46),r.a.forwardRef((function(e,t){var n=e.name,o=e.placeholder,r=e.onClick,a=e.styles;return Object(i.jsx)("input",{onClick:r,ref:t,name:n,placeholder:o,className:"InputBox ".concat(a)})}))),W=(n(47),function(e){var t=e.children;return Object(i.jsx)("h3",{className:"QuestionnaireSubTitle",children:t})}),F=(n(48),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).zipCodeInput=r.a.createRef(),i}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.zipCodeAction,o=t.noAction,r=t.yesAction,a=t.moveForwardsAction;return Object(i.jsxs)("section",{className:"QuestionnaireCardHome",children:[Object(i.jsx)("section",{className:"QuestionnaireCardHome__Blur"}),Object(i.jsxs)("section",{className:"QuestionnaireCardHome__Container",children:[Object(i.jsx)("section",{className:"QuestionnaireCardHome__Container__Top",children:Object(i.jsx)(D,{children:"Do you own your home?"})}),Object(i.jsx)("section",{className:"QuestionnaireCardHome__Container__Bottom",children:Object(i.jsxs)(W,{children:[Object(i.jsx)(Q,{name:"zipCode",placeholder:"Zip Code",ref:this.zipCodeInput})," ",Object(i.jsx)("span",{className:"QuestionnaireCardHome__Container__Bottom__Span",onClick:function(){return n(e.zipCodeInput.current.value),r(),a()},children:"Yes"})," or ",Object(i.jsx)("span",{className:"QuestionnaireCardHome__Container__Bottom__Span",onClick:o,children:"No"})]})})]})]})}}]),n}(o.Component)),V=(n(49),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).eBillInput=r.a.createRef(),i.defaulBilltValue="100",i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){return this.props.eBillAction(this.defaulBilltValue)}},{key:"render",value:function(){var e=this.props,t=(e.moveBackwardsAction,e.moveForwardsAction),n=e.eBillAction,o=e.eBill;return Object(i.jsx)("section",{className:"QuestionnaireCardBill",children:Object(i.jsx)("section",{className:"QuestionnaireCardBill__Blur",children:Object(i.jsxs)("section",{className:"QuestionnaireCardBill__Blur__Container",children:[Object(i.jsx)("section",{className:"QuestionnaireCardBill__Blur__Container__Top",children:Object(i.jsx)(D,{children:"What is your average Electrical Bill?"})}),Object(i.jsxs)("section",{className:"QuestionnaireCardBill__Blur__Container__Bottom",children:[Object(i.jsx)("p",{className:"QuestionnaireCardBill__Blur__Container__Counter",children:"$".concat(o)}),Object(i.jsx)("input",{ref:this.eBillInput,id:"eBillRange",className:"QuestionnaireCardBill__Blur__Container__Bottom__Input",defaultValue:this.defaulBilltValue,type:"range",min:"0",max:"1500",onChange:function(e){return n(e.target.value)}}),Object(i.jsx)(h,{onClick:t,children:"Next"})]})]})})})}}]),n}(o.Component)),L=Object(b.b)((function(e){return{eBill:e.quoteForm.eBill}}))(V),G=(n(50),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).nameInput=r.a.createRef(),i.phoneInput=r.a.createRef(),i}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.moveForwardsAction;return Object(i.jsx)("section",{className:"QuestionnaireCardContact",children:Object(i.jsxs)("section",{className:"QuestionnaireCardContact__Container",children:[Object(i.jsx)(D,{children:"How do you want the information sent?"}),Object(i.jsx)(Q,{ref:this.phoneInput,placeholder:"Phone #",name:"phoneNumber"}),Object(i.jsx)(Q,{ref:this.nameInput,placeholder:"Email @",name:"email"}),Object(i.jsx)(h,{onClick:function(){return e.props.contactAction([e.nameInput.current.value,e.phoneInput.current.value]),t()},children:"Next"})]})})}}]),n}(o.Component)),z=(n(51),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).firstNameInput=r.a.createRef(),i.lastNameInput=r.a.createRef(),i}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.nameAction,o=t.moveForwardsAction;return Object(i.jsx)("section",{className:"QuestionnaireCardName",children:Object(i.jsxs)("section",{className:"QuestionnaireCardName__Container",children:[Object(i.jsx)(D,{children:"How do you want the information sent?"}),Object(i.jsx)(Q,{ref:this.firstNameInput,placeholder:"First Name",name:"firstName"}),Object(i.jsx)(Q,{ref:this.lastNameInput,placeholder:"Last Name",name:"lastName"}),Object(i.jsx)(h,{onClick:function(){return n([e.firstNameInput.current.value,e.lastNameInput.current.value]),o()},children:"Next"})]})})}}]),n}(o.Component)),q=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.ownsHome,o=(e.zipCode,e.eBill,e.contact,e.name,e.zipCodeAction),r=e.yesAction,a=e.noAction,c=e.eBillAction,s=e.contactAction,l=e.nameAction,u=(e.question,e.questionnairePosition),d=e.moveBackwardsAction,j=e.moveForwardsAction;return Object(i.jsx)("section",{className:"QuestionnaireViewer",onClick:t,children:Object(i.jsxs)("section",{className:"QuestionnaireViewer__Container",onClick:function(e){return e.stopPropagation()},children:[0===u?Object(i.jsx)(F,{noAction:a,yesAction:r,zipCodeAction:o,moveForwardsAction:j}):!1===n?Object(i.jsx)("section",{className:"QuestionnaireViewer__Container__Blur",children:Object(i.jsx)(D,{children:"Sorry, Solar only works if you are a Homeowner."})}):1===u?Object(i.jsx)(L,{moveForwardsAction:j,moveBackwardsAction:d,eBillAction:c}):2===u?Object(i.jsx)(G,{moveForwardsAction:j,moveBackwardsAction:d,contactAction:s}):3===u?Object(i.jsx)(z,{moveForwardsAction:j,moveBackwardsAction:d,nameAction:l}):4===u?Object(i.jsx)("section",{className:"QuestionnaireViewer__Container__Blur",children:Object(i.jsx)(D,{children:"Thank you, we will contact you shortly!"})}):null,Object(i.jsx)("p",{className:"QuestionnaireViewer__Container__X",onClick:t,children:"X"})]})})}}]),n}(o.Component),P=Object(b.b)((function(e){var t=e.quoteForm;return{ownsHome:t.ownsHome,zipCode:t.zipCode,eBill:t.eBill,contact:t.contact,name:t.name,questionnairePosition:e.questionnaireStage.questionnairePosition}}),(function(e){return{zipCodeAction:function(t){return e(I(t))},eBillAction:function(t){return e({type:w,payload:t})},contactAction:function(t){return e({type:v,payload:t})},nameAction:function(t){return e({type:y,payload:t})},noAction:function(){return e(E())},yesAction:function(){return e(B())},moveForwardsAction:function(){return e(R())},moveBackwardsAction:function(){return e(H())}}}))(q);n(52);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var J=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.0411072 25.0574L8.99999 12.5574L0.0411127 0.057373H80V25.0574H0.0411072Z",fill:"#FA9400"});function U(e,t){var n=e.title,i=e.titleId,r=M(e,["title","titleId"]);return o.createElement("svg",Y({width:80,height:26,viewBox:"0 0 80 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),n?o.createElement("title",{id:i},n):null,J)}var Z=o.forwardRef(U),K=(n.p,{TOGGLETICKET:"TOGGLETICKET"}),X=K.TOGGLETICKET,$=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.styles;return Object(i.jsxs)("section",{className:"Ticket ".concat(n),onClick:this.props.toggleTicketAction,children:[Object(i.jsx)(Z,{width:"52px"}),Object(i.jsx)("p",{className:"Ticket__Text",children:t})]})}}]),n}(o.Component),ee=Object(b.b)(null,(function(e){return{toggleTicketAction:function(){return e({type:X})}}}))($),te=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).zipCodeRef=r.a.createRef(),i}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("section",{className:"Questionnaire ".concat(this.props.style),children:[this.props.ticketIsOpen&&this.props.windowWidth<768?Object(i.jsx)(ee,{children:"Exit"}):null,Object(i.jsx)("section",{className:"Questionnaire__Container",children:Object(i.jsxs)("section",{className:"Questionnaire__Container__Holder",children:[Object(i.jsx)("h2",{className:"Questionnaire__Container__Holder__Title",children:"Do you own your home?"}),Object(i.jsx)("section",{className:"Questionnaire__Container__Holder__Options",children:Object(i.jsxs)("section",{className:"Questionnaire__Container__Holder__Options__Container",children:[Object(i.jsx)("section",{className:"Questionnaire__Container__Holder__Options__Container__Zip",children:Object(i.jsx)(Q,{ref:this.zipCodeRef,placeholder:"Zip Code"})}),Object(i.jsxs)("section",{className:"Questionnaire__Container__Holder__Options__Container__Options",children:[Object(i.jsxs)("section",{className:"Questionnaire__Container__Holder__Options__Container__Options__Yes",onClick:function(){return e.props.doesOwnHome(),0===e.props.questionnairePosition&&5===e.zipCodeRef.current.value.length?(e.props.modalToggle(),e.props.moveForwardsAction()):5===e.zipCodeRef.current.value.length?e.props.modalToggle():null},children:[Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA1CAYAAAD1cz2RAAAABHNCSVQICAgIfAhkiAAABMFJREFUaEPtmnnIpXMUxz9flKWsJSEkZBnbTMiMLDXKyJ4t/KUpNUmNZWRsGUbG0tiGKEmKGMRMlInsRLYQSoSyZE0RyvLVef2m7nvnPvf+nt+9z5173+b893bP9/x+5/ue5zxnecQ6mWBAU4kH2/cDxwJfAU8C10j6I8fHKUOE7aeBo9qc/gA4QdLnvciYEkTYvgxYXOHsr8BpkoKoShl7ImzPAl4G1uvip4ElwOWS/u2kN9ZE2N4GeBfYtlfop9+fkHTSVCTiBeDwTBJWq50l6cF2zNhGhO1FwJU1SQj1+ySdPSWIsH0k8EwBCQG5XtIlY0+E7e2B94GtCoj4Ddhd0jdjTYTt9YEXgUMKSAhI1BQrxz5Z2r4BWFBIwjJJ51VhxyZZ2o6qsWtR1IWg94ADJP091kTY3g74ENiiIBqistxH0pdjXVna3gB4DTiwgISueaHV3sg/GrZvAyqf7R7kLJV0YQ6BI02E7eOBFTmOdNB5E5gp6Z8c/MgSYXsnINroTXMcadP5BZjWqV4Yq2Rpe0PgDWC/AhICMkfSqjrYkYwI23cD59RxpEV3iaSFdbEjR4TtU4HldR1J+q8Ch0qK+UMtGSkibO+S+ohNannxv/JPwF6Svi/A9h7e2r44WE4FzWOSIhsPXGxvDITtaYXGZ0t6rhDbnQjbEaIRqq2yWNIVpQdW4Ww/AJxZaHeRpKsKsROwykfD9kXAjRXGowM8XdJ3/Ry+Gmt7LnBPoa3ngYiG2nmh9byORNg+OA1Eo7ytkh+AUyS9VOjABMz2nsA7wEYFduIfEXnh5wLsJMgaRNiOgcdHQAxGe0lMhGNkFouU2v+RlBdiyLJrr4M6/B5nxxsi+pC+ZRIRtuPvSDhH1LT8LHCGpB/r4Gw/HDuHOpgW3RjNX1uIXQPWTsR84OZC49+mRcorOXjb84A7c3Q76KySNKcQ2xHWTsTHwB59HrBQUixTKsX2DODtwnNirzm9bvT1OqudiE+A3XqBMn6PSVLsD9ZIYrajiYqJ0c4ZdjqpREf5eiG2EtZOxKXAoJ67mBSf3H5p2zE8Pa7QkQWSbirEdoV1ems8FDXCAA+7QNJE3rF9PrC00PZTkmLl34hU1RExEYrJ0KAkouD2PpYyXwN7S4o5QyPSrbLcP02Hdmzk5HyjfwGzJL2VD6mv2bX7tL0ZEI/K0fVNDwwxX9KtA7NWYSirDU99x3VAt5K7ibuukHRiE4bbbWYRkRLdTOARIHaPw5Av0j4i9pWNSzYRiYwt0/QottFNSuSF2ExFHzIUqUVEIiMw8c1S9P+xlG1C5km6qwnDVTZrE7HakO3DgEeBrQd84eWSBlnHZF2vmIgUHdGqRwdZ9/Odqst9Cuyb+21kloeZSn0RkciIr9muBqI878fen8AMSdH4DV36ufiky9qenRJpyZcsYWuupHuHzkA6cGBEpOiI9f3jwEE1HVoreaH1jgMlIpERRVfMI7K20GksGK/KrG+maxKcrT5wIlreKjFBivJ88y63+T0lx8+yb9yQYmNEpOjYITVu0yvuH99IR7W61qVRIlqiYxlwbpu3t0iK+cRIyFCISNFxDBCOx+MQw9c7RoKBJt4ao+RY3bsMLSLqXmzY+uuISIz/BwusUUWeJSXFAAAAAElFTkSuQmCC",alt:"check",className:"Questionnaire__Container__Holder__Options__Container__Options__Yes__Img"}),Object(i.jsx)("p",{className:"Questionnaire__Container__Holder__Options__Container__Options__Yes__Text",children:"yes"})]}),Object(i.jsxs)("section",{className:"Questionnaire__Container__Holder__Options__Container__Options__No",onClick:function(){return e.props.modalToggle(),e.props.doesntOwnsHome()},children:[Object(i.jsx)("img",{srcSet:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAABHNCSVQICAgIfAhkiAAAAzJJREFUaEPVmvF51DAMxfUmgA1oJ4BOQJmAbkA7AWUCYALKBLQTUCaADWgn4JgAmEB8z2ffl3PsxLHlXuo/75Lo/WRZlpVAEkNVT0XkjYicichTf8mtiNwCuEndY/GbqgabtMvxlzZF5AbAj5QNxD+q6icRuZwQdCcirwDw4SZDVemk7yLyYuKBVwDexf/vAajqFxE5L1BlBlEoPki6BnAx1LcDWCA+3N8MsVB8EsIBqOoHEXlf4Pn4kmqISvHB/mcALsyhqkci8qtCfPVMNIoPdo8BbAhwJSJvGwB4a/FMGImnTWamcwLQ+5yF1jELYSieWjcAjgmgrcoH92chjMU7k+AwBsiGk6p+9Rujmb8CAL323Oyp2wft5euKFF0i5zeAI85AbQqdM+IgOomnbZdKCcBtfCMiT+YUVfzP51okiNj0P5YdLo36jYzlA8uIxzIuAFy7hRwUq+pjgfgIgGG/zURDlxttaj1n0W1eQwOpcppTw7p8bWMkfjQDg3BaG0RSfBbAL+y1QGTFTwKsBGJS/CzAgSFmxRcBHAiiSHwxwANDFItfBOAh2OJ43TG/3ovI6ZKOx2gfmBKnqjyHsu3SYywWv2gGOpcaVeKLAVSVDSc2nkKXznIGqsUXARxKPNubuXbiZC0UFXcH8fwgXHdlc27Ks4v4gJ6Py/oTADz2JkcSYEXiKZpNZDaTkxCpcrpn2OyOgrE7Z7JcFiI+0PQWz4U58mRhik5CDI+UaxYfJmwEEQ71zO9sMfbI8wybFs/H0UYILmx2PLZnYlXlJsXXStbDWnzQdwfgxAEUxl8N2JR4i3B1ewQBelSYvcXTod8AnBHgj3HsP4R4FxG9utPZnVNVufCe1cRj6p4eAJO1i9/h+b7XpA8bAKzWwGzh5TMeF7AFxG4NWPREi8SHMPAz8bMxlLZZyHul5SXHIvEDiBbH3QNwb/UDQO20VolvhNgrCONaaElsNomvhBil6FQ1WgJhIj6C4PvqqeyU3F9S5wG+EuILhFSLnQfwy5Kz6tIF6hc2IV4m7uUnPrQ7+kJm6kjJypQFHtcHNyAWUNmj3VLBuev9pw90Iu3SHu1mP+35DyWww0EwKG5dAAAAAElFTkSuQmCC",alt:"x",className:"Questionnaire__Container__Holder__Options__Container__Options__No__Img"}),Object(i.jsx)("p",{className:"Questionnaire__Container__Holder__Options__Container__Options__No__Text",children:"no"})]})]})]})})]})}),this.props.modal?Object(i.jsx)(f,{children:Object(i.jsx)(P,{onClick:this.props.modalToggle})}):null]})}}]),n}(o.Component),ne=Object(b.b)((function(e){var t=e.modal.modalQuestionnaireIsOpen,n=e.windowWidth.windowWidth;return{modal:t,ticketIsOpen:e.ticket.ticketIsOpen,windowWidth:n,questionnairePosition:e.questionnaireStage.questionnairePosition}}),(function(e){return{modalToggle:function(){return e({type:C.TOGGLE_MODAL_QUESTIONNAIRE})},zipCode:function(t){return e(I(t))},doesntOwnsHome:function(){return e(E())},doesOwnHome:function(){return e(B())},moveBackwardsAction:function(){return e(H())},moveForwardsAction:function(){return e(R())}}}))(te),ie=(n(53),function(e){var t=e.children;return Object(i.jsx)("p",{className:"Title",children:t})}),oe=(n(54),{WINDOWWIDTH:"WINDOWWIDTH"}),re=oe.WINDOWWIDTH,ae=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleResize=function(){return i.props.windowWidthTrigger(window.innerWidth)},i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return Object(i.jsxs)("section",{className:"Hero",children:[Object(i.jsxs)("section",{className:"Hero__Left-Container",children:[Object(i.jsxs)(ie,{children:["Go Green",Object(i.jsx)("br",{}),"Save Green"]}),this.props.windowWidth<768&&this.props.ticketIsOpen?Object(i.jsx)(ne,{}):null,this.props.windowWidth<768&&!this.props.ticketIsOpen?Object(i.jsxs)(ee,{styles:"Closed",children:["Do you",Object(i.jsx)("br",{}),"Qualify?"]}):null,Object(i.jsxs)(p,{children:[Object(i.jsx)(m,{children:"Fixed Rate pricing."}),Object(i.jsx)(m,{children:"Pay half of what you pay right now."})]}),Object(i.jsx)(h,{children:"Schedule Now"})]}),Object(i.jsx)("section",{className:"Hero__Right-Container",children:this.props.windowWidth>=768?Object(i.jsx)(ne,{}):null})]})}}]),n}(o.Component),ce=Object(b.b)((function(e){return{ticketIsOpen:e.ticket.ticketIsOpen,windowWidth:e.windowWidth.windowWidth}}),(function(e){return{windowWidthTrigger:function(t){return e({type:re,payload:t})}}}))(ae),se=(n(55),function(e){var t=e.children,n=e.onClick,o=e.id;return Object(i.jsx)("section",{onClick:n,className:"Card",id:o,children:Object(i.jsx)("p",{className:"Card__Text",children:t})})}),le=(n(56),{ACTIVATE_CARD:"ACTIVATE_CARD"}),ue=(n(57),function(e){var t=e.onClick,n=e.cards[e.card],o=n.title,r=n.subTitle,a=n.text;return Object(i.jsxs)("section",{className:"CardViewer",onClick:t,children:[Object(i.jsxs)("section",{className:"CardViewer__Container",onClick:function(e){return e.stopPropagation()},children:[Object(i.jsx)("h2",{className:"CardViewer__Container__Title",children:o}),Object(i.jsx)("h3",{className:"CardViewer__Container__Sub-Title",children:r}),Object(i.jsx)("p",{className:"CardViewer__Container__Text",children:a})]}),Object(i.jsx)("p",{className:"CardViewer__X",children:"X"})]})}),de=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=function(t){var n=t.currentTarget.id;return e.props.activateCard(n),e.props.modalToggle()};return Object(i.jsxs)("section",{className:"Cards",children:[Object(i.jsxs)("section",{className:"Cards__Container",children:[Object(i.jsx)(se,{onClick:t,id:"netMetering",children:"Net Metering"}),Object(i.jsx)(se,{onClick:t,id:"taxExemptions",children:"Tax Exemptions"}),Object(i.jsxs)(se,{onClick:t,id:"solarTaxCredit",children:["Solar ",Object(i.jsx)("br",{}),"Tax Credit"]}),Object(i.jsx)(se,{onClick:t,id:"financingForSolar",children:"Financing for Solar"})]}),this.props.card&&this.props.modal?Object(i.jsx)(f,{children:Object(i.jsx)(ue,{onClick:this.props.modalToggle,cards:{netMetering:{title:"Net Metering",subTitle:"(Lower your ELECTRICITY BILL)",text:"Florida power companies are required to provide their customers maximum 1-to-1 net metering by the Florida Public Service Commission, also known as the FPSC. What does this signify? Florida Law Requires utilities to provide you with the full retail value for every unit of solar power you generate."},taxExemptions:{title:"Tax Exemptions",subTitle:"(You may qualify for $0 down)",text:"Florida Offered two tax exemptions for solar system: A sales Taxes exemption and a property tax abatement. Under the Solar and CHP Sales Tax Exemption, Solar Energy systems are exempt from Florida\u2019s Sales tax and use tax. The Property Tax Abatement for renewable energy property exempts the assessed value of A solar system from your Property tax."},solarTaxCredit:{title:"Solar Tax Credit",subTitle:"(Get a 26% FEDERAL TAX CREDIT)",text:"The solar tax credit is a federal Incentive that can be applied to Solar systems. The credit allows for A 26% deduction of the costs of Installing a solar panel system from Your taxes. The tax Credit is nonrefundable, meaning you can Only get a refund up to the amount You owe in federal taxes."},financingForSolar:{title:"Financing for Solar",subTitle:"",text:"A solar system is a significant upfront Investment. Even if you decide not to purchase your solar in cash, we suggest Four solar financing options that can help You go solar and save you money On your electric bill."}},card:this.props.card})}):null]})}}]),n}(o.Component),je=Object(b.b)((function(e){return{modal:e.modal.modalCardsIsOpen,card:e.card.card}}),(function(e){return{modalToggle:function(){return e({type:C.TOGGLE_MODAL_CARDS})},activateCard:function(t){return e({type:le.ACTIVATE_CARD,payload:t})}}}))(de),Oe=(n(58),function(){return Object(i.jsxs)("header",{className:"NavBar",children:[Object(i.jsx)("img",{className:"NavBar__Logo",src:"data:image/png;base64,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",alt:""}),Object(i.jsxs)("section",{className:"NavBar__Container",children:[Object(i.jsx)("h2",{className:"NavBar__Container__Link active",children:"Home"}),Object(i.jsx)("h2",{className:"NavBar__Container__Link",children:"FAQs"}),Object(i.jsx)("h2",{className:"NavBar__Container__Link",children:"Financing"})]})]})}),pe=(n(59),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("section",{className:"Homepage",children:[Object(i.jsx)(Oe,{}),Object(i.jsx)(ce,{}),Object(i.jsx)(je,{})]})}}]),n}(o.Component));var he=function(){return Object(i.jsx)(s.c,{children:Object(i.jsx)(s.a,{path:"/Stocked-On-Solar",exact:!0,component:pe})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),r(e),a(e)}))},be=n(22),Ae=n(14),fe=n(27),Ce=n.n(fe),_e=n(2),xe={modalCardsIsOpen:!1,modalQuestionnaireIsOpen:!1},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.TOGGLE_MODAL_CARDS:return Object(_e.a)(Object(_e.a)({},e),{},{modalCardsIsOpen:!e.modalCardsIsOpen});case C.TOGGLE_MODAL_QUESTIONNAIRE:return Object(_e.a)(Object(_e.a)({},e),{},{modalQuestionnaireIsOpen:!e.modalQuestionnaireIsOpen});default:return e}},ve=_.ZIPCODE,ye=_.EBILL,ge=_.CONTACT,Ne=_.NAME,Ie=_.NO,Ee=_.YES,Be={ownsHome:void 0,zipCode:"00000",eBill:0,contact:[],name:[]},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(_e.a)(Object(_e.a)({},e),{},{zipCode:t.payload});case ye:return Object(_e.a)(Object(_e.a)({},e),{},{eBill:t.payload});case ge:return Object(_e.a)(Object(_e.a)({},e),{},{contact:t.payload});case Ne:return Object(_e.a)(Object(_e.a)({},e),{},{name:t.payload});case Ie:return Object(_e.a)(Object(_e.a)({},e),{},{ownsHome:!1});case Ee:return Object(_e.a)(Object(_e.a)({},e),{},{ownsHome:!0});default:return e}},Se={card:""},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le.ACTIVATE_CARD:return Object(_e.a)(Object(_e.a)({},e),{},{card:t.payload});default:return e}},Re=K.TOGGLETICKET,He={ticketIsOpen:!0},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return Object(_e.a)(Object(_e.a)({},e),{},{ticketIsOpen:!e.ticketIsOpen});default:return e}},Qe=oe.WINDOWWIDTH,We={windowWidth:0},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Qe:return Object(_e.a)(Object(_e.a)({},e),{},{windowWidth:t.payload});default:return e}},Ve=T.MOVEBACKWARDS,Le=T.MOVEFORWARDS,Ge={questionnairePosition:0},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ve:return 0===e.questionnairePosition?e:Object(_e.a)(Object(_e.a)({},e),{},{questionnairePosition:e.questionnairePosition-1});case Le:return e.questionnairePosition>=4?e:Object(_e.a)(Object(_e.a)({},e),{},{questionnairePosition:e.questionnairePosition+1});default:return e}},qe=Object(Ae.c)({modal:we,quoteForm:Te,card:ke,ticket:De,windowWidth:Fe,questionnaireStage:ze}),Pe=[Ce.a],Ye=Object(Ae.d)(qe,Ae.a.apply(void 0,Pe));c.a.render(Object(i.jsx)(b.a,{store:Ye,children:Object(i.jsx)(be.a,{children:Object(i.jsx)(he,{})})}),document.getElementById("root")),me()}]),[[61,1,2]]]);
//# sourceMappingURL=main.de569dda.chunk.js.map