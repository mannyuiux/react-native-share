(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var n=a(2),r=a(9),b=(a(0),a(171)),c={id:"share-single",title:"Share.single"},l={id:"share-single",title:"Share.single",description:"Open the share dialog with the specific application. This returns a promise similar to Share.open, keep in mind that you will need to handle the same response when the user cancel/dismiss.",source:"@site/docs/share-single.md",permalink:"/react-native-share/docs/share-single",editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/share-single.md",sidebar:"someSidebar",previous:{title:"Share.open",permalink:"/react-native-share/docs/share-open"},next:{title:"Share.isPackageInstalled (Android only)",permalink:"/react-native-share/docs/share-is-package-installed"}},i=[{value:"Supported Options",id:"supported-options",children:[]},{value:"Supported Applications",id:"supported-applications",children:[]},{value:"Static values for Instagram Stories (iOS Only)",id:"static-values-for-instagram-stories-ios-only",children:[{value:"Supported options for INSTAGRAM_STORIES:",id:"supported-options-for-instagram_stories",children:[]}]},{value:"Static Values for Facebook Stories",id:"static-values-for-facebook-stories",children:[{value:"Facebook stories method list",id:"facebook-stories-method-list",children:[]}]}],O={rightToc:i};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Open the share dialog with the specific application. This returns a promise similar to ",Object(b.b)("inlineCode",{parentName:"p"},"Share.open"),", keep in mind that you will need to handle the same response when the user cancel/dismiss."),Object(b.b)("p",null,"Using a promise implementation:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  const shareOptions = {\n    title: 'Share via',\n    message: 'some message',\n    url: 'some share url',\n    social: Share.Social.WHATSAPP,\n    whatsAppNumber: \"9199999999\",  // country code + phone number\n    filename: 'test' , // only for base64 file in Android\n  };\n\n  Share.single(shareOptions)\n    .then((res) => { console.log(res) })\n    .catch((err) => { err && console.log(err); });\n")),Object(b.b)("p",null,"Or with ",Object(b.b)("inlineCode",{parentName:"p"},"async/await"),":"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  const shareOptions = {\n    title: 'Share via',\n    message: 'some message',\n    url: 'some share url',\n    social: Share.Social.WHATSAPP,\n    whatsAppNumber: \"9199999999\",  // country code + phone number\n    filename: 'test' , // only for base64 file in Android\n  };\n\n  const fun = async () => {\n    const shareResponse = await Share.single(shareOptions);\n  }\n")),Object(b.b)("h2",{id:"supported-options"},"Supported Options"),Object(b.b)("p",null,"You can pass the option that will be handled by the native code, similar to ",Object(b.b)("inlineCode",{parentName:"p"},"Share.open"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Android"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"iOS"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Windows"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"url"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL you want to share"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2753")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"File mime type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2753")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"message"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Message sent to the share activity"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2753")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"title"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Title sent to the share activity"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2753")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"subject"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Subject sent when sharing to email"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2753")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"email"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Email of addressee"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2753")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"social"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"supported social apps: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#static-values-for-social"}),"List")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2753")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"forceDialog"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(optional) only android. Avoid showing dialog with buttons Just Once / Always. Useful for Instagram to always ask user if share as Story or Feed"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2753")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"NOTE: If both ",Object(b.b)("inlineCode",{parentName:"em"},"message")," and ",Object(b.b)("inlineCode",{parentName:"em"},"url")," are provided, ",Object(b.b)("inlineCode",{parentName:"em"},"url")," will be concatenated to the end of ",Object(b.b)("inlineCode",{parentName:"em"},"message")," to form the body of the message. If only one is provided it will be used"))),Object(b.b)("h2",{id:"supported-applications"},"Supported Applications"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"react-native-share")," export a ",Object(b.b)("inlineCode",{parentName:"p"},"enum")," containing all supported apps, wich can be seen ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-share/blob/5299d95aab25bfba6815e0f5455876897ed8ddc6/index.js#L207-L219"}),"here"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Android"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"iOS"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Windows"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"FACEBOOK")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"FACEBOOK_STORIES")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"PAGESMANAGER")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"WHATSAPP")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"INSTAGRAM")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"INSTAGRAM_STORIES")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udeab"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"GOOGLEPLUS")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"EMAIL")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"PINTEREST")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"SMS")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"SNAPCHAT")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"MESSENGER")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"LINKEDIN")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")))),Object(b.b)("h2",{id:"static-values-for-instagram-stories-ios-only"},"Static values for Instagram Stories (iOS Only)"),Object(b.b)("p",null,"These values can be used when you are calling the method ",Object(b.b)("inlineCode",{parentName:"p"},"Share.single")," passing ",Object(b.b)("inlineCode",{parentName:"p"},"Share.Social.INSTAGRAM_STORIES")," on the ",Object(b.b)("inlineCode",{parentName:"p"},"social")," attribute."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import Share from 'react-native-share';\n\nconst shareOptions = {\n    method: Share.InstagramStories.SHARE_BACKGROUND_AND_STICKER_IMAGE,\n    backgroundImage: 'http://urlto.png',\n    stickerImage: 'data:image/png;base64,<imageInBase64>', //or you can use \"data:\" link\n    backgroundBottomColor: '#fefefe',\n    backgroundTopColor: '#906df4',\n    attributionURL: 'http://deep-link-to-app', //in beta\n    social: Share.Social.INSTAGRAM_STORIES\n};\n\nShare.shareSingle(shareOptions);\n")),Object(b.b)("h3",{id:"supported-options-for-instagram_stories"},"Supported options for INSTAGRAM_STORIES:"),Object(b.b)("p",null,"Use this properties to customize the instagram storie view. "),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"backgroundImage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL you want to share"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"stickerImage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL you want to share"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"method"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#instagram-stories-method-list"}),"List")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"backgroundBottomColor"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(optional) default #837DF4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\ud83d\udeab")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"backgroundTopColor"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(optional) default #906df4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"attributionURL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(optional) facebook beta-test"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u2705")))),Object(b.b)("h4",{id:"instagram-stories-method-list"},"Instagram stories method list"),Object(b.b)("p",null,"Methods available when calling the ",Object(b.b)("inlineCode",{parentName:"p"},"INSTAGRAM_STORIES")," social option."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required options"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"SHARE_BACKGROUND_IMAGE")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"backgroundImage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"SHARE_STICKER_IMAGE")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"stickerImage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"SHARE_BACKGROUND_AND_STICKER_IMAGE")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"backgroundImage, stickerImage")))),Object(b.b)("h2",{id:"static-values-for-facebook-stories"},"Static Values for Facebook Stories"),Object(b.b)("p",null,"These can be assessed using Share.Social property\nFor eg."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import Share from 'react-native-share';\n\nconst shareOptions = {\n    method: Share.FacebookStories.SHARE_BACKGROUND_AND_STICKER_IMAGE,\n    backgroundImage: 'http://urlto.png', // url or an base64 string\n    stickerImage: 'data:image/png;base64,<imageInBase64>', //or you can use \"data:\" url\n    backgroundBottomColor: '#fefefe',\n    backgroundTopColor: '#906df4',\n    attributionURL: 'http://deep-link-to-app', //in beta\n    appId: '219376304', //facebook appId\n    social: Share.Social.FACEBOOK_STORIES\n};\n\nShare.shareSingle(shareOptions);\n")),Object(b.b)("p",null,"Supported options for ",Object(b.b)("inlineCode",{parentName:"p"},"FACEBOOK_STORIES"),":"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"appId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(required) facebook appId")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"backgroundImage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL you want to share")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"stickerImage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL you want to share")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"method"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#instagram-stories-method-list"}),"List"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"backgroundBottomColor"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(optional) default #837DF4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"backgroundTopColor"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(optional) default #906df4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"attributionURL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(optional) facebook beta-test")))),Object(b.b)("h3",{id:"facebook-stories-method-list"},"Facebook stories method list"),Object(b.b)("p",null,"Methods available when calling the ",Object(b.b)("inlineCode",{parentName:"p"},"FACEBOOK_STORIES")," social option."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required options"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"SHARE_BACKGROUND_IMAGE")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"backgroundImage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"SHARE_STICKER_IMAGE")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"stickerImage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"SHARE_BACKGROUND_AND_STICKER_IMAGE")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"backgroundImage, stickerImage")))))}j.isMDXComponent=!0},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),j=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=j(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),p=j(a),d=n,m=p["".concat(c,".").concat(d)]||p[d]||o[d]||b;return a?r.a.createElement(m,l(l({ref:t},O),{},{components:a})):r.a.createElement(m,l({ref:t},O))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var O=2;O<b;O++)c[O]=a[O];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);