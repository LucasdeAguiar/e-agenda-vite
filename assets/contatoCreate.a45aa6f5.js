var h=Object.defineProperty;var c=(i,t,e)=>t in i?h(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var o=(i,t,e)=>(c(i,typeof t!="symbol"?t+"":t,e),e);import"./style.c0ed6924.js";import{E as d}from"./entidade.model.7b47d050.js";import{C as u}from"./contato.repository.local-storage.f1b1f214.js";import"./guid.model.81e7089a.js";class m extends d{constructor(e,s,r,n,a,l){super();o(this,"nome");o(this,"email");o(this,"telefone");o(this,"empresa");o(this,"cargo");l&&(this.id=l),this.nome=e,this.email=s,this.telefone=r,this.empresa=n,this.cargo=a}}class x{constructor(t,e){o(this,"txtNome");o(this,"txtEmail");o(this,"txtTelefone");o(this,"txtEmpresa");o(this,"txtCargo");o(this,"btnSalvar");o(this,"idSelecionado");if(this.repositorioContatos=t,this.configurarElementos(),e){this.idSelecionado=e;const s=this.repositorioContatos.selecionarPorId(e);s&&this.preencherFormulario(s)}}preencherFormulario(t){this.txtNome.value=t.nome,this.txtEmail.value=t.email,this.txtTelefone.value=t.telefone,this.txtEmpresa.value=t.empresa,this.txtCargo.value=t.cargo}configurarElementos(){this.txtNome=document.getElementById("txtNome"),this.txtEmail=document.getElementById("txtEmail"),this.txtTelefone=document.getElementById("txtTelefone"),this.txtEmpresa=document.getElementById("txtEmpresa"),this.txtCargo=document.getElementById("txtCargo"),this.btnSalvar=document.getElementById("btnSalvar"),this.btnSalvar.addEventListener("click",t=>this.gravarRegistros())}gravarRegistros(){const t=this.obterDadosFormulario();this.idSelecionado?this.repositorioContatos.editar(t.id,t):this.repositorioContatos.inserir(t),window.location.href="contato.list.html"}obterDadosFormulario(){const t=this.txtNome.value,e=this.txtEmail.value,s=this.txtTelefone.value,r=this.txtEmpresa.value,n=this.txtCargo.value;let a=null;return this.idSelecionado?a=new m(t,e,s,r,n,this.idSelecionado):a=new m(t,e,s,r,n),a}}const g=new URLSearchParams(window.location.search),p=g.get("id");new x(new u,p);