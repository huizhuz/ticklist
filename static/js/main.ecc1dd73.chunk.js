(this.webpackJsonpticklist=this.webpackJsonpticklist||[]).push([[0],[,,,,function(e,t,a){e.exports={TaskContainer:"Task_TaskContainer__2olXk",fadein:"Task_fadein__1MzRb",TaskEntry:"Task_TaskEntry__3hu79",FadeOut:"Task_FadeOut__14y0L",fadeout:"Task_fadeout__371TV",EditField:"Task_EditField__J45LG",Icon:"Task_Icon__32YGe",Lift:"Task_Lift__1Bpim",Shake:"Task_Shake__1aEP5",shake:"Task_shake__2-kUP"}},,function(e,t,a){e.exports={Folder:"Folder_Folder__2dPeI",FolderName:"Folder_FolderName__G9gUd",Chosen:"Folder_Chosen__1_Xa0",Icon:"Folder_Icon__3GQEb",Lift:"Folder_Lift__10LHr",Shake:"Folder_Shake__1FeEi",shake:"Folder_shake__1AGYJ"}},function(e,t,a){e.exports={FoldersContainer:"Folders_FoldersContainer__2vgW_",TasksContainer:"Folders_TasksContainer__35-hj",FolderTitle:"Folders_FolderTitle__2HmUo",FolderControl:"Folders_FolderControl__26CW6",AddFolderSign:"Folders_AddFolderSign__39MOr",AddFolderInput:"Folders_AddFolderInput__1CV8U",Icon:"Folders_Icon__2TNqH",HideFolder:"Folders_HideFolder__2KN8J",ShowFolder:"Folders_ShowFolder__2jiJq"}},function(e,t,a){e.exports={TasksTitle:"Tasks_TasksTitle__IxaET",FinishedTasks:"Tasks_FinishedTasks__2jpe7",AddTask:"Tasks_AddTask__2qBuV",Icon:"Tasks_Icon__1qdEW"}},,,,,,,,function(e,t,a){e.exports={App:"App_App__16ZpL",Content:"App_Content__ZaMNr"}},,,,function(e,t,a){e.exports={HeaderWrapper:"Header_HeaderWrapper__25J6e"}},function(e,t,a){e.exports=a.p+"static/media/icon.6dac99c6.png"},,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),i=a.n(r),d=(a(28),a(20)),o=a.n(d),l=a(21),c=a.n(l),u=a(2),k=a(3);function m(){return s.a.createElement("div",{className:o.a.HeaderWrapper},s.a.createElement("img",{src:c.a,alt:"site-icon"}),s.a.createElement("p",null,"Ticklist"),s.a.createElement(u.a,{icon:k.a}))}var f=a(5),F=a(9),h=a(10),_=a(12),I=a(11),p=a(13),E=a(6),T=a.n(E);function g(e){var t;e.chosenFolderId===e.folder.id&&(t=T.a.Chosen);var a=!1;e.idOfFolderBeingEditted===e.folder.id&&(a=!0);var n=s.a.createElement("div",{className:[T.a.Folder,t].join(" ")},s.a.createElement("div",{className:T.a.FolderName,onClick:function(){return e.updateCurrentFolder(e.folder.id)}},s.a.createElement("p",null,e.folder.name)),s.a.createElement("div",{className:[T.a.Icon,T.a.Lift].join(" ")},s.a.createElement(u.a,{onClick:function(){return e.changeBeingEdittedFolderId(e.folder.id)},icon:k.d})),s.a.createElement(u.a,{className:[T.a.Icon,T.a.Shake].join(" "),onClick:function(){return e.deleteFolder(e.folder.id)},icon:k.g})),r=s.a.createElement("div",{className:T.a.Folder},s.a.createElement("input",{type:"text",value:e.folder.name,onChange:function(t){return e.editFolderName(t,e.folder.id)},onKeyPress:function(t){return e.confirmChange(t,e.folder.id)}}),s.a.createElement(u.a,{className:T.a.Icon,onClick:function(){e.changeBeingEdittedFolderId(e.folder.id)},icon:k.b}));return a?r:n}var C=function(e){return e.children},N=a(17),y=a(22),v=a(4),w=a.n(v);function b(e){var t=Object(n.useState)(!1),a=Object(N.a)(t,2),r=a[0],i=a[1],d=Object(n.useState)(!1),o=Object(N.a)(d,2),l=o[0],c=o[1],m=l?w.a.FadeOut:null,f=s.a.createElement("div",{className:[w.a.TaskContainer,m].join(" "),style:{backgroundColor:e.bgColor}},s.a.createElement("div",{className:w.a.TaskEntry},s.a.createElement("input",{type:"checkbox",checked:e.task.isFinished,id:e.currentFolderIndex+"_"+e.task.taskId,onChange:function(){c(!l),e.finish(e.task.taskId,e.currentFolderIndex)}}),s.a.createElement("label",{htmlFor:e.currentFolderIndex+"_"+e.task.taskId},e.task.name)),e.task.isFinished?null:1===e.task.priority?s.a.createElement(u.a,{className:w.a.Icon,onClick:function(){return e.setPriority(e.task.taskId,e.currentFolderIndex)},icon:k.c}):s.a.createElement(u.a,{className:w.a.Icon,onClick:function(){return e.setPriority(e.task.taskId,e.currentFolderIndex)},icon:y.a}),e.task.isFinished?null:s.a.createElement("div",{className:[w.a.Icon,w.a.Lift].join(" ")},s.a.createElement(u.a,{onClick:function(){i(!r)},icon:k.d})),s.a.createElement(u.a,{className:[w.a.Icon,w.a.Shake].join(" "),onClick:function(){return e.deleteTask(e.task.taskId,e.currentFolderIndex)},icon:k.g})),F=s.a.createElement("div",{className:w.a.TaskContainer},s.a.createElement("div",{className:w.a.TaskEntry},s.a.createElement("input",{type:"checkbox",checked:e.task.isFinished,disabled:!0}),s.a.createElement("input",{className:w.a.EditField,type:"text",value:e.task.name,onChange:function(t){return e.editTaskName(t,e.currentFolderIndex,e.task.taskId)},onKeyPress:function(e){13===(e.keyCode?e.keyCode:e.which)&&i(!r)}})),s.a.createElement(u.a,{className:w.a.Icon,onClick:function(){i(!r)},icon:k.b}));return r?F:f}var O=a(8),S=a.n(O),x=function(e){function t(){var e,a;Object(F.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(_.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(s)))).state={allTasks:[{folderId:0,tasks:[{taskId:0,name:"Meet Prof Shau",isFinished:!1,priority:0},{taskId:1,name:"Homework Due",isFinished:!1,priority:0}]},{folderId:1,tasks:[{taskId:0,name:"Create PR",isFinished:!1,priority:0},{taskId:1,name:"Presentation prep",isFinished:!1,priority:0}]},{folderId:2,tasks:[{taskId:0,name:"Bananas",isFinished:!1,priority:0},{taskId:1,name:"Fish",isFinished:!1,priority:0}]}],newTaskName:"",showFinishedTasks:!1},a.newTaskNameUpdate=function(e){a.setState({newTaskName:e.target.value})},a.onAddNewTask=function(e){if(""!==a.state.newTaskName){var t,n=Object(f.a)(a.state.allTasks),s=n[e].tasks;t=0===s.length?0:s[s.length-1].taskId+1,n[e].tasks.push({taskId:t,name:a.state.newTaskName,isFinished:!1,priority:0}),a.setState({allTasks:n,newTaskName:""})}},a.submitIfIsEnter=function(e,t){13===(e.keyCode?e.keyCode:e.which)&&a.onAddNewTask(t)},a.toggleFinished=function(){a.setState({showFinishedTasks:!a.state.showFinishedTasks})},a.onFinishClick=function(e,t){setTimeout((function(){var n=Object(f.a)(a.state.allTasks),s=n[t].tasks.findIndex((function(t){return t.taskId===e}));n[t].tasks[s].isFinished=!n[t].tasks[s].isFinished,a.setState({allTasks:n})}),400)},a.deleteTask=function(e,t){var n=Object(f.a)(a.state.allTasks),s=n[t].tasks.findIndex((function(t){return t.taskId===e}));n[t].tasks.splice(s,1),a.setState({allTasks:n})},a.addFolder=function(e){var t=Object(f.a)(a.state.allTasks);t.push({folderId:e,tasks:[]}),a.setState({allTasks:t})},a.deleteFolder=function(e){var t=Object(f.a)(a.state.allTasks),n=a.state.allTasks.findIndex((function(t){return t.folderId===e}));t.splice(n,1),a.setState({allTasks:t})},a.editTaskName=function(e,t,n){var s=Object(f.a)(a.state.allTasks),r=s[t].tasks.findIndex((function(e){return e.taskId===n}));s[t].tasks[r].name=e.target.value,a.setState({allTasks:s})},a.setPriority=function(e,t){var n=Object(f.a)(a.state.allTasks),s=n[t].tasks.findIndex((function(t){return t.taskId===e}));n[t].tasks[s].priority=1-n[t].tasks[s].priority,a.setState({allTasks:n})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state.allTasks.findIndex((function(t){return t.folderId===e.props.currentFolderId})),a=null,n=null,r=null,i=!1,d=null;if(-1!==t){var o=this.state.allTasks[t].tasks;d=s.a.createElement("div",{className:S.a.AddTask,key:"add"},s.a.createElement("input",{type:"text",value:this.state.newTaskName,onChange:function(t){return e.newTaskNameUpdate(t)},onKeyPress:function(a){return e.submitIfIsEnter(a,t)}}),s.a.createElement(u.a,{className:S.a.Icon,onClick:function(){return e.onAddNewTask(t)},icon:k.e})),0!==o.length?(a=[o.map((function(a){return!1===a.isFinished&&1===a.priority?s.a.createElement(b,{key:a.taskId,task:a,currentFolderIndex:t,finish:e.onFinishClick,deleteTask:e.deleteTask,editTaskName:e.editTaskName,setPriority:e.setPriority}):null})),o.map((function(a){return!1===a.isFinished&&0===a.priority?s.a.createElement(b,{key:a.taskId,task:a,currentFolderIndex:t,finish:e.onFinishClick,deleteTask:e.deleteTask,editTaskName:e.editTaskName,setPriority:e.setPriority}):null}))],r=o.map((function(a){return!0===a.isFinished?s.a.createElement(b,{key:a.taskId,task:a,currentFolderIndex:t,finish:e.onFinishClick,deleteTask:e.deleteTask,bgColor:"white"}):null})),i=o.reduce((function(e,t){return e||t.isFinished}),!1)):a=s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},"Start adding your tasks!")}else n=s.a.createElement("div",null,"Choose a folder to start");return s.a.createElement("div",null,s.a.createElement("h1",{className:S.a.TasksTitle},"Tasks"),-1!==t?[d,a]:n,s.a.createElement("div",{className:S.a.FinishedTasks},i?s.a.createElement("h3",{onClick:this.toggleFinished},"Finished list"):null,-1!==t&&this.state.showFinishedTasks?r:null))}}]),t}(n.Component),j=a(7),A=a.n(j),B=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(_.a)(this,Object(I.a)(t).call(this,e))).state={folders:[{id:0,name:"school",taskQuantity:0},{id:1,name:"work",taskQuantity:0},{id:2,name:"grocery",taskQuantity:0}],newFolderName:"",isEditing:!1,currentFolderId:-1,currentFolderName:"click to choose",idOfFolderBeingEditted:-1,folderIsHidden:!0},a.showFolderInput=function(){a.setState({isEditing:!0})},a.newFolderNameUpdate=function(e){a.setState({newFolderName:e.target.value})},a.submitIfIsEnter=function(e){13===(e.keyCode?e.keyCode:e.which)&&a.addFolder()},a.addFolder=function(){if(""!==a.state.newFolderName){var e,t=Object(f.a)(a.state.folders);e=0===t.length?0:t[t.length-1].id+1,t.push({id:e,name:a.state.newFolderName,taskQuantity:0}),a.tasksElement.current.addFolder(e),a.setState({folders:t,newFolderName:"",isEditing:!1})}else a.setState({isEditing:!1})},a.editFolderName=function(e,t){var n=Object(f.a)(a.state.folders),s=n.findIndex((function(e){return e.id===t})),r=e.target.value;n[s].name=r,a.setState({folders:n})},a.confirmChange=function(e,t){13===(e.keyCode?e.keyCode:e.which)&&a.changeBeingEdittedFolderId(t)},a.changeBeingEdittedFolderId=function(e){e===a.state.idOfFolderBeingEditted?a.setState({idOfFolderBeingEditted:-1}):a.setState({idOfFolderBeingEditted:e})},a.deleteFolder=function(e){var t=Object(f.a)(a.state.folders),n=t.findIndex((function(t){return t.id===e}));window.confirm("Do you want to delete the folder '"+t[n].name+"'?")&&(t.splice(n,1),a.tasksElement.current.deleteFolder(e),a.setState({folders:t}))},a.updateCurrentFolder=function(e){var t=a.state.folders.findIndex((function(t){return t.id===e}));a.setState({currentFolderId:e,currentFolderName:a.state.folders[t].name,folderIsHidden:!a.state.folderIsHidden})},a.tasksElement=s.a.createRef(),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state.folders.map((function(t){return s.a.createElement(g,{changeBeingEdittedFolderId:e.changeBeingEdittedFolderId,idOfFolderBeingEditted:e.state.idOfFolderBeingEditted,chosenFolderId:e.state.currentFolderId,updateCurrentFolder:e.updateCurrentFolder,key:t.id,folder:t,editFolder:e.editFolder,deleteFolder:e.deleteFolder,confirmChange:e.confirmChange,editFolderName:e.editFolderName})})),a=s.a.createElement(u.a,{onClick:this.showFolderInput,className:A.a.AddFolderSign,icon:k.f}),n=s.a.createElement("div",{className:A.a.AddFolderInput},s.a.createElement("input",{type:"text",id:"newFolder",onChange:function(t){return e.newFolderNameUpdate(t)},onKeyPress:function(t){return e.submitIfIsEnter(t)}}),s.a.createElement(u.a,{className:A.a.Icon,onClick:this.addFolder,icon:k.e}));return s.a.createElement(C,null,s.a.createElement("div",{className:A.a.FoldersContainer},s.a.createElement("h1",{className:A.a.FolderTitle,onClick:function(){e.setState({folderIsHidden:!e.state.folderIsHidden})}},"Folders - ",this.state.currentFolderName),s.a.createElement("div",{className:this.state.folderIsHidden?A.a.HideFolder:A.a.ShowFolder},t,s.a.createElement("div",{className:A.a.FolderControl},this.state.isEditing?n:a))),s.a.createElement("div",{className:A.a.TasksContainer},s.a.createElement(x,{ref:this.tasksElement,currentFolderId:this.state.currentFolderId})))}}]),t}(n.Component),H=a(16),P=a.n(H);var L=function(){return s.a.createElement("div",{className:P.a.App},s.a.createElement("style",null,"@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One|Quicksand:300,400,500,600&display=swap');"),s.a.createElement(m,null),s.a.createElement("div",{className:P.a.Content},s.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[23,1,2]]]);
//# sourceMappingURL=main.ecc1dd73.chunk.js.map