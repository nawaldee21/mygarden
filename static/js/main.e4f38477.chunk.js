(this["webpackJsonpmy-garden"]=this["webpackJsonpmy-garden"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/logo.06492b95.png"},34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),o=a.n(l),c=(a(39),a(33)),i=a(8),s=a(9),m=a(11),u=a(10),d=a(12),h=(a(40),function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"home"},"Hello"),r.a.createElement("p",{className:"hoo"},"welcome to riyadh shelter "))}),p=function(e){return r.a.createElement("body",{className:"Login-component"},r.a.createElement("div",{className:"abo"},r.a.createElement("p",null,"Riyadh Animal Shelter was founded by an activist who would offer animals in need temporary shelter and medical treatment before finding them good permanent homes. The numbers of animals helped grew and it was time to expand. She finally founded Riyadh Animal Shelter in 2014 which became a center from which volunteers of various backgrounds would operate from. In 2018, a private veterinary clinic was founded to help support the shelter and its activities. In addition to rescuing, the shelters\u2019 volunteering group aims to promote animal welfare in society through events held at schools and universities..")))},f=a(29),b=a.n(f),E=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.mylist.map((function(t,a){return r.a.createElement("div",null,r.a.createElement("img",{key:a,src:t}),r.a.createElement("button",{onClick:function(){return e.props.clearItem(t)}},"delete"))}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){return e.props.clearList()}}," delete all"))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).random=function(){b()({url:"https://api.thecatapi.com/v1/images/search?format=json",method:"get"}).then((function(e){a.setState({imgUrl:e.data[0].url})}))},a.state={images:[],imgUrl:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",{className:"cat"},"Thinking of adding a cat to your family? Here are some cats want to be your new best friend."),r.a.createElement("br",null),r.a.createElement("button",{class:"material-icons",onClick:this.random},"random cat"),r.a.createElement("img",{onClick:this.addToList,src:this.state.imgUrl}),r.a.createElement("button",{onClick:function(){return e.props.add(e.state.imgUrl)}},"add "),r.a.createElement("br",null))}}]),t}(n.Component),v=a(30),g=a.n(v),w=function(){return r.a.createElement("img",{class:"logoo",src:g.a,alt:"logo"})},O=a(13),k=a(6),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).add=function(e){a.setState({mylist:[].concat(Object(c.a)(a.state.mylist),[e])})},a.clearList=function(){a.setState({mylist:[]})},a.clearItem=function(e){var t=a.state.mylist,n=t.indexOf(e);t.splice(n,1),a.setState({mylist:t})},a.state={mylist:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement(w,null),r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement(O.b,{className:"hLink",to:"/"},"HOME ")," | ",r.a.createElement(O.b,{className:"hLink",to:"/About"},"ABOUT ")," | ",r.a.createElement(O.b,{className:"hLink",to:"/MyCart"},"FIND A CAT ")),r.a.createElement(O.b,{to:"/MyList"},r.a.createElement("button",{className:"cta"},"MY LIST "))),r.a.createElement("div",null,r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:h}),r.a.createElement(k.a,{path:"/About",component:p}),r.a.createElement(k.a,{path:"/MyCart",component:function(){return r.a.createElement(y,{add:e.add})}}),r.a.createElement(k.a,{path:"/MyList",component:function(){return r.a.createElement(E,{clearItem:e.clearItem,clearList:e.clearList,mylist:e.state.mylist})}})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.e4f38477.chunk.js.map