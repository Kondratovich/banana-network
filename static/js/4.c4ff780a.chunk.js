(this["webpackJsonpbanana-network"]=this["webpackJsonpbanana-network"]||[]).push([[4],{300:function(t,e,s){t.exports={img:"Post_img__wsht1"}},301:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3_40O",posts:"MyPosts_posts__1F3Uw"}},302:function(t,e,s){t.exports={content:"ProfileInfo_content__2hoLj",img:"ProfileInfo_img__2KvsJ",description:"ProfileInfo_description__Vh187",userPhoto:"ProfileInfo_userPhoto__1gHHy"}},304:function(t,e,s){"use strict";s.r(e);var n=s(3),o=s(28),c=s(29),i=s(31),r=s(30),a=s(14),u=s(93),j=s(300),l=s.n(j),p=s(1),d=function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{className:l.a.img,src:"https://yt3.ggpht.com/ytc/AAUvwnhlHV0dtJCabiw8H9rkr36K7TLPkBRIgXpD4try5g=s900-c-k-c0x00ffffff-no-rj",alt:"ava"}),t.message,Object(p.jsx)("div",{children:Object(p.jsx)("span",{children:t.likesCount})})]})},b=s(301),f=s.n(b),h=s(0),O=s.n(h),x=s(126),g=s(127),m=s(74),v=s(62),P=O.a.memo((function(t){var e=t.posts.map((function(t){return Object(p.jsx)(d,{message:t.message,likesCount:t.likesCount})}));return Object(p.jsxs)("div",{className:f.a.postsBlock,children:[Object(p.jsx)("h3",{children:"My posts"}),Object(p.jsx)(k,{onSubmit:function(e){t.addPost(e.newPostBody)}}),Object(p.jsx)("div",{className:f.a.posts,children:e})]})})),_=Object(m.a)(10),k=Object(g.a)({form:"ProfileAddPostForm"})((function(t){return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)(x.a,{component:v.b,name:"newPostBody",validate:[m.b,_],placeholder:"type, bitch"}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Add post"})})]})})),w=P,y=Object(a.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(u.a)(e))}}}))(w),S=s(64),F=s(302),I=s.n(F),B=s(103),C=s(128),A=function(t){var e=Object(h.useState)(!1),s=Object(C.a)(e,2),n=s[0],o=s[1],c=Object(h.useState)(t.status),i=Object(C.a)(c,2),r=i[0],a=i[1];Object(h.useEffect)((function(){a(t.status)}),[t.status]);return Object(p.jsxs)("div",{children:[!n&&Object(p.jsx)("div",{children:Object(p.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"---------  "})}),n&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{onBlur:function(){o(!1),t.updateStatus(r)},onChange:function(t){a(t.currentTarget.value)},autoFocus:!0,value:r})})]})},U=function(t){return t.profile?Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:I.a.description,children:[Object(p.jsx)("img",{class:I.a.userPhoto,src:null!=t.profile.photos.large?t.profile.photos.large:B.a,alt:"ava"}),Object(p.jsx)(A,{status:t.status,updateStatus:t.updateStatus}),Object(p.jsx)("div",{children:Object(p.jsx)("b",{children:t.profile.fullName})}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Facebook: ",t.profile.contacts.facebook]}),Object(p.jsxs)("li",{children:["Vk: ",t.profile.contacts.vk]}),Object(p.jsxs)("li",{children:["Twitter: ",t.profile.contacts.twitter]})]})]})}):Object(p.jsx)(S.a,{isFetching:t.isFetching})},N=function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(U,{profile:t.profile,status:t.status,updateStatus:t.updateStatus,isFetching:t.isFetching}),Object(p.jsx)(y,{})]})},T=s(9),H=s(10),J=function(t){Object(i.a)(s,t);var e=Object(r.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(p.jsx)(N,Object(n.a)({},this.props))}}]),s}(O.a.Component);e.default=Object(H.d)(Object(a.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth,isFetching:t.profilePage.isFetching}}),{getUserProfile:u.d,getStatus:u.c,updateStatus:u.e}),T.f)(J)}}]);
//# sourceMappingURL=4.c4ff780a.chunk.js.map