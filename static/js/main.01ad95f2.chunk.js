(this.webpackJsonpwebpack=this.webpackJsonpwebpack||[]).push([[0],{120:function(t,e,n){},121:function(t,e,n){},132:function(t,e){},134:function(t,e){},145:function(t,e){},147:function(t,e){},174:function(t,e){},176:function(t,e){},177:function(t,e){},182:function(t,e){},184:function(t,e){},190:function(t,e){},192:function(t,e){},211:function(t,e){},223:function(t,e){},226:function(t,e){},230:function(t,e,n){"use strict";n.r(e);var c=n(10),i=n.n(c),a=n(109),o=n.n(a),r=(n(120),n(110)),s=n(111),u=n(112),b=n(115),d=n(114),j=(n(121),n(2));function l(t){var e=t.title,n=t.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e}),n]})}var f=n(113),h=n.n(f);function v(t){var e=t.options,n=t.onLeaveFeedback;return Object(j.jsx)(c.Fragment,{children:e.map((function(t){return Object(j.jsx)("button",{name:t,onClick:n,children:t},h.a.generate())}))})}function O(t){var e=t.message;return Object(j.jsx)("p",{children:e})}function k(t){var e=t.good,n=t.neutral,c=t.bad,i=t.total,a=t.positiveFeedbacks;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Good: ",e]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",c]}),Object(j.jsxs)("p",{children:["Total: ",i]}),Object(j.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})}var g=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).btnCklickCounter=function(t){var e=t.currentTarget.name;c.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},c.countTotalFeedback=function(){var t=c.state,e=t.good,n=t.neutral;return e+t.bad+n},c.countPositiveFeedbackPercentage=function(t){t=c.countTotalFeedback();var e=c.state.good;return Math.round(100*e/t)},c.state={good:0,neutral:0,bad:0},c}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,i=t.bad,a=this.countPositiveFeedbackPercentage(),o=this.countTotalFeedback(),r=Object.keys(this.state);return Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(l,{title:"Please leave feedback",children:Object(j.jsx)(v,{options:r,onLeaveFeedback:this.btnCklickCounter})}),Object(j.jsx)(l,{title:"Statistics",children:0===o?Object(j.jsx)(O,{message:"No feedback given"}):Object(j.jsx)(k,{good:e,neutral:n,bad:i,total:o,positiveFeedbacks:a})})]})}}]),n}(i.a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,231)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),p()}},[[230,1,2]]]);
//# sourceMappingURL=main.01ad95f2.chunk.js.map