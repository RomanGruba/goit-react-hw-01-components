(window.webpackJsonphomework1=window.webpackJsonphomework1||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"label":"Bronze","icon":"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/bronze-icon.png","capacity":"2TB","price":39,"description":"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{"label":"Silver","icon":"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/silver-icon.png","capacity":"20TB","price":99,"description":"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{"label":"Gold","icon":"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/gold-icon.png","capacity":"400TB","price":499,"description":"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(10)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(1),i=t.n(r),l=function(e){var a=e.user;return c.a.createElement("div",{className:"profile"},c.a.createElement("div",{className:"description"},c.a.createElement("img",{src:a.avatar,alt:"user avatar",className:"avatar"}),c.a.createElement("p",{className:"name"},a.name),c.a.createElement("p",{className:"tag"},a.tag),c.a.createElement("p",{className:"location"},a.location)),c.a.createElement("ul",{className:"stats"},c.a.createElement("li",null,c.a.createElement("span",{className:"label"},"Followers"),c.a.createElement("span",{className:"quantity"},a.stats.followers)),c.a.createElement("li",null,c.a.createElement("span",{className:"label"},"Views"),c.a.createElement("span",{className:"quantity"},a.stats.views)),c.a.createElement("li",null,c.a.createElement("span",{className:"label"},"Likes"),c.a.createElement("span",{className:"quantity"},a.stats.likes))))},s=function(e){var a=e.title,t=e.stats;return c.a.createElement("section",{className:"stats-section"},c.a.createElement("h2",{className:"title"},a),c.a.createElement("ul",{className:"stat-list"},t.map(function(e){return c.a.createElement("li",{className:"item",key:e.id},c.a.createElement("span",{className:"label"},e.label),c.a.createElement("span",{className:"percentage"},e.percentage))})))},m=s;s.defaultProps={title:""};var o=t(3),d=function(e){var a=e.label,t=e.icon,n=e.capacity,r=e.price,i=e.description;return c.a.createElement("div",{className:"pricing-item"},c.a.createElement("i",{className:t}),c.a.createElement("h2",{className:"label"},a),c.a.createElement("p",{className:"capacity"},n),c.a.createElement("p",{className:"description"},i),c.a.createElement("p",{className:"price"},r,"/MO"),c.a.createElement("button",{className:"button"},"Get Started"))},u=function(e){var a=e.items,t=void 0===a?[]:a;return c.a.createElement("ul",{className:"pricing-plan"},t.map(function(e){return c.a.createElement("li",{className:"item",key:e.label},c.a.createElement(d,e))}))},p=t(4),b=function(e){var a=e.items;return c.a.createElement("table",{className:"transaction-history"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,a.map(function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount),c.a.createElement("td",null,e.currency))})))};i.a.render(c.a.createElement(l,{user:{name:"Jacques Gluke",tag:"@jgluke",location:"Ocho Rios, Jamaica",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",stats:{followers:5603,views:4827,likes:1308}}}),document.getElementById("root1"));i.a.render(c.a.createElement(m,{title:"Upload stats",stats:[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}]}),document.getElementById("root2")),i.a.render(c.a.createElement(u,{items:o}),document.getElementById("root3")),i.a.render(c.a.createElement(b,{items:p}),document.getElementById("root4"))}],[[5,1,2]]]);
//# sourceMappingURL=main.d3d2c2a9.chunk.js.map