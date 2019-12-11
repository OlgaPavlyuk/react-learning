(this["webpackJsonpreact-learning"]=this["webpackJsonpreact-learning"]||[]).push([[0],{32:function(e,t,a){e.exports=a(57)},37:function(e,t,a){},38:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),s=(a(37),a(9)),o=a(4),i=a(8),m=(a(38),a(11)),u=a(13),L=a(16),d=a(14),h=a(17),p=a(15),E=a(5),v=a.n(E),C=a(12),b=function e(){var t=this;Object(m.a)(this,e),this.getResource=function(){var e=Object(C.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://olgapavlyuk.github.io/react-learning/db.json",console.log(a),e.abrupt("return",fetch(a).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).catch((function(e){return Promise.reject(new Error("Could not fetch ".concat(t,": ").concat(e.message)))})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCards=Object(C.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/cards/");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),this.getLearningCards=Object(C.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/cards/");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),this.updateCards=function(){var e=Object(C.a)(v.a.mark((function e(a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t.apiBase,"/cards/"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({cards:a})});case 3:return n=e.sent,console.log("data changes"),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",new Error("Could not update cards: ".concat(e.t0.message)));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.updateCard=function(){var e=Object(C.a)(v.a.mark((function e(a,n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){setTimeout((function(){console.log("fake update Card"),e("fake update Card")}),50)})));case 2:return e.prev=2,e.next=5,fetch("".concat(t.apiBase,"/cards/").concat(a),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return",new Error("Could not update card: ".concat(e.t0.message)));case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}(),this.apiBase="http://localhost:3000"};var f=function(e){var t=e.message;return r.a.createElement("div",{className:"error"},t)};var g=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading"),r.a.createElement("span",{className:"loader__dot"}))},N=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 12 12",width:t,height:a},r.a.createElement("path",{fill:"#000000",d:"M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm2.625 7.575l-1.05 1.05L6 7.05 4.425 8.625l-1.05-1.05L4.95 6 3.375 4.425l1.05-1.05L6 4.95l1.575-1.575 1.05 1.05L7.05 6l1.575 1.575z"}))},_=function(e){var t=e.title,a=e.removing;return r.a.createElement("div",{className:"tag"},r.a.createElement("span",{className:"tag__text"},t),a&&r.a.createElement("button",{className:"tag__btn"},r.a.createElement(N,{width:"12",height:"12"})))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(L.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).ServiceData=new b,a.state={cards:[],error:null,errorMsg:"",loading:!0},a.onCardsLoaded=function(e){a.setState({cards:e,error:!1,errorMsg:"",loading:!1})},a.onError=function(e){a.setState({error:!0,errorMsg:e.message,loading:!1})},a.renderTags=function(e){return r.a.createElement(_,{title:e,key:Object(p.uniqueId)()})},a.renderRow=function(e){var t=e.lastRepeat,n=e.theme,c=""!==t?new Date(t).toLocaleDateString():"-";return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.front),r.a.createElement("td",null,e.back),r.a.createElement("td",null,c),r.a.createElement("td",null,e.status),r.a.createElement("td",null,n.map(a.renderTags)))},a.renderTable=function(){var e=a.state.cards;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Front"),r.a.createElement("th",null,"Back"),r.a.createElement("th",null,"Last repeat"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Themes"))),r.a.createElement("tbody",null,e.map(a.renderRow)))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.ServiceData.getAllCards().then(this.onCardsLoaded).catch(this.onError)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.errorMsg;return e.loading?r.a.createElement(g,null):t?r.a.createElement(f,{message:a}):this.renderTable()}}]),t}(r.a.Component),k=a(29),x=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:t,height:a},r.a.createElement("path",{strokeWidth:"6",d:"M 5.984375 1.9863281 A 1.0001 1.0001 0 0 0 5 3 L 5 14 L 6.5097656 14 L 6.609375 14 L 16 14 A 1.0001 1.0001 0 1 0 16 12 L 8.5195312 12 C 12.364806 7.130711 18.307314 4 25 4 C 36.601026 4 45.986251 13.376837 46 24.974609 C 46.00001 24.983115 46 24.991492 46 25 L 45.970703 26.107422 L 45.888672 27.162109 L 45.888672 27.173828 L 45.755859 28.207031 L 45.753906 28.224609 L 45.650391 28.802734 L 45.90625 29.662109 L 46.746094 29.970703 L 47.498047 29.484375 L 47.619141 29.152344 L 47.730469 28.525391 L 47.736328 28.501953 L 47.738281 28.476562 L 47.878906 27.375 L 47.880859 27.349609 L 47.882812 27.324219 L 47.96875 26.207031 L 47.970703 26.181641 L 47.970703 26.15625 L 47.996094 25.085938 A 1.0001 1.0001 0 0 0 48 25 C 48 12.309534 37.690466 2 25 2 C 17.712204 2 11.214814 5.4020866 7 10.699219 L 7 3 A 1.0001 1.0001 0 0 0 5.984375 1.9863281 z M 2.6796875 24.052734 L 2.0488281 24.689453 L 2 25.039062 L 2.0683594 26.775391 L 2.0703125 26.814453 L 2.0742188 26.853516 L 2.1054688 27.113281 L 2.5976562 27.861328 L 3.4902344 27.916016 L 4.0703125 27.232422 L 4.0917969 26.880859 L 4.0644531 26.654297 L 4 24.960938 L 3.5664062 24.175781 L 2.6796875 24.052734 z M 4.3945312 30.925781 L 3.5117188 31.078125 L 3.1054688 31.875 L 3.1640625 32.222656 L 3.6640625 33.601562 L 3.6757812 33.636719 L 3.6914062 33.671875 L 3.9121094 34.158203 L 4.6054688 34.724609 L 5.4746094 34.505859 L 5.8203125 33.679688 L 5.734375 33.337891 L 5.5351562 32.894531 L 5.0449219 31.542969 L 4.3945312 30.925781 z M 45.324219 32.761719 L 44.476562 33.048828 L 44.277344 33.339844 L 43.925781 34.117188 L 43.921875 34.126953 L 43.458984 35.029297 L 43.457031 35.03125 L 42.958984 35.896484 L 42.951172 35.910156 L 42.433594 36.71875 L 42.337891 37.609375 L 42.996094 38.21875 L 43.876953 38.056641 L 44.117188 37.796875 L 44.660156 36.949219 L 44.673828 36.927734 L 44.685547 36.90625 L 45.214844 35.986328 L 45.226562 35.964844 L 45.238281 35.943359 L 45.724609 34.994141 L 45.734375 34.972656 L 45.744141 34.951172 L 46.099609 34.164062 L 46.064453 33.267578 L 45.324219 32.761719 z M 6.9472656 36.572266 L 6.1464844 36.972656 L 5.984375 37.853516 L 6.1425781 38.169922 L 6.9179688 39.214844 L 6.9355469 39.238281 L 6.9550781 39.259766 L 7.7890625 40.255859 L 7.8085938 40.279297 L 7.828125 40.300781 L 8.1015625 40.589844 L 8.9433594 40.898438 L 9.6933594 40.408203 L 9.75 39.513672 L 9.5566406 39.21875 L 9.296875 38.941406 L 9.2832031 38.927734 L 8.5234375 38.021484 L 8.5195312 38.015625 L 7.7480469 36.976562 L 6.9472656 36.572266 z M 39.644531 40.138672 L 39.349609 40.332031 L 39.142578 40.53125 L 39.136719 40.537109 L 38.380859 41.193359 L 38.369141 41.203125 L 37.550781 41.845703 L 36.765625 42.404297 L 36.759766 42.408203 L 36.351562 42.671875 L 35.894531 43.441406 L 36.236328 44.269531 L 37.105469 44.490234 L 37.431641 44.355469 L 37.845703 44.087891 L 37.867188 44.074219 L 37.886719 44.060547 L 38.748047 43.447266 L 38.767578 43.433594 L 38.787109 43.417969 L 39.617188 42.765625 L 39.636719 42.75 L 39.654297 42.734375 L 40.453125 42.042969 L 40.470703 42.027344 L 40.488281 42.011719 L 40.730469 41.779297 L 41.033203 40.935547 L 40.539062 40.189453 L 39.644531 40.138672 z M 12.257812 42.230469 L 11.642578 42.880859 L 11.796875 43.763672 L 12.052734 44.005859 L 12.978516 44.611328 L 13.001953 44.626953 L 13.027344 44.642578 L 14.164062 45.291016 L 14.189453 45.306641 L 14.216797 45.320312 L 14.742188 45.580078 L 15.638672 45.576172 L 16.171875 44.857422 L 15.914062 43.998047 L 15.630859 43.789062 L 15.115234 43.533203 L 15.103516 43.527344 L 14.046875 42.919922 L 13.148438 42.332031 L 12.257812 42.230469 z M 32.445312 44.722656 L 32.097656 44.775391 L 31.275391 45.054688 L 31.269531 45.056641 L 30.248047 45.347656 L 30.232422 45.351562 L 29.265625 45.574219 L 28.375 45.734375 L 27.65625 46.271484 L 27.65625 47.166016 L 28.375 47.703125 L 28.726562 47.703125 L 29.617188 47.542969 L 29.642578 47.539062 L 29.666016 47.533203 L 30.730469 47.287109 L 30.753906 47.28125 L 30.779297 47.275391 L 31.822266 46.978516 L 31.845703 46.972656 L 31.869141 46.962891 L 32.740234 46.669922 L 33.369141 46.03125 L 33.236328 45.146484 L 32.445312 44.722656 z M 20.087891 45.416016 L 19.220703 45.634766 L 18.875 46.462891 L 19.332031 47.232422 L 19.658203 47.369141 L 20.683594 47.595703 L 20.712891 47.601562 L 20.744141 47.605469 L 22.085938 47.816406 L 22.117188 47.822266 L 22.148438 47.824219 L 22.736328 47.878906 L 23.572266 47.554688 L 23.810547 46.691406 L 23.261719 45.982422 L 22.921875 45.888672 L 22.396484 45.839844 L 21.078125 45.634766 L 20.087891 45.416016 z"}))};a(53);var y=function(e){var t=e.data,a=t.front,c=t.back,l=t.theme,o=t.id,i=Object(n.useState)("front"),m=Object(s.a)(i,2),u=m[0],L=m[1],d="card ".concat(u),h=function(){L("front"===u?"back":"front")},E=function(e){return r.a.createElement(_,{title:e,key:Object(p.uniqueId)()})};return r.a.createElement("div",{className:d},r.a.createElement("div",{className:"card__inner card__inner--front"},r.a.createElement("div",{className:"card__text"},a),r.a.createElement("button",{className:"btn btn-inverse btn-small",onClick:h},"Flip"),r.a.createElement("div",{className:"tag__wrapper"},l.map(E))),r.a.createElement("div",{className:"card__inner card__inner--back"},r.a.createElement("button",{className:"btn btn-inverse btn-small card__btn-flip",onClick:h},r.a.createElement(x,{width:"22",height:"22"})),r.a.createElement("div",{className:"card__text"},c),r.a.createElement("div",{className:"btn__wrapper"},r.a.createElement("button",{className:"btn btn-inverse btn-small",onClick:function(){e.updateData(o,"repeat")}},"Hard"),r.a.createElement("button",{className:"btn btn-primary btn-small",onClick:function(){e.updateData(o,"known")}},"Easy")),r.a.createElement("div",{className:"tag__wrapper"},l.map(E))))},j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(L.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).ServiceData=new b,a.state={cards:[],error:null,errorMsg:"",loading:!0,currentCard:null,finish:!1},a.onCardsLoaded=function(e){a.setState({cards:e,error:!1,errorMsg:"",loading:!1,currentCard:0})},a.onError=function(e){a.setState({error:!0,errorMsg:e.message,loading:!1})},a.updateData=function(e,t){var n=a.state,r=n.cards,c=n.currentCard;if(a.ServiceData.updateCard(e,{status:t,lastRepeat:new Date}).then((function(){console.log("".concat(e," updated"))})).catch((function(e){console.log(e)})),c===r.length-1)return a.setState({finish:!0});var l=c+1;return a.setState({currentCard:l})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.ServiceData.getLearningCards().then(this.onCardsLoaded).catch(this.onError)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.errorMsg,n=e.loading,c=e.cards,l=e.currentCard,s=e.finish;return n?r.a.createElement(g,null):t?r.a.createElement(f,{message:a}):s?r.a.createElement(w,null):r.a.createElement(k.CSSTransitionGroup,{component:"div",className:"card-container",transitionName:"fade",transitionEnterTimeout:400,transitionLeaveTimeout:300},r.a.createElement(y,{key:l,data:c[l],updateData:this.updateData}))}}]),t}(r.a.Component),O=function(e){var t=e.width,a=e.height;return r.a.createElement("svg",{width:t,height:a,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M11.0353 16.4283C8.04379 16.4283 5.61867 14.0032 5.61867 11.0117C5.61867 8.02012 8.04379 5.595 11.0353 5.595C14.0269 5.595 16.452 8.02012 16.452 11.0117C16.452 14.0032 14.0269 16.4283 11.0353 16.4283ZM11.0353 14.9283C13.1984 14.9283 14.952 13.1748 14.952 11.0117C14.952 8.84855 13.1984 7.095 11.0353 7.095C8.87222 7.095 7.11867 8.84855 7.11867 11.0117C7.11867 13.1748 8.87222 14.9283 11.0353 14.9283ZM21.75 10.196V11.8032C21.751 12.5106 21.273 13.129 20.5882 13.3061L19.3815 13.6184C19.2249 14.1216 19.0229 14.6095 18.778 15.0761L19.4096 16.1487C19.7681 16.7575 19.6696 17.5318 19.17 18.0313L18.0327 19.1687C17.5331 19.6683 16.7589 19.7668 16.1501 19.4083L15.0774 18.7767C14.6218 19.0157 14.1459 19.2138 13.6553 19.3687L13.3402 20.5875C13.1635 21.2719 12.5461 21.7501 11.8393 21.75H10.2308C9.52415 21.7498 8.90713 21.2717 8.73035 20.587L8.41923 19.3785C7.92357 19.2236 7.44276 19.0246 6.98258 18.784L5.87693 19.4353C5.26813 19.7938 4.49391 19.6953 3.99434 19.1957L2.85701 18.0583C2.35741 17.5588 2.25887 16.7845 2.6171 16.1763L3.26641 15.0717C3.02473 14.6101 2.82502 14.1277 2.66967 13.6304L1.4125 13.3049C0.72833 13.1282 0.250233 12.5112 0.25 11.8043V10.1961C0.249938 9.48922 0.728097 8.87186 1.41216 8.69524L2.68604 8.36569C2.83761 7.89065 3.02974 7.42951 3.2603 6.98739L2.59041 5.84993C2.23187 5.24113 2.33041 4.46691 2.83 3.96734L3.96732 2.83001C4.46691 2.33041 5.24113 2.23187 5.84987 2.59038L6.98753 3.26024C7.44165 3.02322 7.91583 2.82678 8.40452 2.67322L8.73048 1.4125C8.90713 0.72833 9.52415 0.250233 10.231 0.25H11.8393C12.5461 0.249938 13.1635 0.728097 13.3402 1.41258L13.6673 2.6802C14.1513 2.83364 14.621 3.02915 15.0709 3.26451L16.1751 2.61541C16.7839 2.25687 17.5581 2.35541 18.0577 2.855L19.1947 3.99199C19.6943 4.49157 19.7928 5.2658 19.4343 5.87453L18.7832 6.98026C19.0176 7.42866 19.2124 7.89666 19.3654 8.37892L20.5877 8.69521C21.272 8.87199 21.7501 9.48929 21.75 10.196ZM20.2125 10.1475L18.5761 9.72409C18.3129 9.65598 18.1072 9.4508 18.0384 9.1878C17.8697 8.54293 17.6123 7.9246 17.2735 7.35056C17.1348 7.11561 17.1346 6.8239 17.273 6.5888L18.1417 5.1134C18.1533 5.09377 18.1501 5.06879 18.134 5.05266L16.997 3.91565C16.9809 3.89954 16.9559 3.89636 16.9357 3.90823L15.4614 4.7749C15.2263 4.9131 14.9347 4.91279 14.6999 4.77409C14.1246 4.43428 13.5048 4.17621 12.8584 4.00731C12.5951 3.93852 12.3898 3.73255 12.3218 3.46908L11.8878 1.7875C11.8821 1.76542 11.8622 1.75 11.8393 1.75H10.2312C10.2085 1.75001 10.1885 1.76543 10.1828 1.78774L9.74946 3.46374C9.68119 3.72775 9.47501 3.93391 9.21099 4.00214C8.56022 4.17032 7.93621 4.42882 7.35716 4.77012C7.12227 4.90857 6.83075 4.90863 6.59579 4.77029L5.08874 3.88292C5.0691 3.87136 5.04412 3.87454 5.028 3.89066L3.89065 5.02801C3.87454 5.04412 3.87136 5.0691 3.88292 5.08873L4.77025 6.5954C4.90858 6.83027 4.90858 7.12171 4.77026 7.35659C4.43526 7.92544 4.18009 8.53766 4.01193 9.17605C3.94279 9.4385 3.73726 9.64312 3.4745 9.7111L1.7875 10.1475C1.76542 10.1532 1.75 10.1731 1.75 10.196V11.8041C1.75001 11.8269 1.76543 11.8468 1.78802 11.8526L3.46135 12.286C3.7257 12.3544 3.93195 12.5611 3.99981 12.8256C4.16872 13.484 4.43002 14.1152 4.77595 14.7003C4.91479 14.9352 4.91515 15.2269 4.7769 15.4621L3.90992 16.9369C3.89836 16.9566 3.90154 16.9815 3.91766 16.9977L5.05501 18.135C5.07112 18.1511 5.0961 18.1543 5.11569 18.1428L6.59103 17.2738C6.82619 17.1353 7.11803 17.1354 7.35303 17.2742C7.93731 17.6192 8.56743 17.8799 9.22469 18.0485C9.48957 18.1165 9.69648 18.3232 9.76465 18.588L10.1829 20.2125C10.1885 20.2346 10.2085 20.25 10.231 20.25H11.8394C11.8622 20.25 11.8821 20.2346 11.8879 20.2122L12.3102 18.5789C12.3784 18.3153 12.5841 18.1093 12.8476 18.0408C13.5 17.8711 14.1254 17.6107 14.7054 17.2671C14.9405 17.1278 15.2327 17.1274 15.4682 17.266L16.9113 18.1157C16.9309 18.1273 16.9559 18.1241 16.972 18.108L18.1093 16.9707C18.1255 16.9545 18.1286 16.9296 18.117 16.9099L17.2674 15.4669C17.1287 15.2314 17.1291 14.9391 17.2685 14.7039C17.6178 14.1146 17.8812 13.4783 18.0506 12.8145C18.1183 12.5495 18.3247 12.3424 18.5894 12.2739L20.2125 11.8539C20.2346 11.8482 20.25 11.8282 20.25 11.8043V10.1959C20.25 10.1731 20.2346 10.1532 20.2125 10.1475Z"}))},S=(a(54),["purple","hot-pink","orange","green","blue","yellow","pink"]),M=function(e){var t=Object(n.useState)("hidden"),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(e.theme),i=Object(s.a)(o,2),m=i[0],u=i[1],L=Object(n.useRef)();function d(e){if(L.current&&!L.current.contains(e.target)&&"active"===c)return l("hidden")}Object(n.useEffect)((function(){return document.addEventListener("mousedown",d),function(){document.removeEventListener("mousedown",d)}}));var h=function(t){var a=t.target.value;u(a),e.onChangeTheme(a)};return r.a.createElement("div",{className:"theme-switcher",ref:L},r.a.createElement("button",{className:"theme-switcher__btn",onClick:function(){return l("active"===c?"hidden":"active")}},r.a.createElement(O,{width:"1.375rem",height:"1.375rem"})),r.a.createElement("ul",{className:"theme-switcher__list ".concat(c)},S.map((function(e){return r.a.createElement("li",{className:"theme-switcher__item ".concat(e),key:e},r.a.createElement("label",{className:"theme-switcher__title checkbox"},r.a.createElement("input",{type:"radio",name:"theme-color",value:e,onChange:h,checked:e===m}),r.a.createElement("span",{className:"theme-switcher__bullet"}),e))}))))};var T=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.c,{to:"/",activeClassName:"active",className:"nav__link",exact:!0},"Home")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.c,{to:"/cards/",activeClassName:"active",className:"nav__link",exact:!0},"All cards")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.c,{to:"/learn/",activeClassName:"active",className:"nav__link",exact:!0},"Learn")))),r.a.createElement(M,{theme:e.theme,onChangeTheme:e.onChangeTheme}))))};var D=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:""},r.a.createElement("ul",{className:""},r.a.createElement("li",{className:""},r.a.createElement(o.b,{to:"/",className:""},"Home")),r.a.createElement("li",{className:""},r.a.createElement(o.b,{to:"/cards/",className:""},"All cards")),r.a.createElement("li",{className:""},r.a.createElement(o.b,{to:"/learn/",className:""},"Learn")),r.a.createElement("li",{className:""},r.a.createElement(o.b,{to:"/elements/",className:""},"Elements")))))};var A=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"h2"},"Elements"),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"elements"},r.a.createElement("div",{className:"elements__wrapper"},r.a.createElement("h1",{className:"h1"},"Heading 1 - h1"),r.a.createElement("h2",{className:"h2"},"Heading 2 - h2"),r.a.createElement("h3",{className:"h3"},"Heading 3 - h3"),r.a.createElement("h4",{className:"h4"},"Heading 4 - h4"),r.a.createElement("div",{className:"divider"}),r.a.createElement("p",null,"text"),r.a.createElement("p",{className:"small-text"},"small-text")),r.a.createElement("div",{className:"elements__wrapper"},r.a.createElement("h4",{className:"h4"},".btn.btn-primary"),r.a.createElement("button",{className:"btn btn-primary"},"Button"),r.a.createElement("button",{className:"btn btn-primary btn-small"},"Button Small"),r.a.createElement("h4",{className:"h4"},".btn.btn-inverse"),r.a.createElement("button",{className:"btn btn-inverse"},"Button"),r.a.createElement("button",{className:"btn btn-inverse btn-small"},"Button Small"),r.a.createElement("h4",{className:"h4"},"Tags"),r.a.createElement(_,{title:"Tag name"}),r.a.createElement(_,{title:"Tag name",removing:"true"}),r.a.createElement("div",{className:"divider"}),r.a.createElement("h4",{className:"h4"},"Inputs"),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("input",{type:"text",placeholder:"input text",className:"input-text"})),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",className:"checkbox__input"}),r.a.createElement("span",{className:"checkbox__mark"}),"Checkbox")),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"radio",className:"checkbox__input",name:"radio",value:0}),r.a.createElement("span",{className:"radio__mark"}),"Radio value")),r.a.createElement("div",{className:"input__wrapper"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"radio",className:"checkbox__input",name:"radio",value:1}),r.a.createElement("span",{className:"radio__mark"}),"Radio value")))))};var B=function(){var e=Object(n.useState)("pink"),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement(o.a,null,r.a.createElement("div",{className:"app ".concat(a)},r.a.createElement(T,{theme:a,onChangeTheme:function(e){return c(e)}}),r.a.createElement("main",null,r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{path:"/",component:D,exact:!0}),r.a.createElement(i.a,{path:"/cards/",component:w,exact:!0}),r.a.createElement(i.a,{path:"/learn/",component:j,exact:!0}),r.a.createElement(i.a,{path:"/elements/",component:A,exact:!0})))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"https://github.com/OlgaPavlyuk/"},"github"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.figma.com/file/tRtdlPcgS602OuW5rPSooB/Eggplore-Style-Guide---Freebie-(Copy)?node-id=0%3A1"},"figma")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.10d30b1d.chunk.js.map