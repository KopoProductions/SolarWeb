(this["webpackJsonpsolar-city"]=this["webpackJsonpsolar-city"]||[]).push([[0],Array(34).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(1),c=n.n(r),a=n(16),o=n.n(a),s=(n(34),n(35),n(5)),l=n(11),u=n(12),d=n(14),j=n(13),O=(n(36),function(){return Object(i.jsx)("section",{className:"VLine"})}),b=(n(37),function(e){var t=e.children;return Object(i.jsxs)("section",{className:"Article",children:[Object(i.jsx)(O,{}),Object(i.jsx)("section",{className:"Article__Container",children:t})]})}),A=(n(38),function(e){var t=e.children,n=e.onClick,r=e.styles;return Object(i.jsx)("section",{className:"CTA ".concat(r),onClick:n,children:Object(i.jsx)("p",{className:"CTA__Text",children:t})})}),h=(n(39),function(e){var t=e.children;return Object(i.jsx)("p",{className:"Pointer",children:t})}),m=n(4),f=n(6),p=(n(44),Object(f.a)([function(e){return e.questionnaireStage}],(function(e){return e.questionnairePosition}))),x={MOVEFORWARDS:"MOVEFORWARDS",MOVEBACKWARDS:"MOVEBACKWARDS"},C=x.MOVEFORWARDS,g=x.MOVEBACKWARDS,y=function(){return{type:C}},E=function(){return{type:g}};n(45);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.0411072 25.0574L8.99999 12.5574L0.0411127 0.057373H80V25.0574H0.0411072Z",fill:"#FA9400"});function I(e,t){var n=e.title,i=e.titleId,c=v(e,["title","titleId"]);return r.createElement("svg",w({width:80,height:26,viewBox:"0 0 80 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},c),n?r.createElement("title",{id:i},n):null,N)}var T=r.forwardRef(I),S=(n.p,{TOGGLETICKET:"TOGGLETICKET"}),B=S.TOGGLETICKET,R=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.styles;return Object(i.jsxs)("section",{className:"Ticket ".concat(n),onClick:this.props.toggleTicketAction,children:[Object(i.jsx)(T,{width:"52px"}),Object(i.jsx)("p",{className:"Ticket__Text",children:t})]})}}]),n}(r.Component),k=Object(m.b)(null,(function(e){return{toggleTicketAction:function(){return e({type:B})}}}))(R),F=(n(46),function(e){var t=e.children;return Object(i.jsx)("h2",{className:"QuestionnaireTitle",children:t})}),D=(n(47),Object(m.b)(null,(function(e){return{moveF:function(){return e(y())}}}))((function(e){var t=e.moveF;return Object(i.jsxs)("section",{className:"QuestionnaireCardNoHome",children:[Object(i.jsx)(F,{children:"Sorry, but to use solar you need to own a home"}),Object(i.jsx)(A,{onClick:t,children:"Go Back"})]})}))),L=(n(48),n(49),c.a.forwardRef((function(e,t){var n=e.name,r=e.placeholder,c=e.onClick,a=e.styles,o=e.onChange;return Object(i.jsx)("input",{onChange:o,onClick:c,ref:t,name:n,placeholder:r,className:"InputBox ".concat(a)})}))),W={ZIPCODE:"ZIPCODE",EBILL:"EBILL",EMAIL:"EMAIL",NUMBER:"NUMBER",FIRSTNAME:"FIRSTNAME",LASTNAME:"LASTNAME",NO:"NO",YES:"YES"},H=W.ZIPCODE,G=W.EBILL,V=W.EMAIL,M=W.NUMBER,Q=W.FIRSTNAME,P=W.LASTNAME,q=W.YES,Y=Object(m.b)(null,(function(e){return{zipCode:function(t){return e({type:H,payload:t})},moveF:function(){return e(y())}}}))((function(e){var t=e.zipCode,n=e.moveF;return Object(i.jsxs)("section",{className:"QuestionnaireCardZipCode",children:[Object(i.jsx)(F,{children:"What's your Zip Code?"}),Object(i.jsx)(L,{onChange:function(e){return t(e.target.value)},name:"zipCode",placeholder:"Zip Code",styles:"ZipCode"}),Object(i.jsx)(A,{styles:"ZipCodeCTA",onClick:n,children:"Next"})]})})),U=(n(50),function(e){var t=e.src,n=e.text,r=e.alt,c=e.onClick;return Object(i.jsxs)("section",{className:"GlyphAndText",onClick:c,children:[Object(i.jsx)("img",{src:t,alt:"".concat(r," option"),className:"GlyphAndText__Img"}),Object(i.jsx)("p",{className:"GlyphAndText__Text",children:n})]})}),z=(n(51),Object(m.b)(null,(function(e){return{ownsHome:function(){return e({type:q})},moveF:function(){return e(y())},moveB:function(){return e(E())}}}))((function(e){var t=e.ownsHome,n=e.moveF,r=e.moveB;return Object(i.jsxs)("section",{className:"QuestionnaireCardHome",children:[Object(i.jsx)(F,{children:"Do you own your home?"}),Object(i.jsxs)("section",{className:"QuestionnaireCardHome__Options",children:[Object(i.jsx)(U,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA1CAYAAAD1cz2RAAAABHNCSVQICAgIfAhkiAAABMFJREFUaEPtmnnIpXMUxz9flKWsJSEkZBnbTMiMLDXKyJ4t/KUpNUmNZWRsGUbG0tiGKEmKGMRMlInsRLYQSoSyZE0RyvLVef2m7nvnPvf+nt+9z5173+b893bP9/x+5/ue5zxnecQ6mWBAU4kH2/cDxwJfAU8C10j6I8fHKUOE7aeBo9qc/gA4QdLnvciYEkTYvgxYXOHsr8BpkoKoShl7ImzPAl4G1uvip4ElwOWS/u2kN9ZE2N4GeBfYtlfop9+fkHTSVCTiBeDwTBJWq50l6cF2zNhGhO1FwJU1SQj1+ySdPSWIsH0k8EwBCQG5XtIlY0+E7e2B94GtCoj4Ddhd0jdjTYTt9YEXgUMKSAhI1BQrxz5Z2r4BWFBIwjJJ51VhxyZZ2o6qsWtR1IWg94ADJP091kTY3g74ENiiIBqistxH0pdjXVna3gB4DTiwgISueaHV3sg/GrZvAyqf7R7kLJV0YQ6BI02E7eOBFTmOdNB5E5gp6Z8c/MgSYXsnINroTXMcadP5BZjWqV4Yq2Rpe0PgDWC/AhICMkfSqjrYkYwI23cD59RxpEV3iaSFdbEjR4TtU4HldR1J+q8Ch0qK+UMtGSkibO+S+ohNannxv/JPwF6Svi/A9h7e2r44WE4FzWOSIhsPXGxvDITtaYXGZ0t6rhDbnQjbEaIRqq2yWNIVpQdW4Ww/AJxZaHeRpKsKsROwykfD9kXAjRXGowM8XdJ3/Ry+Gmt7LnBPoa3ngYiG2nmh9byORNg+OA1Eo7ytkh+AUyS9VOjABMz2nsA7wEYFduIfEXnh5wLsJMgaRNiOgcdHQAxGe0lMhGNkFouU2v+RlBdiyLJrr4M6/B5nxxsi+pC+ZRIRtuPvSDhH1LT8LHCGpB/r4Gw/HDuHOpgW3RjNX1uIXQPWTsR84OZC49+mRcorOXjb84A7c3Q76KySNKcQ2xHWTsTHwB59HrBQUixTKsX2DODtwnNirzm9bvT1OqudiE+A3XqBMn6PSVLsD9ZIYrajiYqJ0c4ZdjqpREf5eiG2EtZOxKXAoJ67mBSf3H5p2zE8Pa7QkQWSbirEdoV1ems8FDXCAA+7QNJE3rF9PrC00PZTkmLl34hU1RExEYrJ0KAkouD2PpYyXwN7S4o5QyPSrbLcP02Hdmzk5HyjfwGzJL2VD6mv2bX7tL0ZEI/K0fVNDwwxX9KtA7NWYSirDU99x3VAt5K7ibuukHRiE4bbbWYRkRLdTOARIHaPw5Av0j4i9pWNSzYRiYwt0/QottFNSuSF2ExFHzIUqUVEIiMw8c1S9P+xlG1C5km6qwnDVTZrE7HakO3DgEeBrQd84eWSBlnHZF2vmIgUHdGqRwdZ9/Odqst9Cuyb+21kloeZSn0RkciIr9muBqI878fen8AMSdH4DV36ufiky9qenRJpyZcsYWuupHuHzkA6cGBEpOiI9f3jwEE1HVoreaH1jgMlIpERRVfMI7K20GksGK/KrG+maxKcrT5wIlreKjFBivJ88y63+T0lx8+yb9yQYmNEpOjYITVu0yvuH99IR7W61qVRIlqiYxlwbpu3t0iK+cRIyFCISNFxDBCOx+MQw9c7RoKBJt4ao+RY3bsMLSLqXmzY+uuISIz/BwusUUWeJSXFAAAAAElFTkSuQmCC",text:"yes",alt:"Yes",onClick:function(){return t(),n()}}),Object(i.jsx)(U,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAABHNCSVQICAgIfAhkiAAAAzJJREFUaEPVmvF51DAMxfUmgA1oJ4BOQJmAbkA7AWUCYALKBLQTUCaADWgn4JgAmEB8z2ffl3PsxLHlXuo/75Lo/WRZlpVAEkNVT0XkjYicichTf8mtiNwCuEndY/GbqgabtMvxlzZF5AbAj5QNxD+q6icRuZwQdCcirwDw4SZDVemk7yLyYuKBVwDexf/vAajqFxE5L1BlBlEoPki6BnAx1LcDWCA+3N8MsVB8EsIBqOoHEXlf4Pn4kmqISvHB/mcALsyhqkci8qtCfPVMNIoPdo8BbAhwJSJvGwB4a/FMGImnTWamcwLQ+5yF1jELYSieWjcAjgmgrcoH92chjMU7k+AwBsiGk6p+9Rujmb8CAL323Oyp2wft5euKFF0i5zeAI85AbQqdM+IgOomnbZdKCcBtfCMiT+YUVfzP51okiNj0P5YdLo36jYzlA8uIxzIuAFy7hRwUq+pjgfgIgGG/zURDlxttaj1n0W1eQwOpcppTw7p8bWMkfjQDg3BaG0RSfBbAL+y1QGTFTwKsBGJS/CzAgSFmxRcBHAiiSHwxwANDFItfBOAh2OJ43TG/3ovI6ZKOx2gfmBKnqjyHsu3SYywWv2gGOpcaVeKLAVSVDSc2nkKXznIGqsUXARxKPNubuXbiZC0UFXcH8fwgXHdlc27Ks4v4gJ6Py/oTADz2JkcSYEXiKZpNZDaTkxCpcrpn2OyOgrE7Z7JcFiI+0PQWz4U58mRhik5CDI+UaxYfJmwEEQ71zO9sMfbI8wybFs/H0UYILmx2PLZnYlXlJsXXStbDWnzQdwfgxAEUxl8N2JR4i3B1ewQBelSYvcXTod8AnBHgj3HsP4R4FxG9utPZnVNVufCe1cRj6p4eAJO1i9/h+b7XpA8bAKzWwGzh5TMeF7AFxG4NWPREi8SHMPAz8bMxlLZZyHul5SXHIvEDiBbH3QNwb/UDQO20VolvhNgrCONaaElsNomvhBil6FQ1WgJhIj6C4PvqqeyU3F9S5wG+EuILhFSLnQfwy5Kz6tIF6hc2IV4m7uUnPrQ7+kJm6kjJypQFHtcHNyAWUNmj3VLBuev9pw90Iu3SHu1mP+35DyWww0EwKG5dAAAAAElFTkSuQmCC",text:"no",alt:"No",onClick:r})]})]})}))),J=(n(52),function(e){return e.quoteForm}),Z=(Object(f.a)([J],(function(e){return e.ownsHome})),Object(f.a)([J],(function(e){return e.zipCode})),Object(f.a)([J],(function(e){return e.eBill}))),K=(Object(f.a)([J],(function(e){return e.firstName})),Object(f.a)([J],(function(e){return e.lastName})),Object(f.a)([J],(function(e){return e.number})),Object(f.a)([J],(function(e){return e.email})),Object(f.b)({billCounter:Z})),_=Object(m.b)(K,(function(e){return{moveF:function(){return e(y())},billCounterAction:function(t){return e({type:G,payload:t})}}}))((function(e){var t=e.billCounter,n=e.billCounterAction,r=e.moveF;return Object(i.jsxs)("section",{className:"QuestionnaireCardBill",children:[Object(i.jsx)(F,{children:"What is your average Electrical Bill?"}),Object(i.jsx)("p",{className:"QuestionnaireCardBill__Counter",children:"".concat(t)}),Object(i.jsx)("input",{onChange:function(e){return n(e.target.value)},id:"eBillRange",className:"QuestionnaireCardBill__Input",defaultValue:100,type:"range",min:"0",max:"1500",list:"range"}),Object(i.jsxs)("datalist",{id:"range",children:[Object(i.jsx)("option",{value:"0",label:"$0"}),Object(i.jsx)("option",{value:"1500",label:"$1500"})]}),Object(i.jsx)(A,{styles:"BillCTA",onClick:r,children:"Next"})]})})),X=(n(53),Object(m.b)(null,(function(e){return{setNumber:function(t){return e({type:M,payload:t})},setEmail:function(t){return e({type:V,payload:t})},moveF:function(){return e(y())}}}))((function(e){var t=e.setNumber,n=e.setEmail,r=e.moveF;return Object(i.jsxs)("section",{className:"QuestionnaireCardContact",children:[Object(i.jsx)(F,{children:"How do you want the information sent?"}),Object(i.jsx)(L,{onChange:function(e){return t(e.target.value)},placeholder:"Phone #",name:"phoneNumber"}),Object(i.jsx)(L,{onChange:function(e){return n(e.target.value)},placeholder:"Email @",name:"email"}),Object(i.jsx)(A,{onClick:r,children:"Next"})]})}))),$=(n(54),Object(m.b)(null,(function(e){return{moveF:function(){return e(y())},setFirstName:function(t){return e({type:Q,payload:t})},setLastName:function(t){return e({type:P,payload:t})}}}))((function(e){var t=e.setFirstName,n=e.setLastName,r=e.moveF;return Object(i.jsxs)("section",{className:"QuestionnaireCardName",children:[Object(i.jsx)(F,{children:"Who is this quote for?"}),Object(i.jsx)(L,{placeholder:"First Name",name:"firstName",onChange:function(e){return t(e.target.value)}}),Object(i.jsx)(L,{placeholder:"Last Name",name:"lastName",onChange:function(e){return n(e.target.value)}}),Object(i.jsx)(A,{onClick:r,children:"Next"})]})}))),ee=(n(55),function(){return Object(i.jsx)("section",{className:"QuestionnaireFinish",children:Object(i.jsxs)(F,{children:["Thank you for completing the questionnaire.",Object(i.jsx)("br",{})," We will contact you shortly"]})})}),te=Object(f.b)({stagePosition:p}),ne=Object(m.b)(te,(function(e){return{moveBackwardsAction:function(){return e(E())},moveForwardsAction:function(){return e(y())}}}))((function(e){e.stagePosition;var t=[D,z,Y,_,$,X,ee][0];return Object(i.jsx)("section",{className:"Questionnaire",children:Object(i.jsx)("section",{className:"Questionnaire__Container",children:Object(i.jsx)(t,{})})})})),ie=(n(56),function(e){var t=e.children;return Object(i.jsx)("p",{className:"Title",children:t})}),re=(n(57),{WINDOWWIDTH:"WINDOWWIDTH"}),ce=re.WINDOWWIDTH,ae=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleResize=function(){return i.props.windowWidthTrigger(window.innerWidth)},i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return Object(i.jsxs)("section",{className:"Hero",children:[Object(i.jsxs)("section",{className:"Hero__Left-Container",children:[Object(i.jsxs)(ie,{children:["Go Green",Object(i.jsx)("br",{}),"Save Green"]}),this.props.windowWidth<768&&this.props.ticketIsOpen?Object(i.jsx)(ne,{}):null,this.props.windowWidth<768&&!this.props.ticketIsOpen?Object(i.jsxs)(k,{styles:"Closed",children:["Do you",Object(i.jsx)("br",{}),"Qualify?"]}):null,Object(i.jsxs)(b,{children:[Object(i.jsx)(h,{children:"Fixed Rate pricing."}),Object(i.jsx)(h,{children:"Pay half of what you pay right now."})]}),Object(i.jsx)(A,{children:"Schedule Now"})]}),Object(i.jsx)("section",{className:"Hero__Right-Container",children:this.props.windowWidth>=768?Object(i.jsx)(ne,{}):null})]})}}]),n}(r.Component),oe=Object(m.b)((function(e){return{ticketIsOpen:e.ticket.ticketIsOpen,windowWidth:e.windowWidth.windowWidth}}),(function(e){return{windowWidthTrigger:function(t){return e({type:ce,payload:t})}}}))(ae),se=(n(58),function(e){var t=e.children,n=e.onClick,r=e.id;return Object(i.jsx)("section",{onClick:n,className:"Card",id:r,children:Object(i.jsx)("p",{className:"Card__Text",children:t})})}),le=(n(59),{TOGGLE_MODAL_CARDS:"TOGGLE_MODAL_CARDS",TOGGLE_MODAL_QUESTIONNAIRE:"TOGGLE_MODAL_QUESTIONNAIRE"}),ue={ACTIVATE_CARD:"ACTIVATE_CARD"},de=document.getElementById("modal"),je=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).element=document.createElement("div"),i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){de.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){de.removeChild(this.element)}},{key:"render",value:function(){return Object(a.createPortal)(this.props.children,this.element)}}]),n}(r.Component),Oe=(n(60),function(e){var t=e.onClick,n=e.cards[e.card],r=n.title,c=n.subTitle,a=n.text;return Object(i.jsxs)("section",{className:"CardViewer",onClick:t,children:[Object(i.jsxs)("section",{className:"CardViewer__Container",onClick:function(e){return e.stopPropagation()},children:[Object(i.jsx)("h2",{className:"CardViewer__Container__Title",children:r}),Object(i.jsx)("h3",{className:"CardViewer__Container__Sub-Title",children:c}),Object(i.jsx)("p",{className:"CardViewer__Container__Text",children:a})]}),Object(i.jsx)("p",{className:"CardViewer__X",children:"X"})]})}),be=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=function(t){var n=t.currentTarget.id;return e.props.activateCard(n),e.props.modalToggle()};return Object(i.jsxs)("section",{className:"Cards",children:[Object(i.jsxs)("section",{className:"Cards__Container",children:[Object(i.jsx)(se,{onClick:t,id:"netMetering",children:"Net Metering"}),Object(i.jsx)(se,{onClick:t,id:"taxExemptions",children:"Tax Exemptions"}),Object(i.jsxs)(se,{onClick:t,id:"solarTaxCredit",children:["Solar ",Object(i.jsx)("br",{}),"Tax Credit"]}),Object(i.jsx)(se,{onClick:t,id:"financingForSolar",children:"Financing for Solar"})]}),this.props.card&&this.props.modal?Object(i.jsx)(je,{children:Object(i.jsx)(Oe,{onClick:this.props.modalToggle,cards:{netMetering:{title:"Net Metering",subTitle:"(Lower your ELECTRICITY BILL)",text:"Florida power companies are required to provide their customers maximum 1-to-1 net metering by the Florida Public Service Commission, also known as the FPSC. What does this signify? Florida Law Requires utilities to provide you with the full retail value for every unit of solar power you generate."},taxExemptions:{title:"Tax Exemptions",subTitle:"(You may qualify for $0 down)",text:"Florida Offered two tax exemptions for solar system: A sales Taxes exemption and a property tax abatement. Under the Solar and CHP Sales Tax Exemption, Solar Energy systems are exempt from Florida\u2019s Sales tax and use tax. The Property Tax Abatement for renewable energy property exempts the assessed value of A solar system from your Property tax."},solarTaxCredit:{title:"Solar Tax Credit",subTitle:"(Get a 26% FEDERAL TAX CREDIT)",text:"The solar tax credit is a federal Incentive that can be applied to Solar systems. The credit allows for A 26% deduction of the costs of Installing a solar panel system from Your taxes. The tax Credit is nonrefundable, meaning you can Only get a refund up to the amount You owe in federal taxes."},financingForSolar:{title:"Financing for Solar",subTitle:"",text:"A solar system is a significant upfront Investment. Even if you decide not to purchase your solar in cash, we suggest Four solar financing options that can help You go solar and save you money On your electric bill."}},card:this.props.card})}):null]})}}]),n}(r.Component),Ae=Object(m.b)((function(e){return{modal:e.modal.modalCardsIsOpen,card:e.card.card}}),(function(e){return{modalToggle:function(){return e({type:le.TOGGLE_MODAL_CARDS})},activateCard:function(t){return e({type:ue.ACTIVATE_CARD,payload:t})}}}))(be),he=(n(61),function(){return Object(i.jsxs)("header",{className:"NavBar",children:[Object(i.jsx)("img",{className:"NavBar__Logo",src:"data:image/png;base64,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",alt:""}),Object(i.jsxs)("section",{className:"NavBar__Container",children:[Object(i.jsx)("h2",{className:"NavBar__Container__Link active",children:"Home"}),Object(i.jsx)("h2",{className:"NavBar__Container__Link",children:"FAQs"}),Object(i.jsx)("h2",{className:"NavBar__Container__Link",children:"Financing"})]})]})}),me=(n(62),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("section",{className:"Homepage",children:[Object(i.jsx)(he,{}),Object(i.jsx)(oe,{}),Object(i.jsx)(Ae,{})]})}}]),n}(r.Component));var fe=function(){return Object(i.jsx)(s.c,{children:Object(i.jsx)(s.a,{path:"/Stocked-On-Solar",exact:!0,component:me})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))},xe=n(23),Ce=n(15),ge=n(28),ye=n.n(ge),Ee=n(2),we={modalCardsIsOpen:!1,modalQuestionnaireIsOpen:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le.TOGGLE_MODAL_CARDS:return Object(Ee.a)(Object(Ee.a)({},e),{},{modalCardsIsOpen:!e.modalCardsIsOpen});case le.TOGGLE_MODAL_QUESTIONNAIRE:return Object(Ee.a)(Object(Ee.a)({},e),{},{modalQuestionnaireIsOpen:!e.modalQuestionnaireIsOpen});default:return e}},Ne=W.ZIPCODE,Ie=W.EBILL,Te=W.NUMBER,Se=W.EMAIL,Be=W.FIRSTNAME,Re=W.LASTNAME,ke=W.NO,Fe=W.YES,De={ownsHome:void 0,zipCode:"",eBill:0,number:"",email:"",firstName:"",lastName:""},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(Ee.a)(Object(Ee.a)({},e),{},{zipCode:t.payload});case Ie:return Object(Ee.a)(Object(Ee.a)({},e),{},{eBill:t.payload});case Te:return Object(Ee.a)(Object(Ee.a)({},e),{},{number:t.payload});case Se:return Object(Ee.a)(Object(Ee.a)({},e),{},{email:t.payload});case Be:return Object(Ee.a)(Object(Ee.a)({},e),{},{firstName:t.payload});case Re:return Object(Ee.a)(Object(Ee.a)({},e),{},{lastName:t.payload});case ke:return Object(Ee.a)(Object(Ee.a)({},e),{},{ownsHome:!1});case Fe:return Object(Ee.a)(Object(Ee.a)({},e),{},{ownsHome:!0});default:return e}},We={card:""},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue.ACTIVATE_CARD:return Object(Ee.a)(Object(Ee.a)({},e),{},{card:t.payload});default:return e}},Ge=S.TOGGLETICKET,Ve={ticketIsOpen:!0},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ge:return Object(Ee.a)(Object(Ee.a)({},e),{},{ticketIsOpen:!e.ticketIsOpen});default:return e}},Qe=re.WINDOWWIDTH,Pe={windowWidth:0},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Qe:return Object(Ee.a)(Object(Ee.a)({},e),{},{windowWidth:t.payload});default:return e}},Ye=x.MOVEBACKWARDS,Ue=x.MOVEFORWARDS,ze={questionnairePosition:1},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ye:return 0===e.questionnairePosition?e:Object(Ee.a)(Object(Ee.a)({},e),{},{questionnairePosition:e.questionnairePosition-1});case Ue:return e.questionnairePosition>=6?e:Object(Ee.a)(Object(Ee.a)({},e),{},{questionnairePosition:e.questionnairePosition+1});default:return e}},Ze=Object(Ce.c)({modal:ve,quoteForm:Le,card:He,ticket:Me,windowWidth:qe,questionnaireStage:Je}),Ke=[ye.a],_e=Object(Ce.d)(Ze,Ce.a.apply(void 0,Ke));o.a.render(Object(i.jsx)(m.a,{store:_e,children:Object(i.jsx)(xe.a,{children:Object(i.jsx)(fe,{})})}),document.getElementById("root")),pe()}]),[[64,1,2]]]);
//# sourceMappingURL=main.aa4dfca0.chunk.js.map