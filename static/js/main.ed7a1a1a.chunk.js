(this["webpackJsonpbanana-network"]=this["webpackJsonpbanana-network"]||[]).push([[0],{103:function(e,t,n){"use strict";t.a=n.p+"static/media/photo.d25d283a.jpg"},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(3),a=n(28),s=n(29),c=n(31),i=n(30),o=n(0),u=n.n(o),l=n(9),d=n(14),j=n(1),f=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return!1===this.props.isAuth?Object(j.jsx)(l.a,{to:"/login"}):Object(j.jsx)(e,Object(r.a)({},this.props))}}]),o}(u.a.Component);return Object(d.b)(f)(t)}},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(41),a=n(3),s="SEND-MESSAGE",c=function(e){return{type:s,newMessageBody:e}},i={dialogs:[{id:1,name:"Artem"},{id:2,name:"Maxim"},{id:3,name:"Vlad"}],messages:[{id:1,message:"Hi"},{id:2,message:"Yo"},{id:3,message:"What are you doing?"}]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}}},133:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1TIGR"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(131),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"115bae6f-1277-41cf-8c44-258e3df69f68"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},i={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}}},167:function(e,t,n){},168:function(e,t,n){},23:function(e,t,n){e.exports={nav:"Navbar_nav__31ZlJ",item:"Navbar_item__29UK_",active:"Navbar_active__AGZT2"}},296:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(61),c=n.n(s),i=(n(167),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,303)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))}),o=n(28),u=n(29),l=n(31),d=n(30),j=(n(168),n(3)),f=n(15),b=n(68),p=n.n(b),g=n(1),h=function(e){return Object(g.jsxs)("header",{className:p.a.header,children:[Object(g.jsx)("img",{className:p.a.img,src:"https://svgsilh.com/svg/2491236-ffc107.svg",alt:"logo"}),Object(g.jsx)("div",{className:p.a.loginBlock,children:e.isAuth?Object(g.jsxs)("div",{children:[e.login," - ",Object(g.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(g.jsx)(f.b,{to:"/login",children:"Login"})})]})},O=n(14),m=n(11),v=n.n(m),x=n(20),w=n(52),P=n(16),_="banana-network/auth/SET_USER_DATA",C={userId:null,email:null,login:null,isAuth:!1},y=function(e,t,n,r){return{type:_,payload:{userId:e,email:t,login:n,isAuth:r}}},S=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r,a,s,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(y(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)(h,Object(j.a)({},this.props))}}]),n}(a.a.Component),k=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:S,logout:function(){return function(e){P.a.logout().then((function(t){0===t.data.resultCode&&e(y(null,null,null,!1))}))}}})(N),E=n(23),F=n.n(E),U=function(){return Object(g.jsxs)("nav",{className:F.a.nav,children:[Object(g.jsx)("div",{children:Object(g.jsx)(f.b,{className:F.a.item,activeClassName:F.a.active,to:"/profile",children:"Profile"})}),Object(g.jsx)("div",{children:Object(g.jsx)(f.b,{className:F.a.item,activeClassName:F.a.active,to:"/dialogs",children:"Messages"})}),Object(g.jsx)("div",{children:Object(g.jsx)(f.b,{className:F.a.item,activeClassName:F.a.active,to:"/users",children:"Users"})}),Object(g.jsx)("div",{children:Object(g.jsx)(f.b,{className:F.a.item,to:"#c",children:"News"})}),Object(g.jsx)("div",{children:Object(g.jsx)(f.b,{className:F.a.item,to:"#c",children:"Music"})}),Object(g.jsx)("div",{children:Object(g.jsx)(f.b,{className:F.a.item,to:"#c",children:"Settings"})})]})},T=n(9),A=n(65),z=n(128),L=n(69),M=n.n(L),G=n(132),D=n.n(G),R=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),j=Object(r.useState)(1),f=Object(z.a)(j,2),b=f[0],p=f[1],h=(b-1)*i+1,O=b*i;return Object(g.jsxs)("div",{className:M.a.paginator,children:[b>1&&Object(g.jsx)("button",{onClick:function(){p(b-1)},children:"Prev"}),u.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(g.jsx)("span",{className:D()(Object(A.a)({},M.a.selectedPage,a===e),M.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),d>b&&Object(g.jsx)("button",{onClick:function(){p(b+1)},children:"Next"})]})},B=n(133),H=n.n(B),W=n(103),q=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(f.b,{to:"/profile/"+t.id,children:Object(g.jsx)("img",{src:null!=t.photos.small?t.photos.small:W.a,class:H.a.userPhoto,alt:"ava"})})}),Object(g.jsx)("div",{children:t.followed?Object(g.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(g.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(g.jsxs)("span",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:t.name}),Object(g.jsx)("div",{children:t.status})]}),Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:"user.location.country"}),Object(g.jsx)("div",{children:"user.location.city"})]})]})]})},J=function(e){for(var t=e.currentPage,n=e.totalItemsCount,r=e.pageSize,a=e.onPageChanged,s=e.users,c=e.followingInProgress,i=e.unfollow,o=e.follow,u=Math.ceil(n/r),l=[],d=1;d<=u;d++)l.push(d);return Object(g.jsxs)("div",{children:[Object(g.jsx)(R,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(g.jsx)("div",{children:s.map((function(e){return Object(g.jsx)(q,{user:e,followingInProgress:c,unfollow:i,follow:o},e.id)}))})]})},Y=n(41),Z=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),r):e}))},K="FOLLOW",V="UNFOLLOW",Q="SET_USERS",X="SET_CURRENT_PAGE",$="SET_TOTAL_USERS_COUNT",ee="TOGGLE_IS_FETCHING",te="TOGGLE_IS_FOLLOWING_IN_PROGRESS",ne={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},re=function(e){return{type:K,userId:e}},ae=function(e){return{type:V,userId:e}},se=function(e){return{type:Q,users:e}},ce=function(e){return{type:X,pageNumber:e}},ie=function(e){return{type:$,totalUsersCount:e}},oe=function(e){return{type:ee,isFetching:e}},ue=function(e,t){return{type:te,isFetching:e,userId:t}},le=function(){var e=Object(x.a)(v.a.mark((function e(t,n,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ue(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(ue(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(j.a)(Object(j.a)({},e),{},{users:Z(e.users,t.userId,"id",{followed:!0})});case V:return Object(j.a)(Object(j.a)({},e),{},{users:Z(e.users,t.userId,"id",{followed:!1})});case Q:return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case X:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.pageNumber});case $:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.totalUsersCount});case ee:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case te:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(Y.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},je=n(64),fe=n(10),be=n(104),pe=n(134),ge=Object(pe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),he=function(e){return e.usersPage.pageSize},Oe=function(e){return e.usersPage.totalUsersCount},me=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.followingInProgress},xe=function(e){return e.usersPage.isFetching},we=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestingUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.requestingUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(je.a,{isFetching:this.props.isFetching}),Object(g.jsx)(J,{totalItemsCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingInProgress:this.props.toggleFollowingInProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),Pe=Object(fe.d)(Object(O.b)((function(e){return{users:ge(e),pageSize:he(e),totalUsersCount:Oe(e),currentPage:me(e),followingInProgress:ve(e),isFetching:xe(e)}}),{follow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=P.c.follow.bind(P.c),le(n,e,r,re);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=P.c.unfollow.bind(P.c),le(n,e,r,ae);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:se,setCurrentPage:ce,setTotalUsersCount:ie,toggleIsFetching:oe,toggleFollowingInProgress:ue,requestingUsers:function(e,t){return function(){var n=Object(x.a)(v.a.mark((function n(r){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ce(e)),r(oe(!0)),n.next=4,P.c.getUsers(e,t);case 4:a=n.sent,r(oe(!1)),r(se(a.items)),r(ie(a.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}),be.a)(we),_e=n(126),Ce=n(127),ye=n(74),Se=n(62),Ie=n(49),Ne=n.n(Ie),ke=Object(Ce.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(g.jsxs)("form",{onSubmit:t,children:[Object(g.jsx)("div",{children:Object(g.jsx)(_e.a,{placeholder:"Email",name:"email",component:Se.a,validate:[ye.b]})}),Object(g.jsx)("div",{children:Object(g.jsx)(_e.a,{placeholder:"Password",name:"password",component:Se.a,validate:[ye.b],type:"password"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(_e.a,{component:Se.a,name:"rememberMe",type:"checkbox"}),"remember me"]}),n&&Object(g.jsx)("div",{className:Ne.a.formSummaryError,children:n}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{children:"Login"})})]})})),Ee=Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(x.a)(v.a.mark((function r(a){var s,c;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(S()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(w.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(g.jsx)(T.a,{to:"/profile"}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Login"}),Object(g.jsx)(ke,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Fe="INITIALIZED_SUCCESS",Ue={initialized:!1},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},Ae=n(93),ze=n(125),Le={},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;return e},Ge=n(137),De=n(129),Re=Object(fe.c)({auth:I,profilePage:Ae.b,dialogsPage:ze.a,sidebar:Me,usersPage:de,form:De.a,app:Te}),Be=Object(fe.e)(Re,Object(fe.a)(Ge.a));window.store=Be;var He=Be,We=a.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),qe=a.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),Je=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(g.jsxs)("div",{className:"app-wrapper",children:[Object(g.jsx)(k,{}),Object(g.jsx)(U,{}),Object(g.jsxs)("div",{className:"app-wrapper-content",children:[Object(g.jsxs)(a.a.Suspense,{fallback:Object(g.jsx)("div",{children:"Loading..."}),children:[Object(g.jsx)(T.b,{path:"/profile/:userId?",render:function(){return Object(g.jsx)(qe,{})}}),Object(g.jsx)(T.b,{path:"/dialogs",render:function(){return Object(g.jsx)(We,{})}})]}),Object(g.jsx)(T.b,{path:"/users",render:function(){return Object(g.jsx)(Pe,{})}}),Object(g.jsx)(T.b,{path:"/login",render:function(){return Object(g.jsx)(Ee,{})}})]})]}):Object(g.jsx)(je.a,{})}}]),n}(r.Component),Ye=Object(fe.d)(T.f,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(S());Promise.all([t]).then((function(){e({type:Fe})}))}}}))(Je),Ze=function(e){return Object(g.jsx)(f.a,{basename:"/banana-network",children:Object(g.jsx)(O.a,{store:He,children:Object(g.jsx)(Ye,{})})})};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(Ze,{})}),document.getElementById("root")),i()},49:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2T_gE",error:"FormsControls_error__1-8Np",formSummaryError:"FormsControls_formSummaryError__3mEEE"}},62:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f}));var r=n(3),a=n(70),s=n(49),c=n.n(s),i=n(1),o=["input","meta"],u=["input","meta"],l=["input","meta"],d=function(e){e.input;var t=e.meta,n=Object(a.a)(e,o),r=t.touched&&t.error;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(r?c.a.error:""),children:[Object(i.jsx)("div",{children:n.children}),r&&Object(i.jsx)("span",{children:t.error})]})},j=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,u));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,l));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},64:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.acf15138.png",a=n(1);t.a=function(e){return e.isFetching?Object(a.jsx)("img",{src:r,alt:"preloader"}):null}},68:function(e,t,n){e.exports={header:"Header_header__2jCYZ",img:"Header_img__38OWJ",loginBlock:"Header_loginBlock__1YDWH"}},69:function(e,t,n){e.exports={paginator:"Paginator_paginator__1ba3S",pageNumber:"Paginator_pageNumber__2Nvqs",selectedPage:"Paginator_selectedPage__14Ukz"}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return v}));var r=n(41),a=n(3),s=n(11),c=n.n(s),i=n(20),o=n(16),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j="TOGGLE_IS_FETCHING",f="DELETE_POST",b={posts:[{id:1,message:"Mix",likesCount:11},{id:2,message:"I'm fine",likesCount:12},{id:3,message:"Big day",likesCount:3}],profile:null,isFetching:!1,status:""},p=function(e){return{type:u,newPostBody:e}},g=function(e){return{type:d,status:e}},h=function(e){return{type:j,isFetching:e}},O=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(h(!0)),t.next=3,o.b.getProfile(e);case 3:r=t.sent,n(h(!1)),n((a=r.data,{type:l,profile:a}));case 6:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostBody,likesCount:0};return Object(a.a)(Object(a.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[n])});case l:return Object(a.a)(Object(a.a)({},e),{},{profile:t.profile});case d:return Object(a.a)(Object(a.a)({},e),{},{status:t.status});case j:return Object(a.a)(Object(a.a)({},e),{},{isFetching:t.isFetching});case f:return Object(a.a)(Object(a.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}}},[[296,1,2]]]);
//# sourceMappingURL=main.ed7a1a1a.chunk.js.map