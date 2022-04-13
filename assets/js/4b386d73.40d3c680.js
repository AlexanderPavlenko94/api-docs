"use strict";(self.webpackChunkwhitebit_docs=self.webpackChunkwhitebit_docs||[]).push([[799],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},l="Private HTTP API Authentication",u={unversionedId:"Private/http-auth",id:"Private/http-auth",title:"Private HTTP API Authentication",description:"How to use:",source:"@site/docs/Private/http-auth.md",sourceDirName:"Private",slug:"/Private/http-auth",permalink:"/docs/Private/http-auth",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Private",permalink:"/docs/category/private"},next:{title:"Private HTTP API V4",permalink:"/docs/Private/http-main-v4"}},p={},c=[{value:"How to use:",id:"how-to-use",level:2},{value:"Requirements:",id:"requirements",level:2},{value:"Body data",id:"body-data",level:3},{value:"Headers",id:"headers",level:3},{value:"Examples of auth",id:"examples-of-auth",level:3},{value:"Errors:",id:"errors",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"private-http-api-authentication"},"Private HTTP API Authentication"),(0,o.kt)("h2",{id:"how-to-use"},"How to use:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to your account on whitebit.com and navigate to account settings."),(0,o.kt)("li",{parentName:"ol"},"Click on the API keys tab."),(0,o.kt)("li",{parentName:"ol"},"Select the appropriate configuration tab for your API keys. Different API keys allow access to different API calls."),(0,o.kt)("li",{parentName:"ol"},"Generate an API key."),(0,o.kt)("li",{parentName:"ol"},"Enable IP restrictions by specifying up to 5 trusted IPs ",(0,o.kt)("em",{parentName:"li"},"(optional, ",(0,o.kt)("strong",{parentName:"em"},"recommended"),")")),(0,o.kt)("li",{parentName:"ol"},'Enable Endpoint access restrictions. Select only those endpoints, that you are going to use and click "Apply" button.')),(0,o.kt)("h2",{id:"requirements"},"Requirements:"),(0,o.kt)("p",null,"Auth request should be using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," method and should include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#body-data"},"Body data")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#headers"},"Headers"))),(0,o.kt)("h3",{id:"body-data"},"Body data"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON")," that includes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"'request'")," - a request path without the domain name. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"'/api/v4/trade-account/balance'"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"'nonce'")," - a number that is always ",(0,o.kt)("strong",{parentName:"li"},"greater")," than the previous request\u2019s nonce number. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"'1594297865'"),". A good method of creating a ",(0,o.kt)("strong",{parentName:"li"},"nonce")," is to use the unix timestamp in milliseconds. This way you'll always get an incrementing number, but make sure not to send two API calls at the same time, otherwise their nonce will be identical."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"'nonceWindow'")," - boolean. In cases when you can\u2019t guarantee consecutive increment of ",(0,o.kt)("strong",{parentName:"li"},"nonce")," you can use ",(0,o.kt)("strong",{parentName:"li"},"nonceWindow")," field. If it set to true nonce validation will be work a bit different. You have to passed nonce as unix timestamp in milliseconds. The api will validate that your nonce enter the range of current time +/- 5 seconds (5000 milliseconds). Also your nonce will be checked as unique, to avoid double spending. This feature can be useful in high-frequency concurrent systems when a lot of requests is being generated in a short period of time."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"params of request")," - Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"'ticker': 'BTC'"))),(0,o.kt)("h3",{id:"headers"},"Headers"),(0,o.kt)("p",null,"With every request you need to provide next ",(0,o.kt)("strong",{parentName:"p"},"headers"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"'Content-type': 'application/json'")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"'X-TXC-APIKEY': api_key")," - where api_key is your public WhiteBit API key"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"'X-TXC-PAYLOAD': payload'")," - where payload is base64-encoded body data"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"'X-TXC-SIGNATURE': signature")," - where signature is ",(0,o.kt)("inlineCode",{parentName:"li"},"hex(HMAC_SHA512(payload), key=api_secret))"))),(0,o.kt)("h3",{id:"examples-of-auth"},"Examples of auth"),(0,o.kt)("p",null,"To help you get started with our API, we've created the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/whitebit-exchange/api-quickstart"},"API Quick start helper")," library. It supports the following languages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},"1. Python\n2. PHP\n3. JavaScript\n4. Go\n5. Kotlin\n6. DotNet\n7. Ruby\n8. C++\n")),(0,o.kt)("h3",{id:"errors"},"Errors:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Too many requests."')," - this error occurs if the ",(0,o.kt)("strong",{parentName:"p"},"\u201cnonce\u201d")," in your current request is equal or is lower than the one in the previous request."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "message": [\n        [\n            "Too many requests."\n        ]\n    ],\n    "result": [],\n    "success": false\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"This action is unauthorized. Enable your key in API settings"')," - this error occurs when you are using disabled API key. You can enable your API key in account API settings ",(0,o.kt)("a",{parentName:"p",href:"https://whitebit.com/settings/api"},"https://whitebit.com/settings/api"),". Note: Your API key is disabled automatically after disabling 2FA. Also, the API key will be disabled if the request is received from unknown IP (if IP access restrictions are turned on)."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "message": [\n        [\n            "This action is unauthorized. Enable your key in API settings"\n        ]\n    ],\n    "result": [],\n    "success": false\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"You don\'t have permission to use this endpoint. Please contact support for more details"'),' - this error occurs when you are using an endpoint that is disabled for a specific API key in API key settings. You can enable endpoint by editing "Endpoint access restrictions" for this API key in account settings ',(0,o.kt)("a",{parentName:"p",href:"https://whitebit.com/settings/api"},"https://whitebit.com/settings/api"),"."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "message": [\n        [\n            "You don\'t have permission to use this endpoint. Please contact support for more details"\n        ]\n    ],\n    "result": [],\n    "success": false\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Invalid payload"')," - this error occurs when the data that was provided in the body of the request doesn't match the ",(0,o.kt)("strong",{parentName:"p"},"base64-decoded")," payload."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n     "message": [\n         [\n             "Invalid payload."\n         ]\n     ],\n     "result": [],\n     "success": false\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Unauthorized request."')," - this error occurs if the request was signed incorrectly."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "message": [\n        [\n            "Unauthorized request."\n        ]\n    ],\n    "result": [],\n    "success": false\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Nonce not provided."')," - this error occurs if your request is missing ",(0,o.kt)("strong",{parentName:"p"},'"nonce"')," in the request body."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "message": [\n        [\n            "Nonce not provided."\n        ]\n    ],\n    "result": [],\n    "success": false\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Your nonce is more than 5 seconds lesser than the current nonce"')," - this error occurs if ",(0,o.kt)("strong",{parentName:"p"},"nonceWindow")," set to true, but you passed not a valid timestamp in ",(0,o.kt)("strong",{parentName:"p"},"nonce")," - it should be current timestamp in milliseconds."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "message": [\n        [\n            "Your nonce is more than 5 seconds lesser than the current nonce"\n        ]\n    ],\n    "result": [],\n    "success": false\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Invalid nonceWindow."')," - this error occurs if ",(0,o.kt)("strong",{parentName:"p"},"nonceWindow")," is not boolean."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "message": [\n        [\n            "Invalid nonceWindow."\n        ]\n    ],\n    "result": [],\n    "success": false\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Request not provided."')," - this error occurs if your request is missing ",(0,o.kt)("strong",{parentName:"p"},'"request"')," path in the request body."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "message": [\n        [\n            "Request not provided."\n        ]\n    ],\n    "result": [],\n    "success": false\n}\n')),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);