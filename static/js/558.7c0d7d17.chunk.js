"use strict";(self.webpackChunktest_project_tw03=self.webpackChunktest_project_tw03||[]).push([[558],{558:function(e,t,s){s.r(t),s.d(t,{default:function(){return T}});var n=s(439),i=s(791),a=s(434),l=s(689),r=s(654),c="TweetList_card__DUwdu",o="TweetList_logo__rwFoZ",u="TweetList_image__bxRob",_="TweetList_avatar__OS9Ta",w="TweetList_ellipse__x7nM7",d="TweetList_container__WUKWQ",f="TweetList_tweets__jVASH",v="TweetList_followers__87+T6",x="TweetList_BtnPlus__gTkv+",h="TweetList_BtnMinus__evriS",j=s(184),m=function(e){var t=e.id,s=e.user,a=e.tweets,l=e.followers,r=e.avatar,m=(0,i.useState)(l),b=(0,n.Z)(m,2),T=b[0],p=b[1],N=(0,i.useState)(!0),L=(0,n.Z)(N,2),g=L[0],k=L[1];return(0,j.jsxs)("li",{className:c,children:[(0,j.jsx)("div",{className:o}),(0,j.jsx)("div",{className:u}),(0,j.jsx)("div",{className:d,children:(0,j.jsx)("div",{className:w,children:(0,j.jsx)("div",{className:_,children:(0,j.jsx)("img",{src:r,alt:s,width:"62px",height:"62px"})})})}),(0,j.jsxs)("p",{className:f,children:[a," tweets"]}),(0,j.jsxs)("p",{className:v,children:[T," followers"]}),g?(0,j.jsx)("button",{className:x,onClick:function(){p((function(e){return e+1})),k(!1)},children:"followers"}):(0,j.jsx)("button",{className:h,onClick:function(){p((function(e){return e-1})),k(!0)},children:"following"})]},t)},b={container:"TweetsPage_container__uPrRa",button:"TweetsPage_button__RPoQF",btn:"TweetsPage_btn__RrFEX"},T=function(){var e=(0,a.v9)((function(e){var t;return null===(t=e.users)||void 0===t?void 0:t.tweets})),t=(0,a.I0)(),s=(0,l.s0)(),c=(0,i.useState)(3),o=(0,n.Z)(c,2),u=o[0],_=o[1];(0,i.useEffect)((function(){t((0,r.u)())}),[t]);return(0,j.jsxs)("div",{className:b.container,children:[(0,j.jsx)("button",{type:"button",className:b.button,onClick:function(){s("/",{replace:!0})},children:"GoBack"}),(0,j.jsx)("ul",{className:b.list,children:null!==e&&void 0!==e&&e.length?e.slice(0,u).map((function(e){return(0,j.jsx)(m,{id:e.id,user:e.user,tweets:e.tweets,followers:e.followers,avatar:e.avatar},e.id)})):null}),(0,j.jsx)("button",{type:"button",className:b.btn,onClick:function(){_((function(e){return e+3}))},children:"Load more"})]})}}}]);
//# sourceMappingURL=558.7c0d7d17.chunk.js.map