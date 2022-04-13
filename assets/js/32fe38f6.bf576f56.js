"use strict";(self.webpackChunkwhitebit_docs=self.webpackChunkwhitebit_docs||[]).push([[338],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},306:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="Public HTTP API V2",p={unversionedId:"Public/http-v2",id:"Public/http-v2",title:"Public HTTP API V2",description:"Public endpoints V2",source:"@site/docs/Public/http-v2.md",sourceDirName:"Public",slug:"/Public/http-v2",permalink:"/docs/Public/http-v2",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Public HTTP API V1",permalink:"/docs/Public/http-v1"},next:{title:"Public HTTP API V4",permalink:"/docs/Public/http-v4"}},u={},c=[{value:"Public endpoints V2",id:"public-endpoints-v2",level:2},{value:"Error messages V2 format:",id:"error-messages-v2-format",level:4},{value:"Terminology",id:"terminology",level:3},{value:"Pair:",id:"pair",level:4},{value:"Market Info",id:"market-info",level:3},{value:"Market activity",id:"market-activity",level:3},{value:"Recent Trades",id:"recent-trades",level:3},{value:"Fee",id:"fee",level:3},{value:"Asset Status List",id:"asset-status-list",level:3},{value:"Orderbook",id:"orderbook",level:3}],m={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"public-http-api-v2"},"Public HTTP API V2"),(0,i.kt)("h2",{id:"public-endpoints-v2"},"Public endpoints V2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#market-info"},"Market info")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#market-activity"},"Market activity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#recent-trades"},"Recent Trades")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#fee"},"Fee")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#asset-status-list"},"Asset Status List")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#orderbook"},"Orderbook"))),(0,i.kt)("p",null,"Base endpoint is ",(0,i.kt)("a",{parentName:"p",href:"https://whitebit.com"},"https://whitebit.com")),(0,i.kt)("p",null,"Example how to use: ",(0,i.kt)("a",{parentName:"p",href:"https://whitebit.com/api/v2/public/%7Bendpoint%7D"},"https://whitebit.com/api/v2/public/{endpoint}")),(0,i.kt)("p",null,"All endpoints return time in Unix-time format."),(0,i.kt)("p",null,"All endpoints return either a ",(0,i.kt)("strong",{parentName:"p"},"JSON")," object array."),(0,i.kt)("p",null,"For receiving responses from API calls please use http method ",(0,i.kt)("strong",{parentName:"p"},"GET")),(0,i.kt)("p",null,"If endpoint required parameters you will need to send them as ",(0,i.kt)("inlineCode",{parentName:"p"},"query string")),(0,i.kt)("h4",{id:"error-messages-v2-format"},"Error messages V2 format:"),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "success": false,\n    "message": "ERROR MESSAGE",\n    "params": []\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"terminology"},"Terminology"),(0,i.kt)("h4",{id:"pair"},"Pair:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Stock")," - currency that you want to buy or sell"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Money")," - currency that you are using to buy or sell something"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Maker")," - person who puts an order and waiting till this order will be finished"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Taker")," - person who finishes existing order"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Precision")," - is the number of digits to the right of the decimal point"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Bid")," - buy order"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Ask")," - sell order"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"market-info"},"Market Info"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[GET] /api/v2/public/markets\n")),(0,i.kt)("p",null,"This endpoint retrieves all information about available markets."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,i.kt)("em",{parentName:"p"},"1 second")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:"),"\nNONE"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": [\n    {\n      "name": "SON_USD",         // Market pair name\n      "stock": "SON",            // Ticker of stock currency\n      "money": "USD",            // Ticker of money currency\n      "stockPrec": "3",          // Stock currency precision\n      "moneyPrec": "2",          // Precision of money currency\n      "feePrec": "4",            // Fee precision\n      "makerFee": "0.001",       // Default maker fee ratio\n      "takerFee": "0.001",       // Default taker fee ratio\n      "minAmount": "0.001",      // Minimal amount of stock to trade\n      "minTotal": "0.001",       // Minimal amount of money to trade\n      "tradesEnabled": true      // Is trading enabled\n    },\n    {\n      ...\n    }\n  ]\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"market-activity"},"Market activity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[GET] /api/v2/public/ticker\n")),(0,i.kt)("p",null,"This endpoint retrieves information on recent trading activity on all markets."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,i.kt)("em",{parentName:"p"},"1 second")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:"),"\nNONE"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": [\n    {\n      "lastUpdateTimestamp": "2020-07-10T13:37:27.000Z",     // ISO 8601 time format of last update\n      "tradingPairs": "ETH_BTC",                             // Name of market pair\n      "lastPrice": "0.026014",                               // Last deal price\n      "lowestAsk": "0.026027",                               // Lowest ask price\n      "highestBid": "0.026001",                              // Highest bid price\n      "baseVolume24h": "13445.988",                          // Volume in stock currency\n      "quoteVolume24h": "350.113082102",                     // Volume in money currency\n      "tradesEnabled": true                                  // Is trading enabled on exchange\n    },\n    {\n      ...\n    }\n  ]\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"recent-trades"},"Recent Trades"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[GET] /api/v2/public/trades/{market}\n")),(0,i.kt)("p",null,"This endpoint retrieves the trades that have been executed recently on the requested market"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,i.kt)("em",{parentName:"p"},"1 second")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:"),"\nNONE"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": [\n    {\n      "tradeId": 157257950,                 // A unique ID associated with the trade for the currency pair transaction Note: Unix timestamp does not qualify as trade_id.\n      "price": "9371.69",                   // Price.\n      "volume": "0.145642",                 // Amount.\n      "time": "2020-07-09T14:13:01.000Z",   // Time.\n      "isBuyerMaker": true                  // Sell order is taker: true, Buy order is taker: false\n    },\n    {\n      ...\n    }\n  }\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fee"},"Fee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[GET] /api/v2/public/fee\n")),(0,i.kt)("p",null,"This endpoint retrieves the trading fee."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,i.kt)("em",{parentName:"p"},"1 second")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:"),"\nNONE"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": {\n    "makerFee": "0.1",  // Default maker fee (percent of trading amount in money currency)\n    "takerFee": "0.1"   // Default taker fee (percent of trading amount in money currency)\n  }\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"asset-status-list"},"Asset Status List"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[GET] /api/v2/public/assets\n")),(0,i.kt)("p",null,"This endpoint retrieves the assets status."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,i.kt)("em",{parentName:"p"},"1 second")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:"),"\nNONE"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": {\n    "BTC": {\n      "id": "4f37bc79-f612-4a63-9a81-d37f7f9ff622",         // Asset id\n      "lastUpdateTimestamp": "2020-07-10T13:20:07.000Z",    // ISO 8601 time format of last update\n      "name": "Bitcoin",                                    // Name of currency\n      "canWithdraw": true,                                  // Is currency withdrawable\n      "canDeposit": true,                                   // Is currency depositable\n      "minWithdrawal": "0.001",                             // Minimal amount to withdraw\n      "maxWithdrawal": "0",                                 // Maximum amount to withdraw\n      "makerFee": "0.1",                                    // Maker fee for currency\n      "takerFee": "0.1"                                     // Taker fee for currency\n    },\n    {...}\n  }\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"orderbook"},"Orderbook"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[GET] /v2/public/depth/{market}\n")),(0,i.kt)("p",null,"This endpoint retrievs the current order book as two arrays (bids / asks)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,i.kt)("em",{parentName:"p"},"1 second")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:"),"\nNONE"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": {\n      "lastUpdateTimestamp": "2020-07-09T14:49:12.000Z",     // Timestamp of last update\n      "asks": [\n        [\n          "9431.9",                                          // Price of lowest ask\n          "0.705088"                                         // Amount of lowest ask\n        ],\n        [\n          "9433.67",                                         // Price of the next ask\n          "0.324509"                                         // Amount of the next ask\n        ],\n        [...]\n      ],\n      "bids": [\n        [\n          "9427.65",                                         // Price of highest bid\n          "0.547909"                                         // Amount of highest bid\n        ],\n        [\n          "9427.3",                                          // Price of next bid\n          "0.669249"                                         // Amount of next bid\n        ],\n      ],\n      [...]\n  },\n}\n')),(0,i.kt)("hr",null))}k.isMDXComponent=!0}}]);