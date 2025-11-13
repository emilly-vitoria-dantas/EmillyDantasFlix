const formLogin = document.getElementById('formulario-login');
const formRegistro = document.getElementById('formulario-registro');

if(formLogin){
    const botaoEntrar = document.getElementById('entrar');
    const usuarioInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');
    const mensagemErro = document.getElementById('mensagem-erro');
    
    mensagemErro.textContent = '';
    botaoEntrar.addEventListener('click',  () => {
        if(usuarioInput.value.trim() === ''){
            mensagemErro.textContent = 'Por favor, digite seu usuário .';
        } else if (senhaInput.value.trim() === ''){
            mensagemErro.textContent = 'Por favor, digite sua senha. ';
        } else if(usuarioInput.value.trim() === '' && senhaInput.value.trim() === ''){
            mensagemErro.textContent = 'Por favor, preencha todos os campos.';
        } else{
            window.location.href = "assets/html/inicio.html";
        }
    });
}

if(formRegistro){
    const botaoCadastrar = document.getElementById('cadastrar');
    const emailInputCadastro = document.getElementById('email-cadastro');
    const usuarioInputCadastro = document.getElementById('usuario-cadastro');
    const senhaInputCadastro = document.getElementById('senha-cadastro');
    const mensagemErroCadastro = document.getElementById('mensagem-erro-cadastro');
    
    mensagemErroCadastro.textContent = '';
    botaoCadastrar.addEventListener('click', () => {
        if(usuarioInputCadastro.value.trim() === ''){
            mensagemErroCadastro.textContent = 'Por favor, digite seu usuário .';
        } else if (emailInputCadastro.value.trim() === ''){ 
            mensagemErroCadastro.textContent = 'Por favor, digite seu email. ';
        } else if (senhaInputCadastro.value.trim() === ''){ 
            mensagemErroCadastro.textContent = 'Por favor, digite sua senha. ';
        } else {
            window.location.href = "../html/inicio.html";
        }
    });
}

