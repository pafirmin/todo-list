(()=>{"use strict";class t{constructor(t,e,o,n){this.title=t,this.notes=e,this.dueDate=o,this.priority=n,this.log=new Date,this.done=!1}}class e{constructor(t){this.projectTitle=t,this.items=[]}addItem(t){this.items.push(t)}}const o=function(){let o=JSON.parse(localStorage.getItem("projects"))||[],n=null;return{getActiveProject:()=>n,getProjects:()=>o,addNewProject:function(t){let c=new e(t);o.push(c),n=c},newItem:function(e,o,c,s){let d=new t(e,o,c,s);n.addItem(d)}}}();o.addNewProject("title"),console.log(o.getActiveProject());const n={TodoItem:t,Project:e,app:o};!function(){document.getElementById("item-board");const t=document.getElementById("new-task-btn"),e=document.getElementById("new-proj-btn"),o=document.getElementById("task-modal"),c=document.getElementById("project-modal"),s=document.getElementById("project-form"),d=document.getElementById("project-submit");t.addEventListener("click",(()=>{o.style.display="block"})),e.addEventListener("click",(()=>{c.style.display="block"})),d.addEventListener("click",(()=>{n.addNewProject(s.title.value)}))}()})();