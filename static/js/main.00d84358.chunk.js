(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),s=(n(12),n(1)),i=n(2),l=n(4),u=n(3),m=function(e){var t=e.click,n=e.str,a=e.x,r=void 0===a?0:a;return o.a.createElement("button",{className:["btn-simple","btn-round"][r],onClick:t},n)},h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onRefresh=function(){fetch("https://api.open-notify.org/iss-now.json").then((function(e){return e.json()})).then((function(t){e.setState({latitude:t.iss_position.latitude,longitude:t.iss_position.longitude})}))},e.state={latitude:0,longitude:0},e}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"space"},o.a.createElement("h1",{className:"space__header"},"International Space Station Current Location"),o.a.createElement("p",{className:"space__para"},"The International Space Station is moving at close to 28,000 km/h so its location changes really fast! So press the below button to see the current position."),o.a.createElement("div",{className:"space__img-box"},o.a.createElement("img",{className:"space__img",alt:"space station",src:"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701921822.jpg"})),o.a.createElement("div",{className:"space__result"},o.a.createElement(m,{click:this.onRefresh,str:"locate",x:1}),o.a.createElement("p",null,"Latitude: ",this.state.latitude),o.a.createElement("p",null,"Longitude: ",this.state.longitude)))}}]),n}(a.Component),p=function(e){var t=e.story;return o.a.createElement("div",{className:"fact"},t)},d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){e.state.input.length&&fetch("https://numbersapi.com/".concat(e.state.input)).then((function(e){return e.text()})).then((function(t){return e.setState({story:t})}))},e.state={input:"",story:""},e}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"story"},o.a.createElement("h1",{className:"story__heading"},"Each Number has a story. Want to know ?"),o.a.createElement("p",{className:"story__para"},"You have to enter a number or a date in month/day(e.g 5/11) formate"),o.a.createElement("input",{className:"story__input",type:"text",placeholder:"Number or Date(e.g 5/11)",onChange:this.onInputChange}),o.a.createElement(m,{click:this.onSubmit,str:"Submit",x:0}),o.a.createElement(p,{story:this.state.story}))}}]),n}(a.Component),f=function(){return o.a.createElement("div",{className:"head"},o.a.createElement("h1",null," cool  api "))},b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={screen:1},e}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(h,null),o.a.createElement(d,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.00d84358.chunk.js.map