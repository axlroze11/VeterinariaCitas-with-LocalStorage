(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{16:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),i=a.n(n),s=a(8),r=a.n(s),l=(a(16),a(10)),o=a(3),j=a(5),h=a(7),u=a(9),b=a.n(u),m=function(e){var t=e.crearCita,a=Object(n.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""}),i=Object(o.a)(a,2),s=i[0],r=i[1],l=Object(n.useState)(!1),u=Object(o.a)(l,2),m=u[0],d=u[1],O=function(e){r(Object(h.a)(Object(h.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))},p=s.mascota,x=s.propietario,f=s.fecha,g=s.hora,N=s.sintomas;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Crear Cita"}),m?Object(c.jsx)("p",{className:"alerta-error",children:"Tienes que llenar todos los campos"}):null,Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==p.trim()&&""!==x.trim()&&""!==f.trim()&&""!==g.trim()&&""!==N.trim()?(d(!1),s.id=b()(),t(s),r({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""})):d(!0)},children:[Object(c.jsx)("label",{children:"Nombre Mascota"}),Object(c.jsx)("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"Nombre Mascota",onChange:O,value:p}),Object(c.jsx)("label",{children:"Nombre Due\xf1o"}),Object(c.jsx)("input",{type:"text",name:"propietario",className:"u-full-width",placeholder:"Nombre Due\xf1o de mascota",onChange:O,value:x}),Object(c.jsx)("label",{children:"Fecha"}),Object(c.jsx)("input",{type:"date",name:"fecha",className:"u-full-width",onChange:O,value:f}),Object(c.jsx)("label",{children:"Hora"}),Object(c.jsx)("input",{type:"time",name:"hora",className:"u-full-width",onChange:O,value:g}),Object(c.jsx)("label",{children:"Sintomas"}),Object(c.jsx)("textarea",{className:"u-full-width",name:"sintomas",onChange:O,value:N}),Object(c.jsx)("button",{type:"submit",className:"u-full-width button-primary",children:"Agregar Cita"})]})]})},d=function(e){var t=e.cita,a=e.eliminarCita;return Object(c.jsxs)("div",{className:"cita",children:[Object(c.jsxs)("p",{children:["Mascota: ",Object(c.jsx)("span",{children:t.mascota})]}),Object(c.jsxs)("p",{children:["Propietario: ",Object(c.jsx)("span",{children:t.propietario})]}),Object(c.jsxs)("p",{children:["Hora: ",Object(c.jsx)("span",{children:t.hora})]}),Object(c.jsxs)("p",{children:["Fecha: ",Object(c.jsx)("span",{children:t.fecha})]}),Object(c.jsxs)("p",{children:["Sintomas: ",Object(c.jsx)("span",{children:t.sintomas})]}),Object(c.jsx)("button",{className:"button-primary eliminar u-full-width",onClick:function(){return a(t.id)},children:"Eliminar"})]})};var O=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var t=Object(n.useState)(e),a=Object(o.a)(t,2),i=a[0],s=a[1];Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("citas"))?localStorage.setItem("citas",JSON.stringify(i)):localStorage.setItem("citas",JSON.stringify([]))}),[i]);var r=function(e){var t=i.filter((function(t){return t.id!==e}));s(t)},j=0===i.length?"No hay citas":"Administra tus citas";return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Administrador de Pacientes"}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"one-half column",children:Object(c.jsx)(m,{crearCita:function(e){s([].concat(Object(l.a)(i),[e]))}})}),Object(c.jsxs)("div",{className:"one-half column",children:[Object(c.jsx)("h2",{children:j}),i.map((function(e){return Object(c.jsx)(d,{cita:e,eliminarCita:r},e.id)}))]})]})})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),p()}},[[21,1,2]]]);
//# sourceMappingURL=main.98165584.chunk.js.map