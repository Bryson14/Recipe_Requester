(this.webpackJsonprecipe_requester=this.webpackJsonprecipe_requester||[]).push([[0],{124:function(e,t){},125:function(e,t){},138:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(47),r=n.n(i),a=(n(58),n(17)),l=n(2),o=n(28),j=n.n(o),d=n(48),h=n(29),u=n(49),b=n(50),p=n(18),m=n(53),x=n(52),O=n.p+"static/media/roberto-valdivia-rcUw6b4iYe0-unsplash.11040231.jpg",g=n(0);var v=function(e){var t=e.nextStep,n=e.requester,s=Object(l.f)();return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"vert-split-div left",children:[Object(g.jsx)("h3",{className:"span-left",children:"Recipe Grabber"}),Object(g.jsx)("button",{onClick:t,className:"span-left btn btn-warning",children:"Start"}),Object(g.jsxs)("h1",{className:"span-left",children:[n," wants a recipe from you!"]}),Object(g.jsx)("p",{className:"span-left",children:"5 Minutes now saves a recipe for a generation."}),Object(g.jsx)("img",{className:"img-vert-half span-right",src:O,alt:"Homemade pizza which has been passed down for generations"})]}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{className:"btn btn-secondary",onClick:function(e){s.push("/recipes")},children:"See Recipe Book!"})})]})};var f=function(e){var t=e.number;return Object(g.jsx)("p",{children:Object(g.jsx)("u",{children:t})})};var y=function(e){var t=e.handleChange,n=e.name,s=e.nextStep;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"vert-split-div",children:[Object(g.jsx)("h3",{className:"span-left",children:"What is the name of your recipe?"}),Object(g.jsxs)("p",{className:"span-left",children:["Something clever like"," ",Object(g.jsx)("b",{children:Object(g.jsx)("i",{children:"Grandma's Killer Cinnamon Orange Rolls"})})," ","sounds better than just"," ",Object(g.jsx)("b",{children:Object(g.jsx)("i",{children:"Cinnamon Rolls"})}),"."]}),Object(g.jsx)("div",{className:"span-right",children:Object(g.jsxs)("span",{children:[Object(g.jsx)(f,{number:"01"}),Object(g.jsx)("input",{type:"text",className:"form-control",value:n,onChange:t("name"),maxLength:"100",onKeyDown:function(e){"Enter"===e.key&&s()},autoFocus:!0,placeholder:"Recipe Name"})]})})]}),Object(g.jsx)("br",{})]})};var N=function(e){var t=e.handleChange,n=e.category,s=["Breakfast","Lunch","Beverages","Appetizers","Soups","Salads","Main dishes: Beef","Main dishes: Poultry","Main dishes: Pork","Main dishes: Seafood","Main dishes: Vegetarian","Side dishes: Vegetables","Side dishes: Other","Desserts","Canning / Freezing","Breads","Holidays","Entertaining"],c=s.length>0&&s.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}),this);return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"page-title",children:"Category"}),Object(g.jsxs)("div",{class:"input-group mb-3",children:[Object(g.jsx)("div",{class:"input-group-prepend",children:Object(g.jsx)("label",{class:"input-group-text",for:"inputGroupSelect01",children:"Options"})}),Object(g.jsxs)("select",{onChange:t("category"),value:n,className:"form-control",id:"inputGroupSelect01",children:[Object(g.jsx)("option",{selected:!0,children:"Choose..."}),c]})]})]})};var S=function(e){var t=e.func,n=e.text;return Object(g.jsx)("button",{onClick:t,className:"btn-spacer btn btn-primary",children:n})};var k=function(e){var t=e.handleChange,n=e.time,s=e.cookTime,c=e.prepTime,i=e.nextStep,r=e.name;function a(e){"Enter"===e.key&&n>0&&c>0&&s>0&&i()}return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"page-title",children:"Time"}),Object(g.jsxs)("p",{children:["What's the total time to make ",Object(g.jsx)("i",{children:r}),"?"]}),Object(g.jsx)("input",{type:"number",pattern:"\\d*",className:"form-control",placeholder:"Total Time in Minutes",value:n,onKeyDown:a,onChange:t("totalTime")}),Object(g.jsxs)("p",{children:["How much time is needed to prep ",Object(g.jsx)("i",{children:r}),"?"]}),Object(g.jsx)("input",{type:"number",pattern:"\\d*",className:"form-control",placeholder:"Prep Time in Minutes",value:c,onKeyDown:a,onChange:t("prepTime")}),Object(g.jsxs)("p",{children:["How long does ",Object(g.jsx)("i",{children:r})," need to cook for?"]}),Object(g.jsx)("input",{type:"number",pattern:"\\d*",className:"form-control",placeholder:"Cook Time in Minutes",value:s,onKeyDown:a,onChange:t("cookTime")})]})},C=n(19);var w=function(e){var t=e.text,n=e.idx,s=e.removeItem;return Object(g.jsxs)("div",{class:"input-group mb-3",children:[Object(g.jsx)("p",{class:"form-control",children:t}),Object(g.jsx)("div",{class:"input-group-append",children:Object(g.jsx)("button",{class:"input-group-text btn btn-outline-secondary",id:"basic-addon2",onClick:function(e){s(n,e)},children:"X"})})]})};var T=function(e){var t=e.handleChange,n=e.ingredients,c=e.nextStep,i=e.prevStep,r=Object(s.useState)(""),a=Object(C.a)(r,2),l=a[0],o=a[1];function j(e){if(""!==l){var s=[l].concat(n);o(""),t({key:"ingredients",value:s}),document.getElementById("ingredient-input").focus()}}function d(e,s){n.splice(e,1),t({key:"ingredients",value:n})}return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"page-title",children:"Ingredients"}),Object(g.jsx)("p",{children:'Add the amount of the ingredient as well. For example, say "3 cups of unbleached flour"'}),Object(g.jsx)(S,{func:i,text:"Back"}),Object(g.jsx)(S,{func:c,text:"Next"}),Object(g.jsx)("div",{children:Object(g.jsxs)("small",{children:["Pressing ",Object(g.jsx)("kbd",{children:"Enter"})," will auto add your ingredient!"]})}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{class:"input-group mb-3",children:[Object(g.jsx)("div",{class:"input-group-prepend",children:Object(g.jsx)("button",{class:"input-group-text btn btn-success m-2",onClick:j,id:"basic-addon1",children:"Add Ingredient"})}),Object(g.jsx)("input",{type:"text",className:"form-control",id:"ingredient-input",value:l,onChange:function(e){o(e.target.value)},autoFocus:!0,placeholder:"Type an Ingredient",onKeyDown:function(e){"Enter"===e.key&&j(e)}})]}),n.length>0?Object(g.jsx)("ol",{children:n.map((function(e,t){return Object(g.jsx)("li",{children:Object(g.jsx)(w,{text:e,idx:t,removeItem:d})},e.key)}))}):Object(g.jsx)("p",{children:"You have no ingredients. Add some!"})]})};var I=function(e){var t=e.ingredients;return Object(g.jsxs)("div",{class:"panel panel-primary",id:"result_panel",children:[Object(g.jsx)("div",{class:"panel-heading",children:Object(g.jsx)("h3",{class:"panel-title",children:"Your Ingredients"})}),Object(g.jsx)("div",{class:"panel-body",children:Object(g.jsx)("ul",{class:"list-group",children:t.map((function(e,t){return Object(g.jsx)("li",{className:"list-group-item",children:e},t)}))})})]})};var B=function(e){var t=e.handleChange,n=e.ingredients,c=e.instructions,i=Object(s.useState)(""),r=Object(C.a)(i,2),a=r[0],l=r[1];function o(e){if(""!==a){var n=c.concat([a]);l(""),t({key:"instructions",value:n}),document.getElementById("instruction-input").focus()}}function j(e,n){c.splice(e,1),t({key:"instructions",value:c})}return Object(g.jsxs)("div",{className:"container text-center",children:[Object(g.jsx)("h1",{className:"page-title",children:"Instructions"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-sm-12 col-md-8",children:[Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("input",{type:"text",id:"instruction-input",className:"form-control large-input",onChange:function(e){l(e.target.value)},value:a,maxLength:"500",onKeyDown:function(e){"Enter"===e.key&&o(e)},placeholder:'Type out instructions and click "Add Instruction" for each step...'})}),Object(g.jsx)("div",{className:"container row text-center ",children:Object(g.jsx)("button",{className:"btn btn-secondary m-3",onClick:o,children:"Add Instruction"})})]}),Object(g.jsx)("div",{className:"col-sm-12 col-md-4 p-4",children:n.length>0?Object(g.jsx)(I,{ingredients:n}):Object(g.jsx)("p",{children:"You still haven't added ingredients \ud83d\ude2d"})})]}),Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col",children:[Object(g.jsx)("p",{className:"h4",children:"Your Instructions"}),Object(g.jsx)("hr",{}),c.length>0?Object(g.jsx)("ol",{children:c.map((function(e,t){return Object(g.jsx)("li",{children:Object(g.jsx)(w,{text:e,idx:t,removeItem:j})},t)}))}):Object(g.jsx)("p",{children:"How can I make this recipe with no ingredients? \ud83d\udc69\u200d\ud83c\udf73"})]})})})]})},F=function(e){var t=e.submit_record,n=e.prevStep;return Object(g.jsx)("div",{className:"modal",children:Object(g.jsxs)("div",{className:"modal-content",children:[Object(g.jsx)("div",{className:"modal-header",children:Object(g.jsx)("h4",{className:"modal-title",children:"Confirm Submit"})}),Object(g.jsxs)("div",{className:"modal-body",children:[Object(g.jsx)("button",{className:"btn btn-danger modal-button",onClick:n,children:"Cancel"}),Object(g.jsx)("button",{className:"btn btn-success modal-button",onClick:t,children:"Confirm"})]})]})})},E=function(e){var t=e.name,n=e.category,s=e.totaltime,c=e.preptime,i=e.cooktime,r=e.ingredients,a=e.instructions,l=new Date,o=String(l.getDate()).padStart(2,"0"),j=String(l.getMonth()+1).padStart(2,"0"),d=l.getFullYear();return l=j+"/"+o+"/"+d,Object(g.jsxs)("div",{className:"container my-4",children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("h2",{className:"header-2",children:t}),Object(g.jsxs)("div",{className:"col-lg-6 col-md-12",children:[Object(g.jsxs)("p",{children:["Category: ",Object(g.jsx)("b",{children:n})]}),Object(g.jsxs)("p",{children:["Time: ",Object(g.jsxs)("b",{children:[s," min."]})]}),Object(g.jsxs)("p",{children:["Prep Time: ",Object(g.jsxs)("b",{children:[c," min."]})]}),Object(g.jsxs)("p",{children:["Cook Time: ",Object(g.jsxs)("b",{children:[i," min."]})]})]}),Object(g.jsxs)("div",{className:"col-lg-6 col-md-12",children:[Object(g.jsx)("h4",{children:"Ingredients"}),Object(g.jsx)("ol",{children:r.map((function(e,t){return Object(g.jsx)("li",{children:e},t)}))}),Object(g.jsx)("h4",{children:"Instructions"}),Object(g.jsx)("ol",{children:a.map((function(e,t){return Object(g.jsx)("li",{children:e},t)}))})]})]}),Object(g.jsx)("hr",{className:"my-4"}),Object(g.jsxs)("p",{className:"lead",children:["Thank you for you recipe! Created ",l]})]})};var M=function(e){var t=e.name,n=e.category,s=e.totaltime,c=e.preptime,i=e.cooktime,r=e.ingredients,a=e.instructions,o=Object(l.f)();return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"jumbotron",children:[Object(g.jsx)("h1",{className:"display-4",children:"Thank You!"}),Object(g.jsxs)("p",{className:"lead",children:["You time here will keep"," ",Object(g.jsx)("b",{children:Object(g.jsx)("i",{children:""!==t?t:"your recipe"})})," ","alive."]}),Object(g.jsx)("p",{children:"Click here to see other recipes"}),Object(g.jsx)("button",{className:"btn btn-secondary",onClick:function(e){o.push("/recipes")},children:"See Recipe Book!"}),Object(g.jsx)("hr",{className:"my-4"})]}),Object(g.jsx)(E,{name:t,category:n,totaltime:s,preptime:c,cooktime:i,ingredients:r,instructions:a})]})},R=new(n(33))({apiKey:"keywSY73734Bt376s"}).base("app3Gf3GAi6tb6C0t"),D=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={step:1,name:"",category:"",prepTime:"",cookTime:"",totalTime:"",ingredients:[],instructions:[],requester:"Bryson"},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleChange=function(t){return function(n){e.setState(Object(h.a)({},t,n.target.value))}},e.complexSetState=function(t){e.setState(Object(h.a)({},t.key,t.value))},e.createRecord=Object(d.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(p.a)(e),R("Recipes").create([{fields:{Name:e.state.name,Category:e.state.category,totalTime:Number(e.state.totalTime),prepTime:Number(e.state.prepTime),cookTime:Number(e.state.cookTime),Ingredients:JSON.stringify(e.state.ingredients),Instructions:JSON.stringify(e.state.instructions)}}],(function(e,t){if(e)return console.error(e),void alert("There was a problem submitting the data to Airtable.");t.forEach((function(e){console.log(e.getId())})),n.nextStep()}));case 2:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(window.location.search);e.has("requester")&&this.setState({requester:e.get("requester")})}},{key:"render",value:function(){var e=this.state.step,t=this.state,n=t.name,s=t.category,c=t.prepTime,i=t.cookTime,r=t.totalTime,a=t.ingredients,l=t.instructions,o=t.requester;switch(e){case 1:return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(v,{requester:o,nextStep:this.nextStep})});case 2:return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(y,{handleChange:this.handleChange,name:n,nextStep:this.nextStep}),Object(g.jsx)(S,{func:this.prevStep,text:"Back"}),Object(g.jsx)(S,{func:this.nextStep,text:"Next"})]});case 3:return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(N,{handleChange:this.handleChange,category:s}),Object(g.jsx)(S,{func:this.prevStep,text:"Back"}),Object(g.jsx)(S,{func:this.nextStep,text:"Next"})]});case 4:return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k,{handleChange:this.handleChange,time:r,prepTime:c,cookTime:i,nextStep:this.nextStep,name:n}),Object(g.jsx)(S,{func:this.prevStep,text:"Back"}),Object(g.jsx)(S,{func:this.nextStep,text:"Next"})]});case 5:return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(T,{handleChange:this.complexSetState,ingredients:a,nextStep:this.nextStep,prevStep:this.prevStep})});case 6:return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(B,{handleChange:this.complexSetState,ingredients:a,instructions:l}),Object(g.jsx)(S,{func:this.prevStep,text:"Back"}),Object(g.jsx)("button",{className:"btn btn-success",onClick:this.nextStep,children:"Finish"})]});case 7:return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(B,{handleChange:this.complexSetState,ingredients:a,instructions:l}),Object(g.jsx)(F,{prevStep:this.prevStep,submit_record:this.createRecord})]});case 8:return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(M,{name:n,category:s,totaltime:r,preptime:c,cooktime:i,ingredients:a,instructions:l})});default:return Object(g.jsx)("div",{children:"Unknown Error"})}}}]),n}(s.Component),A=new(n(33))({apiKey:"keywSY73734Bt376s"}).base("app3Gf3GAi6tb6C0t"),Y=[];A("Recipes").select({view:"Grid view"}).eachPage((function(e,t){e.forEach((function(e){e.fields.Ingredients=JSON.parse(e.fields.Ingredients),e.fields.Instructions=JSON.parse(e.fields.Instructions),Y.push(e.fields)})),t()}),(function(e){e&&console.error(e)}));var q=function(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{className:"m-3",children:"Recipe Book"}),Object(g.jsx)("hr",{}),Y.map((function(e){return Object(g.jsx)(E,{name:e.Name,category:e.Category,totaltime:e.totalTime,preptime:e.prepTime,cooktime:e.cookTime,ingredients:e.Ingredients,instructions:e.Instructions})}))]})};function G(){return Object(g.jsx)(a.a,{children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/recipes",children:Object(g.jsx)(q,{})}),Object(g.jsx)(l.a,{exact:!0,path:"/",children:Object(g.jsx)("div",{className:"user-form",children:Object(g.jsx)(D,{})})}),Object(g.jsx)(l.a,{path:0,children:Object(g.jsx)("div",{className:"user-form",children:Object(g.jsx)(D,{})})})]})})}var K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(G,{})}),document.getElementById("root")),K()},58:function(e,t,n){}},[[138,1,2]]]);
//# sourceMappingURL=main.248bf770.chunk.js.map