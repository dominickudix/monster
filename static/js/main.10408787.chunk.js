(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),c=(n(13),n(3)),i=n(4),l=n(6),m=n(5),u=n(7),h=(n(14),n(15),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),d=(n(16),n(17),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:e.monster.name}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),f=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(d,{key:e.id,monster:e})})))},p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:"",date:new Date},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})),setInterval((function(){return e.setState({date:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.date)}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("p",{className:"timer"},this.state.date.toLocaleTimeString()),r.a.createElement("h1",{className:"title"},"Monsters Rolodex"),r.a.createElement(h,{handleChange:this.handleChange,placeholder:"search for monsters"}),r.a.createElement(f,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.10408787.chunk.js.map