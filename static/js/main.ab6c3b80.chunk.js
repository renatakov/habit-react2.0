(this["webpackJsonphabit-react2.0"]=this["webpackJsonphabit-react2.0"]||[]).push([[0],[,,function(e,t,c){e.exports={cardImage:"Card_cardImage__3aG3e",cardTitle:"Card_cardTitle__2ioZx",cardDesc:"Card_cardDesc__2GZum",cardWrapper:"Card_cardWrapper__2Zri0"}},,,,,function(e,t,c){e.exports={counterWrapper:"Counter_counterWrapper__GoV5p",decrement:"Counter_decrement__3L50B",increment:"Counter_increment__9cfkt"}},,,function(e){e.exports=JSON.parse('[{"id":"2","count":"2","step":"2","min":"2","max":"20","img":"https://images.pexels.com/photos/6190993/pexels-photo-6190993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","title":"Title","desc":"Description","price":"100"},{"id":"2","count":"2","step":"2","min":"2","max":"20","img":"https://images.pexels.com/photos/6190993/pexels-photo-6190993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","title":"Title","desc":"Description","price":"100"},{"id":"2","count":"2","step":"2","min":"2","max":"20","img":"https://images.pexels.com/photos/6190993/pexels-photo-6190993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","title":"Title","desc":"Description","price":"100"}]')},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(9),i=c.n(a),o=(c(16),c(17),c(3)),p=c(4),l=c(6),m=c(5),d=c(2),u=c.n(d),j=c(7),h=c.n(j),x=function(e){Object(l.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={count:e.props.count,step:e.props.step,min:e.props.min,max:e.props.max},e.handleDecrement=function(){console.log("Click decrement");var t=e.state,c=t.min,n=t.count,r=t.step;n>c&&e.setState((function(e){return{count:e.count-r}}))},e.handleIncrement=function(){console.log("Click increment");var t=e.state,c=t.max,n=t.count,r=t.step;n<c&&e.setState((function(e){return{count:e.count+r}}))},e}return Object(p.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"\u042d\u0442\u043e Counter"}),Object(n.jsxs)("div",{className:h.a.counterWrapper,children:[Object(n.jsx)("button",{className:h.a.decrement,onClick:this.handleDecrement,children:"-"}),Object(n.jsx)("p",{children:this.state.count}),Object(n.jsx)("button",{className:h.a.increment,onClick:this.handleIncrement,children:"+"})]})]})}}]),c}(r.Component),b=c(10),O=function(e){Object(l.a)(c,e);var t=Object(m.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(p.a)(c,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:b.map((function(e){return console.log(e),Object(n.jsxs)("li",{className:u.a.cardWrapper,children:[Object(n.jsx)("img",{className:u.a.cardImage,src:e.img,alt:e.title}),Object(n.jsx)("h3",{className:u.a.cardTitle,children:e.title}),Object(n.jsx)("p",{className:u.a.cardDesk,children:e.desc}),Object(n.jsxs)("p",{children:[e.price," ",Object(n.jsx)("span",{children:"$"})]}),Object(n.jsx)(x,{count:e.count,step:e.step,min:e.min,max:e.max})]},e.id)}))})}}]),c}(r.Component);var g=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)("h1",{children:"NEW"})}),Object(n.jsx)("ul",{className:"App-wrapper",children:Object(n.jsx)(O,{})})]})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.ab6c3b80.chunk.js.map