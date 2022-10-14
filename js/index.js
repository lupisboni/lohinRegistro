//declara variables para vincular los objetos de formulario
const usuario =document.getElementById('user');
const password =document.getElementById('pass');
const formulario =document.getElementById('formLogin');

//Generando eventos
formulario.addEventListener('submit', login);

//Funciones a ejecutar
function login(e){
    e.preventDefault();
    
    let usuarioVal=usuario.value;
    let passwordVal=password.value;

    if(usuarioVal == '' || passwordVal == ''){
        creaMensaje('Verifica tus campos','danger');
        return;
    }

    if(localStorage.getItem('usuario')){
        let objeto = JSON.parse(localStorage.getItem('usuario'))
        if(usuarioVal == objeto.user && passwordVal == objeto.pass){
            creaMensaje('Usuario correcto','success');
        }else{
            creaMensaje('usuario incorrecto','danger');
        }
        }else{
            creaMensaje('No hay registros','danger');
        }

    }
    
