(this["webpackJsonptodo-react-application"]=this["webpackJsonptodo-react-application"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/deleteIcon.b789f4a2.svg"},17:function(e,t,a){e.exports=a.p+"static/media/upIcon.cca46599.svg"},18:function(e,t,a){e.exports=a.p+"static/media/downIcon.6fd5c4ae.svg"},20:function(e,t,a){e.exports=a(49)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/addIcon.5e4c0d9f.svg"},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(15),c=a.n(o),s=(a(25),a(19)),i=a(3),r=(a(26),a(27),a(28),a(29),a(16)),d=a.n(r);var m=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body",id:"".concat(e.completed?"completed-task-body":"task-body")},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1 form-check",id:"outline","data-toggle":"tooltip","data-placement":"left",title:"Tick/Untick to complete/uncomplete"},l.a.createElement("input",{type:"checkbox",defaultChecked:e.completed,className:"form-check-input large-check-box",id:"exampleCheck1",onClick:function(){return e.completeTask(e.taskID)}}),l.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"})),l.a.createElement("h6",{className:"card-text col-8",id:"outline","data-toggle":"tooltip","data-placement":"bottom",title:"Optional deadline",display:"inline"},e.deadline>1?"".concat(e.deadline," days"):"1 DAY!!!"),l.a.createElement("button",{type:"button",className:"col-1 btn",onClick:function(){return e.deleteTask(e.taskID)},"data-toggle":"tooltip","data-placement":"right",title:"Delete task"},l.a.createElement("img",{src:d.a,alt:"",className:"delete-svg"})),l.a.createElement("p",{id:"".concat(e.completed?"completed-task-text":"task-text"),className:"card-text col-12","data-toggle":"tooltip","data-placement":"bottom",title:"Add task text"},e.text))))},u=(a(30),a(17)),p=a.n(u),k=a(18),f=a.n(k);var h=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),d=r[0],m=r[1];function u(t){console.log(e.myShelf,e.myBottle),e.addTask(o,d,e.myShelf,e.myBottle,t,e.taskID)}return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body",id:"task-body"},l.a.createElement("div",{className:"row"},l.a.createElement("button",{type:"button",className:"col-2 btn","data-toggle":"tooltip","data-placement":"right",title:"Add task above",onClick:function(){return u(1)}},l.a.createElement("img",{src:p.a,alt:"",className:"up-svg"})),l.a.createElement("input",{type:"date",className:"card-text col-8",id:"outline","data-toggle":"tooltip","data-placement":"bottom",title:"Optional deadline",display:"inline",onChange:function(e){m(e.target.value)},value:d}),l.a.createElement("button",{type:"button",className:"col-2 btn","data-toggle":"tooltip","data-placement":"right",title:"Add task below",onClick:function(){return u(0)}},l.a.createElement("img",{src:f.a,alt:"",className:"down-svg"})),l.a.createElement("input",{id:"task-text",className:"card-text col-12","data-toggle":"tooltip","data-placement":"bottom",title:"Add task text",onChange:function(e){c(e.target.value)},value:o})))))};a(31);var g=function(e){var t=e.bottleTasks.length;return l.a.createElement("div",{className:"container col-12 col-md-6 col-lg-4 col-xl-3 align-self-end bottle"},function(e){var t=[];t.push(l.a.createElement(h,{myShelf:e.myShelf,myBottle:e.myBottle,addTask:e.addTask}));for(var a=0;a<e.bottleTasks.length;a++)switch(e.bottleTasks[a].pos){case 0:t.push(l.a.createElement(m,{key:e.bottleTasks[a].taskID,text:e.bottleTasks[a].text,completed:e.bottleTasks[a].isCompleted,taskID:e.bottleTasks[a].taskID,deadline:e.bottleTasks[a].deadline,deleteTask:e.deleteTask,completeTask:e.completeTask}));break;case 1:t.unshift(l.a.createElement(m,{key:e.bottleTasks[a].taskID,text:e.bottleTasks[a].text,completed:e.bottleTasks[a].isCompleted,taskID:e.bottleTasks[a].taskID,deadline:e.bottleTasks[a].deadline,deleteTask:e.deleteTask,completeTask:e.completeTask}));break;default:console.log("invalid pos: "+e.taskID)}return l.a.createElement("div",null,t)}(e),l.a.createElement("h2",null,"Bottle: ",e.myBottle," tasks remaining ",t>1?"".concat(t," tasks"):"1 task"))},b=a(51);var v=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"container screen"},function(e){for(var t=[],a=[],n=0;n<e.shelfTasks.length;n++)!1===t.includes(e.shelfTasks[n].bottle)&&t.push(e.shelfTasks[n].bottle);for(var o=new Array(t.length),c=function(n){o[n]=e.shelfTasks.filter((function(e){return e.bottle===t[n]})),a.push(l.a.createElement(g,{key:Object(b.a)(),bottleTasks:o[n],deleteTask:e.deleteTask,completeTask:e.completeTask,addTask:e.addTask,text:e.shelfTasks[n].shelf,myShelf:e.myShelf,myBottle:t[n]}))},s=0;s<t.length;s++)c(s);return l.a.createElement("div",{className:"row",id:"nowrap"},a)}(e)),l.a.createElement("div",{className:"row shelf",id:"nowrap"},e.myShelf))},T=a(4),E=a.n(T);var y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1];function c(e,t,n,l,c){var i={text:e,dueDate:t,isCompleted:!1,shelf:n,bottle:l,pos:c,username:"bob5"};E.a.post("https://pgbx7na299.execute-api.eu-west-2.amazonaws.com/dev/tasks",i).then((function(e){var t=[].concat(Object(s.a)(a),[e.data.task[0]]);o(t)})).catch((function(e){console.log("Error in adding a task",e)}))}function r(e){var t=a.map((function(t){return t.taskID===e&&(t.isCompleted?t.isCompleted=0:t.isCompleted=1),t})),n=a.filter((function(t){return t.taskID===e}));console.log(n),E.a.put("https://pgbx7na299.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e),n[0]).then((function(t){console.log("complete "+e+" clicked")})).catch((function(t){console.log("Error updating task "+e,t)})),o(t)}function d(e){E.a.delete("https://pgbx7na299.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e)).then((function(t){var n=a.filter((function(t){return t.taskID!==e}));o(n)})).catch((function(e){console.log("Could not delete task",e)}))}return Object(n.useEffect)((function(){E.a.get("https://pgbx7na299.execute-api.eu-west-2.amazonaws.com/dev/tasks").then((function(e){o(e.data.tasks)})).catch((function(e){console.log("Could not fetch tasks",e)}))}),[]),l.a.createElement("div",{className:"App"},function(e){for(var t=[],a=[],n=0;n<e.length;n++)!1===t.includes(e[n].shelf)&&t.push(e[n].shelf);for(var o=new Array(t.length),s=function(n){o[n]=Object.values(e).filter((function(e){return e.shelf===t[n]})),a.push(l.a.createElement(v,{key:t[n],myShelf:t[n],shelfTasks:o[n],deleteTask:d,completeTask:r,addTask:c}))},i=0;i<t.length;i++)s(i);return l.a.createElement("div",null,a)}(a))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.97f256df.chunk.js.map