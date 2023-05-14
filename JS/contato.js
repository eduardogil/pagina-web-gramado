let inputNome = document.getElementById('nome');
inputNome.addEventListener('blur',() => validarNome());
let inputEmail = document.getElementById('email');
inputEmail.addEventListener('blur',() => validarEmail());



function validarNome(inputNome) {
    if(inputNome.length<10){
        console.log(alert('Seu nome precisa ter no mínimo 10 caracteres'));
        inputNome.focus();
        return false;
    }
}

/* 
function validarEmail() {
    if(inputEmail.length<10){
        alert('Por favor insira um e-mail válido!');
    }
} */
